// api/mlb/playerStats.js
export default async function handler(req, res) {
  try {
    // Placeholder example data
    const playerStats = [
      { playerId: 1, name: "G. Henderson", team: "BAL", hits: 2 },
      { playerId: 2, name: "S. Ohtani", team: "LAA", hits: 1 }
    ];

    res.status(200).json(playerStats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
