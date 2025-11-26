import { defineLive } from "next-sanity/live";
import { sanityClient } from "./client"; // ✅ correct import

export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient, // ✅ yahan mapping
});
