# CLAUDE.md

Ce projet est le site web de l'association APCM (association pour la promotion du chemin de fer Colmar-Metzeral). 
C'est une association qui a pour but d'accompagner les usagers du train de cette ligne, mais aussi d'organiser des voyages en train. 
Le site comprend les principaux éléments pour contacter l'association, et une brève présentation. 
C'est un site vitrine minimaliste. 

## Contraintes techniques

Les personnes qui maintiennent le site sont non techniques. 
Il n'y aura personne pour gérer l'infrastructure du projet. 
Il doit donc pouvoir être déployé de manière statique et automatique.
Il doit être gratuit. 
Il ne doit pas engager de services externes (base de données, S3).
Tout doit être contenu sur Github, et les administrateurs auront un accès au projet. 
Toutes les informations doivent pouvoir être contenues dans un JSON permettant la mise à jour des données du site. 
Les images doivent aussi pouvoir être contenues dans un dossier public et envoyées. 
Dans l'idéal, la mise à jour du site doit pouvoir se faire par envoi de mail à un compte de service qui va générer la mise à jour du json,
la recompilation du site et donc la mise à jour des données. 
Toutefois, la mise en forme doit pouvoir se faire comme sur un traitement de texte avec des liens, des images, etc. et doit pouvoir ensuite être transformé en texte riche dans le JSON et interprété par le site une fois déployé. 

## Solution technique retenue

| Rôle | Outil |
|------|-------|
| Générateur de site | **Astro** |
| CMS | **Decap CMS** (interface WYSIWYG, édition directement sur GitHub) |
| Hébergement | **GitHub Pages** |
| CI/CD | **GitHub Actions** (rebuild automatique à chaque commit) |
| Auth CMS | **Netlify OAuth App** (proxy gratuit — le site n'est pas hébergé sur Netlify) |

Le CMS Decap remplace l'approche "email → JSON" : les administrateurs accèdent à `/admin` dans leur navigateur, éditent via une interface WYSIWYG, puis sauvegardent. Cela crée un commit GitHub qui déclenche automatiquement le rebuild et la mise en ligne (~2 min).

## Structure du projet

```
/
├── src/
│   ├── pages/index.astro          # Page principale, lit content.json
│   └── components/RichText.astro  # Rendu du rich text (HTML)
├── public/
│   ├── admin/
│   │   ├── index.html             # Point d'entrée Decap CMS
│   │   └── config.yml             # Configuration du CMS
│   └── images/                    # Images uploadées via le CMS
├── src/data/content.json          # Données du site
├── .github/workflows/deploy.yml   # Build + deploy sur GitHub Pages
├── astro.config.mjs
└── package.json
```

## Schéma content.json

```json
{
  "association": {
    "nom": "APCM",
    "description": "<p>...</p>",
    "contact": {
      "mail": "",
      "telephone": "",
      "adresse": "",
      "whatsapp": "",
      "helloasso": "",
      "facebook": ""
    }
  },
  "sections": [{ "titre": "...", "contenu": "<p>...</p>" }],
  "images": { "logo": "/images/logo.png" },
  "actualites": [
    {
      "titre": "",
      "date": "2026-01-01",
      "resume": "",
      "contenu": "<p>...</p>",
      "image": "/images/actualite.jpg"
    }
  ]
}
```

## Commandes de développement

```bash
npm install          # installer les dépendances
npm run dev          # serveur local (http://localhost:4321)
npm run build        # build de production dans dist/
```

## Configuration OAuth (étape manuelle, à faire une fois)

1. Créer un compte [Netlify](https://netlify.com) gratuit
2. Enregistrer une GitHub OAuth App (callback : `https://api.netlify.com/auth/done`)
3. Ajouter `OAUTH_CLIENT_ID` et `OAUTH_CLIENT_SECRET` dans les secrets GitHub du dépôt
4. Activer GitHub Pages sur la branche `gh-pages`

## Documentation à rédiger

- `docs/guide-mise-a-jour.md` : pas-à-pas illustré pour accéder à `/admin` et modifier le contenu
- `docs/guide-images.md` : comment uploader une image via le CMS

## Liens et contacts réels

- **Mail** : apcm.munster.68@gmail.com
- **Facebook** : https://www.facebook.com/apcolmarmetzeral/?locale=fr_FR
- **WhatsApp (groupe)** : https://chat.whatsapp.com/Lu5OsFDZx2GLUT0YGV0pLe
- **HelloAsso** : https://www.helloasso.com/associations/association-pour-la-promotion-du-chemin-de-fer-colmar-metzeral/adhesions/bulletin-d-adhesion-2026

## Mise en page

- En-tête : logo (`/images/logo-apcm.png`) à gauche ; icônes Facebook, WhatsApp, HelloAsso sur la même ligne à droite
- Page d'accueil : image `/images/train-hiver.jpg` en arrière-plan plein écran (hero)
- Les images (`/public/images/`) sont modifiables par les administrateurs via le CMS (upload Decap)