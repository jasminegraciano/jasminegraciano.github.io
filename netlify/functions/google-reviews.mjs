const GOOGLE_PLACE_ID = "ChIJKcG8KU0O5okRas4I9Pr2oW4";
const GOOGLE_FIELDS = "displayName,rating,userRatingCount,reviews,googleMapsUri";

function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...extraHeaders
    }
  });
}

export default async function googleReviews(request) {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed." }, 405, { Allow: "GET" });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    console.error("GOOGLE_PLACES_API_KEY is not configured in Netlify.");
    return jsonResponse({ error: "Google reviews are not configured." }, 503);
  }

  const url = new URL(`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`);
  url.searchParams.set("languageCode", "en");

  try {
    const googleResponse = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": GOOGLE_FIELDS
      }
    });

    if (!googleResponse.ok) {
      const googleError = await googleResponse.text();
      console.error(`Google Places returned ${googleResponse.status}: ${googleError}`);
      return jsonResponse({ error: "Google reviews are temporarily unavailable." }, 502);
    }

    return new Response(await googleResponse.text(), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=900, s-maxage=1800, stale-while-revalidate=86400"
      }
    });
  } catch (error) {
    console.error("Google Places request failed:", error);
    return jsonResponse({ error: "Google reviews are temporarily unavailable." }, 502);
  }
}

export const config = {
  path: "/api/google-reviews"
};
