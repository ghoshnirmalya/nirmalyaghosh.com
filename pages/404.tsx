import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-full space-y-4 text-center">
      <h1>404 😕</h1>
      <Link href="/" passHref legacyBehavior>
        <a className="text-md block font-semibold">Go to the home page</a>
      </Link>
    </div>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export default NotFoundPage;
