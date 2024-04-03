import dbConnect from '../../../lib/db';
import Player from '../../../models/Player';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();
  const players =  await Player.find();
  return NextResponse.json({ players });
}

export async function POST(request) {
  await dbConnect();
  
  const { name, kills, deaths, matchesPlayed } = await request.json();

  // If no player is found, a new one is created with the provided stats.
  const player = await Player.findOneAndUpdate(
    { name: name }, // Find a player by this name
    {
      $inc: { // Increment the existing stats
        kills: kills,
        deaths: deaths,
        matchesPlayed: matchesPlayed
      }
    },
    {
      new: true, // Return the updated document
      upsert: true, // Create a new document if one doesn't exist
      setDefaultsOnInsert: true // Apply model defaults if a new document is created
    }
  );

  return NextResponse.json({ player });
}
