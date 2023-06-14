import Link from 'next/link';
import clsx from 'clsx';

import LinkSvg from '@assets/icons/link.svg';
import styles from './MoreButton.module.scss';

interface IMoreButton {
  withoutBorder?: boolean;
  classes?: string;
}

export const MoreButton: React.FC<IMoreButton> = ({ withoutBorder = false, classes }) => (
  <Link href="/" className={clsx(styles.link, withoutBorder && styles.link_withoutBorder, classes)}>
    Ещё
    <LinkSvg />
  </Link>
);
