import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { secret, path, tag } = body;

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  if (tag) {
    revalidateTag(tag, 'page');
    return NextResponse.json({ revalidated: true, tag });
  }

  if (path) {
    revalidatePath(path, 'page');
    return NextResponse.json({ revalidated: true, path });
  }

  return NextResponse.json({ error: 'Missing path or tag' }, { status: 400 });
}
