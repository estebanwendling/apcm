# Configuration initiale du site APCM

Ce guide est destiné à la personne technique qui met en place le site pour la première fois. Il décrit les étapes à réaliser une seule fois.

**Dépôt GitHub :** `https://github.com/estebanwendling/apcm`  
**Hébergement :** Netlify (déploiement automatique depuis GitHub)  
**Interface admin :** `https://capable-tiramisu-c2ff59.netlify.app/admin`

---

## Prérequis

- Accès au compte GitHub `estebanwendling`
- Un compte Netlify gratuit

---

## Étape 1 — Importer le projet sur Netlify

1. Connectez-vous sur [netlify.com](https://netlify.com)
2. Cliquez sur **"Add new site" → "Import an existing project"**
3. Choisissez **GitHub** et autorisez l'accès
4. Sélectionnez le dépôt **`estebanwendling/apcm`**
5. Vérifiez les paramètres de build (déjà configurés automatiquement via `netlify.toml`) :
   - Build command : `npm run build`
   - Publish directory : `dist`
6. Cliquez sur **"Deploy site"**

Le site est en ligne en 2-3 minutes. Notez l'URL attribuée par Netlify (ex : `quelquechose.netlify.app`).

---

## Étape 2 — Mettre à jour l'URL du site

Dans le fichier `astro.config.mjs`, remplacez :
```js
site: 'https://apcm.netlify.app',
```
par l'URL réelle attribuée par Netlify, puis poussez sur GitHub. Netlify redéploiera automatiquement.

> Vous pouvez aussi configurer un nom de domaine personnalisé dans Netlify si vous en avez un.

---

## Étape 3 — Configurer l'authentification OAuth

Netlify gère l'authentification automatiquement quand le site est hébergé chez eux. Il suffit d'activer GitHub comme provider.

1. Dans votre site Netlify, allez dans **Site configuration → Access control → OAuth**
2. Sous "Authentication Providers", cliquez sur **"Install provider" → GitHub**
3. Entrez le **Client ID** et **Client Secret** de votre GitHub OAuth App
4. Sauvegardez

> Si vous n'avez pas encore de GitHub OAuth App : allez dans **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**. Homepage URL : votre URL Netlify. Authorization callback URL : `https://api.netlify.com/auth/done`.

---

## Étape 4 — Donner accès aux administrateurs

1. Dans le dépôt GitHub, allez dans **Settings → Collaborators**
2. Invitez les membres de l'association qui doivent pouvoir modifier le contenu
3. Ils devront accepter l'invitation par e-mail et créer un compte GitHub s'ils n'en ont pas

---

## Vérification finale

- Le site est accessible à l'URL Netlify
- L'interface d'administration est accessible à `[URL du site]/admin`
- Un administrateur peut se connecter avec son compte GitHub et modifier le contenu
- Après une modification et un clic "Publier", le site se met à jour en moins de 3 minutes
