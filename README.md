# ForgeSafe & AI for Africa — site vitrine

Site vitrine one-page (HTML/CSS/JS statique, sans build) présentant les trois pôles
d'activité : systèmes de gestion, cybersécurité, consultance digitale.

## Structure

```
index.html          Page unique (header, hero, marquee, services, démos, à propos, équipe, contact, footer)
css/style.css        Design system (couleurs, composants, responsive)
js/main.js           Lenis smooth scroll, GSAP ScrollTrigger reveals, curseur custom, boutons magnétiques,
                     spotlight cartes, nav mobile, compteurs animés, lecture vidéo lazy, formulaire
assets/              Favicons (générés depuis le logo) + posters placeholder pour les démos
assets/images/       Logo source + déclinaisons découpées, photos de l'équipe
vercel.json          Config de déploiement Vercel
```

## Lancer en local

Aucun build requis. Servir le dossier avec n'importe quel serveur statique, par exemple :

```bash
npx serve .
# ou
python -m http.server 5500
```

Puis ouvrir `http://localhost:5500`.

## Assets du logo

`assets/images/logo-source.png` est le logo original fourni (fond blanc). Deux déclinaisons
détourées (fond transparent) en ont été extraites automatiquement :

- `logo-icon.png` — l'écusson seul (utilisé dans le header/footer et pour les favicons).
- `logo-full.png` — écusson + wordmark complet (utile pour un usage sur fond clair : documents,
  réseaux sociaux, signature email).
- `assets/favicon-32.png` / `favicon-180.png` — générés depuis `logo-icon.png`.

Si le logo est mis à jour, relancer un détourage (seuil de blanc → transparence) plutôt que
réutiliser les anciens fichiers.

## Équipe

La section `#equipe` affiche les deux responsables avec leurs photos
(`assets/images/team-antony-demozart.jpeg`, `assets/images/team-koffi-aime-amen.jpeg`), nom et rôle.
Pour ajouter/modifier un membre, dupliquer un bloc `.team-card` dans `index.html` et déposer la photo
dans `assets/images/`.

## À personnaliser avant mise en ligne

- **Coordonnées** (`index.html`, section `#contact`) : email, téléphone, adresse — actuellement des placeholders.
- **Vidéos de démonstration** (`index.html`, section `#demos`) : chaque `.demo-media` a un attribut
  `data-video-src=""`. Renseignez-le avec l'URL du fichier vidéo (mp4 hébergé, ou adaptez `js/main.js`
  pour embarquer un iframe YouTube/Vimeo). Remplacez aussi les posters SVG dans `assets/` par de vraies
  captures d'écran.
- **Formulaire de contact** (`js/main.js`) : la soumission est actuellement simulée côté client. Branchez
  un service comme Formspree, EmailJS, ou un endpoint backend maison pour recevoir réellement les messages.
- **Réseaux sociaux** (footer) : liens `#` à remplacer par les vrais profils.

## Déploiement (Vercel)

1. `vercel` (ou connecter le repo Git au dashboard Vercel).
2. Aucun build command / output directory nécessaire — c'est un site statique à la racine.
3. Configurer le nom de domaine déjà acquis dans les réglages du projet Vercel (Domains).

## Design

- Palette dérivée du logo : fond quasi-noir, accent or clair (`#e8c572`) + bronze doré (`#c99e48`),
  cohérente avec l'écusson navy/or de la marque.
- Polices : Space Grotesk (titres), Inter (texte).
- Animations : Lenis (scroll fluide) + GSAP ScrollTrigger (apparitions en cascade), avec repli automatique
  en JS natif (IntersectionObserver) si les CDN GSAP/Lenis ne chargent pas. Curseur personnalisé, boutons
  magnétiques et effet spotlight sur les cartes actifs uniquement sur pointeur fin (desktop).
- Images/vidéos en lazy loading natif (`loading="lazy"`, vidéo chargée seulement au clic sur "lecture").

## Dépendances externes (CDN)

Le site charge Google Fonts, GSAP, ScrollTrigger et Lenis depuis des CDN (jsdelivr/Google Fonts).
Une connexion Internet est donc nécessaire au runtime pour ces éléments ; le reste du site (contenu,
navigation, formulaire) fonctionne sans eux grâce aux replis prévus dans `js/main.js`.
