# React TS boilerplate

This Project is bootstrapped from `create-react-app`, using the `typescript` template, with the most commonly used packages with React, such as: axios, redux, redux-saga, redux-persist.

## Infrastructure

The App is using redux to separate the data layer, along with redux helper liberaries such as `redux-saga`, `redux-persist`.

infrastructure can be summed up in this diagram

![React Project High-level architecture!](https://miro.medium.com/max/1400/0*wwuz-mU0KY4vsjLo)

---

### Folder Structure Highlights:

- /Components

  - Components folder should only contain small generic components as the name suggests.

  - Only shared components used across features are placed here. So basically, components that are reusable in multiple places like Button, Checkbox ...etc.

  - **Elements folder**: will have small general elements such as Button, Checkbox.

  - **Panels**: will have the container panels that can have elements as children.

  - **Lists**: will have the reusable custom UI lists such Carousels & Collage for example.

- /Modules

  - Generic Large Components which acts like parts of the screen & not generally reusable that much. Such as: ChracterFaceControls.tsx.

- /Modals

  - Modals will be separated as a standalone folder because it’s not components and it acts much like pages, thus the idea behind making a separate folder for it to have all the modals listed in this folder.

- /**tests** :

  - Jest framework is default supported by react for unit testing the application.

  - All the unit test files can be placed inside **tests** dir alongside the corresponding .ts files as recommended by react official documentation (Running Tests | Create React App ).

  - It can be components, miscellaneous functions, containers, or like so.

### Code Instructions:

- For the file name, we will use the `CapitalCamelCase` for naming Components and `lowerCamelCase` for custom hooks, and do not use `index.ts` file under each directory to prevent flooding the app with tons of `index.ts` files.

- For CSS class names: use only `lower-case-letters-with-dashes`.

- Custom Hooks file name and hook name should start with `use` word.

- At the top of the file use package level imports and followed by a single line followed by project level imports and then a single line followed by Props or Component needed interfaces separated by a single line and then the component definition.

- Use `export` before component definition and don't use `export default` at the end of the file. Ex: `export const ComponentName`.

- For Styling Components, we are going to create a Folder for the Component that has two files, one for the JSX skeleton and one for the styles. Ex: The Header Component will create a “header” folder which will have two files: `Header.tsx` & `Header.scss`.

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
