// app/api/views/route.js
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb'; // Adjust the import path as necessary

export async function POST(request) {
  const { page } = await request.json();

  if (!page) {
    return NextResponse.json({ error: 'Page is required' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db(); // Use the default database

    const collection = db.collection('pageViews');

    const result = await collection.findOneAndUpdate(
      { page },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: 'after' }
    );

    return NextResponse.json({ count: result.value.count });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');

  if (!page) {
    return NextResponse.json({ error: 'Page is required' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    const collection = db.collection('pageViews');

    const doc = await collection.findOne({ page });

    const count = doc ? doc.count : 0;

    return NextResponse.json({ count });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}