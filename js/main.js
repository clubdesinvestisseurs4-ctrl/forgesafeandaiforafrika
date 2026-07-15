(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ---------- Smooth scroll (Lenis) ---------- */
  let lenis = null;
  if (!prefersReducedMotion && typeof window.Lenis !== "undefined") {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      if (hasGSAP && window.ScrollTrigger) ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  /* ---------- Header scroll state + progress bar ---------- */
  const header = document.getElementById("header");
  const progressBar = document.getElementById("progressBar");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progressBar.style.width = pct + "%";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("main-nav");
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Hero headline reveal ---------- */
  const heroTitle = document.querySelector(".hero-title");
  requestAnimationFrame(() => {
    setTimeout(() => heroTitle.classList.add("is-revealed"), 50);
  });

  /* ---------- Scroll reveal (GSAP if available, IO fallback) ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (!prefersReducedMotion && hasGSAP && window.ScrollTrigger) {
    revealEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        }
      );
    });
    document.querySelectorAll(".services-grid, .demos-grid, .team-grid").forEach((grid) => {
      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 36, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 85%" },
        }
      );
    });
  } else if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Animated stat counters ---------- */
  const counters = document.querySelectorAll(".stat-num");
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  } else {
    counters.forEach(animateCounter);
  }

  /* ---------- Lazy-loaded demo videos ---------- */
  document.querySelectorAll(".demo-media").forEach((media) => {
    const playBtn = media.querySelector(".play-btn");
    const videoSrc = media.dataset.videoSrc;

    playBtn.addEventListener("click", () => {
      if (!videoSrc) {
        playBtn.disabled = true;
        playBtn.style.opacity = "0.4";
        playBtn.setAttribute("aria-label", "Vidéo bientôt disponible");
        return;
      }
      const video = document.createElement("video");
      video.src = videoSrc;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      media.querySelector(".demo-poster").remove();
      playBtn.remove();
      media.appendChild(video);
    });
  });

  /* ---------- Contact form (client-side placeholder) ---------- */
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      formNote.textContent = "Merci de remplir tous les champs requis.";
      return;
    }
    // NOTE: brancher ici un service d'envoi (Formspree, EmailJS, backend maison, ...).
    formNote.textContent = "Merci, votre message a bien été préparé. Configurez un service d'envoi pour le transmettre réellement.";
    contactForm.reset();
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Custom cursor (fine pointer only) ---------- */
  const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (isFinePointer && !prefersReducedMotion) {
    const cursorDot = document.getElementById("cursorDot");
    const cursorRing = document.getElementById("cursorRing");
    let mx = 0, my = 0, rx = 0, ry = 0;

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      document.documentElement.classList.add("has-custom-cursor");
      cursorDot.style.opacity = "1";
      cursorRing.style.opacity = "1";
      cursorDot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    }, { passive: true });

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      cursorRing.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    document.querySelectorAll("a, button, .spotlight").forEach((el) => {
      el.addEventListener("mouseenter", () => cursorRing.classList.add("is-active"));
      el.addEventListener("mouseleave", () => cursorRing.classList.remove("is-active"));
    });
  }

  /* ---------- Magnetic buttons ---------- */
  if (isFinePointer && !prefersReducedMotion) {
    document.querySelectorAll(".magnetic").forEach((btn) => {
      const inner = btn.querySelector("span");
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${relX * 0.18}px, ${relY * 0.35}px)`;
        if (inner) inner.style.transform = `translate(${relX * 0.12}px, ${relY * 0.2}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
        if (inner) inner.style.transform = "";
      });
    });
  }

  /* ---------- Spotlight card hover tracking ---------- */
  document.querySelectorAll(".spotlight").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  /* ---------- Hero grid parallax ---------- */
  const gridLines = document.getElementById("gridLines");
  if (isFinePointer && gridLines && !prefersReducedMotion) {
    document.querySelector(".hero").addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gridLines.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
})();
