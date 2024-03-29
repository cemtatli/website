import { Bookmark } from "@/types";
import axios from "axios";

async function getRaindropBookmarks(API_KEY: string): Promise<Bookmark[]> {
  const response = await axios.get(
    `https://api.raindrop.io/rest/v1/raindrops/${process.env.COLLECTION_ID}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }
  );

  return response.data.items.map((item: any) => ({
    title: item.title,
    description: item.excerpt,
    creationDate: item.created,
    url: item.link,
    cover: item.cover,
    tags: item.tags,
    note: item.note
  }));
}

export default getRaindropBookmarks;
