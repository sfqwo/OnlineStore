import React from 'react';
import InstagramSvg from '@assets/icons/Instagram.svg';
import TelegramSvg from '@assets/icons/Telegram.svg';
import VKSvg from '@assets/icons/Vk.svg';
import WhatsappSvg from '@assets/icons/Whatsapp.svg';
import YoutubeSvg from '@assets/icons/Youtube.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className={styles.footer__links}>
        <TelegramSvg />
        <WhatsappSvg />
        <VKSvg />
        <InstagramSvg />
        <YoutubeSvg />
      </div>
    </div>
  )
}
export default Footer;