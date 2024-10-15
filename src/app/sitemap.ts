import { MetadataRoute } from "next";
import { serverClient } from "./_trpc/serverClient";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await serverClient.getPosts();
  return [
    {
      url: "https://learninglowlevel.com",
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
    ...posts.map((post) => ({
      url: `https://learninglowlevel.com/posts/${post.id}`,
      lastModified: post.updatedAt,
      priority: 0.8,
      changeFrequency: "weekly" as "weekly",
    })),
  ];
}
