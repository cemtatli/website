import axios from "axios";

interface Bookmark {
  title: string;
  description: string;
  creationDate: string;
  url: string;
  thumbnail: string;
  tags: string[];
}

async function getRaindropBookmarks(API_KEY: string): Promise<Bookmark[]> {
  const response = await axios.get("https://api.raindrop.io/rest/v1/raindrops/35446534", {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  });

  return response.data.items.map((item: any) => ({
    title: item.title,
    description: item.excerpt,
    creationDate: item.created,
    url: item.link,
    thumbnail: item.thumbnail,
    tags: item.tags
  }));
}

export default getRaindropBookmarks;
