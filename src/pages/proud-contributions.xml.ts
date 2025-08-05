import type { APIRoute } from "astro";
import rss from "@astrojs/rss";

export const GET: APIRoute = (context) => {
  return rss({
    title: "Contributions I'm Proud Of",
    description: "A collection of my favorite contributions.",
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    site: context.site!,
    items: [
      {
        title: "@nuxtjs/supabase: fix client initialization",
        description:
          "Nuxt and Supabase are both popular tools. This contribution fixes an issue with the client initialization in the Nuxt Supabase module, ensuring a valid session is alway set on the client.",
        link: "https://github.com/nuxt-modules/supabase/pull/490",
      },
      {
        title: "freqtrade/frequi: Add heikin ashi format",
        description:
          "This contribution adds quality-of-life improvement with a very simple checkbox to the Freqtrade UI to allow users to toggle between the default candlestick format and the Heikin Ashi format. This is a popular format among traders and this contribution makes it easier for users to switch between the two formats.",
        link: "https://github.com/freqtrade/frequi/pull/698",
      },
      {
        title: "freqtrade/frequi: Show loading status when loading candles",
        description:
          "This contribution solves a UX issue where the Freqtrade UI would not show any indication if it candles are being loaded or has failed to load which was confusing.",
        link: "https://github.com/freqtrade/frequi/pull/693",
      },
      {
        title: "freqtrade/frequi: Allow bot renaming",
        description:
          "This contribution allows users to rename their bots in the Freqtrade UI which is mostly used when users run multiple bots and want to differentiate them easily.",
        link: "https://github.com/freqtrade/frequi/pull/697",
      },
    ],
  });
}
