# Vertical React Carousel

Main stack:

- [TypeScript](https://github.com/microsoft/TypeScript)
- [Create React App](https://github.com/facebook/create-react-app)
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)
- [Jest](https://github.com/jestjs/jest)

### Carousel Component has an option for step order:
```HTML
    <Carousel
      handleQuestion={setQuestions}
      hadnleSubmit={submitForm}
      ordered   /**  if it's true user is not allowed skip forward steps  **/
    />
```

### Main Carousel Data Structure:
```TYPESCRIPT
export interface ListItemDto {
    id: number;
    title: string;
    required?: boolean;
    allowChange?: boolean;
    isSammary?: boolean;
    options?: {
        id: number;
        icon: string;
        label: string;
    }[];
    answer?: {
        id: number;
        icon: string;
        label: string;
    };
}
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
