import type { APIRoute } from "astro";
import rss from "@astrojs/rss";

export const GET: APIRoute = (context) => {
  return rss({
    title: "Projects I'm Proud Of",
    description: "A collection of my favorite projects.",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    site: context.site!,
    items: [
      {
        title: "yt-dlp-s3",
        description:
          "Stream yt-dlp downloads directly to S3-compatible storage. Initially, I created this to allow me to archive contents directly to my S3 bucket without needing to download them first because my storage is already full. I'm proud of this project because it solves a real problem I faced and is possibly useful for others as well. Not only it is simple to use, but it also is extensible.",
        link: "https://github.com/xxRockOnxx/yt-dlp-s3",
      },
      {
        title: "Coffee Journal",
        description:
          "An online journal for coffee enthusiasts to track their brews. I use this app daily to log my coffee brews and be able to replicate them later. It is a simple and effective way to keep track of my coffee experiences.",
        link: "https://coffee-log-9c6.pages.dev",
      },
      {
        title: "MIDI Remapper",
        description:
          "A free online tool to remap MIDI notes. I am proud of this project because of how simple yet effective it is. It solves a regular problem that I personally faced that is also very common when working with MIDI files especially for drums that is made by others that uses different mapping than the one I use. This has saved me time and effort and be able to focus on the music instead of the technicalities.",
        link: "https://free-midi-remapper.netlify.app",
      },
    ],
  });
}
