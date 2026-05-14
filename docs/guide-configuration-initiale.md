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

Le CMS Decap a besoin d'un proxy OAuth pour que les administrateurs puissent se connecter avec GitHub. Netlify fournit ce service gratuitement et gère automatiquement le Client ID et le Client Secret.

### 3a. Créer un compte Netlify et un site

1. Allez sur [netlify.com](https://netlify.com) et créez un compte gratuit
2. Créez un nouveau site (peut être vide — il sert uniquement de proxy OAuth)

### 3b. Activer GitHub comme provider OAuth

1. Dans votre site Netlify, allez dans **Site configuration → Access control → OAuth**
2. Sous "Authentication Providers", cliquez sur **"Install GitHub"**
3. Autorisez Netlify à accéder à GitHub

Netlify génère automatiquement les identifiants OAuth — vous n'avez rien d'autre à configurer.

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
