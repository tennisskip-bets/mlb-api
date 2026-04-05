export default async function handler(req, res) {
  const API_KEY = process.env.ODDS_API_KEY;

  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/baseball_mlb/odds?regions=us&markets=h2h,totals,spreads&apiKey=${API_KEY}`
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch odds" });
  }
}
