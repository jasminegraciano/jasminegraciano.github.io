(() => {
  const fullPageReviews = new Map([
    ["commercial.html", "commercial"],
    ["commercial2.html", "commercial"],
    ["powerwash.html", "powerwash"],
    ["exterior.html", "exterior"],
    ["exterior2.html", "exterior"],
    ["interior.html", "interior"],
    ["interior2.html", "interior"],
    ["cabinet.html", "interior"],
    ["deck-staining.html", "exterior"],
    ["galleries.html", "all"],
    ["service.html", "all"]
  ]);
  const serviceWidgetPages = new Set([
    "interior.html", "exterior.html", "commercial.html", "powerwash.html",
    "interior2.html", "exterior2.html", "cabinet.html", "deck-staining.html",
    "galleries.html", "testimonials.html"
  ]);
  const conversionPages = new Set([
    "interior.html", "exterior.html", "commercial.html", "commercial2.html",
    "powerwash.html", "interior2.html", "exterior2.html", "cabinet.html", "deck-staining.html",
    "galleries.html", "service.html"
  ]);
  const pagesWithOwnServiceAreas = new Set([
    "interior.html", "exterior.html", "commercial.html", "commercial2.html",
    "powerwash.html", "interior2.html", "exterior2.html"
  ]);

  const filename = window.location.pathname.split("/").pop() || "index.html";
  document.body.classList.add(`sitewide-page-${filename.replace(/\.html$/i, "").replace(/[^a-z0-9-]/gi, "-")}`);
  const socialLinks = {
    instagram: "https://www.instagram.com/connecticut_house_painters",
    facebook: "https://www.facebook.com/connecticuthousepainters?mibextid=wwXIfr&rdid=7ResKtqcpbShjk02&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BfkBU2T57%2F%3Fmibextid%3DwwXIfr#",
    x: "https://x.com/CThousepainters",
    youtube: "https://www.youtube.com/@Connecticuthousepainters/"
  };
  const iconRoot = "MainservicesIcons/web";
  const icons = {
    experience: `${iconRoot}/InfoIcons/20 plus years pain and experience.png`,
    call: `${iconRoot}/InfoIcons/Call Now Icon.png`,
    serviceArea: `${iconRoot}/InfoIcons/Connecticut Service Area.png`,
    insured: `${iconRoot}/InfoIcons/License and fully insured icon.png`,
    local: `${iconRoot}/InfoIcons/Local Cmpany Connecticut.png`,
    rating: `${iconRoot}/InfoIcons/Painting Company with 5 stars google ratings.png`,
    premium: `${iconRoot}/InfoIcons/Premium Matrials for Painting.png`,
    estimate: `${iconRoot}/InfoIcons/Request a free estimate.png`,
    cabinet: `${iconRoot}/ServicesIcons/Cabinet Painting.png`,
    commercial: `${iconRoot}/ServicesIcons/Commercial Painting Icon.png`,
    deck: `${iconRoot}/ServicesIcons/Deck Staining.png`,
    exterior: `${iconRoot}/ServicesIcons/Exterior Painting Icon.png`,
    interior: `${iconRoot}/ServicesIcons/Interior Painting Icon.png`,
    powerwash: `${iconRoot}/ServicesIcons/Pressure Washing Icon.png`
  };

  function unifySiteHeader() {
    const currentHeader = document.querySelector(".site-header");
    if (!currentHeader || currentHeader.classList.contains("sitewide-unified-header")) return;

    const navigation = [
      ["index.html", "Home", "home"],
      ["about.html", "About Us", "about"],
      ["galleries.html", "Gallery", "galleries"],
      ["testimonials.html", "Reviews", "testimonials"],
      ["service.html", "Service Areas", "service"],
      ["contact.html", "Contact", "contact"]
    ];
    const services = [
      ["interior.html", "Interior Painting"],
      ["exterior.html", "Exterior Painting"],
      ["cabinet.html", "Cabinet Painting"],
      ["deck-staining.html", "Deck Staining"],
      ["powerwash.html", "Power Washing"],
      ["commercial.html", "Commercial Painting"]
    ];
    const activeSections = new Map([
      ["index.html", "home"],
      ["about.html", "about"],
      ["contact.html", "contact"],
      ["testimonial.html", "testimonials"],
      ["testimonials.html", "testimonials"],
      ["galleries.html", "galleries"],
      ["interior.html", "interior"],
      ["interior2.html", "interior"],
      ["cabinet.html", "interior"],
      ["exterior.html", "exterior"],
      ["exterior2.html", "exterior"],
      ["deck-staining.html", "exterior"],
      ["commercial.html", "commercial"],
      ["commercial2.html", "commercial"],
      ["commerical.html", "commercial"],
      ["powerwash.html", "powerwash"],
      ["service.html", "service"]
    ]);
    const activeSection = activeSections.get(filename);
    const serviceLinks = services.map(([href, label]) => `
      <li><a href="${href}">${label}</a></li>
    `).join("");
    const navigationLinks = navigation.map(([href, label, section]) => {
      const active = section === activeSection;
      return `
        <li>
          <a href="${href}"${active ? ' class="active" aria-current="page"' : ""}>${label}</a>
        </li>
      `;
    });
    const serviceIsActive = ["interior", "exterior", "commercial", "powerwash"].includes(activeSection);
    const serviceMenu = `
      <li class="has-dropdown home-nav-dropdown sitewide-services-dropdown">
        <button class="home-services-toggle dropdown-trigger${serviceIsActive ? " active" : ""}" type="button" aria-haspopup="true" aria-expanded="false">Services</button>
        <ul class="home-dropdown-menu service-area-menu sitewide-services-menu" aria-label="Painting and power washing services">
          ${serviceLinks}
        </ul>
      </li>
    `;
    const links = [
      navigationLinks[0],
      navigationLinks[1],
      serviceMenu,
      navigationLinks[2],
      navigationLinks[3],
      navigationLinks[4],
      navigationLinks[5]
    ].join("");

    const unifiedHeader = document.createElement("header");
    unifiedHeader.className = "site-header home-header sitewide-unified-header";
    unifiedHeader.id = "top";
    unifiedHeader.innerHTML = `
      <div class="home-header-inner">
        <a class="home-brand" href="index.html" aria-label="Connecticut House Painters homepage">
          <img class="home-brand-mascot" src="images/WillieTheWhale.png" alt="" />
          <img class="home-brand-logo" src="images/ConnecticutHousePaintersLLCLogo.png" alt="Connecticut House Painters Power Washing" />
        </a>
        <nav class="home-nav" aria-label="Primary navigation">
          <button class="menu-toggle sitewide-menu-toggle home-menu-toggle" type="button" aria-label="Open menu" aria-controls="sitewide-primary-menu" aria-expanded="false"><span></span></button>
          <ul class="nav-menu home-nav-menu" id="sitewide-primary-menu">${links}</ul>
        </nav>
        <a class="sitewide-header-estimate sitewide-nav-estimate home-header-cta" href="contact.html#estimate-request">Get a Free Estimate</a>
      </div>
    `;

    currentHeader.replaceWith(unifiedHeader);
  }

  function createIconShell(icon, className = "") {
    const shell = document.createElement("span");
    shell.className = `sitewide-icon-shell ${className}`.trim();
    shell.setAttribute("aria-hidden", "true");

    const image = document.createElement("img");
    image.src = icon;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    shell.append(image);
    return shell;
  }

  function addInlineIcon(target, icon) {
    if (!target || target.querySelector(":scope > .sitewide-inline-icon")) return;
    target.classList.add("has-sitewide-inline-icon");
    target.prepend(createIconShell(icon, "sitewide-inline-icon"));
  }

  function addInfoIcon(target, icon) {
    if (!target || target.querySelector(":scope > .sitewide-info-icon")) return;
    target.classList.add("has-sitewide-info-icon");
    target.prepend(createIconShell(icon, "sitewide-info-icon"));
  }

  function addServiceIconSystem() {
    const pageIcons = new Map([
      ["about.html", [".about-hero .eyebrow", icons.local]],
      ["commercial.html", [".hero .eyebrow", icons.commercial]],
      ["commercial2.html", [".hero .eyebrow", icons.commercial]],
      ["contact.html", [".contact-hero .eyebrow", icons.estimate]],
      ["exterior.html", [".hero .eyebrow", icons.exterior]],
      ["exterior2.html", [".hero .eyebrow", icons.exterior]],
      ["galleries.html", [".gallery-hero .eyebrow", icons.premium]],
      ["interior.html", [".hero .eyebrow", icons.interior]],
      ["interior2.html", [".hero .eyebrow", icons.interior]],
      ["powerwash.html", [".hero .eyebrow", icons.powerwash]],
      ["service.html", [".area-hero .eyebrow", icons.serviceArea]],
      ["testimonials.html", [".review-console .section-head .eyebrow", icons.rating]]
    ]);

    const pageIcon = pageIcons.get(filename);
    if (pageIcon) addInlineIcon(document.querySelector(pageIcon[0]), pageIcon[1]);

    document.querySelectorAll(".specialty-service-copy .eyebrow").forEach((eyebrow) => {
      const label = eyebrow.textContent.toLowerCase();
      if (label.includes("cabinet")) addInlineIcon(eyebrow, icons.cabinet);
      if (label.includes("deck")) addInlineIcon(eyebrow, icons.deck);
    });

    if (filename === "index.html") {
      const homeServices = [
        ["#interior", icons.interior],
        ["#exterior", icons.exterior],
        ["#power-washing", icons.powerwash],
        ["#commercial", icons.commercial],
        ["#cabinet", icons.cabinet]
      ];

      homeServices.forEach(([selector, icon]) => {
        const card = document.querySelector(`.service-card${selector}`);
        if (!card || card.querySelector(":scope > .sitewide-service-card-icon")) return;
        card.classList.add("has-sitewide-service-card-icon");
        card.prepend(createIconShell(icon, "sitewide-service-card-icon"));
      });

      const additionalCard = [...document.querySelectorAll(".service-card")]
        .find((card) => card.querySelector("h3")?.textContent.trim() === "Additional Services");
      if (additionalCard && !additionalCard.querySelector(".sitewide-service-card-icon")) {
        additionalCard.classList.add("has-sitewide-service-card-icon");
        additionalCard.prepend(createIconShell(icons.deck, "sitewide-service-card-icon"));
      }

      const trustIcons = [icons.insured, icons.insured, icons.estimate, icons.premium];
      document.querySelectorAll(".trust-band .trust-card").forEach((card, index) => {
        addInfoIcon(card, trustIcons[index]);
        card.querySelector(".icon-mark")?.setAttribute("aria-hidden", "true");
      });

      if (additionalCard && !additionalCard.querySelector(".additional-services-menu")) {
        const oldAction = additionalCard.querySelector(".btn");
        const menu = document.createElement("details");
        menu.className = "additional-services-menu";
        menu.innerHTML = `
          <summary>Explore Additional Services</summary>
          <div class="additional-services-links">
            <a href="cabinet.html">
              <span class="sitewide-icon-shell additional-service-icon" aria-hidden="true"><img src="${icons.cabinet}" alt="" loading="lazy" decoding="async"></span>
              <span><strong>Cabinet Painting</strong><small>Durable kitchen and built-in finishes</small></span>
            </a>
            <a href="deck-staining.html">
              <span class="sitewide-icon-shell additional-service-icon" aria-hidden="true"><img src="${icons.deck}" alt="" loading="lazy" decoding="async"></span>
              <span><strong>Deck Staining</strong><small>Wood restoration and weather protection</small></span>
            </a>
            <a href="contact.html#estimate-request">
              <span class="sitewide-icon-shell additional-service-icon" aria-hidden="true"><img src="${icons.estimate}" alt="" loading="lazy" decoding="async"></span>
              <span><strong>Specialty Project</strong><small>Ask the team about your property</small></span>
            </a>
          </div>
        `;
        oldAction?.replaceWith(menu);
      }
    }

    if (filename === "about.html") {
      const aboutIcons = [icons.experience, icons.local, icons.premium, icons.estimate];
      document.querySelectorAll(".proof-row .proof-item").forEach((item, index) => addInfoIcon(item, aboutIcons[index]));
    }

    if (filename === "contact.html") {
      const contactIcons = [icons.call, icons.call, icons.serviceArea, icons.local];
      document.querySelectorAll(".contact-facts .contact-fact").forEach((fact, index) => addInfoIcon(fact, contactIcons[index]));
      addInlineIcon(document.querySelector(".estimate-panel h2"), icons.estimate);
    }

    if (filename === "service.html") {
      const proofIcons = [icons.local, icons.serviceArea, icons.estimate, icons.call];
      document.querySelectorAll(".area-proof-grid > div").forEach((item, index) => addInfoIcon(item, proofIcons[index]));

      const areaFilters = {
        exterior: icons.exterior,
        interior: icons.interior,
        powerwash: icons.powerwash,
        commercial: icons.commercial
      };
      document.querySelectorAll(".area-filter[data-service]").forEach((button) => {
        const icon = areaFilters[button.dataset.service];
        if (icon) addInlineIcon(button, icon);
      });
    }

    if (filename === "galleries.html") {
      const galleryFilters = {
        exterior: icons.exterior,
        interior: icons.interior,
        powerwash: icons.powerwash,
        wood: icons.deck,
        commercial: icons.commercial
      };
      document.querySelectorAll(".gallery-filter[data-filter]").forEach((button) => {
        const icon = galleryFilters[button.dataset.filter];
        if (icon) addInlineIcon(button, icon);
      });
    }
  }

  function addHeaderEstimateButton() {
    const header = document.querySelector(".site-header");
    if (!header || header.querySelector(".sitewide-header-estimate")) return;

    const target = header.querySelector(".topbar-contact") || header.querySelector(".contact-rail-inner");
    if (!target) return;

    const estimateLink = document.createElement("a");
    estimateLink.className = "sitewide-header-estimate";
    estimateLink.href = "contact.html#estimate-request";
    estimateLink.textContent = "Free Estimate";
    estimateLink.setAttribute("aria-label", "Request a free painting or power washing estimate");
    target.append(estimateLink);

    const syncHeaderOffset = () => {
      const height = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--sitewide-header-height", `${height}px`);
      document.body.classList.add("has-sitewide-fixed-header");
    };

    const updateHeaderState = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    syncHeaderOffset();
    updateHeaderState();
    window.addEventListener("resize", syncHeaderOffset, { passive: true });
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    if ("ResizeObserver" in window) {
      const headerObserver = new ResizeObserver(syncHeaderOffset);
      headerObserver.observe(header);
    }
  }

  function addCompactReviewSection() {
    if (!fullPageReviews.has(filename) || document.querySelector("[data-google-reviews]")) return;

    const main = document.querySelector("main");
    if (!main) return;

    const category = fullPageReviews.get(filename);
    const section = document.createElement("section");
    section.className = "sitewide-review-section";
    section.id = "google-review-highlights";
    section.innerHTML = `
      <div class="sitewide-review-inner">
        <div class="sitewide-review-head">
          <div>
            <span class="sitewide-review-kicker">Verified customer feedback</span>
            <h2>Recent reviews from the live Google profile.</h2>
          </div>
          <p>Public feedback helps customers see the communication, care, and finished results behind the work.</p>
        </div>
        <div class="sitewide-review-summary">
          <div class="sitewide-review-rating">
            <strong data-google-rating>4.8</strong>
            <span class="sitewide-review-stars" aria-label="Google star rating">★★★★★</span>
            <span class="sitewide-review-count" data-google-review-count>Google reviews</span>
          </div>
          <a data-google-profile-link href="https://www.google.com/search?q=Connecticut+House+Painters+LLC+Ledyard+CT+Google+reviews" target="_blank" rel="noopener">View all on Google</a>
        </div>
        <div class="compact-google-review-grid" data-google-reviews data-review-category="${category}" data-review-limit="3">
          <div class="compact-google-review-loading">Connecting to the live Google review profile...</div>
        </div>
      </div>
    `;
    main.append(section);

    if (!document.querySelector('script[src*="google-reviews-widget.js"]')) {
      const script = document.createElement("script");
      script.src = "google-reviews-widget.js?v=20260729y";
      script.defer = true;
      document.head.append(script);
    }
  }

  function simplifyInteriorPage() {
    if (filename !== "interior.html") return;
    document.body.classList.add("sitewide-page-interior");

    const introLayout = document.querySelector(".intro-layout");
    introLayout?.querySelector(".intro-card")?.remove();
    introLayout?.classList.add("interior-intro-clean");

    const introCopy = introLayout?.querySelector(".intro-copy");
    const introLead = introCopy?.querySelector(".copy-block:first-child p");
    if (introLead) {
      introLead.textContent = "We paint homes, condos, apartments, new construction, and commercial interiors with careful preparation, clean work areas, and durable finishes.";
    }

    const featureCopy = introCopy?.querySelector(".feature-block p");
    if (featureCopy) {
      featureCopy.textContent = "Every room starts with protection and preparation. Furniture and floors are covered, walls and trim are corrected, and premium coatings are applied for a clean, lasting finish.";
    }

    const reviewHeading = document.querySelector(".sitewide-review-section .sitewide-review-head h2");
    if (reviewHeading) reviewHeading.textContent = "Five-star service, every time.";
    const reviewDescription = document.querySelector(".sitewide-review-section .sitewide-review-head p");
    if (reviewDescription) reviewDescription.textContent = "Recent feedback from homeowners who trusted the team inside their homes.";
    const reviewGrid = document.querySelector(".sitewide-review-section [data-google-reviews]");
    if (reviewGrid) {
      reviewGrid.dataset.reviewLimit = "6";
      reviewGrid.dataset.reviewSupplement = "true";
    }
  }

  function rebuildCabinetPage() {
    if (filename !== "cabinet.html") return;
    const main = document.querySelector("main");
    if (!main) return;

    document.body.classList.add("cabinet-page");
    document.title = "Cabinet Painting Connecticut | Connecticut House Painters LLC";
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = "Professional cabinet painting and refinishing in Connecticut with careful preparation, durable finishes, and beautiful kitchen transformations.";
    }

    main.innerHTML = `
      <section class="cabinet-hero">
        <div class="cabinet-shell cabinet-hero-grid">
          <div class="cabinet-hero-copy">
            <span class="cabinet-kicker">Cabinet painting in Connecticut</span>
            <h1>Fall in love with your kitchen again.</h1>
            <p>Refresh worn, dated, or dark cabinets with a smooth, durable painted finish—without the disruption and expense of replacing the entire kitchen.</p>
            <div class="cabinet-actions">
              <a class="cabinet-button cabinet-button--red" href="contact.html#estimate-request">Request a Cabinet Estimate</a>
              <a class="cabinet-button cabinet-button--outline" href="tel:8608798222">Call (860) 879-8222</a>
            </div>
            <div class="cabinet-proof">
              <span>Careful preparation</span>
              <span>Furniture-grade finish</span>
              <span>Owner-led service</span>
            </div>
          </div>
          <figure class="cabinet-hero-photo">
            <img src="ServicePhotos/Cabinet Painting service in Connecticut. after.png" alt="Connecticut kitchen after professional cabinet painting">
            <figcaption><strong>A fresh finish changes the whole room.</strong><span>Professional cabinet painting by Connecticut House Painters.</span></figcaption>
          </figure>
        </div>
      </section>

      <section class="cabinet-transformation">
        <div class="cabinet-shell">
          <div class="cabinet-heading">
            <span class="cabinet-kicker">Before and after</span>
            <h2>A new-kitchen feeling using the cabinets you already own.</h2>
            <p>Cabinet painting can brighten the room, modernize the color palette, and make counters, hardware, and flooring feel intentional again.</p>
          </div>
          <div class="cabinet-comparison">
            <figure>
              <img src="ServicePhotos/Cabinet Painting service in Connecticut. Before.png" alt="Kitchen cabinets before professional painting">
              <figcaption><strong>Before</strong><span>Existing cabinet color and finish</span></figcaption>
            </figure>
            <figure>
              <img src="ServicePhotos/Cabinet Painting service in Connecticut. after.png" alt="Kitchen cabinets after professional painting">
              <figcaption><strong>After</strong><span>Clean, updated painted finish</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="cabinet-benefits">
        <div class="cabinet-shell">
          <div class="cabinet-heading cabinet-heading--light">
            <span class="cabinet-kicker">Why paint cabinets?</span>
            <h2>Keep the layout. Transform the room.</h2>
          </div>
          <div class="cabinet-benefit-grid">
            <article><strong>01</strong><h3>More value from the kitchen</h3><p>Update the most visible surfaces in the room while keeping serviceable cabinet boxes and the layout you know.</p></article>
            <article><strong>02</strong><h3>A color made for your home</h3><p>Choose a clean white, warm neutral, dramatic navy, or another finish that coordinates with the room around it.</p></article>
            <article><strong>03</strong><h3>A cleaner professional result</h3><p>Doors, drawers, frames, edges, and details receive focused preparation and controlled finish application.</p></article>
          </div>
        </div>
      </section>

      <section class="cabinet-process">
        <div class="cabinet-shell cabinet-process-grid">
          <div>
            <span class="cabinet-kicker">Our cabinet process</span>
            <h2>Beautiful results begin long before the final coat.</h2>
            <p>Cabinets are touched every day, so preparation matters. We build the finish around adhesion, smoothness, clean lines, and long-term use.</p>
            <a class="cabinet-text-link" href="interior.html">Planning more than cabinets? Explore Interior Painting</a>
          </div>
          <div class="cabinet-steps">
            <article><span>1</span><div><h3>Protect and organize</h3><p>Work areas, floors, counters, appliances, and nearby surfaces are carefully protected before preparation begins.</p></div></article>
            <article><span>2</span><div><h3>Clean, sand, and repair</h3><p>Grease and residue are removed, surfaces are prepared for adhesion, and minor imperfections are addressed.</p></div></article>
            <article><span>3</span><div><h3>Prime for the surface</h3><p>The correct bonding primer helps create a reliable base and controls stains or previous finishes where required.</p></div></article>
            <article><span>4</span><div><h3>Apply and inspect the finish</h3><p>Durable finish coats are applied, details are reviewed, and doors and drawers are carefully reassembled.</p></div></article>
          </div>
        </div>
      </section>

      <section class="cabinet-color">
        <div class="cabinet-shell cabinet-color-grid">
          <figure><img src="ServicePhotos/Cabinet Painting service in Connecticut. after.png" alt="Freshly painted kitchen cabinets in Connecticut"></figure>
          <div>
            <span class="cabinet-kicker">Designed around your room</span>
            <h2>The right cabinet color makes everything else look better.</h2>
            <p>We help homeowners think through counters, backsplash, flooring, wall color, natural light, and hardware so the cabinet finish feels connected to the entire interior.</p>
            <ul>
              <li>Warm whites for a bright, timeless kitchen</li>
              <li>Soft neutrals for an easy, flexible palette</li>
              <li>Deep blue or charcoal for contrast and character</li>
              <li>Coordinated wall and trim painting through our interior team</li>
            </ul>
            <div class="cabinet-actions">
              <a class="cabinet-button cabinet-button--red" href="contact.html#estimate-request">Start My Cabinet Project</a>
              <a class="cabinet-button cabinet-button--blue" href="interior.html">View Interior Painting</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function rebuildDeckStainingPage() {
    if (filename !== "deck-staining.html") return;
    const main = document.querySelector("main");
    if (!main) return;

    document.body.classList.add("deck-page");
    document.title = "Deck Staining Connecticut | Connecticut House Painters LLC";
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = "Professional deck staining and wood restoration in Connecticut, including cleaning, preparation, color guidance, protective finishes, and free estimates.";
    }

    main.innerHTML = `
      <section class="deck-hero">
        <div class="deck-shell deck-hero-grid">
          <div class="deck-hero-copy">
            <span class="deck-kicker">Deck staining and restoration</span>
            <h1>Bring back the beauty in your wood.</h1>
            <p>Professional cleaning, preparation, and staining can revive a faded deck, highlight the natural grain, and help protect the wood from Connecticut sun, moisture, and changing seasons.</p>
            <div class="deck-actions">
              <a class="deck-button deck-button--red" href="contact.html#estimate-request">Request a Deck Estimate</a>
              <a class="deck-button deck-button--outline" href="tel:8608798222">Call (860) 879-8222</a>
            </div>
            <div class="deck-proof">
              <span>Wood-safe preparation</span>
              <span>Natural-looking finishes</span>
              <span>Weather protection</span>
            </div>
          </div>
          <figure class="deck-hero-photo">
            <img src="ServicePhotos/Ipe deck Staining Staining, Connecticut. After.png" alt="Connecticut Ipe deck after professional staining">
            <figcaption><strong>Warm wood. Rich grain. Renewed outdoor living.</strong><span>Deck restoration and staining by Connecticut House Painters.</span></figcaption>
          </figure>
        </div>
      </section>

      <section class="deck-intro">
        <div class="deck-shell deck-intro-grid">
          <div>
            <span class="deck-kicker">What is deck staining?</span>
            <h2>Color and protection designed for outdoor wood.</h2>
          </div>
          <div>
            <p>Deck stain penetrates or coats prepared wood to improve its appearance and reduce exposure to moisture and ultraviolet light. Unlike a quick cosmetic coat, a lasting result depends on the wood species, previous finish, weathering, cleaning, drying time, and the right product.</p>
            <p>Our team evaluates those conditions before recommending a transparent, semi-transparent, or more solid finish.</p>
          </div>
        </div>
      </section>

      <section class="deck-transformation">
        <div class="deck-shell">
          <div class="deck-heading">
            <span class="deck-kicker">Before and after</span>
            <h2>From weathered and faded to warm and inviting.</h2>
            <p>Careful restoration reveals the character already inside the wood and creates an outdoor space that feels cared for again.</p>
          </div>
          <div class="deck-comparison">
            <figure>
              <img src="ServicePhotos/Ipe Deck Staining, Connecticut. Before.png" alt="Ipe deck before professional cleaning and staining">
              <figcaption><strong>Before</strong><span>Faded, weather-exposed wood</span></figcaption>
            </figure>
            <figure>
              <img src="ServicePhotos/Ipe deck Staining Staining, Connecticut. After.png" alt="Ipe deck after professional staining">
              <figcaption><strong>After</strong><span>Restored tone and visible grain</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="deck-benefits">
        <div class="deck-shell">
          <div class="deck-heading deck-heading--light">
            <span class="deck-kicker">Why stain your deck?</span>
            <h2>Make the space more beautiful—and easier to protect.</h2>
          </div>
          <div class="deck-benefit-grid">
            <article><strong>01</strong><h3>Restore natural character</h3><p>Cleaning and finish preparation can uncover richer color and grain hidden beneath weathering and buildup.</p></article>
            <article><strong>02</strong><h3>Slow weather exposure</h3><p>A suitable stain helps reduce the effects of moisture and UV exposure when maintained for the wood and conditions.</p></article>
            <article><strong>03</strong><h3>Enjoy the outdoor room</h3><p>A refreshed deck feels more intentional, inviting, and ready for family time, entertaining, and quiet mornings.</p></article>
          </div>
        </div>
      </section>

      <section class="deck-gallery">
        <div class="deck-shell">
          <div class="deck-heading">
            <span class="deck-kicker">Wood care in the field</span>
            <h2>Preparation matched to the deck—not a one-step shortcut.</h2>
          </div>
          <div class="deck-photo-grid">
            <figure><img src="photos/Deck cleaning. We restored this deck by treating it with a wood brightener and washing it.png" alt="Deck cleaning and wood brightening restoration"><figcaption>Cleaning and wood brightening</figcaption></figure>
            <figure><img src="photos/Deck cleaning and restoration, Mystic, CT. Before and after.png" alt="Deck cleaning and restoration in Mystic Connecticut"><figcaption>Deck restoration in Mystic</figcaption></figure>
            <figure><img src="photos/Pressure washing and house painting service in old Black point, niantic, CT. We wash this mahogany deck and later on we added a stain to preserve it.png" alt="Mahogany deck washed and stained in Niantic Connecticut"><figcaption>Mahogany cleaning and preservation</figcaption></figure>
          </div>
        </div>
      </section>

      <section class="deck-process">
        <div class="deck-shell deck-process-grid">
          <div>
            <span class="deck-kicker">Our deck staining process</span>
            <h2>The finish is only as good as the preparation beneath it.</h2>
            <p>Every project is adjusted for the species, age, previous coating, exposure, and current condition of the wood.</p>
          </div>
          <div class="deck-steps">
            <article><span>1</span><div><h3>Evaluate the wood and coating</h3><p>We review wear, previous stain, moisture, organic growth, damaged areas, and the desired finished appearance.</p></div></article>
            <article><span>2</span><div><h3>Clean and prepare carefully</h3><p>The deck is cleaned using an approach appropriate for the wood, followed by additional preparation where required.</p></div></article>
            <article><span>3</span><div><h3>Allow proper drying conditions</h3><p>Moisture and weather matter. Stain is scheduled only when the surface and forecast support reliable application.</p></div></article>
            <article><span>4</span><div><h3>Apply the selected finish</h3><p>The stain is applied for controlled coverage, clean edges, and the appearance chosen for the project.</p></div></article>
          </div>
        </div>
      </section>

      <section class="deck-finish">
        <div class="deck-shell deck-finish-grid">
          <figure><img src="photos/Cedar wood ce wood brightener and restoration, soft Washing in Charlestown, rhode Island.png" alt="Cedar wood brightening and restoration"></figure>
          <div>
            <span class="deck-kicker">Choosing a finish</span>
            <h2>Let the grain show—or add more color and coverage.</h2>
            <div class="deck-finish-options">
              <article><h3>Transparent</h3><p>Highlights natural grain with minimal added color where suitable for the wood and condition.</p></article>
              <article><h3>Semi-transparent</h3><p>Adds tone while allowing much of the wood character to remain visible.</p></article>
              <article><h3>Solid color</h3><p>Offers a more uniform painted appearance and higher color coverage for appropriate surfaces.</p></article>
            </div>
            <div class="deck-actions">
              <a class="deck-button deck-button--red" href="contact.html#estimate-request">Plan My Deck Project</a>
              <a class="deck-button deck-button--blue" href="exterior.html">Explore Exterior Painting</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function addSixServiceWidgets() {
    if (!serviceWidgetPages.has(filename)) return;
    const main = document.querySelector("main");
    if (!main || main.querySelector(".sitewide-service-widgets")) return;

    const services = [
      ["interior.html", "ServicePhotos/Inteior Painting Service. Connecticut. After.png", "Inside finish", "Interior Painting"],
      ["exterior.html", "ServicePhotos/Exterior Painting service Connecticut. After.png", "Outdoor finish", "Exterior Painting"],
      ["cabinet.html", "ServicePhotos/Cabinet Painting service in Connecticut. after.png", "Kitchen renewal", "Cabinet Painting"],
      ["deck-staining.html", "ServicePhotos/Ipe deck Staining Staining, Connecticut. After.png", "Wood protection", "Deck Staining"],
      ["powerwash.html", "photos/Soft washing a boathouse in Stonington CT.png", "Exterior cleaning", "Power Washing"],
      ["commercial.html", "ServicePhotos/Commercial painting services in Connecticut. After..png", "Business spaces", "Commercial Painting"]
    ];
    const section = document.createElement("section");
    section.className = "sitewide-service-widgets";
    section.setAttribute("aria-labelledby", "sitewide-service-widget-title");
    section.innerHTML = `
      <div class="sitewide-service-widget-inner">
        <div class="sitewide-service-widget-head">
          <span>Our services</span>
          <h2 id="sitewide-service-widget-title">Explore all six services.</h2>
        </div>
        <div class="sitewide-service-widget-grid">
          ${services.map(([href, image, kicker, title]) => `
            <a class="sitewide-service-widget" href="${href}">
              <img src="${image}" alt="${title} by Connecticut House Painters" loading="lazy" decoding="async">
              <span><small>${kicker}</small><strong>${title}</strong><em>View details</em></span>
            </a>
          `).join("")}
        </div>
      </div>
    `;
    if (conversionPages.has(filename)) {
      section.classList.add("sitewide-index-markate");
      const detailsHeading = section.querySelector(".sitewide-markate-details h2");
      const detailsIntro = section.querySelector(".sitewide-markate-details > p");
      const detailsNote = section.querySelector(".sitewide-markate-note");
      if (detailsHeading) detailsHeading.textContent = "Get in touch";
      if (detailsIntro) detailsIntro.textContent = "Call the team or send your project details for a free painting or power washing estimate.";
      if (detailsNote) detailsNote.remove();

      const reviewSection = document.querySelector(".sitewide-review-section");
      const reviewHeading = reviewSection?.querySelector(".sitewide-review-head h2");
      const reviewDescription = reviewSection?.querySelector(".sitewide-review-head p");
      const reviewGrid = reviewSection?.querySelector("[data-google-reviews]");
      if (reviewHeading) reviewHeading.textContent = "Five-star service, every time.";
      if (reviewDescription) reviewDescription.textContent = "Recent feedback from customers who trusted Connecticut House Painters.";
      if (reviewGrid) {
        reviewGrid.dataset.reviewLimit = "6";
        reviewGrid.dataset.reviewSupplement = "true";
      }
    }

    const legacyWidgetSelectors = new Map([
      ["interior.html", ".service-widgets"],
      ["exterior.html", ".service-widgets"],
      ["commercial.html", ".commercial-portals"],
      ["interior2.html", ".service-switcher"],
      ["exterior2.html", ".service-routes"],
      ["cabinet.html", ".service-routes"],
      ["deck-staining.html", ".service-switcher"]
    ]);
    const legacySelector = legacyWidgetSelectors.get(filename);
    if (legacySelector) main.querySelector(legacySelector)?.remove();

    if (filename === "testimonials.html") {
      const banner = main.querySelector(".testimonials-review-banner");
      if (banner) banner.insertAdjacentElement("afterend", section);
      else main.prepend(section);
    } else {
      const firstSection = main.querySelector(":scope > section");
      if (firstSection) firstSection.insertAdjacentElement("afterend", section);
      else main.prepend(section);
    }
  }

  function simplifyTestimonialsPage() {
    if (filename !== "testimonials.html") return;
    const main = document.querySelector("main");
    const reviewSection = main?.querySelector(".review-console");
    if (!main || !reviewSection) return;

    [...main.children].forEach((section) => {
      if (section !== reviewSection) section.remove();
    });

    reviewSection.classList.add("testimonials-focus");
    if (!main.querySelector(".testimonials-review-banner")) {
      const banner = document.createElement("section");
      banner.className = "testimonials-review-banner";
      banner.setAttribute("aria-labelledby", "testimonials-review-banner-title");
      banner.innerHTML = `
        <div>
          <span>Connecticut customer feedback</span>
          <h1 id="testimonials-review-banner-title">Real reviews. Real projects. Five-star care.</h1>
          <p>Browse recent customer experiences, click any review to read the complete comment, or visit the live Google profile for every published review.</p>
        </div>
        <aside aria-label="Google review rating">
          <strong>4.8</strong>
          <span aria-label="Five stars">★★★★★</span>
          <small><span data-testimonial-review-count>83</span> Google reviews</small>
        </aside>
      `;
      reviewSection.insertAdjacentElement("beforebegin", banner);
    }
    const sectionHead = reviewSection.querySelector(".section-head");
    if (sectionHead) {
      sectionHead.innerHTML = `
        <div>
          <span class="eyebrow">Customer Reviews</span>
          <h1>What our customers say.</h1>
        </div>
        <p>Read recent customer feedback or open the complete Google profile to see every published review.</p>
      `;
    }

    const consoleTitle = reviewSection.querySelector(".console-top h3");
    if (consoleTitle) consoleTitle.innerHTML = '<span data-testimonial-review-count>83</span> Google reviews and counting';
    const liveNote = reviewSection.querySelector(".console-top .live-note");
    if (liveNote) liveNote.textContent = "The newest review excerpts load from Google when available.";
    const googleLink = reviewSection.querySelector("#google-reviews-link");
    if (googleLink) {
      googleLink.dataset.testimonialReviewLink = "true";
      googleLink.textContent = "View all 83 reviews on Google";
    }

    const consoleShell = reviewSection.querySelector(".console-shell");
    if (consoleShell && !reviewSection.querySelector(".testimonial-trust-panel")) {
      const trustPanel = document.createElement("aside");
      trustPanel.className = "testimonial-trust-panel";
      trustPanel.setAttribute("aria-label", "Connecticut House Painters trust information");
      trustPanel.innerHTML = `
        <img src="images/Mainlogo.png" alt="Connecticut House Painters and Power Washing">
        <div>
          <span>Local, family-owned service</span>
          <h2>Ready for the same five-star care?</h2>
          <p>Licensed, insured, and serving homeowners and businesses across Connecticut.</p>
          <div class="testimonial-trust-actions">
            <a href="#markate-estimate">Request an estimate</a>
            <a href="tel:8608798222">Call (860) 879-8222</a>
          </div>
        </div>
      `;
      consoleShell.insertAdjacentElement("afterend", trustPanel);
    }
  }

  function addMarkateEstimatePanel() {
    if (!["contact.html", "testimonials.html"].includes(filename) && !conversionPages.has(filename)) return;

    const main = document.querySelector("main");
    if (!main || document.querySelector(".sitewide-markate-section")) return;

    const section = document.createElement("section");
    section.className = "sitewide-markate-section";
    section.id = "markate-estimate";
    section.setAttribute("aria-labelledby", "markate-estimate-title");
    section.innerHTML = `
      <div class="sitewide-markate-shell">
        <aside class="sitewide-markate-details">
          <span class="sitewide-markate-kicker">Free project estimate</span>
          <h2 id="markate-estimate-title">Start Your Project Today.</h2>
          <p>Send your project details securely to Connecticut House Painters, and our team will follow up as soon as possible.</p>
          <div class="sitewide-markate-contact-list">
            <a href="tel:8608798222"><span>Office</span><strong>(860) 879-8222</strong></a>
            <a href="mailto:connecticuthousepainters@gmail.com"><span>Email</span><strong>connecticuthousepainters@gmail.com</strong></a>
            <div><span>Service area</span><strong>Serving all of Connecticut</strong></div>
            <div><span>Hours</span><strong>Mon–Sat, 7AM–6PM</strong></div>
          </div>
          <p class="sitewide-markate-note">Required fields are marked inside the form. Please include the town and type of service so the team can respond accurately.</p>
        </aside>
        <div class="sitewide-markate-form">
          <div class="sitewide-markate-form-head">
            <span>Request a free estimate</span>
            <p>Complete the form below and the team will receive your request.</p>
          </div>
          <div id="markate-widget-contact" aria-live="polite">
            <p class="sitewide-markate-loading">Loading the secure estimate form…</p>
          </div>
        </div>
      </div>
    `;
    if (filename === "testimonials.html") {
      section.removeAttribute("aria-labelledby");
      section.setAttribute("aria-label", "Request a free estimate");
    }

    if (filename === "contact.html") {
      const oldPanel = main.querySelector(".estimate-panel");
      if (oldPanel) {
        oldPanel.remove();
        main.querySelector(".contact-hero-grid")?.classList.add("contact-hero-grid--intro");
      }
      const intro = main.querySelector(".contact-hero-grid");
      if (intro && !intro.querySelector(".contact-hero-brand")) {
        const logo = document.createElement("div");
        logo.className = "contact-hero-brand";
        logo.innerHTML = `
          <img src="images/Mainlogo.png" alt="Connecticut House Painters and Power Washing">
        `;
        intro.append(logo);
      }
      main.querySelector(".contact-hero")?.insertAdjacentElement("afterend", section);
    } else if (filename === "testimonials.html") {
      const reviewSection = main.querySelector(".testimonials-focus");
      if (reviewSection) {
        const layout = document.createElement("div");
        layout.className = "testimonials-two-column";
        reviewSection.insertAdjacentElement("beforebegin", layout);
        layout.append(reviewSection, section);
      } else {
        main.append(section);
      }
    } else {
      const reviewSection = document.querySelector(".sitewide-review-section");
      if (reviewSection) {
        const layout = document.createElement("div");
        layout.className = "sitewide-conversion-grid";
        main.append(layout);
        layout.append(reviewSection, section);
      } else {
        main.append(section);
      }
    }

    const widget = section.querySelector("#markate-widget-contact");
    if (!widget || document.querySelector("script[data-markate-contact-widget]")) return;

    function compactMarkateWidget() {
      const iframe = document.getElementById("markate-widget-contact-iframe");
      if (!iframe) {
        window.setTimeout(compactMarkateWidget, 250);
        return;
      }

      widget.querySelector(".sitewide-markate-loading")?.remove();
      const syncWidgetHeight = () => {
        const scale = parseFloat(getComputedStyle(widget).getPropertyValue("--markate-scale")) || 1;
        const unscaledHeight = parseFloat(iframe.style.height) || iframe.offsetHeight;
        if (unscaledHeight > 0) {
          const calculatedHeight = Math.ceil(unscaledHeight * scale);
          if (filename === "testimonials.html") {
            const compactLimit = window.innerWidth <= 560 ? 1650 : window.innerWidth <= 1120 ? 1450 : 1220;
            widget.style.height = `${Math.min(calculatedHeight, compactLimit)}px`;
          } else {
            widget.style.height = `${calculatedHeight}px`;
          }
        }
      };
      new MutationObserver(syncWidgetHeight).observe(iframe, {
        attributes: true,
        attributeFilter: ["style", "height"]
      });
      window.addEventListener("resize", syncWidgetHeight, { passive: true });
      requestAnimationFrame(syncWidgetHeight);
      window.setTimeout(syncWidgetHeight, 500);
    }

    const script = document.createElement("script");
    const widgetId = "bb8c26aeb9c0ca599f30da6b0885265e:30573:fac4bb38";
    script.type = "text/javascript";
    script.async = true;
    script.dataset.markateContactWidget = "true";
    script.addEventListener("load", compactMarkateWidget, { once: true });
    script.src = "https://www.markate.com/public/widget/contact/js?id=" +
      encodeURIComponent(widgetId) +
      "&ref=" + encodeURIComponent(window.location.href) +
      "&t=" + Date.now();
    widget.parentNode.insertBefore(script, widget);
  }

  function addEstimateStrip() {
    if (
      filename === "index.html" ||
      filename === "contact.html" ||
      filename === "about.html" ||
      filename === "testimonials.html" ||
      conversionPages.has(filename)
    ) return;

    const main = document.querySelector("main");
    if (!main || main.querySelector(".sitewide-estimate-strip")) return;

    const section = document.createElement("section");
    section.className = "sitewide-estimate-strip";
    section.setAttribute("aria-label", "Request a free estimate");
    section.innerHTML = `
      <div class="sitewide-estimate-inner">
        <div class="sitewide-estimate-copy">
          <span class="sitewide-icon-shell sitewide-estimate-icon" aria-hidden="true">
            <img src="${icons.estimate}" alt="" loading="lazy" decoding="async">
          </span>
          <div>
            <span class="sitewide-estimate-number">Free estimate</span>
            <strong>Have a project in mind?</strong>
            <p>Share the service, location, and a few project details with the local family team.</p>
          </div>
        </div>
        <div class="sitewide-estimate-actions">
          <a href="contact.html#estimate-request">Start My Estimate</a>
          <a href="tel:8608798222">Call (860) 879-8222</a>
        </div>
      </div>
    `;
    main.append(section);
  }

  function addReviewDetailModal() {
    if (!document.querySelector("[data-google-reviews], .review-card")) return;

    const dialog = document.createElement("dialog");
    dialog.className = "sitewide-review-dialog";
    dialog.setAttribute("aria-labelledby", "sitewide-review-dialog-name");
    dialog.innerHTML = `
      <button class="sitewide-review-dialog-close" type="button" aria-label="Close full review">×</button>
      <div class="sitewide-review-dialog-stars" aria-label="Five star review">★★★★★</div>
      <h2 id="sitewide-review-dialog-name">Google Review</h2>
      <p class="sitewide-review-dialog-time"></p>
      <p class="sitewide-review-dialog-text"></p>
      <a href="https://www.google.com/search?q=Connecticut+House+Painters+LLC+Ledyard+CT+Google+reviews" target="_blank" rel="noopener">View all reviews on Google</a>
    `;
    document.body.append(dialog);

    const reviewCardSelector = ".compact-google-review-card, .review-card";
    const prepareCards = (root = document) => {
      root.querySelectorAll?.(reviewCardSelector).forEach((card) => {
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        const reviewer = card.querySelector(".compact-google-review-name, .review-name")?.textContent || "this customer";
        card.setAttribute("aria-label", `Read the full review from ${reviewer}`);
      });
    };

    const openReview = (card) => {
      const name = card.querySelector(".compact-google-review-name, .review-name")?.textContent?.trim() || "Google Reviewer";
      const time = card.querySelector(".compact-google-review-time, .review-meta")?.textContent?.trim() || "Google review";
      const textElement = card.querySelector(".compact-google-review-text, .review-text");
      const text = textElement?.dataset.full || textElement?.textContent?.trim() || "";
      const stars = card.querySelector(".sitewide-review-stars")?.textContent?.trim() || "★★★★★";
      dialog.querySelector("#sitewide-review-dialog-name").textContent = name;
      dialog.querySelector(".sitewide-review-dialog-time").textContent = time;
      dialog.querySelector(".sitewide-review-dialog-text").textContent = text;
      dialog.querySelector(".sitewide-review-dialog-stars").textContent = stars;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      dialog.querySelector(".sitewide-review-dialog-close")?.focus();
    };

    prepareCards();
    new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          if (node.matches(reviewCardSelector)) prepareCards(node.parentElement);
          else prepareCards(node);
        }
      }));
    }).observe(document.body, { childList: true, subtree: true });

    document.addEventListener("click", (event) => {
      const card = event.target.closest?.(reviewCardSelector);
      if (card && !event.target.closest("a")) openReview(card);
    });
    document.addEventListener("keydown", (event) => {
      const card = event.target.closest?.(reviewCardSelector);
      if (card && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        openReview(card);
      }
    });
    dialog.querySelector(".sitewide-review-dialog-close")?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  function addSharedServiceAreas() {
    if (pagesWithOwnServiceAreas.has(filename)) return;
    if (document.querySelector(".sitewide-service-areas, .about-service-areas")) return;
    const main = document.querySelector("main");
    if (!main) return;
    const townGroups = [
      ["A-C Connecticut service towns", [
        "Andover", "Ansonia", "Ashford", "Avon", "Barkhamsted", "Beacon Falls",
        "Berlin", "Bethany", "Bethel", "Bethlehem", "Bloomfield", "Bolton",
        "Bozrah", "Branford", "Bridgeport", "Bridgewater", "Bristol", "Brookfield",
        "Brooklyn", "Burlington", "Canaan", "Canterbury", "Canton", "Chaplin",
        "Cheshire", "Chester", "Clinton", "Colchester", "Colebrook", "Columbia",
        "Cornwall", "Coventry", "Cromwell"
      ]],
      ["D-H Connecticut service towns", [
        "Danbury", "Darien", "Deep River", "Derby", "Durham", "East Granby",
        "East Haddam", "East Hampton", "East Hartford", "East Haven", "East Lyme",
        "East Windsor", "Eastford", "Easton", "Ellington", "Enfield", "Essex",
        "Fairfield", "Farmington", "Franklin", "Glastonbury", "Goshen", "Granby",
        "Greenwich", "Griswold", "Groton", "Guilford", "Haddam", "Hamden",
        "Hampton", "Hartford", "Hartland", "Harwinton", "Hebron"
      ]],
      ["K-N Connecticut service towns", [
        "Killingly", "Killingworth", "Lebanon", "Ledyard", "Lisbon", "Litchfield",
        "Lyme", "Madison", "Manchester", "Mansfield", "Marlborough", "Meriden",
        "Middlebury", "Middlefield", "Middletown", "Milford", "Monroe", "Montville",
        "Morris", "Mystic", "Naugatuck", "New Britain", "New Canaan", "New Fairfield",
        "New Hartford", "New Haven", "New London", "New Milford", "Newington",
        "Newtown", "Norfolk", "North Branford", "North Canaan", "North Haven",
        "North Stonington", "Norwalk", "Norwich"
      ]],
      ["O-W Connecticut service towns", [
        "Old Lyme", "Old Saybrook", "Orange", "Oxford", "Plainfield", "Plainville",
        "Plymouth", "Pomfret", "Portland", "Preston", "Prospect", "Putnam",
        "Redding", "Ridgefield", "Rocky Hill", "Roxbury", "Salem", "Salisbury",
        "Scotland", "Seymour", "Sharon", "Shelton", "Sherman", "Simsbury",
        "Somers", "South Windsor", "Southbury", "Southington", "Sprague",
        "Stafford", "Stamford", "Sterling", "Stonington", "Stratford", "Suffield",
        "Thomaston", "Thompson", "Tolland", "Trumbull", "Vernon", "Voluntown",
        "Wallingford", "Warren", "Washington", "Waterbury", "Waterford",
        "Watertown", "West Hartford", "West Haven", "Westbrook", "Weston",
        "Westport", "Wethersfield", "Willington", "Wilton", "Winchester",
        "Windham", "Windsor", "Windsor Locks", "Wolcott", "Woodbridge",
        "Woodbury", "Woodstock"
      ]]
    ];
    const section = document.createElement("section");
    section.className = "sitewide-service-areas";
    section.id = "sitewide-connecticut-service-areas";
    section.innerHTML = `
      <div class="sitewide-closing-inner">
        <div class="sitewide-area-head">
          <span>Serving Connecticut</span>
          <h2>Painting and power washing across Connecticut.</h2>
          <p>Service-area content is grouped so it stays searchable without overwhelming the page.</p>
        </div>
        <div class="sitewide-county-grid">
          <span>Painting Services New London County, CT</span><span>Painting Services Middlesex County, CT</span>
          <span>Painting Services Windham County, CT</span><span>Painting Services Litchfield County, CT</span>
          <span>Painting Services Hartford County, CT</span><span>Painting Services New Haven County, CT</span>
          <span>Painting Services Tolland County, CT</span><span>Painting Services Fairfield County, CT</span>
        </div>
        <div class="sitewide-area-callout">
          <div><strong>Do you see your town listed?</strong><p>Connecticut House Painters helps homeowners and businesses across Connecticut. Call to confirm scheduling in your area.</p></div>
          <a href="tel:8608798222">Call (860) 879-8222</a>
        </div>
        <details open>
          <summary>Popular Connecticut service towns</summary>
          <p>Painting and power washing services are available for these Connecticut locations.</p>
          <div class="sitewide-town-cloud">
            <span>Ledyard, CT</span><span>New London, CT</span><span>Groton, CT</span><span>Waterford, CT</span><span>Mystic, CT</span><span>East Lyme, CT</span>
            <span>Old Lyme, CT</span><span>Old Saybrook, CT</span><span>Stonington, CT</span><span>Norwich, CT</span><span>Montville, CT</span><span>Preston, CT</span>
            <span>Salem, CT</span><span>Bozrah, CT</span><span>Colchester, CT</span><span>Griswold, CT</span><span>Lisbon, CT</span><span>North Stonington, CT</span>
          </div>
        </details>
        ${townGroups.map(([label, towns]) => `
          <details>
            <summary>${label}</summary>
            <div class="sitewide-town-cloud sitewide-town-cloud--alphabetical">
              ${towns.map((town) => `<span>${town}, CT</span>`).join("")}
            </div>
          </details>
        `).join("")}
      </div>
    `;
    main.append(section);
  }

  function standardizeClosingFooter() {
    if (filename === "index.html" || document.querySelector(".sitewide-map-cta")) return;
    const footer = document.querySelector("footer");
    if (!footer) return;
    document.querySelector(".about-bottom-cta")?.remove();
    const map = document.createElement("section");
    map.className = "sitewide-map-cta";
    map.innerHTML = `
      <div class="sitewide-map-copy">
        <h2>Ready to get started?</h2>
        <p>Call us today or request your free estimate online.</p>
        <a href="contact.html#estimate-request">Get Your Free Estimate</a>
        <img src="images/Mainlogo.png" alt="" />
      </div>
      <iframe title="Connecticut House Painters map" loading="lazy" src="https://www.google.com/maps?q=919%20Colonel%20Ledyard%20Hwy%2C%20Ledyard%2C%20CT%2006339&output=embed"></iframe>
      <aside><h3>Proudly Serving All of Connecticut</h3><ul><li>Groton</li><li>Mystic</li><li>Waterford</li><li>New London</li><li>Ledyard</li><li>And More!</li></ul><a href="service.html">View Full Service Area</a></aside>
    `;
    footer.before(map);
    footer.className = "sitewide-standard-footer";
    footer.innerHTML = `
      <div class="sitewide-footer-inner">
        <div><div class="sitewide-footer-brand"><img src="images/WillieTheWhale.png" alt=""><img src="images/ConnecticutHousePaintersLLCLogo.png" alt="Connecticut House Painters"></div><p>Professional painting and power washing services you can count on. We protect what matters most: your home or business.</p></div>
        <div><h3>Quick Links</h3><a href="index.html">Home</a><a href="about.html">About Us</a><a href="galleries.html">Gallery</a><a href="testimonials.html">Reviews</a><a href="contact.html">Contact</a></div>
        <div><h3>Our Services</h3><a href="interior.html">Interior Painting</a><a href="exterior.html">Exterior Painting</a><a href="interior2.html">Cabinet Painting</a><a href="exterior2.html">Deck Staining</a><a href="powerwash.html">Power Washing</a><a href="commercial.html">Commercial Painting</a></div>
        <div><h3>Contact Info</h3><a href="tel:8608798222">(860) 879-8222</a><a href="mailto:connecticuthousepainters@gmail.com">connecticuthousepainters@gmail.com</a><p>Serving all of Connecticut<br>Mon - Sat: 7AM - 6PM<br>Sunday: Closed</p></div>
        <strong class="sitewide-footer-badge">Licensed<br>Insured<br>and Bonded</strong>
      </div>
      <div class="sitewide-footer-bottom">© 2026 Connecticut House Painters LLC. All Rights Reserved.</div>
    `;
  }

  function addScrollProgress() {
    const header = document.querySelector(".site-header");
    if (!header || header.querySelector(".sitewide-scroll-progress")) return;

    const progress = document.createElement("div");
    progress.className = "sitewide-scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    header.append(progress);

    let progressFrame = 0;
    const updateProgress = () => {
      progressFrame = 0;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollRange > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollRange)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    };
    const requestProgressUpdate = () => {
      if (progressFrame) return;
      progressFrame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate, { passive: true });
  }

  function normalizeMobileNavigation() {
    const header = document.querySelector(".site-header");
    const nav = header?.querySelector("nav");
    const menu = nav?.querySelector(".nav-menu, :scope > ul");
    if (!nav || !menu) return;

    menu.classList.add("nav-menu");
    if (!menu.id) menu.id = "sitewide-primary-menu";

    let toggle = nav.querySelector(".menu-toggle");
    if (!toggle) {
      toggle = document.createElement("button");
      toggle.className = "menu-toggle sitewide-menu-toggle";
      toggle.type = "button";
      toggle.setAttribute("aria-label", "Open menu");
      toggle.innerHTML = "<span></span>";
      nav.prepend(toggle);
    }

    toggle.setAttribute("aria-controls", menu.id);
    if (!toggle.hasAttribute("aria-expanded")) toggle.setAttribute("aria-expanded", "false");

    const syncMenuState = () => {
      const isOpen =
        menu.classList.contains("open") ||
        menu.classList.contains("active") ||
        menu.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    };

    if (toggle.classList.contains("sitewide-menu-toggle")) {
      toggle.addEventListener("click", () => {
        const willOpen =
          !menu.classList.contains("open") &&
          !menu.classList.contains("active") &&
          !menu.classList.contains("is-open");
        menu.classList.toggle("open", willOpen);
        menu.classList.toggle("is-open", willOpen);
        syncMenuState();
      });
    }

    const dropdowns = [...menu.querySelectorAll(".has-dropdown")];

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open", "active", "is-open");
        dropdowns.forEach((dropdown) => dropdown.classList.remove("open", "hover-open"));
        syncMenuState();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      menu.classList.remove("open", "active", "is-open");
      dropdowns.forEach((dropdown) => dropdown.classList.remove("open", "hover-open"));
      syncMenuState();
      toggle.focus();
    });

    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector(".dropdown-trigger");
      const panel = dropdown.querySelector(".service-area-menu");
      if (!trigger || !panel || trigger.dataset.sitewideDropdownReady === "true") return;

      trigger.dataset.sitewideDropdownReady = "true";
      trigger.setAttribute("aria-expanded", "false");
      let hoverCloseTimer = 0;

      dropdown.addEventListener("pointerenter", () => {
        window.clearTimeout(hoverCloseTimer);
        dropdown.classList.add("hover-open");
      });

      dropdown.addEventListener("pointerleave", () => {
        window.clearTimeout(hoverCloseTimer);
        hoverCloseTimer = window.setTimeout(() => dropdown.classList.remove("hover-open"), 220);
      });

      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        const willOpen = !dropdown.classList.contains("open");
        dropdowns.forEach((item) => item.classList.toggle("open", item === dropdown && willOpen));
        trigger.setAttribute("aria-expanded", String(willOpen));
      });

      panel.addEventListener("click", () => {
        dropdown.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
        menu.classList.remove("open", "active", "is-open");
        syncMenuState();
      });
    });

    if ("MutationObserver" in window) {
      const menuStateObserver = new MutationObserver(syncMenuState);
      menuStateObserver.observe(menu, { attributes: true, attributeFilter: ["class"] });
    }
    syncMenuState();
  }

  function addSocialLinks() {
    document.querySelectorAll("a").forEach((link) => {
      const label = `${link.textContent} ${link.getAttribute("href") || ""}`.toLowerCase();
      if (label.includes("instagram")) link.href = socialLinks.instagram;
      if (label.includes("facebook")) link.href = socialLinks.facebook;
      if (label.includes("twitter") || label.includes("x.com/")) link.href = socialLinks.x;
      if (label.includes("youtube")) link.href = socialLinks.youtube;
    });

    if (document.querySelector(".sitewide-social-band")) return;

    const footer = document.querySelector("footer");
    if (!footer) return;

    const section = document.createElement("section");
    section.className = "sitewide-social-band";
    section.setAttribute("aria-label", "Connect with Connecticut House Painters on social media");
    section.innerHTML = `
      <div class="sitewide-social-inner">
        <div class="sitewide-social-copy">
          <strong>See recent projects and finished transformations.</strong>
          <span>Follow Connecticut House Painters for current work across Connecticut.</span>
        </div>
        <div class="sitewide-social-actions">
          <a class="sitewide-social-link" href="${socialLinks.instagram}" target="_blank" rel="noopener noreferrer">
            <span class="sitewide-social-icon sitewide-social-icon-instagram" aria-hidden="true"></span>
            <span>Instagram</span>
          </a>
          <a class="sitewide-social-link" href="${socialLinks.facebook}" target="_blank" rel="noopener noreferrer">
            <span class="sitewide-social-icon sitewide-social-icon-facebook" aria-hidden="true"></span>
            <span>Facebook</span>
          </a>
          <a class="sitewide-social-link" href="${socialLinks.x}" target="_blank" rel="noopener noreferrer">
            <span class="sitewide-social-icon sitewide-social-icon-x" aria-hidden="true"></span>
            <span>Twitter</span>
          </a>
          <a class="sitewide-social-link" href="${socialLinks.youtube}" target="_blank" rel="noopener noreferrer">
            <span class="sitewide-social-icon sitewide-social-icon-youtube" aria-hidden="true"></span>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    `;
    footer.before(section);
  }

  function connectServiceAreaLinks() {
    document.querySelectorAll(".dropdown-trigger").forEach((link) => {
      if (link.closest(".sitewide-unified-header")) return;
      link.href = "service.html";
    });

    document.querySelectorAll(".service-area-menu a").forEach((link) => {
      if (link.closest(".sitewide-unified-header")) return;
      const town = link.textContent
        .replace(/\bCT House Painters\b/i, "")
        .replace(/\bHouse Painters\b/i, "")
        .trim();
      const slug = town
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      if (slug) link.href = `service.html#${slug}`;
    });
  }

  function addBackToTopButton() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let button = document.querySelector(".back-top, .back-to-top, .scroll-top, #backToTop");

    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.textContent = "↑";
      document.body.append(button);
    }

    button.classList.add("sitewide-back-to-top");
    button.setAttribute("aria-label", "Back to top");
    button.setAttribute("title", "Back to top");

    const updateVisibility = () => {
      button.classList.toggle("is-visible", window.scrollY > Math.max(420, window.innerHeight * 0.65));
    };

    button.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
  }

  function addMotionEnhancements() {
    const main = document.querySelector("main");
    if (!main) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const revealSelector = [
      ".service-card",
      ".review-card",
      ".process-card",
      ".process-step",
      ".trust-card",
      ".widget-card",
      ".service-widget",
      ".feature-card",
      ".project-card",
      ".area-card",
      ".county-card",
      ".faq-item",
      ".proof-card",
      ".value-card",
      ".finish-card",
      ".detail-card",
      ".testimonial-card",
      ".compact-google-review-card"
    ].join(",");
    const popSelector = [
      ".service-card",
      ".review-card",
      ".process-card",
      ".process-step",
      ".trust-card",
      ".widget-card",
      ".service-widget",
      ".feature-card",
      ".project-card",
      ".area-card",
      ".county-card",
      ".faq-item",
      ".proof-card",
      ".value-card",
      ".finish-card",
      ".detail-card",
      ".testimonial-card",
      ".compact-google-review-card"
    ].join(",");

    let revealIndex = 0;
    const revealObserver = reduceMotion || !("IntersectionObserver" in window)
      ? null
      : new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-motion-visible");
            revealObserver.unobserve(entry.target);
          });
        }, {
          rootMargin: "0px 0px -7% 0px",
          threshold: 0.07
        });

    const prepareReveal = (element) => {
      if (!(element instanceof HTMLElement) || element.classList.contains("motion-reveal")) return;

      element.classList.add("motion-reveal");
      if (revealIndex % 3 === 0) element.classList.add("motion-from-left");
      if (revealIndex % 3 === 2) element.classList.add("motion-from-right");
      element.style.setProperty("--motion-delay", `${(revealIndex % 4) * 70}ms`);
      revealIndex += 1;

      const rect = element.getBoundingClientRect();
      if (reduceMotion || !revealObserver || (rect.top < window.innerHeight * 0.94 && rect.bottom > 0)) {
        window.requestAnimationFrame(() => element.classList.add("is-motion-visible"));
      } else {
        revealObserver.observe(element);
      }
    };

    const preparePop = (element) => {
      if (!(element instanceof HTMLElement) || element.classList.contains("motion-pop")) return;
      element.classList.add("motion-pop");

      if (!finePointer || reduceMotion) return;
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        element.style.setProperty("--motion-tilt-x", `${(-y * 2.4).toFixed(2)}deg`);
        element.style.setProperty("--motion-tilt-y", `${(x * 2.4).toFixed(2)}deg`);
      });
      element.addEventListener("pointerleave", () => {
        element.style.setProperty("--motion-tilt-x", "0deg");
        element.style.setProperty("--motion-tilt-y", "0deg");
      });
    };

    const prepareImage = (image, index) => {
      if (!(image instanceof HTMLImageElement) || image.classList.contains("motion-image")) return;
      if (image.closest(".site-header, .compact-google-review-card, .map-wrap, [class*='map']")) return;

      image.classList.add("motion-image");
      if (!reduceMotion && index < 3) {
        image.classList.add("motion-drift");
        image.style.setProperty("--motion-drift-delay", `${index * -1.7}s`);
      }
    };

    const registerMotion = (root) => {
      if (!(root instanceof Element) && root !== main) return;

      const sections = root === main
        ? [...main.children].filter((child) => child.matches?.("section:not(:first-child)"))
        : [];
      const reveals = root.matches?.(revealSelector)
        ? [root, ...root.querySelectorAll(revealSelector)]
        : [...root.querySelectorAll(revealSelector)];
      const pops = root.matches?.(popSelector)
        ? [root, ...root.querySelectorAll(popSelector)]
        : [...root.querySelectorAll(popSelector)];

      sections.forEach(prepareReveal);
      reveals.forEach(prepareReveal);
      pops.forEach(preparePop);
    };

    document.documentElement.classList.add("sitewide-motion-ready");
    registerMotion(main);

    [...main.querySelectorAll("img")].forEach(prepareImage);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          registerMotion(node);
          const images = node.matches("img") ? [node] : [...node.querySelectorAll("img")];
          images.forEach(prepareImage);
        });
      });
    });
    mutationObserver.observe(main, { childList: true, subtree: true });

    if (!reduceMotion) {
      const attentionTargets = [
        ...document.querySelectorAll(
          ".sitewide-header-estimate, .sitewide-estimate-actions a:first-child, .nav-cta, .btn-primary"
        )
      ];
      let attentionIndex = 0;
      window.setInterval(() => {
        if (document.hidden || !attentionTargets.length) return;
        const target = attentionTargets[attentionIndex % attentionTargets.length];
        attentionIndex += 1;
        target.classList.remove("motion-nudge");
        void target.offsetWidth;
        target.classList.add("motion-nudge");
        window.setTimeout(() => target.classList.remove("motion-nudge"), 720);
      }, 7200);
    }
  }

  unifySiteHeader();
  addHeaderEstimateButton();
  addServiceIconSystem();
  simplifyInteriorPage();
  simplifyTestimonialsPage();
  addSixServiceWidgets();
  addCompactReviewSection();
  addMarkateEstimatePanel();
  addReviewDetailModal();
  addEstimateStrip();
  addSharedServiceAreas();
  standardizeClosingFooter();
  addScrollProgress();
  connectServiceAreaLinks();
  normalizeMobileNavigation();
  addSocialLinks();
  addBackToTopButton();
  addMotionEnhancements();
})();
/* =====================================================
   GLOBAL HEADER — MATCH ABOUT.HTML ON EVERY PAGE
   Keep this at the very bottom of site-enhancements.js
===================================================== */

(function applyUnifiedAboutHeader() {
  /* Load the same header fonts on every page */
  if (!document.getElementById("unified-header-fonts")) {
    const fontLink = document.createElement("link");

    fontLink.id = "unified-header-fonts";
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700;800&display=swap";

    document.head.appendChild(fontLink);
  }

  /* Prevent the style from being inserted more than once */
  if (document.getElementById("unified-about-header-style")) {
    return;
  }

  const headerStyle = document.createElement("style");

  headerStyle.id = "unified-about-header-style";

  headerStyle.textContent = `
    /* =================================================
       DESKTOP HEADER
    ================================================= */

    body .sitewide-unified-header.home-header,
    body header.sitewide-unified-header {
      position: sticky !important;
      top: 0 !important;
      z-index: 5000 !important;
      min-height: 0 !important;
      background: #001126 !important;
      border-bottom: 3px solid #33cfff !important;
      box-shadow: 0 16px 32px rgba(0, 17, 38, 0.28) !important;
      overflow: visible !important;
    }

    body .sitewide-unified-header .home-header-inner {
      width: min(1360px, calc(100% - 28px)) !important;
      height: 98px !important;
      min-height: 98px !important;
      margin: 0 auto !important;
      padding: 0 !important;

      display: grid !important;
      grid-template-columns: 364px minmax(0, 1fr) 190px !important;
      align-items: center !important;
      gap: 20px !important;

      overflow: visible !important;
    }

    /* Company whale and logo */
    body .sitewide-unified-header .home-brand {
      width: 364px !important;
      max-width: 100% !important;
      min-width: 0 !important;

      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 0 !important;

      margin: 0 !important;
      padding: 0 !important;

      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
      text-decoration: none !important;
      overflow: visible !important;
      transform: none !important;
    }

    body .sitewide-unified-header .home-brand img {
      display: block !important;
      object-fit: contain !important;
    }

    body .sitewide-unified-header .home-brand-mascot {
      flex: 0 0 74px !important;

      width: 74px !important;
      height: 82px !important;
      max-width: none !important;

      /* Pulls the company name closer to the whale */
      margin-right: -18px !important;

      position: relative !important;
      z-index: 2 !important;
      transform: none !important;
    }

    body .sitewide-unified-header .home-brand-logo {
      flex: 0 0 282px !important;

      width: 282px !important;
      max-width: 282px !important;
      max-height: 88px !important;
      height: auto !important;

      margin: 0 !important;
      position: relative !important;
      z-index: 1 !important;
      transform: none !important;
    }

    /* Main navigation */
    body .sitewide-unified-header .home-nav {
      position: relative !important;
      width: 100% !important;
      min-width: 0 !important;
      justify-self: stretch !important;
      overflow: visible !important;
    }

    body .sitewide-unified-header .home-nav-menu {
      width: 100% !important;

      display: flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      flex-direction: row !important;
      flex-wrap: nowrap !important;

      gap: clamp(13px, 1vw, 20px) !important;

      margin: 0 !important;
      padding: 0 !important;

      list-style: none !important;
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
      overflow: visible !important;
    }

    body .sitewide-unified-header .home-nav-menu > li {
      position: relative !important;
      width: auto !important;
      min-width: auto !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    body .sitewide-unified-header .home-nav-menu > li > a,
    body .sitewide-unified-header .home-services-toggle {
      width: auto !important;
      min-width: 0 !important;
      min-height: 0 !important;

      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;

      padding: 10px 0 !important;

      color: #ffffff !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;

      font-family: "Bebas Neue", "Arial Narrow", Arial, sans-serif !important;
      font-size: clamp(0.72rem, 0.69vw, 0.84rem) !important;
      font-weight: 400 !important;
      line-height: 1 !important;
      letter-spacing: 0.035em !important;

      text-decoration: none !important;
      text-transform: none !important;
      white-space: nowrap !important;
      cursor: pointer !important;
    }

    body .sitewide-unified-header .home-nav-menu > li > a:hover,
    body .sitewide-unified-header .home-nav-menu > li > a.active,
    body .sitewide-unified-header .home-nav-menu > li > a[aria-current="page"],
    body .sitewide-unified-header .home-services-toggle:hover {
      color: #33cfff !important;
      background: transparent !important;
    }

    /* Services arrow */
    body .sitewide-unified-header .home-services-toggle::after {
      content: "" !important;

      width: 7px !important;
      height: 7px !important;

      display: inline-block !important;
      margin: -4px 0 0 8px !important;

      border-top: 0 !important;
      border-left: 0 !important;
      border-right: 2px solid currentColor !important;
      border-bottom: 2px solid currentColor !important;

      transform: rotate(45deg) !important;
    }

    /* Services dropdown */
    body .sitewide-unified-header .home-dropdown-menu {
      position: absolute !important;
      z-index: 6000 !important;

      top: calc(100% + 12px) !important;
      left: 50% !important;
      right: auto !important;

      width: 245px !important;
      max-width: none !important;

      display: block !important;

      margin: 0 !important;
      padding: 10px !important;

      list-style: none !important;
      background: #031126 !important;
      border: 1px solid rgba(51, 207, 255, 0.3) !important;
      border-top: 4px solid #33cfff !important;
      box-shadow: 0 22px 40px rgba(0, 0, 0, 0.28) !important;

      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;

      transform: translateX(-50%) translateY(8px) !important;
      transition:
        opacity 0.2s ease,
        visibility 0.2s ease,
        transform 0.2s ease !important;
    }

    body .sitewide-unified-header .home-nav-dropdown:hover > .home-dropdown-menu,
    body .sitewide-unified-header .home-nav-dropdown:focus-within > .home-dropdown-menu,
    body .sitewide-unified-header .home-nav-dropdown.open > .home-dropdown-menu,
    body .sitewide-unified-header .home-nav-dropdown.is-open > .home-dropdown-menu {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
      transform: translateX(-50%) translateY(0) !important;
    }

    body .sitewide-unified-header .home-dropdown-menu li {
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    body .sitewide-unified-header .home-dropdown-menu a {
      width: 100% !important;
      min-height: 42px !important;

      display: flex !important;
      align-items: center !important;

      padding: 10px 12px !important;

      color: #ffffff !important;
      background: transparent !important;
      border: 0 !important;
      border-left: 3px solid transparent !important;
      border-radius: 0 !important;

      font-family: "Inter", Arial, sans-serif !important;
      font-size: 0.9rem !important;
      font-weight: 700 !important;
      line-height: 1.25 !important;

      text-decoration: none !important;
    }

    body .sitewide-unified-header .home-dropdown-menu a:hover {
      color: #ffffff !important;
      background: rgba(51, 207, 255, 0.12) !important;
      border-left-color: #33cfff !important;
    }

    /* Free-estimate button */
    body .sitewide-unified-header .home-header-cta {
      width: 190px !important;
      min-width: 190px !important;
      min-height: 48px !important;

      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      justify-self: end !important;

      padding: 0 18px !important;

      color: #ffffff !important;
      background: #de0703 !important;
      border: 0 !important;
      border-radius: 4px !important;
      box-shadow: 0 13px 24px rgba(222, 7, 3, 0.28) !important;

      font-family: "Bebas Neue", "Arial Narrow", Arial, sans-serif !important;
      font-size: 0.82rem !important;
      font-weight: 400 !important;
      line-height: 1 !important;
      letter-spacing: 0.035em !important;

      text-align: center !important;
      text-decoration: none !important;
      white-space: nowrap !important;
      transform: none !important;
    }

    body .sitewide-unified-header .home-header-cta:hover {
      color: #ffffff !important;
      background: #f00b08 !important;
      transform: translateY(-2px) !important;
    }

    /* Hide mobile button on desktop */
    body .sitewide-unified-header .home-menu-toggle {
      display: none !important;
    }

    /* =================================================
       SMALLER DESKTOPS
    ================================================= */

    @media (max-width: 1200px) {
      body .sitewide-unified-header .home-header-inner {
        height: 88px !important;
        min-height: 88px !important;
        grid-template-columns: 300px minmax(0, 1fr) 168px !important;
        gap: 14px !important;
      }

      body .sitewide-unified-header .home-brand {
        width: 300px !important;
      }

      body .sitewide-unified-header .home-brand-mascot {
        flex: 0 0 60px !important;
        width: 60px !important;
        height: 68px !important;
        margin-right: -14px !important;
      }

      body .sitewide-unified-header .home-brand-logo {
        flex: 0 0 232px !important;
        width: 232px !important;
        max-width: 232px !important;
        max-height: 78px !important;
        margin: 0 !important;
        transform: none !important;
      }

      body .sitewide-unified-header .home-nav-menu {
        gap: 10px !important;
      }

      body .sitewide-unified-header .home-nav-menu > li > a,
      body .sitewide-unified-header .home-services-toggle {
        font-size: 0.66rem !important;
      }

      body .sitewide-unified-header .home-header-cta {
        width: 168px !important;
        min-width: 168px !important;
        padding: 0 12px !important;
        font-size: 0.74rem !important;
      }
    }

    /* =================================================
       TABLETS AND MOBILE MENU
    ================================================= */

    @media (max-width: 1040px) {
      body .sitewide-unified-header .home-header-inner {
        width: min(760px, calc(100% - 28px)) !important;
        grid-template-columns: minmax(0, 1fr) auto !important;
        gap: 16px !important;
      }

      body .sitewide-unified-header .home-brand {
        width: 300px !important;
      }

      body .sitewide-unified-header .home-header-cta {
        display: none !important;
      }

      body .sitewide-unified-header .home-nav {
        width: auto !important;
        justify-self: end !important;
      }

      body .sitewide-unified-header .home-menu-toggle {
        position: relative !important;
        z-index: 6002 !important;

        width: 44px !important;
        height: 44px !important;

        display: grid !important;
        place-items: center !important;

        color: #ffffff !important;
        background: rgba(255, 255, 255, 0.08) !important;
        border: 1px solid rgba(255, 255, 255, 0.28) !important;
        border-radius: 4px !important;
        cursor: pointer !important;
      }

      body .sitewide-unified-header .home-nav-menu {
        position: fixed !important;
        z-index: 6001 !important;

        top: 88px !important;
        right: 14px !important;
        left: 14px !important;

        width: auto !important;
        max-width: none !important;
        max-height: calc(100dvh - 104px) !important;

        display: none !important;
        flex-direction: column !important;
        align-items: stretch !important;
        justify-content: flex-start !important;

        gap: 4px !important;

        padding: 14px !important;
        overflow-y: auto !important;

        background: #001126 !important;
        border: 1px solid rgba(51, 207, 255, 0.4) !important;
        border-top: 4px solid #33cfff !important;
        box-shadow: 0 24px 46px rgba(0, 0, 0, 0.4) !important;
      }

      body .sitewide-unified-header .home-nav-menu.active,
      body .sitewide-unified-header .home-nav-menu.open,
      body .sitewide-unified-header .home-nav-menu.is-open {
        display: flex !important;
      }

      body .sitewide-unified-header .home-nav-menu > li {
        width: 100% !important;
      }

      body .sitewide-unified-header .home-nav-menu > li > a,
      body .sitewide-unified-header .home-services-toggle {
        width: 100% !important;
        min-height: 48px !important;

        justify-content: flex-start !important;

        padding: 12px 13px !important;

        color: #ffffff !important;
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;

        font-size: 0.92rem !important;
        text-align: left !important;
      }

      body .sitewide-unified-header .home-dropdown-menu {
        position: static !important;

        width: 100% !important;
        max-width: none !important;

        display: none !important;

        margin: 4px 0 0 !important;
        padding: 6px !important;

        background: #092d62 !important;
        border: 0 !important;
        border-left: 3px solid #33cfff !important;
        box-shadow: none !important;

        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
        transform: none !important;
      }

      body .sitewide-unified-header .home-nav-dropdown.open > .home-dropdown-menu,
      body .sitewide-unified-header .home-nav-dropdown.is-open > .home-dropdown-menu {
        display: grid !important;
        grid-template-columns: 1fr !important;
        gap: 4px !important;
      }

      body .sitewide-unified-header .home-dropdown-menu a {
        min-height: 44px !important;
        padding: 10px 12px !important;
      }
    }

    /* =================================================
       PHONES
    ================================================= */

    @media (max-width: 560px) {
      body .sitewide-unified-header .home-header-inner {
        width: calc(100% - 18px) !important;
        height: 72px !important;
        min-height: 72px !important;
        gap: 8px !important;
      }

      body .sitewide-unified-header .home-brand {
        width: 220px !important;
        gap: 0 !important;
      }

      body .sitewide-unified-header .home-brand-mascot {
        flex: 0 0 48px !important;
        width: 48px !important;
        height: 58px !important;

        /* Phone-only spacing between whale and company name */
        margin-left: 0 !important;
        margin-right: 6px !important;

        transform: none !important;
      }

      body .sitewide-unified-header .home-brand-logo {
        flex: 0 0 166px !important;
        width: 166px !important;
        max-width: 166px !important;
        max-height: 62px !important;

        margin: 0 !important;
        transform: none !important;
      }

      body .sitewide-unified-header .home-nav-menu {
        top: 72px !important;
        right: 9px !important;
        left: 9px !important;
        max-height: calc(100dvh - 86px) !important;
      }
    }
  `;

  document.head.appendChild(headerStyle);
})();