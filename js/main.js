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
  const gridSelector = ".services-grid, .demos-grid, .team-grid";
  const revealEls = Array.from(document.querySelectorAll(".reveal")).filter(
    (el) => !el.closest(gridSelector)
  );
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

    /* Services: cards alternate in from left/right with a slight tilt */
    const servicesGrid = document.querySelector(".services-grid");
    if (servicesGrid) {
      Array.from(servicesGrid.children).forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          { opacity: 0, x: fromLeft ? -50 : 50, rotation: fromLeft ? -3 : 3 },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 0.75,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: servicesGrid, start: "top 85%" },
          }
        );
      });
    }

    /* Demos: cards flip up into place, like a screen powering on */
    const demosGrid = document.querySelector(".demos-grid");
    if (demosGrid) {
      gsap.fromTo(
        demosGrid.children,
        { opacity: 0, y: 60, rotationX: -35, transformPerspective: 800, transformOrigin: "top center" },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: demosGrid, start: "top 85%" },
        }
      );
    }

    /* Team: portraits wipe into view */
    const teamGrid = document.querySelector(".team-grid");
    if (teamGrid) {
      gsap.fromTo(
        teamGrid.children,
        { opacity: 0, y: 24, clipPath: "inset(100% 0% 0% 0%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.9,
          stagger: 0.16,
          ease: "power2.out",
          scrollTrigger: { trigger: teamGrid, start: "top 85%" },
        }
      );
    }

    /* About: copy slides in from the left, orbit visual spins into place */
    const aboutInner = document.querySelector(".about-inner");
    if (aboutInner) {
      gsap.fromTo(
        ".about-text > *",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: aboutInner, start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".orbit-card",
        { opacity: 0, scale: 0.7, rotation: -30 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: aboutInner, start: "top 80%" },
        }
      );
    }

    /* Contact: info slides from the left, the form slides from the right */
    const contactInner = document.querySelector(".contact-inner");
    if (contactInner) {
      gsap.fromTo(
        ".contact-info li",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: contactInner, start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".contact-form .form-row, .contact-form .btn-block",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: contactInner, start: "top 82%" },
        }
      );
    }
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

  /* ---------- Demo videos: hover preview + click for full playback ---------- */
  const isFinePointerForDemos = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  document.querySelectorAll(".demo-media").forEach((media) => {
    const playBtn = media.querySelector(".play-btn");
    const videoSrc = media.dataset.videoSrc;

    if (!videoSrc) {
      playBtn.addEventListener("click", () => {
        playBtn.disabled = true;
        playBtn.style.opacity = "0.4";
        playBtn.setAttribute("aria-label", "Vidéo bientôt disponible");
      });
      return;
    }

    let previewVideo = null;

    if (isFinePointerForDemos && !prefersReducedMotion) {
      media.addEventListener("mouseenter", () => {
        if (!previewVideo) {
          previewVideo = document.createElement("video");
          previewVideo.src = videoSrc;
          previewVideo.muted = true;
          previewVideo.loop = true;
          previewVideo.playsInline = true;
          previewVideo.preload = "metadata";
          previewVideo.classList.add("demo-preview");
          media.insertBefore(previewVideo, playBtn);
        }
        media.classList.add("is-previewing");
        previewVideo.currentTime = 0;
        previewVideo.play().catch(() => {});
      });
      media.addEventListener("mouseleave", () => {
        media.classList.remove("is-previewing");
        if (previewVideo) previewVideo.pause();
      });
    }

    playBtn.addEventListener("click", () => {
      if (previewVideo) previewVideo.remove();
      media.classList.remove("is-previewing");
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

  /* ---------- Rotating wireframe globe (hero background) ---------- */
  const globeCanvas = document.getElementById("heroGlobe");
  if (globeCanvas && globeCanvas.getContext) {
    const ctx = globeCanvas.getContext("2d");
    const DOT_COUNT = 220;
    const TILT = -0.35;
    const LINK_DIST_SQ = 0.28 * 0.28;
    const ACCENT = "232, 197, 114";
    const ACCENT_2 = "201, 158, 72";

    const points = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < DOT_COUNT; i++) {
      const y0 = 1 - (i / (DOT_COUNT - 1)) * 2;
      const r0 = Math.sqrt(Math.max(0, 1 - y0 * y0));
      const theta = golden * i;
      const x0 = Math.cos(theta) * r0;
      const z0 = Math.sin(theta) * r0;
      points.push({
        x: x0,
        y: y0 * Math.cos(TILT) - z0 * Math.sin(TILT),
        z: y0 * Math.sin(TILT) + z0 * Math.cos(TILT),
      });
    }

    const links = [];
    for (let i = 0; i < points.length; i++) {
      let bestJ = -1;
      let bestD = Infinity;
      for (let j = 0; j < points.length; j++) {
        if (i === j) continue;
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        const d = dx * dx + dy * dy + dz * dz;
        if (d < bestD) { bestD = d; bestJ = j; }
      }
      if (bestJ !== -1 && bestD < LINK_DIST_SQ) links.push([i, bestJ]);
    }

    let angle = 0;
    let running = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cssSize = 0;

    const resizeGlobe = () => {
      cssSize = globeCanvas.clientWidth || 400;
      globeCanvas.width = cssSize * dpr;
      globeCanvas.height = cssSize * dpr;
    };
    resizeGlobe();
    window.addEventListener("resize", resizeGlobe);

    const drawGlobe = () => {
      const size = cssSize * dpr;
      const cx = size / 2;
      const cy = size / 2;
      const R = size * 0.42;
      const camDist = 2.6;
      ctx.clearRect(0, 0, size, size);

      const projected = points.map((p) => {
        const x = p.x * Math.cos(angle) + p.z * Math.sin(angle);
        const z = -p.x * Math.sin(angle) + p.z * Math.cos(angle);
        const scale = camDist / (camDist - z);
        return { sx: cx + x * R * scale, sy: cy + p.y * R * scale, z, scale };
      });

      links.forEach(([i, j]) => {
        const a = projected[i];
        const b = projected[j];
        const avgZ = (a.z + b.z) / 2;
        if (avgZ < -0.15) return;
        ctx.strokeStyle = `rgba(${ACCENT_2}, ${Math.max(0, (avgZ + 1) / 2) * 0.35})`;
        ctx.lineWidth = Math.max(1, dpr * 0.6);
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b.sx, b.sy);
        ctx.stroke();
      });

      projected.forEach((p) => {
        const alpha = Math.max(0.12, Math.min(1, (p.z + 1) / 2));
        const dotR = Math.max(0.8, dpr * 1.4 * p.scale);
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.z > 0.4 ? ACCENT : ACCENT_2}, ${alpha})`;
        ctx.arc(p.sx, p.sy, dotR, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const loopGlobe = () => {
      if (!running) return;
      angle += 0.0022;
      drawGlobe();
      requestAnimationFrame(loopGlobe);
    };

    if (prefersReducedMotion) {
      drawGlobe();
    } else {
      running = true;
      requestAnimationFrame(loopGlobe);
      document.addEventListener("visibilitychange", () => {
        running = document.visibilityState === "visible";
        if (running) requestAnimationFrame(loopGlobe);
      });
    }
  }

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
