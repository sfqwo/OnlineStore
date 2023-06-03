import React from 'react';
import { content, linkWithUs, links } from './fixture';
import styles from './Footer.module.scss';
import Button from '@src/components/buttons/button/Button';
import { IBlock, IBlockLink, ILink } from './types';
import Link from 'next/link';

const BlockItems = (item: IBlockLink) => (
  <Link key={item.title} href={item.href}>
    {item.title}
  </Link>
);

const LinksIcon = (link: ILink) => {
  const { Icon, href } = link;
  return (
    <Link href={href}>
      <Icon />
    </Link>
  )
}

const Blocks = (block: IBlock, index: number) => (
  <div className={styles.footer__info} key={block.title}>
    <div className={styles.footer__info_title}>{block.title}</div>
    <div className={styles.footer__info_content}>
      {block.items.map(BlockItems)}
      {content.length === index + 1 && (
        <div className={styles.footer__info_buttons}>
          {linkWithUs.map(LinksIcon)}
          <Button title='чат с поддержкой' />
        </div>
      )}
    </div>
  </div>
);

const Links = (link: ILink) => {
  const { Icon, href } = link;
  return (
    <Link href={href}>
      <Icon />
    </Link>
  )
}

const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className={styles.footer__links}>
        {links.map(Links)}
      </div>
      <div className={styles.footer__info_container}>
        {content.map(Blocks)}
      </div>
    </div>
  )
}
export default Footer;