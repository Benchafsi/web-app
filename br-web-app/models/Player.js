import mongoose, { Schema } from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this player.'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  kills: {
    type: Number,
    required: [true, 'Please provide the number of kills.'],
  },
  deaths: {
    type: Number,
    required: [true, 'Please provide the number of deaths.'],
  },
  matchesPlayed: {
    type: Number,
    required: [true, 'Please provide the number of matches played.'],
  },
},{timestamps: true});
const Player = mongoose.models.Player || mongoose.model('Player', PlayerSchema);

export default Player;
