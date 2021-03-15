import Link from 'next/link';

export function MainLayout({ children }) {
  return (
    <>
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
      <style jsx global>{`
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
