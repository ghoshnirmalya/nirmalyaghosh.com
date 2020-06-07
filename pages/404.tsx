import Error from "next/error";

const NotFound = () => {
  return <Error statusCode={404} />;
};
export default NotFound;
