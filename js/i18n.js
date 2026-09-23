(() => {
  "use strict";

  const STORAGE_KEY = "forgesafe-lang";
  const ANGLOPHONE_COUNTRIES = ["GB", "US", "CA", "AU", "NZ", "IE"];

  const dict = {
    fr: {
      "meta.title": "ForgeSafe & AI for Africa | Systèmes de gestion, Cybersécurité, Consultance digitale",
      "meta.description": "ForgeSafe & AI for Africa accompagne les entreprises africaines avec des systèmes de gestion d'activités, des audits de cybersécurité et de la consultance digitale sur mesure.",

      "nav.services": "Services",
      "nav.demos": "Démonstrations",
      "nav.about": "À propos",
      "nav.team": "Équipe",
      "nav.contact": "Contact",
      "nav.cta": "Discutons de votre projet",
      "nav.toggle.open": "Ouvrir le menu",
      "nav.toggle.close": "Fermer le menu",

      "hero.eyebrow": "gestion · cybersécurité · ia · consultance",
      "hero.title.l1": "Nous bâtissons les systèmes",
      "hero.title.l2": "numériques qui font avancer",
      "hero.title.l3": "l'Afrique.",
      "hero.lead": "ForgeSafe & AI for Africa conçoit vos outils de gestion, sécurise votre infrastructure et vous accompagne dans votre transformation digitale. Pas de solution toute faite : on part de ce qui existe déjà chez vous.",
      "hero.cta.primary": "Voir nos démonstrations",
      "hero.cta.secondary": "Demander un audit gratuit",
      "hero.stat1": "pôles d'expertise",
      "hero.stat2": "solutions sur mesure",
      "hero.stat3": "support & suivi",
      "hero.scroll": "Défiler",

      "marquee.1": "Gestion d'activités",
      "marquee.2": "Cybersécurité",
      "marquee.3": "Intelligence artificielle",
      "marquee.4": "Consultance digitale",
      "marquee.5": "Audit & conformité",
      "marquee.6": "Cloud & automatisation",

      "services.eyebrow": "Nos expertises",
      "services.title": "Trois pôles, une seule ambition : votre performance",
      "services.card1.title": "Systèmes de gestion d'activités",
      "services.card1.desc": "Des applications métiers et ERP pensés pour votre réalité : gestion sur place ou à distance, plusieurs sites, plusieurs utilisateurs. De la prise de commande à la compta, en passant par les stocks et les RH.",
      "services.card1.li1": "Applications métiers & ERP sur mesure",
      "services.card1.li2": "Gestion multi-sites, en ligne ou hors-ligne",
      "services.card1.li3": "Tableaux de bord & reporting en temps réel",
      "services.card2.title": "Audit de cybersécurité",
      "services.card2.desc": "Identifiez vos vulnérabilités avant qu'elles ne soient exploitées. Nous analysons vos systèmes, réseaux et applications, puis déployons des mesures de protection adaptées à votre contexte.",
      "services.card2.li1": "Audit & cartographie des risques",
      "services.card2.li2": "Mise en place de systèmes de sécurité adaptés",
      "services.card2.li3": "Recommandations priorisées & accompagnement",
      "services.card3.title": "Consultance digitale",
      "services.card3.desc": "Une présence digitale complète et cohérente : site web, contenu, outils internes. Nous vous aidons à structurer votre communication et vos processus pour gagner en efficacité et en crédibilité.",
      "services.card3.li1": "Création de sites web & présence digitale",
      "services.card3.li2": "Aide à la création de contenu",
      "services.card3.li3": "Mise en place de systèmes de gestion interne",

      "demos.eyebrow": "En action",
      "demos.title": "Nos applications, en démonstration",
      "demos.lead": "Un aperçu concret des systèmes de gestion que nous avons conçus et déployés pour nos clients.",
      "demos.card1.title": "Pointage & RH numérique",
      "demos.card1.desc": "Fini les feuilles de présence papier : chaque employé pointe en un scan, dépose ses demandes de congé ou d'avance depuis son téléphone, et la paie se calcule automatiquement en fin de mois. Le système tourne déjà sur plusieurs sites, pour plusieurs entreprises.",
      "demos.card1.alt": "Aperçu de la démonstration : pointage et gestion RH numérique",
      "demos.card2.title": "ERP comptable multi-société",
      "demos.card2.desc": "Deux entreprises, une seule comptabilité normée SYSCOHADA. Journaux, balances et états financiers se consolident automatiquement par société. Ce qui prenait des jours de rapprochement tient désormais dans un tableau de bord.",
      "demos.card2.alt": "Aperçu de la démonstration : ERP comptable multi-société",
      "demos.card3.title": "Gestion de restaurant pour CookAfrica",
      "demos.card3.desc": "Une commande prise en salle arrive instantanément en cuisine et au bar, chaque poste facture sa part, et tout se recoupe à la caisse sans ressaisie. C'est l'outil que CookAfrica utilise chaque jour en production.",
      "demos.card3.alt": "Aperçu de la démonstration : gestion de restaurant CookAfrica",
      "demos.note": "Ce sont de vrais extraits, filmés chez nos clients pendant qu'ils utilisent l'appli au quotidien. Survolez une carte pour un aperçu, cliquez pour la voir en entier.",
      "demos.playAria": "Lire la démonstration vidéo",
      "demos.soonAria": "Vidéo bientôt disponible",

      "about.eyebrow": "Pourquoi ForgeSafe & AI",
      "about.title": "Une expertise technique, pensée pour le terrain africain",
      "about.p": "On mélange ingénierie logicielle, sécurité et connaissance du terrain pour livrer des outils que les équipes utilisent vraiment au quotidien, pas des maquettes qui prennent la poussière. Connexion qui coupe, équipes sur plusieurs sites, besoins qui changent en cours de route : c'est notre quotidien, alors on conçoit pour ça dès le départ.",
      "about.point1.title": "Sur mesure",
      "about.point1.desc": "Chaque solution est conçue autour de vos processus réels, pas l'inverse.",
      "about.point2.title": "Sécurité intégrée",
      "about.point2.desc": "La cybersécurité n'est pas une option ajoutée après coup, mais une base du projet.",
      "about.point3.title": "Accompagnement continu",
      "about.point3.desc": "Formation, suivi et évolutions après le déploiement.",
      "about.infra.label": "Notre infrastructure tourne sur",

      "team.eyebrow": "L'équipe",
      "team.title": "Les personnes derrière ForgeSafe & AI",
      "team.lead": "Une équipe restreinte, directement impliquée dans chaque projet, de la conception au déploiement.",
      "team.antony.role": "Responsable Projet",
      "team.antony.desc": "Pilotage des projets clients, de la conception au déploiement.",
      "team.antony.alt": "Antony Georges Demozart, Responsable Projet",
      "team.koffi.role": "Responsable Ingénierie",
      "team.koffi.desc": "Architecture technique et supervision du développement.",
      "team.koffi.alt": "Koffi Aimé Amen, Responsable Ingénierie",
      "team.julien.role": "Direction Commerciale & Partenariats",
      "team.julien.desc": "Développe nos partenariats à l'international et accompagne les clients hors d'Afrique de l'Ouest.",
      "team.julien.alt": "Julien Moreau, Direction Commerciale & Partenariats",
      "team.marc.role": "Conseiller Cybersécurité",
      "team.marc.desc": "Apporte un regard extérieur sur nos audits et nos méthodologies de sécurité.",
      "team.marc.alt": "Marc Willemsen, Conseiller Cybersécurité",
      "team.camille.role": "Responsable IA & Data",
      "team.camille.desc": "Pilote nos projets d'intelligence artificielle et l'exploitation des données clients.",
      "team.camille.alt": "Camille Berthier, Responsable IA & Data",

      "contact.eyebrow": "Parlons de votre projet",
      "contact.title": "Prêt à sécuriser et digitaliser votre activité ?",
      "contact.lead": "Décrivez-nous votre besoin en quelques lignes, on revient vers vous rapidement, généralement sous 24 à 48h.",
      "contact.label.email": "Email",
      "contact.label.phone": "Téléphone",
      "contact.label.location": "Localisation",
      "contact.location.value": "Abidjan, Côte d'Ivoire. On intervient dans toute l'Afrique de l'Ouest",
      "contact.form.name": "Nom complet",
      "contact.form.email": "Email",
      "contact.form.service": "Service souhaité",
      "contact.form.opt1": "Système de gestion d'activités",
      "contact.form.opt2": "Audit de cybersécurité",
      "contact.form.opt3": "Consultance digitale",
      "contact.form.opt4": "Autre / je ne sais pas encore",
      "contact.form.message": "Votre message",
      "contact.form.submit": "Envoyer la demande",
      "contact.form.errorRequired": "Merci de remplir tous les champs requis.",
      "contact.form.success": "Merci, votre message a bien été préparé. Configurez un service d'envoi pour le transmettre réellement.",

      "footer.rights": "Tous droits réservés."
    },

    en: {
      "meta.title": "ForgeSafe & AI for Africa | Management Systems, Cybersecurity, Digital Consulting",
      "meta.description": "ForgeSafe & AI for Africa helps African businesses with tailor-made management systems, cybersecurity audits, and digital consulting.",

      "nav.services": "Services",
      "nav.demos": "Demos",
      "nav.about": "About",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "nav.cta": "Let's talk about your project",
      "nav.toggle.open": "Open menu",
      "nav.toggle.close": "Close menu",

      "hero.eyebrow": "management · cybersecurity · ai · consulting",
      "hero.title.l1": "We're building the digital",
      "hero.title.l2": "systems that move Africa",
      "hero.title.l3": "forward.",
      "hero.lead": "ForgeSafe & AI for Africa designs your management tools, secures your infrastructure, and supports your digital transformation. No cookie-cutter fixes. We start from what you already have in place.",
      "hero.cta.primary": "See our demos",
      "hero.cta.secondary": "Request a free audit",
      "hero.stat1": "areas of expertise",
      "hero.stat2": "custom-built solutions",
      "hero.stat3": "support & follow-up",
      "hero.scroll": "Scroll",

      "marquee.1": "Business management",
      "marquee.2": "Cybersecurity",
      "marquee.3": "Artificial intelligence",
      "marquee.4": "Digital consulting",
      "marquee.5": "Audit & compliance",
      "marquee.6": "Cloud & automation",

      "services.eyebrow": "What we do",
      "services.title": "Three areas, one goal: your performance",
      "services.card1.title": "Business management systems",
      "services.card1.desc": "Business apps and ERPs built around how you actually work: on-site or remote management, multiple sites, multiple users. From order-taking to accounting, through stock and HR.",
      "services.card1.li1": "Custom business apps & ERPs",
      "services.card1.li2": "Multi-site management, online or offline",
      "services.card1.li3": "Real-time dashboards & reporting",
      "services.card2.title": "Cybersecurity audit",
      "services.card2.desc": "Find your vulnerabilities before someone else does. We analyze your systems, networks and applications, then roll out protections that fit your context.",
      "services.card2.li1": "Risk audit & mapping",
      "services.card2.li2": "Tailored security systems",
      "services.card2.li3": "Prioritized recommendations & support",
      "services.card3.title": "Digital consulting",
      "services.card3.desc": "A complete, consistent digital presence: website, content, internal tools. We help structure your communication and processes so you gain efficiency and credibility.",
      "services.card3.li1": "Website creation & digital presence",
      "services.card3.li2": "Content creation support",
      "services.card3.li3": "Internal management systems setup",

      "demos.eyebrow": "In action",
      "demos.title": "Our apps, in action",
      "demos.lead": "A real look at the management systems we've designed and deployed for our clients.",
      "demos.card1.title": "Digital time tracking & HR",
      "demos.card1.desc": "No more paper sign-in sheets: employees clock in with a scan, submit leave or advance requests from their phone, and payroll calculates itself at month-end. It already runs across multiple sites, for multiple companies.",
      "demos.card1.alt": "Demo preview: digital time tracking and HR management",
      "demos.card2.title": "Multi-company accounting ERP",
      "demos.card2.desc": "Two companies, one SYSCOHADA-compliant accounting system. Journals, trial balances and financial statements consolidate automatically by company. What used to take days of reconciliation now fits in a dashboard.",
      "demos.card2.alt": "Demo preview: multi-company accounting ERP",
      "demos.card3.title": "Restaurant management for CookAfrica",
      "demos.card3.desc": "An order taken at the table lands instantly in the kitchen and at the bar, each station bills its part, and everything reconciles at the register with no re-entry. It's the tool CookAfrica runs in production every day.",
      "demos.card3.alt": "Demo preview: CookAfrica restaurant management",
      "demos.note": "These are real clips, filmed at our clients' sites while they use the app day to day. Hover a card for a preview, click to watch it in full.",
      "demos.playAria": "Play the demo video",
      "demos.soonAria": "Video coming soon",

      "about.eyebrow": "Why ForgeSafe & AI",
      "about.title": "Technical expertise, built for the realities on the ground",
      "about.p": "We combine software engineering, security and on-the-ground know-how to ship tools teams actually use every day, not mockups gathering dust. Patchy connectivity, teams spread across sites, needs that shift mid-project. That's our everyday, so we design for it from day one.",
      "about.point1.title": "Tailor-made",
      "about.point1.desc": "Every solution is built around your actual processes, not the other way around.",
      "about.point2.title": "Security built in",
      "about.point2.desc": "Cybersecurity isn't a bolt-on afterthought. It's part of the foundation.",
      "about.point3.title": "Ongoing support",
      "about.point3.desc": "Training, follow-up and updates after launch.",
      "about.infra.label": "Our infrastructure runs on",

      "team.eyebrow": "The team",
      "team.title": "The people behind ForgeSafe & AI",
      "team.lead": "A small team, hands-on in every project, from design to deployment.",
      "team.antony.role": "Project Lead",
      "team.antony.desc": "Runs client projects from design through deployment.",
      "team.antony.alt": "Antony Georges Demozart, Project Lead",
      "team.koffi.role": "Engineering Lead",
      "team.koffi.desc": "Technical architecture and development oversight.",
      "team.koffi.alt": "Koffi Aimé Amen, Engineering Lead",
      "team.julien.role": "Business Development & Partnerships",
      "team.julien.desc": "Builds our international partnerships and supports clients outside West Africa.",
      "team.julien.alt": "Julien Moreau, Business Development & Partnerships",
      "team.marc.role": "Cybersecurity Advisor",
      "team.marc.desc": "Brings an outside perspective to our audits and security methodology.",
      "team.marc.alt": "Marc Willemsen, Cybersecurity Advisor",
      "team.camille.role": "AI & Data Lead",
      "team.camille.desc": "Leads our AI projects and how we put client data to work.",
      "team.camille.alt": "Camille Berthier, AI & Data Lead",

      "contact.eyebrow": "Let's talk about your project",
      "contact.title": "Ready to secure and digitize your business?",
      "contact.lead": "Tell us what you need in a few lines, we'll get back to you quickly, usually within 24 to 48 hours.",
      "contact.label.email": "Email",
      "contact.label.phone": "Phone",
      "contact.label.location": "Location",
      "contact.location.value": "Abidjan, Côte d'Ivoire. We work across West Africa",
      "contact.form.name": "Full name",
      "contact.form.email": "Email",
      "contact.form.service": "Service you need",
      "contact.form.opt1": "Business management system",
      "contact.form.opt2": "Cybersecurity audit",
      "contact.form.opt3": "Digital consulting",
      "contact.form.opt4": "Other / not sure yet",
      "contact.form.message": "Your message",
      "contact.form.submit": "Send request",
      "contact.form.errorRequired": "Please fill in all required fields.",
      "contact.form.success": "Thanks, your message is ready. Hook up a sending service to actually deliver it.",

      "footer.rights": "All rights reserved."
    }
  };

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[lang] && dict[lang][key];
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      spec.split(",").forEach((pair) => {
        const idx = pair.indexOf(":");
        if (idx === -1) return;
        const attr = pair.slice(0, idx).trim();
        const key = pair.slice(idx + 1).trim();
        const val = dict[lang] && dict[lang][key];
        if (val !== undefined) el.setAttribute(attr, val);
      });
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    window.__forgesafeLang = lang;
  }

  function setLang(lang, persist) {
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }
    applyLang(lang);
  }

  window.forgesafeI18n = {
    setLang,
    t: (key) => {
      const lang = window.__forgesafeLang || "fr";
      return (dict[lang] && dict[lang][key]) || (dict.fr && dict.fr[key]) || key;
    }
  };

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang, true));
  });

  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}

  if (saved === "fr" || saved === "en") {
    applyLang(saved);
  } else {
    applyLang("fr");

    const browserLang = ((navigator.language || navigator.userLanguage || "fr") + "").slice(0, 2).toLowerCase();
    if (browserLang === "en") {
      setLang("en", false);
    }

    if (typeof fetch === "function" && typeof AbortController !== "undefined") {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 2500);
      fetch("https://ipapi.co/json/", { signal: controller.signal })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          clearTimeout(timeout);
          if (!data || !data.country_code) return;
          let choiceMade = null;
          try { choiceMade = localStorage.getItem(STORAGE_KEY); } catch (e) {}
          if (choiceMade) return;
          if (ANGLOPHONE_COUNTRIES.indexOf(data.country_code) !== -1) {
            setLang("en", false);
          }
        })
        .catch(() => {
          clearTimeout(timeout);
        });
    }
  }
})();
