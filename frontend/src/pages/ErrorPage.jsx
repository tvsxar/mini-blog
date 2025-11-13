import { Link } from 'react-router-dom'

function ErrorPage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold text-black">Oops!</h1>
      <p className="text-lg text-gray-700">{message || "Something went wrong."}</p>
      <Link
        to="/"
        className="text-green-600 font-semibold hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
}

export default ErrorPage;
