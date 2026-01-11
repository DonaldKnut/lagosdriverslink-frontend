import { createClient } from "@sanity/client";

// Lazy-loaded Sanity client to avoid initialization during build time
let sanityClientInstance: ReturnType<typeof createClient> | null = null;

const createSanityClient = () => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!projectId) {
    throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID environment variable is not set");
  }

  if (!dataset) {
    throw new Error("NEXT_PUBLIC_SANITY_DATASET environment variable is not set");
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: "2023-08-01",
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
  });
};

export const getSanityClient = () => {
  if (!sanityClientInstance) {
    sanityClientInstance = createSanityClient();
  }
  return sanityClientInstance;
};

// For backward compatibility, export the lazy-loaded client
export const sanityClient = getSanityClient();
