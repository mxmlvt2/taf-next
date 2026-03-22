import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-[Jost] text-8xl font-normal text-gray-200 mb-4">404</h1>
        <p className="font-[Jost] text-gray-500 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block bg-black text-white font-[Jost] font-medium text-sm px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
