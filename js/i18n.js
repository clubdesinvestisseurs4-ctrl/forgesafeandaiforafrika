(() => {
  "use strict";

  const STORAGE_KEY = "forgesafe-lang";
  const ANGLOPHONE_COUNTRIES = ["GB", "US", "CA", "AU", "NZ", "IE"];

  const dict = {
    fr: {
      "meta.title": "ForgeSafe | Systèmes de gestion, Cybersécurité, Consultance digitale",
      "meta.description": "ForgeSafe accompagne les entreprises avec des systèmes de gestion d'activités, des audits de cybersécurité et de la consultance digitale sur mesure.",

      "nav.services": "Services",
      "nav.demos": "Démonstrations",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.careers": "Carrières",
      "nav.cta": "Discutons de votre projet",
      "nav.toggle.open": "Ouvrir le menu",
      "nav.toggle.close": "Fermer le menu",

      "hero.eyebrow": "gestion · cybersécurité · ia · consultance",
      "hero.title.l1": "Nous bâtissons les systèmes",
      "hero.title.l2": "numériques qui font avancer",
      "hero.title.l3": "votre activité.",
      "hero.lead": "ForgeSafe conçoit vos outils de gestion, sécurise votre infrastructure et vous accompagne dans votre transformation digitale. Pas de solution toute faite : on part de ce qui existe déjà chez vous.",
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
      "services.card2.desc": "Identifiez vos vulnérabilités avant qu'elles ne soient exploitées. On s'appuie sur CyberBrain, notre propre moteur d'audit : détection par règles, score expliqué en langage clair, jusqu'à la lecture de votre code source.",
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
      "demos.lead": "Un aperçu concret de ce qu'on construit : nos propres produits, et les systèmes livrés à nos clients.",
      "demos.card1.title": "Kuwepo : pointage & RH anti-fraude",
      "demos.card1.desc": "Fini les feuilles de présence papier : chaque employé pointe avec son téléphone, en croisant QR du site, Wi-Fi de l'entreprise et reconnaissance faciale, impossible de pointer pour un collègue absent. La paie se calcule automatiquement en fin de mois. C'est Kuwepo, notre propre produit, déjà déployé sur plusieurs sites, pour plusieurs entreprises.",
      "demos.card1.alt": "Aperçu de la démonstration : Kuwepo, pointage et gestion RH anti-fraude",
      "demos.card2.title": "ERP comptable multi-société",
      "demos.card2.desc": "Deux entreprises, une seule comptabilité normée SYSCOHADA. Journaux, balances et états financiers se consolident automatiquement par société. Ce qui prenait des jours de rapprochement tient désormais dans un tableau de bord.",
      "demos.card2.alt": "Aperçu de la démonstration : ERP comptable multi-société",
      "demos.card3.title": "Gestion de restaurant pour CookAfrica",
      "demos.card3.desc": "Une commande prise en salle arrive instantanément en cuisine et au bar, chaque poste facture sa part, et tout se recoupe à la caisse sans ressaisie. C'est l'outil que CookAfrica utilise chaque jour en production.",
      "demos.card3.alt": "Aperçu de la démonstration : gestion de restaurant CookAfrica",
      "demos.card4.title": "CyberBrain : l'audit qui explique le risque",
      "demos.card4.desc": "CyberBrain scanne un site ou lit un dépôt de code, repère les failles techniques (en-têtes manquants, secrets committés, dépendances vulnérables) et les relie en scénarios de risque réels. Un score sur 100, calculé par des règles, jamais par l'IA : l'IA se charge seulement de rédiger le résumé, en langage clair, pour un client non technique.",
      "demos.card4.alt": "Aperçu de la démonstration : CyberBrain, moteur d'audit de cybersécurité",
      "demos.note": "Ce sont de vrais extraits, filmés chez nos clients pendant qu'ils utilisent l'appli au quotidien. Survolez une carte pour un aperçu, cliquez pour la voir en entier.",
      "demos.playAria": "Lire la démonstration vidéo",
      "demos.soonAria": "Vidéo bientôt disponible",

      "about.eyebrow": "Pourquoi ForgeSafe",
      "about.title": "Une expertise technique, pensée pour des environnements exigeants",
      "about.p": "On mélange ingénierie logicielle, sécurité et connaissance du terrain pour livrer des outils que les équipes utilisent vraiment au quotidien, pas des maquettes qui prennent la poussière. Connexion qui coupe, équipes sur plusieurs sites, besoins qui changent en cours de route : c'est notre quotidien, alors on conçoit pour ça dès le départ.",
      "about.point1.title": "Sur mesure",
      "about.point1.desc": "Chaque solution est conçue autour de vos processus réels, pas l'inverse.",
      "about.point2.title": "Sécurité intégrée",
      "about.point2.desc": "La cybersécurité n'est pas une option ajoutée après coup, mais une base du projet.",
      "about.point3.title": "Accompagnement continu",
      "about.point3.desc": "Formation, suivi et évolutions après le déploiement.",
      "about.infra.label": "Propulsé par",

      "team.cert_label": "Nos experts sont certifiés",

      "contact.eyebrow": "Parlons de votre projet",
      "contact.title": "Prêt à sécuriser et digitaliser votre activité ?",
      "contact.lead": "Décrivez-nous votre besoin en quelques lignes, on revient vers vous rapidement, généralement sous 24 à 48h.",
      "contact.label.email": "Email",
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

      "footer.rights": "Tous droits réservés.",

      "careers.meta.title": "Carrières — ForgeSafe Security & Digital Solutions",
      "careers.meta.description": "Rejoignez ForgeSafe Security & Digital Solutions. Découvrez notre culture, notre façon de recruter, et envoyez-nous une candidature spontanée.",

      "careers.hero.eyebrow": "Carrières",
      "careers.hero.title": "Construisez avec nous les outils numériques de demain.",
      "careers.hero.lead": "Nous sommes une équipe restreinte, directement impliquée dans chaque projet, de la conception au déploiement chez le client. Si cette façon de travailler vous parle, nous voulons vous rencontrer, même sans poste ouvert aujourd'hui.",

      "careers.why.eyebrow": "Notre culture",
      "careers.why.title": "Pourquoi nous rejoindre",
      "careers.why.card1.title": "Un impact concret et visible",
      "careers.why.card1.desc": "Nos outils tournent en production chez nos clients dès les premières semaines. Vous voyez directement l'effet de votre travail sur le terrain, pas seulement dans un backlog.",
      "careers.why.card2.title": "Une équipe restreinte, responsabilisante",
      "careers.why.card2.desc": "Pas de hiérarchie lourde. Chacun porte ses projets de bout en bout, échange directement avec les clients, et voit ses décisions compter réellement.",
      "careers.why.card3.title": "Des sujets variés, un terrain exigeant",
      "careers.why.card3.desc": "Gestion d'activités, cybersécurité, IA, consultance : vous touchez à plusieurs disciplines, sur des infrastructures où la connectivité et le contexte imposent de vraies contraintes d'ingénierie.",

      "careers.jobs.eyebrow": "Opportunités",
      "careers.jobs.title": "Postes ouverts",
      "careers.jobs.lead": "L'état actuel, en toute transparence.",
      "careers.jobs.empty.title": "Aucun poste ouvert pour le moment",
      "careers.jobs.empty.desc": "Notre équipe est encore petite et nous recrutons rarement, mais toujours avec soin. Quand un poste s'ouvrira, il sera publié ici en premier. En attendant, une candidature spontanée reste le meilleur moyen d'entrer en contact avec nous.",
      "careers.jobs.empty.cta1": "Envoyer une candidature spontanée",
      "careers.jobs.empty.cta2": "Nous contacter",
      "careers.jobs.empty.note": "Joignez un bref message sur ce que vous aimeriez construire avec nous, et votre CV ou portfolio.",

      "careers.process.eyebrow": "À quoi s'attendre",
      "careers.process.title": "Comment se déroule un recrutement",
      "careers.process.step1.title": "1. Candidature spontanée",
      "careers.process.step1.desc": "Vous nous écrivez directement : qui vous êtes, ce que vous avez construit, ce qui vous intéresse chez nous.",
      "careers.process.step2.title": "2. Échange découverte",
      "careers.process.step2.desc": "Un appel ou une rencontre informelle pour comprendre vos attentes et vous présenter nos projets en cours.",
      "careers.process.step3.title": "3. Mise en situation",
      "careers.process.step3.desc": "Un cas concret, proche de nos projets réels, pas un test théorique déconnecté du terrain.",
      "careers.process.step4.title": "4. Décision rapide",
      "careers.process.step4.desc": "Nous revenons vers vous avec une réponse claire, dans un délai raisonnable, qu'il y ait un poste ouvert ou non."
    },

    en: {
      "meta.title": "ForgeSafe | Management Systems, Cybersecurity, Digital Consulting",
      "meta.description": "ForgeSafe helps businesses with tailor-made management systems, cybersecurity audits, and digital consulting.",

      "nav.services": "Services",
      "nav.demos": "Demos",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.careers": "Careers",
      "nav.cta": "Let's talk about your project",
      "nav.toggle.open": "Open menu",
      "nav.toggle.close": "Close menu",

      "hero.eyebrow": "management · cybersecurity · ai · consulting",
      "hero.title.l1": "We're building the digital",
      "hero.title.l2": "systems that move",
      "hero.title.l3": "your business forward.",
      "hero.lead": "ForgeSafe designs your management tools, secures your infrastructure, and supports your digital transformation. No cookie-cutter fixes. We start from what you already have in place.",
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
      "services.card2.desc": "Find your vulnerabilities before someone else does. We run on CyberBrain, our own audit engine: rule-based detection, a score explained in plain language, down to reading your source code.",
      "services.card2.li1": "Risk audit & mapping",
      "services.card2.li2": "Tailored security systems",
      "services.card2.li3": "Prioritised recommendations & support",
      "services.card3.title": "Digital consulting",
      "services.card3.desc": "A complete, consistent digital presence: website, content, internal tools. We help structure your communication and processes so you gain efficiency and credibility.",
      "services.card3.li1": "Website creation & digital presence",
      "services.card3.li2": "Content creation support",
      "services.card3.li3": "Internal management systems setup",

      "demos.eyebrow": "In action",
      "demos.title": "Our apps, in action",
      "demos.lead": "A real look at what we build: our own products, and the systems we've delivered for clients.",
      "demos.card1.title": "Kuwepo: anti-fraud time tracking & HR",
      "demos.card1.desc": "No more paper sign-in sheets: employees clock in with their phone, cross-checking the site's QR code, company Wi-Fi and face recognition, so nobody can clock in for an absent colleague. Payroll calculates itself at month-end. This is Kuwepo, our own product, already running across multiple sites, for multiple companies.",
      "demos.card1.alt": "Demo preview: Kuwepo, anti-fraud time tracking and HR",
      "demos.card2.title": "Multi-company accounting ERP",
      "demos.card2.desc": "Two companies, one SYSCOHADA-compliant accounting system. Journals, trial balances and financial statements consolidate automatically by company. What used to take days of reconciliation now fits in a dashboard.",
      "demos.card2.alt": "Demo preview: multi-company accounting ERP",
      "demos.card3.title": "Restaurant management for CookAfrica",
      "demos.card3.desc": "An order taken at the table lands instantly in the kitchen and at the bar, each station bills its part, and everything reconciles at the register with no re-entry. It's the tool CookAfrica runs in production every day.",
      "demos.card3.alt": "Demo preview: CookAfrica restaurant management",
      "demos.card4.title": "CyberBrain: audits that explain the risk",
      "demos.card4.desc": "CyberBrain scans a site or reads a code repository, flags the technical weaknesses (missing headers, committed secrets, vulnerable dependencies) and links them into real risk scenarios. A score out of 100, computed by rules, never by AI: the AI's only job is writing the summary in plain language, for a non-technical client.",
      "demos.card4.alt": "Demo preview: CyberBrain, cybersecurity audit engine",
      "demos.note": "These are real clips, filmed at our clients' sites while they use the app day to day. Hover a card for a preview, click to watch it in full.",
      "demos.playAria": "Play the demo video",
      "demos.soonAria": "Video coming soon",

      "about.eyebrow": "Why ForgeSafe",
      "about.title": "Technical expertise, built for demanding environments",
      "about.p": "We combine software engineering, security and on-the-ground know-how to ship tools teams actually use every day, not mockups gathering dust. Patchy connectivity, teams spread across sites, needs that shift mid-project. That's our everyday, so we design for it from day one.",
      "about.point1.title": "Tailor-made",
      "about.point1.desc": "Every solution is built around your actual processes, not the other way around.",
      "about.point2.title": "Security built in",
      "about.point2.desc": "Cybersecurity isn't a bolt-on afterthought. It's part of the foundation.",
      "about.point3.title": "Ongoing support",
      "about.point3.desc": "Training, follow-up and updates after launch.",
      "about.infra.label": "Powered by",

      "team.cert_label": "Our experts are certified in",

      "contact.eyebrow": "Let's talk about your project",
      "contact.title": "Ready to secure and digitise your business?",
      "contact.lead": "Tell us what you need in a few lines, we'll get back to you quickly, usually within 24 to 48 hours.",
      "contact.label.email": "Email",
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

      "footer.rights": "All rights reserved.",

      "careers.meta.title": "Careers — ForgeSafe Security & Digital Solutions",
      "careers.meta.description": "Join ForgeSafe Security & Digital Solutions. Learn about our culture, how we hire, and send us a spontaneous application.",

      "careers.hero.eyebrow": "Careers",
      "careers.hero.title": "Build tomorrow's digital tools with us.",
      "careers.hero.lead": "We're a small team, directly involved in every project, from design to deployment at the client's site. If that way of working speaks to you, we want to meet you, even without an open role today.",

      "careers.why.eyebrow": "Our culture",
      "careers.why.title": "Why join us",
      "careers.why.card1.title": "Real, visible impact",
      "careers.why.card1.desc": "Our tools run in production at client sites within weeks. You see the effect of your work directly, not just in a backlog.",
      "careers.why.card2.title": "A small, empowering team",
      "careers.why.card2.desc": "No heavy hierarchy. Everyone owns their projects end to end, talks directly with clients, and sees their decisions genuinely count.",
      "careers.why.card3.title": "Varied work, demanding terrain",
      "careers.why.card3.desc": "Business management, cybersecurity, AI, consulting: you touch several disciplines, on infrastructure where connectivity and context impose real engineering constraints.",

      "careers.jobs.eyebrow": "Opportunities",
      "careers.jobs.title": "Open positions",
      "careers.jobs.lead": "The current state, in full transparency.",
      "careers.jobs.empty.title": "No open positions right now",
      "careers.jobs.empty.desc": "Our team is still small and we hire rarely, but always carefully. When a role opens, it'll be posted here first. In the meantime, a spontaneous application is the best way to get on our radar.",
      "careers.jobs.empty.cta1": "Send a spontaneous application",
      "careers.jobs.empty.cta2": "Contact us",
      "careers.jobs.empty.note": "Include a short note on what you'd like to build with us, and your CV or portfolio.",

      "careers.process.eyebrow": "What to expect",
      "careers.process.title": "How a hire usually goes",
      "careers.process.step1.title": "1. Spontaneous application",
      "careers.process.step1.desc": "You write to us directly: who you are, what you've built, what interests you about us.",
      "careers.process.step2.title": "2. Discovery call",
      "careers.process.step2.desc": "An informal call or meeting to understand what you're looking for and walk you through our current projects.",
      "careers.process.step3.title": "3. Practical case",
      "careers.process.step3.desc": "A concrete case close to our real projects, not a theoretical test disconnected from the field.",
      "careers.process.step4.title": "4. Fast decision",
      "careers.process.step4.desc": "We get back to you with a clear answer within a reasonable timeframe, whether or not a role is open."
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
