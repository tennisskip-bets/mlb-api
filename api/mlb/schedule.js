// api/mlb/schedule.js
export default async function handler(req, res) {
  try {
    // Placeholder example data
    const scheduleData = [
      { gameId: 1, homeTeam: "Yankees", awayTeam: "Red Sox", pitcher: "Cole" },
      { gameId: 2, homeTeam: "Dodgers", awayTeam: "Giants", pitcher: "Buehler" }
    ];

    res.status(200).json(scheduleData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
