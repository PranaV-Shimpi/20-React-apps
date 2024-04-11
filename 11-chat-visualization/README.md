# ChatRoom Web Application

## Overview
The ChatRoom web application is a real-time chat platform built using React. It allows users to communicate with each other in a multi-user chat environment. The application supports features such as sending and receiving messages, displaying typing indicators, and loading messages asynchronously.

## Demo
Live App: [Chat Visualization](https://chat-visualization.netlify.app/)

## Images
![chat application](https://github.com/PranaV-Shimpi/20-React-apps/assets/40532644/fbafeb29-68a1-4815-807b-0d41b3d7a04a)


## Features
- **Real-time Messaging:** real-time communication between users.
- **React Components:** The application is built using reusable React components for a modular and maintainable codebase.
- **State Management:** Utilizes React Hooks and local component state to manage the application's state and data flow.
- **Asynchronous Loading:** Messages are loaded asynchronously from the server to provide a seamless user experience.
- **Typing Indicators:** Displays typing indicators when other users are composing messages in the chat room.
- **Component Lifecycle:** Implements React lifecycle methods for component initialization, mounting, updating, and unmounting.

## Code Specifics 
- **ChatRoom Component:** The main component responsible for managing the chat functionality, including sending and receiving messages.
- **InputMessage Component:** Handles user input for sending messages and updates the chat state accordingly.
- **MessageItem Component:** Displays individual chat messages, including the sender's name and message content.
- **MessageList Component:** Renders a list of messages within the chat room, allowing users to scroll through past messages.
- **TypingIndicator Component:** Shows typing indicators when other users are actively typing messages.
- **React Hooks:** Utilizes useState and useEffect hooks to manage component state and side effects.
- **CSS Styling:** Applies CSS styles to enhance the visual appearance and user experience of the chat interface.


## Getting Started
1. Clone the repository:

```
git clone https://github.com/PranaV-Shimpi/20-React-apps.git
```
2. Install dependencies:

```
cd 11-chat-visualization
npm install 
npm install react-icons
```

Start the development server:
```
npm start
```
Open your web browser and navigate to http://localhost:3000 to view the app.

## Usage
Once the application is running, you can:
- Type messages in the input field and press Enter to send.
- See typing indicators when other users are typing.
- Receive messages in real-time from other users.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request. Be sure to follow the project's coding conventions and guidelines.

---
<p align="center">
 Made with ❤️ by  PranaV Shimpi
</p>


<p align="center" >This project is part of the <a href="https://github.com/PranaV-Shimpi/20-React-apps" target="_blank">20 React Apps</a> series by PranaV Shimpi.</p>