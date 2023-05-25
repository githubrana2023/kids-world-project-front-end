import { Link, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Error page | Not Found</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg&ga=GA1.2.607451879.1674134985&semt=ais" className="rounded-lg"/>
        <div className="max-w-md text-center">
          {/* <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2> */}
          <p className="text-2xl font-semibold md:text-3xl my-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded hover:border-2 border-green-600 transition text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
