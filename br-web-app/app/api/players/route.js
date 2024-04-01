import dbConnect from '../../../lib/db';
import Player from '../../../models/Player';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  const players =  await Player.find();
  return NextResponse.json({ players });
}
