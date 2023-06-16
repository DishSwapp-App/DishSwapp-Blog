import { createClient } from "@sanity/client";

export const token = process.env.REACT_APP_SANITY_TOKEN;
export const client = createClient({
  projectId: "0ikgl6fl",
  dataset: "production",
  token: token,
  useCdn: true,
});
