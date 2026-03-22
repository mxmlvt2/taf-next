import type { ZipperCard as ZipperCardType } from '@/lib/types';
import ZipperCard from './ZipperCard';

interface ZipperGridProps {
  zippers: ZipperCardType[];
}

export default function ZipperGrid({ zippers }: ZipperGridProps) {
  if (!zippers.length) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {zippers.map(zipper => (
        <ZipperCard key={zipper.id} zipper={zipper} />
      ))}
    </div>
  );
}
