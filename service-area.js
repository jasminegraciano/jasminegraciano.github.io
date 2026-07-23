const serviceAreaLocations = [
  {
    slug: "waterford",
    town: "Waterford",
    image: "photos/Exterior painting service in Waterford CT.png",
    alt: "Exterior painting project in Waterford Connecticut",
    services: ["exterior"],
    description: "Exterior painting and careful surface preparation for Waterford homes near the shoreline."
  },
  {
    slug: "mystic",
    town: "Mystic",
    image: "photos/Exterior painting services in Mystic, CT. We restored this historic home in Mystic Connecticut.png",
    alt: "Historic home exterior restoration in Mystic Connecticut",
    services: ["exterior", "powerwash"],
    description: "Historic-home restoration, exterior painting, deck cleaning, and soft washing in the Mystic area."
  },
  {
    slug: "pawcatuck",
    town: "Pawcatuck",
    image: "photos/Exterior House Painting, Pawcatuck, CT.png",
    alt: "Exterior house painting in Pawcatuck Connecticut",
    services: ["exterior"],
    description: "Residential exterior painting with a clear plan for access, protection, preparation, and finish coats."
  },
  {
    slug: "essex",
    town: "Essex",
    image: "photos/Exterior painting service in Essex CT.png",
    alt: "Exterior painting service in Essex Connecticut",
    services: ["exterior"],
    description: "Exterior painting that respects the architecture, landscaping, and daily use of the property."
  },
  {
    slug: "montville",
    town: "Montville",
    image: "ServicePhotos/Exterior Painting service Connecticut. After.png",
    alt: "Completed Connecticut exterior painting project representative of Montville service coverage",
    services: ["exterior", "interior", "powerwash"],
    description: "Painting, deck care, and property cleaning are available in Montville and nearby communities."
  },
  {
    slug: "uncasville",
    town: "Uncasville",
    image: "photos/Commercial power washing in Uncasville CT.png",
    alt: "Commercial power washing project in Uncasville Connecticut",
    services: ["commercial", "powerwash"],
    description: "Commercial power washing for building exteriors, entry areas, concrete, and high-access surfaces."
  },
  {
    slug: "colchester",
    town: "Colchester",
    image: "photos/Interior painting service. Prepping the interior of this House for painting in Colchester CT.png",
    alt: "Interior painting preparation in Colchester Connecticut",
    services: ["interior"],
    description: "Interior painting built around floor protection, wall preparation, trim detail, and clean finishes."
  },
  {
    slug: "north-stonington",
    town: "North Stonington",
    image: "photos/Exterior House Painting Service, North Stonington, CT.png",
    alt: "Exterior house painting in North Stonington Connecticut",
    services: ["exterior"],
    description: "Exterior house painting with weather-aware scheduling and surface-specific preparation."
  },
  {
    slug: "ledyard",
    town: "Ledyard",
    image: "photos/Power washing in Ledyard CT. Before and after.png",
    alt: "Power washing before and after in Ledyard Connecticut",
    services: ["powerwash", "exterior"],
    description: "Local house washing, exterior painting, pool patio cleaning, and wood restoration services."
  },
  {
    slug: "groton",
    town: "Groton",
    image: "photos/Complete interior painting of a garage in Groton Eastern Point Beach area.png",
    alt: "Complete garage interior painting in Groton Connecticut",
    services: ["interior", "powerwash"],
    description: "Interior painting and exterior cleaning for Groton homes, garages, fences, and coastal properties."
  },
  {
    slug: "east-lyme",
    town: "East Lyme",
    image: "photos/House washing in East Lyme Connecticut. Before and after.png",
    alt: "House washing before and after in East Lyme Connecticut",
    services: ["powerwash", "exterior"],
    description: "House washing and exterior painting that refresh siding while protecting nearby property."
  },
  {
    slug: "old-saybrook",
    town: "Old Saybrook",
    image: "photos/Interior painting service in Old Saybrook CT.png",
    alt: "Interior painting service in Old Saybrook Connecticut",
    services: ["interior", "exterior"],
    description: "Interior and exterior painting for occupied homes, detailed trim, and shoreline properties."
  },
  {
    slug: "old-lyme",
    town: "Old Lyme",
    image: "photos/Roof treatment and soft washing, old Lyme, CT.png",
    alt: "Roof treatment and soft washing in Old Lyme Connecticut",
    services: ["powerwash", "exterior"],
    description: "Roof treatment, stone cleaning, exterior painting, and soft washing for Old Lyme properties."
  },
  {
    slug: "griswold",
    town: "Griswold",
    image: "ServicePhotos/Cabinet Painting service in Connecticut. after.png",
    alt: "Completed Connecticut cabinet painting project representative of Griswold service coverage",
    services: ["interior", "exterior"],
    description: "Interior, cabinet, and exterior painting are available in Griswold and surrounding communities."
  },
  {
    slug: "new-london",
    town: "New London",
    image: "photos/Exterior painting and restoration services in New London CT. We completely restored the exterior of this historic home in New London CT.png",
    alt: "Historic exterior painting and restoration in New London Connecticut",
    services: ["exterior", "commercial", "powerwash"],
    description: "Historic restoration, commercial cleaning, concrete washing, and complete exterior painting."
  },
  {
    slug: "stonington",
    town: "Stonington",
    image: "photos/Exterior Painting service. Before and after of a house we painted in Stonington CT.png",
    alt: "Exterior house painting before and after in Stonington Connecticut",
    services: ["exterior", "powerwash"],
    description: "Exterior painting, cedar treatment, blue-stone cleaning, and soft washing in Stonington."
  },
  {
    slug: "salem",
    town: "Salem",
    image: "photos/Interior painting services in Salem CT. We prepped and painted the foyer of this interior in Salem.png",
    alt: "Interior foyer painting in Salem Connecticut",
    services: ["interior", "exterior"],
    description: "Interior foyer preparation and painting, plus exterior house painting for Salem homeowners."
  },
  {
    slug: "bozrah",
    town: "Bozrah",
    image: "ServicePhotos/Ipe deck Staining Staining, Connecticut. After.png",
    alt: "Completed Connecticut deck staining project representative of Bozrah service coverage",
    services: ["exterior", "powerwash"],
    description: "Exterior painting, deck staining, and power washing are available in Bozrah and nearby towns."
  }
];

const serviceLabels = {
  exterior: "Exterior Painting",
  interior: "Interior Painting",
  powerwash: "Power Washing",
  commercial: "Commercial"
};

const locationGrid = document.getElementById("locationGrid");
const areaStatus = document.getElementById("areaStatus");
const areaSearch = document.getElementById("areaSearch");
const areaFilters = [...document.querySelectorAll(".area-filter")];
let selectedService = "all";

function connectMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu || toggle.dataset.areaMenuReady === "true") return;

  toggle.dataset.areaMenuReady = "true";
  toggle.addEventListener("click", () => {
    const willOpen = !menu.classList.contains("open");
    menu.classList.toggle("open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
    toggle.setAttribute("aria-label", willOpen ? "Close menu" : "Open menu");
  });

  const dropdown = menu.querySelector(".has-dropdown");
  const trigger = dropdown?.querySelector(".dropdown-trigger");
  trigger?.addEventListener("click", (event) => {
    if (!window.matchMedia("(max-width: 820px)").matches) return;
    event.preventDefault();
    dropdown.classList.toggle("open");
  });
}

function locationCard(location) {
  const tags = location.services
    .map((service) => `<span class="location-tag">${serviceLabels[service]}</span>`)
    .join("");

  return `
    <article class="location-card" id="${location.slug}" data-services="${location.services.join(" ")}">
      <div class="location-media">
        <img src="${encodeURI(location.image)}" alt="${location.alt}" loading="lazy" decoding="async" />
      </div>
      <div class="location-body">
        <span class="location-kicker">Serving ${location.town}, Connecticut</span>
        <h3>${location.town} painting and property care</h3>
        <p>${location.description}</p>
        <div class="location-tags">${tags}</div>
        <a class="location-link" href="contact.html#estimate-request">Request a ${location.town} estimate</a>
      </div>
    </article>`;
}

function renderLocations() {
  const query = areaSearch.value.trim().toLowerCase();
  const matches = serviceAreaLocations.filter((location) => {
    const matchesService = selectedService === "all" || location.services.includes(selectedService);
    const searchable = `${location.town} ${location.description} ${location.services.map((service) => serviceLabels[service]).join(" ")}`.toLowerCase();
    return matchesService && searchable.includes(query);
  });

  locationGrid.innerHTML = matches.length
    ? matches.map(locationCard).join("")
    : `<p class="area-empty">No exact match yet. Try another service or call to confirm coverage in your town.</p>`;

  areaStatus.textContent = matches.length === serviceAreaLocations.length
    ? `Showing all ${matches.length} service areas.`
    : `Showing ${matches.length} of ${serviceAreaLocations.length} service areas.`;
}

function focusHashLocation() {
  const slug = window.location.hash.slice(1);
  if (!slug) return;
  const target = document.getElementById(slug);
  if (!target) return;
  target.classList.add("is-targeted");
  window.requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
}

areaFilters.forEach((button) => {
  button.addEventListener("click", () => {
    selectedService = button.dataset.service;
    areaFilters.forEach((filter) => filter.classList.toggle("active", filter === button));
    renderLocations();
  });
});

areaSearch.addEventListener("input", renderLocations);
window.addEventListener("hashchange", focusHashLocation);

connectMobileMenu();
renderLocations();
focusHashLocation();
