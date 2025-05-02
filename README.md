# Rick & Morty App

Cette application permet d'explorer l'univers de **Rick & Morty**. Elle récupère les personnages de la série à l'aide de l'API publique de Rick & Morty et offre des fonctionnalités telles que la pagination, la recherche, le filtrage et la gestion des personnages favoris.

## Fonctionnalités

- **Liste des personnages** : Affichage des personnages avec leur nom, image et description.
- **Pagination** : Affichage des personnages en plusieurs pages.
- **Recherche par nom** : Recherche des personnages par leur nom.
- **Filtrage** : Filtrer les personnages par `status`, `species`, et `gender`.
- **Favoris** : Ajouter ou retirer des personnages favoris, visibles sur une page dédiée.
- **Thème clair/sombre** : Le thème peut être changé entre clair et sombre.

## Technologies utilisées

- **Next.js** : Framework pour React avec rendu côté serveur (SSR).
- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **Tailwind CSS** : Framework CSS pour une personnalisation rapide et flexible des styles.
- **Lucide Icons** : Bibliothèque d'icônes React.
- **Next-Themes** : Gestion du thème clair/sombre.

## Installation

### Prérequis

Assurez-vous que vous avez installé [Node.js](https://nodejs.org/) et [npm](https://www.npmjs.com/) sur votre machine.

### Étapes

1. Clonez ce dépôt sur votre machine :

   ```
   git clone https://github.com/sofia-elasri/Rick-Morty-App.git
   
2. Accédez au répertoire du projet :
   ```
   cd rick-morty-app

3. Installez les dépendances :
   ```
   npm install

4.Lancez le projet en mode développement :
    
    npm run dev
5. Ouvrez votre navigateur et accédez à http://localhost:3000.

## Structure du projet

/pages : Contient les pages principales de l'application.

/components : Contient les composants réutilisables (ex. : Header, ThemeToggle).

/context : Gestion de l'état global de l'application (ex. : favoris).

/public : Contient les ressources statiques (images, icônes).

/styles : Contient les fichiers de style globaux.


