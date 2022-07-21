import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 max-w-2xl mx-auto w-full flex justify-between items-center">
      <div className="space-x-4">
        <Link href="/">
          <a className="py-2 px-4 bg-black text-white text-sm no-underline rounded">
            /
          </a>
        </Link>
        <Link href="/projects">
          <a className="text-sm text-black">/projects</a>
        </Link>
        <Link href="/articles">
          <a className="text-sm text-black">/articles</a>
        </Link>
      </div>
      <div>
        <a
          href="https://twitter.com/NirmalyaGhosh_"
          target="_blank"
          className="py-2 px-4 bg-black text-white text-sm no-underline rounded"
          rel="noreferrer"
        >
          Follow
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
