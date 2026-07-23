(() => {
  const GOOGLE_PLACE_ID = "ChIJKcG8KU0O5okRas4I9Pr2oW4";
  const LOCAL_GOOGLE_API_KEY = "AIzaSyDmnWqnxznCgIAgdAyKKdgXeo5ZzFc3gG0";
  const NETLIFY_REVIEWS_ENDPOINT = "/api/google-reviews";
  const FALLBACK_GOOGLE_URL = "https://www.google.com/search?q=Connecticut+House+Painters+LLC+Ledyard+CT+Google+reviews";
  const isLocalPreview = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
  const FALLBACK_PLACE = {
    rating: 4.8,
    userRatingCount: 82,
    googleMapsUri: FALLBACK_GOOGLE_URL,
    reviews: [
      {
        authorAttribution: { displayName: "Jason Lovell" },
        rating: 5,
        relativePublishTimeDescription: "Google review",
        text: {
          text: "CT House Painters did an amazing job! Brought our custom modern home back to life. Javier was great to work with. The process was easy and the quality was clear from the finished result."
        }
      },
      {
        authorAttribution: { displayName: "Jason Walsh" },
        rating: 5,
        relativePublishTimeDescription: "Google review",
        text: {
          text: "Javier is everything you are looking for in a professional painter. He is responsive, timely, courteous, and maintains a high level of quality with each stage of the project."
        }
      },
      {
        authorAttribution: { displayName: "Google customer" },
        rating: 5,
        relativePublishTimeDescription: "Google review",
        text: {
          text: "Excellent job, quick and responsive, fair price."
        }
      },
      {
        authorAttribution: { displayName: "Emily Gonzalez" },
        rating: 5,
        relativePublishTimeDescription: "Google review",
        text: {
          text: "Javier and his team do amazing paint jobs. They really listen to the client and have great feedback. They are honest and a small business you can trust."
        }
      },
      {
        authorAttribution: { displayName: "Angelina Willis" },
        rating: 5,
        relativePublishTimeDescription: "Google review",
        text: {
          text: "Highly recommend! Experienced and high quality. Javier and his team made my house and deck look beautiful and preserved for years to come."
        }
      },
      {
        authorAttribution: { displayName: "Jill Dreesman" },
        rating: 5,
        relativePublishTimeDescription: "Google review",
        text: {
          text: "We had the pleasure of working with Javier for an interior painting project, and I could not be happier with the results. From start to finish, the team was professional, courteous, and incredibly efficient."
        }
      }
    ]
  };

  const categoryPatterns = {
    commercial: /(commercial|business|office|restaurant|warehouse|storefront|industrial|building|facility|property manager|condo|apartment|complex)/i,
    powerwash: /(power wash|powerwash|pressure wash|washing|washed|cleaning|cleaned|roof|gutter|deck|siding)/i,
    exterior: /(exterior|outside|outdoor|siding|deck|fence|porch|garage|trim|shutter|front door|house paint|home back to life)/i,
    interior: /(interior|inside|indoor|room|wall|ceiling|cabinet|kitchen|bedroom|living room|stair|hallway|bathroom)/i
  };

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getReviewText(review) {
    const reviewText = typeof review.text === "object" ? review.text?.text : review.text;
    const originalText = typeof review.originalText === "object" ? review.originalText?.text : review.originalText;
    return String(reviewText || originalText || "");
  }

  function getInitials(name) {
    return String(name || "Google Reviewer")
      .split(/\s+/)
      .map((part) => part.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  function buildStars(rating) {
    const rounded = Math.max(0, Math.min(5, Math.round(Number(rating || 5))));
    return "★".repeat(rounded) + "☆".repeat(5 - rounded);
  }

  function chooseReviews(reviews, category, limit) {
    if (!category || category === "all" || !categoryPatterns[category]) {
      return reviews.slice(0, limit);
    }

    const matching = reviews.filter((review) => categoryPatterns[category].test(getReviewText(review)));
    const selected = matching.slice(0, limit);

    reviews.forEach((review) => {
      if (selected.length < limit && !selected.includes(review)) selected.push(review);
    });

    return selected;
  }

  function mergeUniqueReviews(primaryReviews, supplementalReviews) {
    const seenNames = new Set();
    const seenText = new Set();

    return [...primaryReviews, ...supplementalReviews].filter((review) => {
      const name = String(review.authorAttribution?.displayName || review.author_name || "")
        .trim()
        .toLowerCase();
      const text = getReviewText(review).trim().toLowerCase();
      const textKey = text.slice(0, 140);

      if (!text || (name && seenNames.has(name)) || seenText.has(textKey)) return false;
      if (name) seenNames.add(name);
      seenText.add(textKey);
      return true;
    });
  }

  function renderReviewCard(review) {
    const name = review.authorAttribution?.displayName || review.author_name || "Google Reviewer";
    const fullText = getReviewText(review);
    const displayText = fullText;
    const rating = Number(review.rating || 5);
    const time = review.relativePublishTimeDescription || review.relative_time_description || "Google review";

    return `
      <article class="compact-google-review-card">
        <div>
          <div class="compact-google-review-top">
            <span class="compact-google-avatar" aria-hidden="true">${escapeHtml(getInitials(name))}</span>
            <div>
              <div class="compact-google-review-name">${escapeHtml(name)}</div>
              <div class="compact-google-review-time">${escapeHtml(time)}</div>
            </div>
          </div>
          <div class="sitewide-review-stars" aria-label="${rating} star rating">${buildStars(rating)}</div>
          <p class="compact-google-review-text">${escapeHtml(displayText)}</p>
        </div>
        <a class="compact-google-review-source" href="testimonials.html">
          <span>Google Review</span>
          <span>${rating.toFixed(1)} / 5</span>
        </a>
      </article>
    `;
  }

  function renderPlace(place) {
    const reviews = place.reviews || [];
    const availableReviews = reviews.length ? reviews : FALLBACK_PLACE.reviews;
    const googleUrl = place.googleMapsURI || place.googleMapsUri || place.url || FALLBACK_GOOGLE_URL;

    document.querySelectorAll("[data-google-rating]").forEach((element) => {
      if (place.rating) element.textContent = Number(place.rating).toFixed(1);
    });

    document.querySelectorAll("[data-google-review-count]").forEach((element) => {
      const count = place.userRatingCount || place.user_ratings_total;
      element.textContent = count ? `${count} public Google reviews` : "Public Google reviews";
    });

    document.querySelectorAll("[data-google-profile-link]").forEach((link) => {
      link.href = googleUrl;
    });

    document.querySelectorAll("[data-google-reviews]").forEach((container) => {
      const category = container.dataset.reviewCategory || "all";
      const limit = Math.max(1, Number(container.dataset.reviewLimit || 3));
      const sourceReviews = container.dataset.reviewSupplement === "true"
        ? mergeUniqueReviews(availableReviews, FALLBACK_PLACE.reviews)
        : availableReviews;
      const selected = chooseReviews(sourceReviews, category, limit);

      container.innerHTML = selected.map(renderReviewCard).join("");
    });
  }

  function renderFallbackReviews() {
    renderPlace(FALLBACK_PLACE);
  }

  window.initCompactGoogleReviews = async function initCompactGoogleReviews() {
    if (!window.google?.maps?.importLibrary) {
      renderFallbackReviews();
      return;
    }

    try {
      const { Place } = await google.maps.importLibrary("places");
      const placeRequest = new Place({ id: GOOGLE_PLACE_ID });
      const { place } = await placeRequest.fetchFields({
        fields: ["displayName", "rating", "userRatingCount", "reviews", "googleMapsURI"]
      });
      renderPlace(place || placeRequest);
    } catch (error) {
      console.error("Compact Google Reviews request failed:", error);
      renderFallbackReviews();
    }
  };

  window.gm_authFailure = renderFallbackReviews;

  if (!document.querySelector("[data-google-reviews]")) return;

  async function loadHostedGoogleReviews() {
    const response = await fetch(NETLIFY_REVIEWS_ENDPOINT, {
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Hosted Google reviews request failed with status ${response.status}.`);
    }

    renderPlace(await response.json());
  }

  function loadBrowserGoogleReviews() {
    if (document.querySelector("script[data-google-reviews-browser]")) return;

    const googleScript = document.createElement("script");
    googleScript.async = true;
    googleScript.dataset.googleReviewsBrowser = "true";
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(LOCAL_GOOGLE_API_KEY)}&loading=async&libraries=places&callback=initCompactGoogleReviews`;
    googleScript.onerror = renderFallbackReviews;
    document.head.append(googleScript);
  }

  if (isLocalPreview) {
    loadBrowserGoogleReviews();
  } else {
    loadHostedGoogleReviews().catch((error) => {
      console.warn("Hosted Google Reviews request failed; trying the browser connection:", error);
      loadBrowserGoogleReviews();
    });
  }
})();
