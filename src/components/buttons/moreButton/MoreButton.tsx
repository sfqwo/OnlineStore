import Link from 'next/link';
import clsx from 'clsx';

import LinkSvg from '@assets/icons/link.svg';
import styles from './MoreButton.module.scss';

interface IMoreButton {
  withoutBorder?: boolean;
}

export const MoreButton: React.FC<IMoreButton> = ({ withoutBorder = false }) => (
  <Link href="/" className={clsx(styles.link, withoutBorder && styles.link_withoutBorder)}>
    Ещё
    <LinkSvg />
  </Link>
);
