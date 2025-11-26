import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "ft9hq9oa",      // 👈 your project ID
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
