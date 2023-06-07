import styles from './List.module.scss';

interface IList {
  title: string;
  value: string;
}

export const List: React.FC<IList> = ({ title, value }) => (
  <div className={styles.list}>
    <div className={styles.list_title}>{title}</div>
    <div className={styles.list_value}>{value}</div>
  </div>
);
