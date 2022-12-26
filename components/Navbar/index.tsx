import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mx-auto flex w-full max-w-2xl items-center justify-between p-4">
      <div className="space-x-8">
        <Link href="/" legacyBehavior>
          <a className="rounded bg-black py-2 px-4 text-sm text-white no-underline dark:bg-white dark:text-black">
            🏠
          </a>
        </Link>
      </div>
      <div className="space-x-8">
        <Link href="/articles" legacyBehavior>
          <a className="py-2 px-4 text-sm text-black dark:text-white">
            /articles
          </a>
        </Link>
        <a
          href="https://twitter.com/NirmalyaGhosh_"
          target="_blank"
          className="rounded bg-black py-2 px-4 text-sm text-white no-underline dark:bg-white dark:text-black"
          rel="noreferrer"
        >
          Follow 👋
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
