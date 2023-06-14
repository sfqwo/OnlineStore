import {
  createContext, useContext, useEffect, useLayoutEffect, useMemo, useReducer,
} from 'react';
import { setCookie } from 'cookies-next';
import { TFC } from '@src/types';

const mediaTablet = 640;
const mediaDesktop = 960;
const mediaLarge = 1240;

export type TState = {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
  large: boolean;
};
type TAction = { type: keyof TState; value: boolean };
type TMediaMathTuple = readonly [MediaQueryList, (e: MediaQueryListEvent) => void];

const makeQueryByMedia = (mediaValue: number) => (`(min-width: ${mediaValue}px)`);
const mediaQueryTablet = makeQueryByMedia(mediaTablet);
const mediaQueryDesktop = makeQueryByMedia(mediaDesktop);
const mediaQueryLarge = makeQueryByMedia(mediaLarge);

const isWindowNotExist = () => typeof window === 'undefined';
const useIsomorpichLayoutEffect = isWindowNotExist() ? useEffect : useLayoutEffect;

const initialState: TState = {
  mobile: false,
  tablet: false,
  desktop: false,
  large: false,
};
function initialStateInitializer(state: TState) {
  if (isWindowNotExist()) return state;

  const { innerWidth: sw } = window;
  return {
    ...state,
    mobile: sw < mediaTablet,
    tablet: mediaTablet <= sw && sw < mediaDesktop,
    desktop: mediaDesktop <= sw && sw < mediaLarge,
    large: mediaLarge <= sw,
  };
}

function reducer(_: TState, { type, value }: TAction) {
  const mediaTypes: Array<keyof TState> = [
    'mobile',
    'tablet',
    'desktop',
    'large',
  ];
  const idx = mediaTypes.indexOf(type);

  if (value) {
    return {
      ...initialState,
      [type]: value,
    };
  }
  return {
    ...initialState,
    [type]: value,
    [mediaTypes[idx - 1]]: true,
  };
}

interface IMatchMediaContextProviderProps {
  mediaDevice?: string;
}

export const MatchMediaContext = createContext<TState>(initialState);
export const useMatchMediaContext = () => useContext(MatchMediaContext);

const MatchMediaContextProvider: TFC<IMatchMediaContextProviderProps> = ({
  children, mediaDevice,
}) => {
  const [media, changeMedia] = useReducer(
    reducer,
    mediaDevice ? { ...initialState, [mediaDevice]: true } : initialState,
    initialStateInitializer,
  );

  if (!isWindowNotExist()) {
    Object.keys(media).forEach((key) => {
      if (media[key as keyof TState]) setCookie('media', key);
    });
  }

  const matchMedia: readonly TMediaMathTuple[] = useMemo(() => {
    if (isWindowNotExist()) return [];
    const w = window;
    return [
      [
        w.matchMedia(mediaQueryTablet),
        (e: MediaQueryListEvent) => changeMedia({ type: 'tablet', value: e.matches }),
      ],
      [
        w.matchMedia(mediaQueryDesktop),
        (e: MediaQueryListEvent) => changeMedia({ type: 'desktop', value: e.matches }),
      ],
      [
        w.matchMedia(mediaQueryLarge),
        (e: MediaQueryListEvent) => changeMedia({ type: 'large', value: e.matches }),
      ],
    ];
  }, []);

  useIsomorpichLayoutEffect(() => {
    matchMedia.forEach(([mq, cb]) => {
      mq.addEventListener('change', cb);
    });
    return () => {
      matchMedia.forEach(([mq, cb]) => {
        mq.removeEventListener('change', cb);
      });
    };
  }, [matchMedia]);

  return (
    <MatchMediaContext.Provider value={media}>{children}</MatchMediaContext.Provider>
  );
};

export default MatchMediaContextProvider;