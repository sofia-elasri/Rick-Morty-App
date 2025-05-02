# Rick & Morty App

![Aperçu de l'application](./public/portal.png)

Cette application permet d'explorer l'univers de **Rick & Morty**. Elle utilise l'API publique de Rick & Morty pour afficher les personnages et propose diverses fonctionnalités comme la recherche, le filtrage et la gestion des favoris.

---

## ✨ Fonctionnalités

- 🔍 **Recherche par nom** des personnages
- 🧪 **Filtrage** par `status`, `species`, et `gender`
- 📄 **Pagination** sur les résultats
- ⭐ **Ajout/Suppression de favoris**
- 🌗 **Changement de thème** clair / sombre

---

## 🛠️ Technologies utilisées

- [**Next.js**](https://nextjs.org/) – Framework React avec rendu côté serveur (SSR)
- [**React**](https://reactjs.org/) – Bibliothèque JavaScript pour les interfaces
- [**Tailwind CSS**](https://tailwindcss.com/) – Framework CSS utilitaire
- [**Lucide Icons**](https://lucide.dev/) – Icônes SVG pour React
- [**Next-Themes**](https://github.com/pacocoursey/next-themes) – Gestion du thème dark/light

---

## 🚀 Installation

### Prérequis

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Étapes


#### 1. Cloner le projet
    ```bash
    git clone https://github.com/sofia-elasri/Rick-Morty-App.git

#### 2. Accéder au dossier
    cd Rick-Morty-App

#### 3. Installer les dépendances
    npm install

#### 4. Lancer le serveur de développement
    npm run dev

#### 5. Ouvrez votre navigateur et accédez à http://localhost:3000.

## Structure du projet

/pages : Contient les pages principales de l'application.

/components : Contient les composants réutilisables (ex. : Header, ThemeToggle).

/context : Gestion de l'état global de l'application (ex. : favoris).

/public : Contient les ressources statiques (images, icônes).

/styles : Contient les fichiers de style globaux.


