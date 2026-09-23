# ForgeSafe & AI for Africa — site vitrine

Site vitrine one-page (HTML/CSS/JS statique, sans build) présentant les trois pôles
d'activité : systèmes de gestion, cybersécurité, consultance digitale.

## Structure

```
index.html          Page unique (header, hero, marquee, services, démos, à propos, équipe, contact, footer)
css/style.css        Design system (couleurs, composants, responsive)
js/main.js           Lenis smooth scroll, GSAP ScrollTrigger reveals, curseur custom, boutons magnétiques,
                     spotlight cartes, nav mobile, compteurs animés, lecture vidéo lazy, formulaire
js/i18n.js           Système bilingue FR/EN (voir section "Langue FR/EN" ci-dessous)
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

La section `#equipe` affiche 5 membres avec leurs photos, nom et rôle : Antony Georges Demozart et
Koffi Aimé Amen (les deux responsables réels), ainsi que Julien Moreau, Marc Willemsen et Camille
Berthier.

**Note interne (à conserver, ne pas publier) :** les photos de Julien, Marc et Camille sont des visages
générés par IA (thispersondoesnotexist.com / StyleGAN2 — aucune vraie personne, aucun droit à l'image
concerné), ajoutées à la demande du fondateur pour donner une impression d'équipe plus internationale.
Les noms et rôles associés sont fictifs. Si un client ou partenaire demandait un jour à rencontrer l'un
d'eux, il faudra en tenir compte. Pour les remplacer par de vraies personnes plus tard : dupliquer un
bloc `.team-card` dans `index.html`, déposer la photo dans `assets/images/`, et mettre à jour les clés
`team.julien.*` / `team.marc.*` / `team.camille.*` dans `js/i18n.js` (voir section i18n plus bas).

## À personnaliser avant mise en ligne

- **Coordonnées** (`index.html`, section `#contact`) : email, téléphone, adresse — actuellement des placeholders.
- **Vidéos de démonstration** (`index.html`, section `#demos`) : chaque `.demo-media` a un attribut
  `data-video-src=""`. Renseignez-le avec l'URL du fichier vidéo (mp4 hébergé, ou adaptez `js/main.js`
  pour embarquer un iframe YouTube/Vimeo). Remplacez aussi les posters SVG dans `assets/` par de vraies
  captures d'écran.
- **Formulaire de contact** (`js/main.js`) : la soumission est actuellement simulée côté client. Branchez
  un service comme Formspree, EmailJS, ou un endpoint backend maison pour recevoir réellement les messages.
- **Réseaux sociaux** (footer) : liens `#` à remplacer par les vrais profils.

## Langue FR/EN

Le site est bilingue. `js/i18n.js` contient un dictionnaire `{ fr: {...}, en: {...} }` et applique la
traduction à tous les éléments porteurs d'un attribut `data-i18n="clé"` (texte) ou
`data-i18n-attr="attribut:clé"` (attributs comme `alt`, `aria-label`, `content`).

Détection automatique au premier chargement (dans cet ordre) :
1. Choix déjà mémorisé (`localStorage`, clé `forgesafe-lang`) — un clic sur FR/EN prime toujours sur le
   reste et est mémorisé.
2. Langue du navigateur (`navigator.language`).
3. Géolocalisation IP via l'API gratuite `ipapi.co` (pays anglophones : GB, US, CA, AU, NZ, IE) — best
   effort, timeout 2,5s, silencieux en cas d'échec (pas de clé API requise, mais dépendance à un service
   tiers externe, comme les CDN GSAP/Lenis déjà utilisés par le site).
4. Sinon, français par défaut.

Pour ajouter/modifier un texte : éditer la valeur correspondante dans les deux blocs (`fr` et `en`) de
`js/i18n.js`. Les noms propres (marque, prénoms/noms de l'équipe) ne sont pas dans le dictionnaire, ils
restent identiques dans les deux langues directement dans `index.html`.

## Infrastructure cloud

La section "À propos" affiche deux badges neutres ("Notre infrastructure tourne sur : Microsoft Azure,
Amazon AWS"). Ce sont des mentions d'usage technique, **pas** une revendication de partenariat officiel
avec Microsoft ou Amazon — à ne pas transformer en "partenaire officiel" sans un vrai statut de
partenaire (ex. Microsoft for Startups, AWS Activate), sous peine de fausse publicité.

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

Le site charge Google Fonts, GSAP, ScrollTrigger et Lenis depuis des CDN (jsdelivr/Google Fonts), ainsi
que `ipapi.co` pour la détection de langue par IP (best effort, voir section "Langue FR/EN").
Une connexion Internet est donc nécessaire au runtime pour ces éléments ; le reste du site (contenu,
navigation, formulaire) fonctionne sans eux grâce aux replis prévus dans `js/main.js`.
