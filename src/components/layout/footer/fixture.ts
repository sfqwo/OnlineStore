import { IBlock } from "./types";
import InstagramSvg from '@assets/icons/Instagram.svg';
import TelegramSvg from '@assets/icons/Telegram.svg';
import VKSvg from '@assets/icons/Vk.svg';
import WhatsappSvg from '@assets/icons/Whatsapp.svg';
import YoutubeSvg from '@assets/icons/Youtube.svg';
import PhoneSvg from '@assets/icons/phone.svg';
import MessageSvg from '@assets/icons/message.svg';

export const linkWithUs = [
  {
    title: '+7 (888) 178 38 38',
    href: 'tel:+7 (888) 178 38 38',
    Icon: PhoneSvg,
  },
  {
    title: 'cinema38support@icloud.com',
    href: 'mailto:cinema38support@icloud.com',
    Icon: MessageSvg,
  },
];

export const content = [
  {
    title: 'О нас',
    items: [
      {
        title: 'О компании',
        href: '/',
      },
      {
        title: 'Информация для партнёров',
        href: '/',
      },
      {
        title: 'Размещение рекламы',
        href: '/',
      },
      {
        title: 'Пользовательское соглашение',
        href: '/',
      },
      {
        title: 'Политика конфиденциальности',
        href: '/',
      },
    ]
  },
  {
    title: 'Разделы',
    items: [
      {
        title: 'Профиль',
        href: '/',
      },
      {
        title: 'Главное',
        href: '/',
      },
      {
        title: 'Магазин',
        href: '/',
      },
      {
        title: 'Избранное',
        href: '/',
      },
      {
        title: 'Детям',
        href: '/',
      },
    ]
  },
  {
    title: 'Другое',
    items: [
      {
        title: 'Акции и предложения',
        href: '/',
      },
      {
        title: 'Сертификаты',
        href: '/',
      },
    ]
  },
  {
    title: 'Поддержка пользователей',
    items: linkWithUs,
  },
] as IBlock[];

export const links = [
  {
    Icon: TelegramSvg,
    href: 'https://web.telegram.org/',
  },
  {
    Icon: WhatsappSvg,
    href: 'https://www.whatsapp.com/?lang=ru',
  },
  {
    Icon: VKSvg,
    href: 'https://vk.com/',
  },
  {
    Icon: InstagramSvg,
    href: 'https://www.instagram.com/',
  },
  {
    Icon: YoutubeSvg,
    href: 'https://www.youtube.com/',
  }
]