import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lagos Drivers Link - Professional Driver Services",
    short_name: "Lagos Drivers",
    description:
      "Hire verified, professional drivers in Lagos for corporate, private, and logistics needs. Pre-vetted chauffeurs available 24/7.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#EAB308",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["transportation", "business", "lifestyle"],
    lang: "en",
    orientation: "portrait-primary",
    scope: "/",
  };
}
