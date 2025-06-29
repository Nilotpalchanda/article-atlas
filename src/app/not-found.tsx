import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="flex w-full max-w-md flex-col items-center rounded-xl bg-white/90 p-6 shadow-lg sm:p-10">
        <svg
          className="mb-6 h-16 w-16 text-indigo-400 sm:h-20 sm:w-20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
        <h1 className="mb-2 bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          404
        </h1>
        <p className="mb-6 text-center text-base text-gray-600 sm:text-lg">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 px-4 py-2 text-white shadow transition hover:from-indigo-700 hover:to-pink-600 sm:px-6"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
