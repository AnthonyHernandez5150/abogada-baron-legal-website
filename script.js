const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".nav-link");
const revealItems = document.querySelectorAll("[data-reveal]");
const sections = document.querySelectorAll("main section[id], header[id]");
const yearTarget = document.querySelector("#year");
const portraitCards = document.querySelectorAll(".portrait-card[data-image]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

portraitCards.forEach((card) => {
  const imagePath = card.dataset.image;

  if (!imagePath) {
    return;
  }

  const testImage = new Image();

  testImage.addEventListener("load", () => {
    card.classList.add("has-real-image");
  });

  testImage.src = imagePath;
});

const syncHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const closeMenu = () => {
  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
  body.classList.remove("menu-open");
};

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);
    body.classList.toggle("menu-open", !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 980) {
      closeMenu();
    }
  });
}

document.addEventListener("click", (event) => {
  if (!siteNav || !navToggle) {
    return;
  }

  const clickedInsideNav = siteNav.contains(event.target) || navToggle.contains(event.target);

  if (!clickedInsideNav) {
    closeMenu();
  }
});

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const currentId = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          const matches = link.getAttribute("href") === `#${currentId}`;
          link.classList.toggle("is-active", matches);

          if (matches) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    {
      threshold: 0.5,
      rootMargin: "-25% 0px -45% 0px"
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
