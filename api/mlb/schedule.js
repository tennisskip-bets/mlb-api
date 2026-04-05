export default async function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  try {
    const response = await fetch(
      `https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=${today}&hydrate=probablePitcher,team`
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch schedule" });
  }
}
