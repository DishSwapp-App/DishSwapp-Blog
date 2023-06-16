import { client } from "../client";

export default async function GetPosts(slug) {
  const data = await client.fetch(
    `*[_type == "post" && slug.current == "${slug}"]`
  );
  return data;
}
