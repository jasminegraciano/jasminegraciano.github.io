(() => {
  const fullPageReviews = new Map([
    ["commercial.html", "commercial"],
    ["powerwash.html", "powerwash"],
    ["exterior.html", "exterior"],
    ["interior.html", "interior"]
  ]);

  const filename = window.location.pathname.split("/").pop() || "index.html";
  const socialLinks = {
    instagram: "https://www.instagram.com/connecticut_house_painters",
    facebook: "https://www.facebook.com/connecticuthousepainters?mibextid=wwXIfr&rdid=7ResKtqcpbShjk02&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BfkBU2T57%2F%3Fmibextid%3DwwXIfr#"
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
      ["contact.html", "Contact Us", "contact"],
      ["testimonials.html", "Testimonials", "testimonials"],
      ["galleries.html", "Galleries", "galleries"],
      ["interior.html", "Interior Painting", "interior"],
      ["exterior.html", "Exterior Painting", "exterior"],
      ["commercial.html", "Commercial Painting", "commercial"],
      ["powerwash.html", "Power Washing", "powerwash"],
      ["service.html", "Service Area", "service"]
    ];
    const serviceAreas = [
      ["waterford", "Waterford"],
      ["mystic", "Mystic"],
      ["pawcatuck", "Pawcatuck"],
      ["essex", "Essex"],
      ["montville", "Montville"],
      ["uncasville", "Uncasville"],
      ["colchester", "Colchester"],
      ["north-stonington", "North Stonington"],
      ["ledyard", "Ledyard"],
      ["groton", "Groton"],
      ["east-lyme", "East Lyme"],
      ["old-saybrook", "Old Saybrook"],
      ["old-lyme", "Old Lyme"],
      ["griswold", "Griswold"],
      ["new-london", "New London"],
      ["stonington", "Stonington"],
      ["salem", "Salem"],
      ["bozrah", "Bozrah"]
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
      ["exterior.html", "exterior"],
      ["exterior2.html", "exterior"],
      ["commercial.html", "commercial"],
      ["commercial2.html", "commercial"],
      ["commerical.html", "commercial"],
      ["powerwash.html", "powerwash"],
      ["service.html", "service"]
    ]);
    const activeSection = activeSections.get(filename);
    const serviceAreaLinks = serviceAreas.map(([slug, town]) => `
      <li><a href="service.html#${slug}">${town} CT House Painters</a></li>
    `).join("");
    const links = navigation.map(([href, label, section]) => {
      const active = section === activeSection;
      if (section === "service") {
        return `
          <li class="has-dropdown sitewide-service-dropdown">
            <a href="${href}" class="dropdown-trigger${active ? " active" : ""}"${active ? ' aria-current="page"' : ""} aria-haspopup="true">${label}</a>
            <ul class="service-area-menu" aria-label="Service area locations">
              ${serviceAreaLinks}
            </ul>
          </li>
        `;
      }

      return `
        <li>
          <a href="${href}"${active ? ' class="active" aria-current="page"' : ""}>${label}</a>
        </li>
      `;
    }).join("");

    const unifiedHeader = document.createElement("div");
    unifiedHeader.className = "site-header sitewide-unified-header";
    unifiedHeader.innerHTML = `
      <div class="topbar">
        <div class="sitewide-header-inner topbar-grid">
          <strong class="topbar-brand">Connecticut House Painters LLC and Power Washing</strong>
          <div class="topbar-contact">
            <a class="topbar-item office" href="tel:8608798222">
              <span class="topbar-label">Office</span>
              <span>(860) 879-8222</span>
            </a>
            <a class="topbar-item cell" href="tel:8605145335">
              <span class="topbar-label">Cell</span>
              <span>860-514-5335</span>
            </a>
            <span class="topbar-item location">Ledyard, CT</span>
          </div>
        </div>
      </div>
      <header class="nav-shell">
        <div class="sitewide-header-inner header-grid">
          <a class="brand" href="index.html" aria-label="Connecticut House Painters home">
            <img src="images/Mainlogo.png" alt="Connecticut House Painters LLC and Power Washing" />
          </a>
          <nav aria-label="Primary navigation">
            <button class="menu-toggle sitewide-menu-toggle" type="button" aria-label="Open menu" aria-controls="sitewide-primary-menu" aria-expanded="false">
              <span></span>
            </button>
            <ul class="nav-menu" id="sitewide-primary-menu">
              ${links}
            </ul>
          </nav>
        </div>
      </header>
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
            <a href="interior2.html#cabinet-painting-detail-title">
              <span class="sitewide-icon-shell additional-service-icon" aria-hidden="true"><img src="${icons.cabinet}" alt="" loading="lazy" decoding="async"></span>
              <span><strong>Cabinet Painting</strong><small>Durable kitchen and built-in finishes</small></span>
            </a>
            <a href="exterior2.html#deck-staining-detail-title">
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
  }

  function addEstimateStrip() {
    if (filename === "index.html" || filename === "contact.html") return;

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
      const isOpen = menu.classList.contains("open") || menu.classList.contains("active");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    };

    if (toggle.classList.contains("sitewide-menu-toggle")) {
      toggle.addEventListener("click", () => {
        const willOpen = !menu.classList.contains("open");
        menu.classList.toggle("open", willOpen);
        syncMenuState();
      });
    }

    const dropdowns = [...menu.querySelectorAll(".has-dropdown")];
    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector(".dropdown-trigger");
      const panel = dropdown.querySelector(".service-area-menu");
      if (!trigger || !panel || trigger.dataset.sitewideDropdownReady === "true") return;

      trigger.dataset.sitewideDropdownReady = "true";
      trigger.setAttribute("aria-expanded", "false");

      trigger.addEventListener("click", (event) => {
        if (!window.matchMedia("(max-width: 820px)").matches) return;
        event.preventDefault();
        const willOpen = !dropdown.classList.contains("open");
        dropdowns.forEach((item) => item.classList.toggle("open", item === dropdown && willOpen));
        trigger.setAttribute("aria-expanded", String(willOpen));
      });

      panel.addEventListener("click", () => {
        dropdown.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
        menu.classList.remove("open", "active");
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
        </div>
      </div>
    `;
    footer.before(section);
  }

  function connectServiceAreaLinks() {
    document.querySelectorAll(".dropdown-trigger").forEach((link) => {
      link.href = "service.html";
    });

    document.querySelectorAll(".service-area-menu a").forEach((link) => {
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
  addCompactReviewSection();
  addEstimateStrip();
  addScrollProgress();
  connectServiceAreaLinks();
  normalizeMobileNavigation();
  addSocialLinks();
  addBackToTopButton();
  addMotionEnhancements();
})();
