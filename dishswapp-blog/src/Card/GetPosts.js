import { client } from "../client";

export default async function GetPosts() {
  const data = await client.fetch('*[_type == "post"]');
  return data;
}
