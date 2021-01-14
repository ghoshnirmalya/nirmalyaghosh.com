import Error from "next/error";

const NotFoundPage = () => {
  return <Error statusCode={404} />;
};
export default NotFoundPage;
