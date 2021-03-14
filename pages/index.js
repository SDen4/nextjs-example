import Link from 'next/link';

export default function Index() {
  return (
    <>
      <h1>Hello next.js</h1>
      <Link href={'/about'}>
        <a>about</a>
      </Link>
      <br />
      <Link href={'/about/author'}>
        <a>author</a>
      </Link>
    </>
  );
}
