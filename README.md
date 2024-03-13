<img src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1768020/32dc375db841e7da934da0fb037e02686279d399.png" />

# The Frame (Expo)

Serves as a boilerplate for kickstarting React Native projects using the Expo framework.

## Roadmap

Some intended in-progress features include:

| Idx | Feature                                                    | Progress |
| --- | ---------------------------------------------------------- | -------- |
| 1   | React Navigation structure                                 | WIP      |
| 2   | Adds deployment configuration, Expo-updates,... (WIP)      | WIP      |
| 3   | Grants freedom of choice so that user can customize fully. | WIP      |

Feel free to submit to recommend more features. Thanks!

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/package/npm) installed on your machine. Additionally, you might need to install [Expo CLI](https://docs.expo.dev/get-started/installation/) for better setup.

### Installation

1. Using Expo commands, add this template to the command:

```bash
npx create-expo-app@latest <your-project-name> --template @mngh12/the-frame
```

2. Navigate to the project directory:

```bash
cd <your-project-name>
```

3. Install dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### Running the App

Start the Expo development server:

```bash
npm run ios
```

or

```bash
npm run android
```

And let the magic happens!

## Project Structure

The project structure is designed to provide a clear organization of code. Here's an overview:

- **assets**: Store static assets like images, fonts, etc.
- **components**: Reusable components, please add more!
- **app**: Main screen components of the app. Since we're using [Expo Router](https://docs.expo.dev/router/introduction/), which is a file-based router for React-Native and web applications, we don't have navigation folder setting up here. (we'll try to bring back navigation in future releases). And oh yeah, it's still native navigation baby!
- **stores**: Contains 3 small chunks:
  - api: Contains all api-related code. Axios, interceptors, middlewares should be in here.
  - client: Contains client state management, separated from server state. We're using [zustand](https://github.com/pmndrs/zustand) as our default libraries. Feel free to uninstall and install others.
  - server: Contains server state management, separated from client state. We're using [React Query](https://tanstack.com/query/latest/docs/framework/react/react-native) (and we cannot recommend enough).
  - models: type-declaring goes this way.
- **themes**: Styling and theming configuration.
- **utils**: App-related constants.

Feel free to modify and extend the structure based on the needs of your project.

## Features

- Expo Ecosystem: Leverage the power of Expo for a simplified React Native development experience.
- Navigation: Setup with Expo Router for easy navigation between screens.
- Theme Configuration: Customize the app's theme and styling from the centralized theme file.
- Component Reusability: Utilize reusable components to maintain a modular codebase.
- Sample Screens: Includes example screens to help you get started quickly.

## Contributing

If you'd like to contribute, please follow the [contribution guidelines](CONTRIBUTING.md) in this repository.

## Code of Conduct

Please check out the [Code of Conduct](CODE_OF_CONDUCT.md) file for more information.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Special thanks to the Expo and React Native communities for their continuous support and contributions.

Feel free to use this template as a foundation for your React Native Expo projects. Happy coding!
