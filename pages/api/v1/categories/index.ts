import { NextApiRequest, NextApiResponse } from "next";
import { getAllCategories } from "@/src/lib/helpers/getCategories";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const categories = getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      console.error("Error retrieving categories:", error);
      res.status(500).json({ error: "Failed to retrieve categories" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
