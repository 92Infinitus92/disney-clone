import OpenAI from "openai";

const CACHE = new Map<string, { data: string; expires: number }>();
const ONE_WEEK = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

export async function getMovieSuggestions(title: string) {
  const now = Date.now();

  // Check if there's a valid cache entry
  if (CACHE.has(title)) {
    const cachedEntry = CACHE.get(title);
    if (cachedEntry && cachedEntry.expires > now) {
      console.log(`Using cached suggestions for: ${title}`);
      return cachedEntry.data;
    }
  }

  console.log(`Fetching new suggestions for: ${title}`);
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are the best movie suggester. You know all the best movies and are an expert at finding similar movies based on what users search and like.",
      },
      {
        role: "user",
        content: `Based on the movie "${title}", suggest 5 similar movies that the user might enjoy.`,
      },
    ],
    max_tokens: 500,
    temperature: 0.7,
  });

  const suggestions = response.choices[0].message?.content || "";

  // Cache the result only if suggestions are not empty
  if (suggestions.trim()) {
    CACHE.set(title, { data: suggestions, expires: now + ONE_WEEK });
    console.log(`Caching suggestions for: ${title}`); // Log cache storage
  }

  return suggestions;
}
