# Micro FrontEnd - Exemple Simple

Ce projet est une démonstration simple de l'architecture micro frontend. Il illustre comment deux applications distinctes peuvent être intégrées en une seule.

## 📌 Description

Ce projet contient deux applications :
- **Provider** (`header`) : Un micro frontend qui expose une partie de l'interface utilisateur.
- **Consumer** (`shell`) : L'application principale qui intègre le micro frontend du provider.

## 📂 Structure du projet

```
/micro-frontend-example
│── /header  (Provider)
│── /shell   (Consumer)
│── README.md
```

## 🚀 Installation & Démarrage

### 1️⃣ Lancer le Provider (`header`)
```sh
cd header
npm install
npm run dev
```

### 2️⃣ Lancer le Consumer (`shell`)
```sh
cd shell
npm install
npm run dev
```

## 🛠 Technologies utilisées
- **Module Federation** 
- **React**
- **npm**
---

Si vous avez des questions ou des suggestions, n'hésitez pas à ouvrir une issue ! 😊
