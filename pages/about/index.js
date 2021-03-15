import Link from 'next/link';
import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function About() {
  const clickHandler = () => {
    Router.push('/');
  };

  return (
    <MainLayout title={'About'}>
      <h2>About page</h2>
      <Link href="/">
        <button>Back home by Link</button>
      </Link>
      <br />
      <button onClick={clickHandler}>Back home by Router</button>
    </MainLayout>
  );
}
