# React Unsplash Image Search Project

This project is a React application that utilizes the Unsplash API to search for images based on user input. 

## Live Link and Source Code:

- Live Project Link: [React Unsplash Image Search](https://unsplash-images-infinite-scrolling.netlify.app/)
- Source Code: [Source Code Link](https://github.com/PranaV-Shimpi/20-React-apps/tree/main/06-unsplash-images-clone-infinite-scrolling)

## Images
![cats_unsplash](https://github.com/PranaV-Shimpi/20-React-apps/assets/40532644/ff7c2b7e-29f6-4af1-ab11-d946e2baaa9e)


## Key Concepts Used:
Project demonstrates the usage of various React concepts:

- **`useEffect`**: This hook is used for handling side effects in functional components. In this project, `useEffect` is employed to fetch data from the Unsplash API when the component mounts.

- **`useState`**: Another hook used in functional components to manage state. In this project, `useState` is utilized to store the search query entered by the user and the resulting images retrieved from the API.

- **API handling**: The project demonstrates how to interact with an external API (Unsplash) to retrieve data. It involves making HTTP requests to the API endpoint and handling the response data.
 
- **Search Query**: The term or phrase entered by the user into the search input field, used to fetch images related to the user's input from the Unsplash API.

- **Fetching API**: Using JavaScript's `fetch` function, this project retrieves images from the Unsplash API based on the user's search query.

- **Environment variables handling**: Sensible information like API keys should not be hard-coded into the application. Instead, they should be stored as environment variables. In this project, the Unsplash API access key is stored as an environment variable.

- **CSS media queries**: Media queries in CSS allow the styling of a web page to adapt to different screen sizes and devices. This project utilizes CSS media queries to ensure the application's responsiveness across various devices.

## Usage:

To use this project, follow these steps:

1. Clone the repository to your local machine:
```
git clone <repository link>
```

2. Navigate to the project directory:
```
cd 06-unsplash-images-clone-infinite-scrolling
```
3. Install dependencies using npm or yarn:
```
npm install / yarn install
```

4. Create a `.env` file in the root directory of the project and add your Unsplash API access key. You can obtain one by signing up on the [Unsplash Developer](https://unsplash.com/developers) website.

```
REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key_here

```

5. Start the development server:
```
npm start / yarn start
```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

7. Enter a search query in the input field and press Enter or click on the search button to retrieve images related to your query.

<br>
<br>

---
<div align="center">
  <p><i>Made with ❤️ by PranaV Shimpi</i></p>
</div>

---

Enjoy exploring and have fun searching for images with this React Unsplash Image Search project!
