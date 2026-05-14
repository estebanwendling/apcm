# Configuration initiale du site APCM

Ce guide est destiné à la personne technique qui met en place le site pour la première fois. Il décrit les étapes à réaliser une seule fois.

**Dépôt GitHub :** `https://github.com/estebanwendling/apcm`  
**URL du site :** `https://estebanwendling.github.io/apcm`  
**Interface admin :** `https://estebanwendling.github.io/apcm/admin`

---

## Prérequis

- Accès au compte GitHub `estebanwendling`
- Un compte Netlify gratuit (uniquement pour l'authentification du CMS — le site n'est **pas** hébergé sur Netlify)

---

## Étape 1 — Pousser le code sur GitHub

Le code est déjà configuré pour ce dépôt. Il suffit de pousser :

```bash
git remote add origin https://github.com/estebanwendling/apcm.git
git push -u origin main
```

---

## Étape 2 — Activer GitHub Pages

1. Dans le dépôt GitHub, allez dans **Settings → Pages**
2. Sous "Source", sélectionnez **"GitHub Actions"**
3. Sauvegardez

Le premier déploiement se lance automatiquement. Le site sera accessible à `https://estebanwendling.github.io/apcm`.

---

## Étape 3 — Configurer l'authentification OAuth (Netlify)

Le CMS Decap a besoin d'un proxy OAuth pour que les administrateurs puissent se connecter avec GitHub. Netlify fournit ce service gratuitement.

### 3a. Créer un compte Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte gratuit (pas besoin de créer un site)

### 3b. Créer une OAuth App GitHub

1. Connecté sur le compte GitHub `estebanwendling`, allez dans **Settings → Developer settings → OAuth Apps → New OAuth App**
2. Remplissez :
   - **Application name** : `APCM CMS`
   - **Homepage URL** : `https://estebanwendling.github.io/apcm`
   - **Authorization callback URL** : `https://api.netlify.com/auth/done`
3. Cliquez sur **"Register application"**
4. Notez le **Client ID** affiché
5. Cliquez sur **"Generate a new client secret"** et notez la valeur (elle ne sera affichée qu'une seule fois)

### 3c. Ajouter les secrets au dépôt GitHub

1. Dans le dépôt `estebanwendling/apcm`, allez dans **Settings → Secrets and variables → Actions**
2. Cliquez sur **"New repository secret"** et ajoutez :
   - Nom : `OAUTH_CLIENT_ID` → valeur : le Client ID de l'étape précédente
   - Nom : `OAUTH_CLIENT_SECRET` → valeur : le Client Secret

### 3d. Connecter Netlify à GitHub OAuth

1. Dans votre compte Netlify, allez dans **User settings → Applications → OAuth**
2. Ajoutez une nouvelle application GitHub avec les mêmes Client ID et Client Secret

---

## Étape 4 — Donner accès aux administrateurs

1. Dans le dépôt GitHub, allez dans **Settings → Collaborators**
2. Invitez les membres de l'association qui doivent pouvoir modifier le contenu
3. Ils doivent accepter l'invitation et créer un compte GitHub s'ils n'en ont pas

---

## Vérification finale

- Le site est accessible à `https://estebanwendling.github.io/apcm`
- L'interface d'administration est accessible à `https://estebanwendling.github.io/apcm/admin`
- Un administrateur peut se connecter avec son compte GitHub et modifier le contenu
- Après une modification et un clic "Publier", le site se met à jour en moins de 5 minutes
