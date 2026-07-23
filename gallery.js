(() => {
  const transformations = [
    {
      title: "Exterior repaint in Connecticut",
      category: "Exterior painting",
      before: "ServicePhotos/Exterior Painting Service CT. before.png",
      after: "ServicePhotos/Exterior Painting service Connecticut. After.png"
    },
    {
      title: "Interior room transformation",
      category: "Interior painting",
      before: "ServicePhotos/Inteior Painting Service. Connecticut. Before.png",
      after: "ServicePhotos/Inteior Painting Service. Connecticut. After.png"
    },
    {
      title: "Cabinet finish refresh",
      category: "Cabinet painting",
      before: "ServicePhotos/Cabinet Painting service in Connecticut. Before.png",
      after: "ServicePhotos/Cabinet Painting service in Connecticut. after.png"
    },
    {
      title: "Ipe deck restoration",
      category: "Deck staining",
      before: "ServicePhotos/Ipe Deck Staining, Connecticut. Before.png",
      after: "ServicePhotos/Ipe deck Staining Staining, Connecticut. After.png"
    },
    {
      title: "Commercial interior finish",
      category: "Commercial painting",
      before: "ServicePhotos/Commercial painting service in Connecticut. Interior During.png",
      after: "ServicePhotos/Commercial painting services in Connecticut. After..png"
    }
  ];

  const projectFiles = [
    "Exterior painting service in Old Lyme CT.png",
    "Exterior House Painting Service, Mystic, CT.png",
    "Bluestone pressure cleaning restoration. Stonington, CT. Before and after.png",
    "Exterior painting and restoration services in New London CT. We completely restored the exterior of this historic home in New London CT.png",
    "Exterior house prepping get in this House ready for painting and Noank CT.png",
    "Pressure Washing Deck in Mystic CT.png",
    "Interior painting services in Salem CT. We prepped and painted the foyer of this interior in Salem.png",
    "Cedar treatment Soft wash restoration. Stonington, CT.png",
    "Roof treatment and soft washing, old Lyme, CT.png",
    "Interior painting service in Salem CT.png",
    "Staircase Painting Services. Westerly, RI.png",
    "Cedar restoration and Soft wash. Westerly, RI.png",
    "Pool patio cleaning and surface washing in Ledyard CT.png",
    "Interior painting service in Old Saybrook CT.png",
    "Interior trim painting in Niantic, Connecticut.png",
    "Exterior painting service in Essex CT.png",
    "Exterior painting in Ledyard CT. We treated and brightened this wood by soft washing it and we applied a stain coating on all the siding and trim. We stripped the wooden ceiling and applied two coats of polyurethane.png",
    "Before and after of a house we painted in westerly, RI. Professional painting services.png",
    "Washing a house in Jewett City before we start any painting.png",
    "House washing, East Lyme, CT.png",
    "House washing in East Lyme Connecticut. Before and after.png",
    "House soft wash, niantic, CT.png",
    "Exterior Commercial Painting Services. Apartment Complex Painting Services in Connecticut.png",
    "Bluestone restoration and power washing.png",
    "Exterior painting services in old Black point, niantic, CT. We completely restored the exterior of this beach house. We pressure cleaned all the cedar siding with the soft wash. And then we applied a bleaching stain on all of the cedar.png",
    "Cedar restoration and soft wash cleaning. Westerly, RI.png",
    "Interior Restoration and painting Services. We stripped the popcorn off the ceiling and prepared it We primed and finished painted two coats in this hallway.png",
    "Exterior House Painting, Lyme, CT.png",
    "Interior house painting in Stonington CT.png",
    "Ipe Deck treatment in Pressure wash cleaning.png",
    "Cedar restoration and soft wash cleaning.png",
    "Exterior House Painting, Stonington, CT.png",
    "Exterior House Painting, East Lyme, CT.png",
    "Soft washing a boathouse in Stonington CT.png",
    "Exterior House Painting Service, North Stonington, CT.png",
    "Exterior House Painting, Pawcatuck, CT.png",
    "Wood fence restoration and pressure cleaning. Cleaning lichen and mildew off a wood fence.png",
    "Exterior painting services in Mystic, CT. We restored this historic home in Mystic Connecticut.png",
    "Pressure clean A stone fireplace on a patio. This power washing service took place in Old Lyme Connecticut.png",
    "Cedar restoration Services. We applied a treatment and soft wash the cedar siding of this House.png",
    "House soft washing in Ledyard CT. The softwash team is doing an excellent job treating in soft washing this vinyl siding house.png",
    "Pressure washing front concrete patio and walkway.png",
    "Interior painting services in Niantic, CT. We primed all the trim repaired the ceilings and then we also painted the trim with Benjamin Moore Regal Select.png",
    "Exterior house painting service in Westerly, Rhode Island. Before and after.png",
    "Exterior House Painting, Westerly, CT.png",
    "Exterior house painting service in East lyme Connecticut.png",
    "Pressure cleaning A pergola removing the lichen and the mold and mildew that was building up. This job was in Stonington CT.png",
    "Interior painting service in westerly, RI. We primed the ceiling with an oil based primer and finished it with a Benjamin Moore sealing paint.png",
    "Exterior Painting service. Before and after of a house we painted in Stonington CT.png",
    "Exterior house painting service in Old Lyme CT.png",
    "Exterior painting contractor in old Lyon CT. Before and after of this older home being restored.png",
    "House washing in Norwich CT.png",
    "Painting the staircase of a house in Norwich CT. We primed the kick boards re them and finish painting them with a semi gloss. The stair threads we stained with a dark stained and finished it with a polyurethane.png",
    "Exterior House Painting, Pawcatuck, CT (3).png",
    "Interior painting service. Prepping the interior of this House for painting in Colchester CT.png",
    "House washing and walkway pressure.png",
    "Deck cleaning. We restored this deck by treating it with a wood brightener and washing it.png",
    "Exterior House Painting service, Salem, CT.png",
    "Bluestone Restoration. Old Lyme, ct. The powder wash technician is using a surface cleaner to safely clean Bluestone.png",
    "Stamped concrete pressure cleaning.png",
    "Exterior House Painting, North Stonington, CT.png",
    "Exterior House Painting, Pawcatuck, CT (2).png",
    "Pressure washing and house painting service in old Black point, niantic, CT. We wash this mahogany deck and later on we added a stain to preserve it.png",
    "Cedar wood ce wood brightener and restoration, soft Washing in Charlestown, rhode Island.png",
    "Concrete pressure washing Norwich CT, before and after.png",
    "Pressure clean brick walkway. Noank, Connecticut.png",
    "Gutter brightening service in Connecticut. before and after.png",
    "Pressure cleaning stamped concrete. Norwich CT.png",
    "Power washing in Ledyard CT. Before and after.png",
    "Complete interior painting of a garage in Groton Eastern Point Beach area.png",
    "Deck cleaning and restoration, Mystic, CT. Before and after.png",
    "Vinyl fence treatment and soft wash in Groton CT.png",
    "Complete exterior cleaning. Roof treatment and soft wash gutter brightening and complete house wash service in Charlestown RI.png",
    "Exterior House Painting, Jewett City, CT.png",
    "Commercial power washing in Uncasville CT.png",
    "Weathered wood soft wash cleaning and restoration.png",
    "Exterior House Painting Service, in Old Saybrook, CT.png",
    "Exterior painting service in Waterford CT.png",
    "Commercial concrete floor pressure cleaning. MJ Sullivan auto dealership in New London CT.png"
  ];

  const labels = {
    exterior: "Exterior Painting",
    interior: "Interior Painting",
    powerwash: "Power Washing",
    wood: "Decks & Wood",
    commercial: "Commercial"
  };

  const categoryFallbacks = {
    exterior: "Exterior preparation and finish work completed by the Connecticut House Painters team.",
    interior: "Interior preparation and painting completed with careful protection of the surrounding space.",
    powerwash: "Professional exterior cleaning selected for the material and condition of the surface.",
    wood: "Wood cleaning, restoration, staining, or protective finish work.",
    commercial: "Commercial painting or cleaning completed with attention to access, scheduling, and property care."
  };

  const categorize = (filename) => {
    const value = filename.toLowerCase();
    if (value.includes("commercial")) return "commercial";
    if (value.includes("exterior") || value.startsWith("before and after of a house")) return "exterior";
    if (/(interior|staircase|garage|cabinet|popcorn|ceiling)/.test(value)) return "interior";
    if (/(deck|ipe|cedar|wood fence|wood brightener|weathered wood|mahogany)/.test(value)) return "wood";
    return "powerwash";
  };

  const cleanText = (value) => value
    .replace(/\.png$/i, "")
    .replace(/\bInteior\b/gi, "Interior")
    .replace(/\bStaining Staining\b/gi, "Staining")
    .replace(/\bold Lyon\b/gi, "Old Lyme")
    .replace(/\bce wood\b/gi, "and wood")
    .replace(/\bget in this House\b/gi, "getting this house")
    .replace(/\bare recent\b/gi, "our recent")
    .replace(/\s+/g, " ")
    .trim();

  const buildProject = (filename, index) => {
    const cleaned = cleanText(filename);
    const sentences = cleaned.split(/\.\s+/).filter(Boolean);
    const category = categorize(filename);
    const title = sentences[0].replace(/\.$/, "");
    const detail = sentences.slice(1).join(". ").replace(/\.$/, "");

    return {
      id: index,
      src: `photos/${filename}`,
      category,
      label: labels[category],
      title,
      description: detail ? `${detail}.` : categoryFallbacks[category]
    };
  };

  const projects = projectFiles.map(buildProject);
  const comparisonGrid = document.getElementById("comparisonGrid");
  const projectGrid = document.getElementById("projectGrid");
  const filterButtons = [...document.querySelectorAll(".gallery-filter")];
  const loadMoreButton = document.getElementById("loadMore");
  const loadMoreWrap = loadMoreButton?.closest(".gallery-more-wrap");
  const galleryStatus = document.getElementById("galleryStatus");
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCategory = document.getElementById("lightboxCategory");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDescription = document.getElementById("lightboxDescription");
  let activeFilter = "all";
  let visibleCount = 12;
  let activeProjects = projects;
  let activeLightboxIndex = 0;

  const safeSrc = (src) => encodeURI(src);

  const renderComparisons = () => {
    if (!comparisonGrid) return;

    comparisonGrid.innerHTML = transformations.map((item) => `
      <article class="comparison-card">
        <div class="comparison-view">
          <img src="${safeSrc(item.before)}" alt="${item.title} before service" loading="lazy" />
          <img class="comparison-after" src="${safeSrc(item.after)}" alt="${item.title} after service" loading="lazy" />
          <span class="comparison-label comparison-label-before">Before</span>
          <span class="comparison-label comparison-label-after">After</span>
          <span class="comparison-divider" aria-hidden="true"></span>
          <input class="comparison-range" type="range" min="0" max="100" value="50" aria-label="Compare before and after for ${item.title}" />
        </div>
        <div class="comparison-caption">
          <span>${item.category}</span>
          <h3>${item.title}</h3>
        </div>
      </article>
    `).join("");

    comparisonGrid.querySelectorAll(".comparison-range").forEach((range) => {
      range.addEventListener("input", () => {
        range.closest(".comparison-view").style.setProperty("--position", `${range.value}%`);
      });
    });
  };

  const renderProjects = () => {
    if (!projectGrid) return;

    activeProjects = activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

    const shownProjects = activeProjects.slice(0, visibleCount);
    projectGrid.innerHTML = shownProjects.map((project) => `
      <article class="project-card" data-project-id="${project.id}">
        <button type="button" aria-label="Open ${project.title}">
          <div class="project-image-wrap">
            <img src="${safeSrc(project.src)}" alt="${project.title}" loading="lazy" />
          </div>
          <div class="project-copy">
            <span class="project-category">${project.label}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        </button>
      </article>
    `).join("");

    projectGrid.querySelectorAll(".project-card button").forEach((button) => {
      button.addEventListener("click", () => {
        const id = Number(button.closest(".project-card").dataset.projectId);
        const project = projects.find((item) => item.id === id);
        const filteredIndex = activeProjects.findIndex((item) => item.id === id);
        if (project && filteredIndex >= 0) openLightbox(filteredIndex);
      });
    });

    if (galleryStatus) {
      const filterName = activeFilter === "all" ? "all services" : labels[activeFilter].toLowerCase();
      galleryStatus.textContent = `Showing ${shownProjects.length} of ${activeProjects.length} projects in ${filterName}.`;
    }

    if (loadMoreWrap) {
      loadMoreWrap.hidden = shownProjects.length >= activeProjects.length;
    }
  };

  const updateLightbox = () => {
    const project = activeProjects[activeLightboxIndex];
    if (!project) return;

    lightboxImage.src = safeSrc(project.src);
    lightboxImage.alt = project.title;
    lightboxCategory.textContent = project.label;
    lightboxTitle.textContent = project.title;
    lightboxDescription.textContent = project.description;
  };

  function openLightbox(index) {
    if (!lightbox) return;
    activeLightboxIndex = index;
    updateLightbox();
    lightbox.showModal();
  }

  const moveLightbox = (direction) => {
    if (!activeProjects.length) return;
    activeLightboxIndex = (activeLightboxIndex + direction + activeProjects.length) % activeProjects.length;
    updateLightbox();
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      visibleCount = 12;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderProjects();
    });
  });

  loadMoreButton?.addEventListener("click", () => {
    visibleCount += 9;
    renderProjects();
  });

  document.getElementById("lightboxClose")?.addEventListener("click", () => lightbox.close());
  document.getElementById("lightboxPrev")?.addEventListener("click", () => moveLightbox(-1));
  document.getElementById("lightboxNext")?.addEventListener("click", () => moveLightbox(1));

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox?.open) return;
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  menuToggle?.addEventListener("click", () => {
    navMenu?.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(navMenu?.classList.contains("active")));
  });

  renderComparisons();
  renderProjects();
})();
