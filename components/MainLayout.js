import Head from 'next/head';
import Link from 'next/link';

export function MainLayout({ children, title = 'Next_course' }) {
  return (
    <>
      <Head>
        <title>{title} page</title>
        <meta name="keywords" content="next.js, js" />
        <meta name="description" content="this is nextjs_course" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/about/author">
          <a>Athor</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          display: flex;
        }
        a {
          margin-right: 15px;
          text-decoration: none;
          color: orange;
        }
      `}</style>
    </>
  );
}
