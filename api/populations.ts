import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

const API_URL =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=11362&prefCode=11";

const VITE_API_KEY = process.env.VITE_API_KEY ?? "";

export default async function fetchPopulations(
  req: VercelRequest,
  res: VercelResponse
) {
  const response = await fetch(`${API_URL}`, {
    headers: {
      "X-API-KEY": VITE_API_KEY,
    },
  });
  const data = await response.json();
  res.setHeader("Cache-Control", "s-maxage=86400 immutable");
  res.json(data);
}
