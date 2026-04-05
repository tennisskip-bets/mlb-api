export default async function handler(req, res) {
  const { ids } = req.query;

  if (!ids) {
    return res.status(400).json({ error: "Missing player IDs" });
  }

  const idArray = ids.split(",");

  try {
    const players = {};

    for (const id of idArray) {
      const response = await fetch(
        `https://statsapi.mlb.com/api/v1/people/${id}?hydrate=stats(group=[hitting,pitching],type=[season])`
      );

      const data = await response.json();
      players[id] = data.people[0];
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ players });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch player stats" });
  }
}
