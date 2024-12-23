# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Overview

This project is a **React-based web application** featuring token-based authentication for login and registration. The application is designed to handle form validations seamlessly using **Formik** and **Yup** while managing global state efficiently with **Redux**.

### Key Features

1. **Authentication System**:
   - Login and registration are implemented using a token-based authentication mechanism.
   - Tokens are securely stored in **localStorage** for maintaining user sessions.

2. **Form Validation**:
   - **Formik** is used to handle form state and submission.
   - **Yup** is integrated for schema-based form validation, ensuring user inputs are accurate and secure.

3. **State Management**:
   - **Redux** is employed to manage global state effectively.
   - The `dispatch` method is used to send messages and update the application state across components.

4. **Responsive UI**:
   - The application is designed to provide a seamless experience across devices.
   - Material-UI components are used to build a modern and consistent UI.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Formik & Yup**: For form state management and validation.
- **Redux**: For global state management and message dispatch.
- **Material-UI**: For responsive and modern UI components.
- **localStorage**: For securely storing authentication tokens.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Troubleshooting

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
