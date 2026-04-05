// api/mlb/odds.js
export default async function handler(req, res) {
  try {
    // Placeholder example data
    const oddsData = [
      { gameId: 1, homeTeam: "Yankees", awayTeam: "Red Sox", mlHome: -150, mlAway: +130 },
      { gameId: 2, homeTeam: "Dodgers", awayTeam: "Giants", mlHome: -120, mlAway: +110 }
    ];

    res.status(200).json(oddsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
