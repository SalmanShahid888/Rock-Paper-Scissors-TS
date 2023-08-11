# Introduction

This Project is part of Techincal Interview Task for [Sprouts.ai](https://sprouts.ai/) based on Rock, Paper and Scissors Game built using React and TypeScript.

## Tech Stack

This Project is bootsrapped using [Vite](https://vitejs.dev/) and uses [React](https://reactjs.org/) as a Frontend Library and [TypeScript](https://www.typescriptlang.org/). It also uses [TailwindCSS](https://tailwindcss.com/) for styling.

## Live Demo:

```bash
https://rock-paper-scissors-ts.vercel.app/
```

# Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/SalmanShahid888/Rock-Paper-Scissors-TS
```

&nbsp;

#### Step 2: Change directory to project folder

```bash
cd Rock-Paper-Scissors-TS
```

&nbsp;

#### Step 3: Install Dependencies

```bash
npm install
```

&nbsp;

#### Step 4: Run the Project

```bash
npm run dev
```

&nbsp;

##### - You would now see a similar output in your terminal

```bash
> vite-project@0.0.0 dev
> vite


  VITE v4.4.9  ready in 1923 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

##### - Navigate to `http://localhost:5173/` in your browser to view the project

<mark>Development Environment Note:</mark>

In Development Environment, Score updates two times adding 2 to score, This is not a bug and can be fixed by removing react strict mode from `main.tsx` file.

```ts
<React.StrictMode>//</React.StrictMode>
```

&nbsp;

# How to Play:

- Select the Game Mode
- Choose Your Pick
  `Rock` `Paper` `Scissors`
- If you Win your scores will get updated on Left Side
- If you Lose your scores will get updated on Right Side
- Based on your Game mode your opponent will be either Computer or another Player.

&nbsp;

---

&nbsp;

## Vite Config Notes:

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
