import Link from 'next/link';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';

export default function Index() {
  return (
    <MainLayout title={'Home'}>
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
