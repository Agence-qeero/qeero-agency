# Qeero — Site Web

Site officiel de l'agence de communication visuelle Qeero (2D, 3D & Print).

## Technologies

- React 19
- Vite
- Tailwind CSS v4
- Framer Motion & Anime.js
- Lucide React
- React Router v7

## Installation

```bash
npm install
```

## Démarrage en développement

```bash
npm run dev
```

## Build de production

```bash
npm run build
```

## Aperçu du build

```bash
npm run preview
```

## Suivi Meta Pixel et consentement

Le pixel `2581273365643900` est initialisé dans `index.html`. Le chargement du
script Meta et le déclenchement d'un événement `PageView` sont deux étapes distinctes :

- Sans consentement, le site ne déclenche pas de `PageView` JavaScript.
- **Accepter** enregistre le choix et émet `qeero:cookies-accepted` sur `window`.
  L'écouteur unique dans `index.html` déclenche alors un `PageView` sans rechargement,
  après le chargement du script Meta si nécessaire.
- Un rechargement avec un consentement déjà accepté déclenche un nouveau `PageView`.
- **Refuser** ou fermer le bandeau enregistre un refus : aucun `PageView` n'est
  déclenché par le site, y compris lors des visites suivantes dans ce navigateur.

Le choix est conservé dans `localStorage`, sous la clé `qeero_cookies`, pour
l'origine et le profil de navigateur utilisés. Effacer les données du site ou
utiliser un nouveau profil peut donc faire réapparaître le bandeau.

### Diagnostic

Un message « Aucun pixel trouvé » dans un outil de navigateur ne prouve pas que
Meta a désactivé le pixel. Pour vérifier le parcours, utiliser un profil de test
sans choix enregistré, accepter les cookies, puis contrôler dans l'onglet Réseau
le chargement de `connect.facebook.net/en_US/fbevents.js` et la requête
`www.facebook.com/tr/` avec `ev=PageView` et le bon identifiant de pixel.

Si le suivi reste absent après acceptation, vérifier les erreurs réseau et les
blocages du navigateur ou de ses extensions. Ne pas contourner un refus ni envoyer
des événements artificiels pour rendre le pixel « actif ». Une requête côté
navigateur ne garantit pas sa réception : celle-ci se vérifie dans les événements
de test de Meta Events Manager.
