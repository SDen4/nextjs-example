import Link from 'next/link';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Next_course</title>
        <meta name="keywords" content="next.js, js" />
        <meta name="description" content="this is nextjs_course" />
        <meta charSet="utf-8" />
      </Head>

      <h1>Hello next.js</h1>
      <Link href={'/about'}>
        <a>about</a>
      </Link>
      <br />
      <Link href={'/about/author'}>
        <a>author</a>
      </Link>
    </MainLayout>
  );
}
