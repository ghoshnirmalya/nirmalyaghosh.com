import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="text-center w-full space-y-4">
      <h1>500 😕</h1>
      <Link href="/" passHref>
        <a className="font-semibold text-md block">Go to the home page</a>
      </Link>
    </div>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export default NotFoundPage;
