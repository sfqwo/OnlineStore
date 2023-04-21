import { MetaHead } from '@src/components/metaHead/MetaHead';
import Link from 'next/link';

interface IFilmsTop{
  films: Array<any>,
  total: number,
  totalPages: number,
}


export default function Home() {
  return (
    <>
      <MetaHead title='Online Store' description="Главная" />
      <main>
        ГЛАВНАЯ
        <Link href={'/films'}>films</Link>
      </main>
    </>
  )
}
