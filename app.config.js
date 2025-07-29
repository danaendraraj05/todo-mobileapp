// app.config.js

import 'dotenv/config';

export default () => ({
  expo: {
    name: "todo-mobileapp",
    slug: "todo-mobileapp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/todo-app.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/todo-app.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    extra: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/todo-app.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
});
