import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

const API_URL = "https://opendata.resas-portal.go.jp/api/v1/";

const VITE_API_KEY = process.env.VITE_API_KEY ?? "";

export default async function fetchPrefectures(
  req: VercelRequest,
  res: VercelResponse
) {
  const response = await fetch(`${API_URL}prefectures`, {
    headers: {
      "X-API-KEY": VITE_API_KEY,
    },
  });
  const data = await response.json();
  res.json(data);
}
