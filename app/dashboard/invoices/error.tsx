'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }; //digest: 에러 식별 고유 string
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
    // if ('digest' in error) {
    //   console.error('Error digest:', error.digest);
    // }
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <h2 className="text-center">{error.message}</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // url route가 같기 때문에 reset해서 re-render되면 테이블 보임
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}

