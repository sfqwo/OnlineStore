import '@styles/globals.css';
import { NextComponentType, NextPageContext } from 'next';
import { getCookie } from 'cookies-next';
import MatchMediaContextProvider, { TState } from '@src/utils/matchMediaContext/MatchMediaContext';
import { ModalProvider } from '@src/utils/modalContext/ModalContext';
import UAParser from 'ua-parser-js';
import Layout from '@src/components/layout/Layout';

export interface IMyAppProps {
  Component: NextComponentType<NextPageContext>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
  mediaDevice: keyof TState;
}

const MyApp = ({
  Component,
  pageProps,
  mediaDevice,
}: IMyAppProps) => (
  <MatchMediaContextProvider mediaDevice={mediaDevice}>
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalProvider>
  </MatchMediaContextProvider>
);

MyApp.getInitialProps = (context: { ctx: NextPageContext }) => {
  const headers = context.ctx.req?.headers;
  const { req } = context.ctx;
  const media = getCookie('media', { req })?.toString();
  if (media) return { mediaDevice: media };

  if (headers && headers['user-agent']) {
    const parser = new UAParser().setUA(headers['user-agent']);
    const device = parser.getDevice().type || 'desktop';
    const cookies = media || null;
    const mediaDevice = cookies || device;

    return { mediaDevice };
  }

  return { mediaDevice: null };
};

export default MyApp;