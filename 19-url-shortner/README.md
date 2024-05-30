# URL Shortener

This URL Shortener React project is a web application that allows users to shorten long URLs. The application incorporates various modern React features and best practices, including structured components, custom animations, API integrations, Axios for HTTP requests, environment variables, hooks, error handling, and mobile responsiveness.

- Source-code : [URL Shortener](https://github.com/PranaV-Shimpi/20-React-apps/blob/main/19-url-shortner/README.md)
- Project Demo: [https://url-shortener-react-webapp.netlify.app/](https://url-shortener-react-webapp.netlify.app/)

# Video



https://github.com/PranaV-Shimpi/20-React-apps/assets/40532644/832fad80-4ffd-430d-9b46-86dbba998f9a





## Features

- **Structured Components**: T\*\*he project follows a well-organized component structure to ensure maintainability and scalability.
- **Custom Animations**: Implement custom animations to enhance user experience.
- **API Integrations**: Integrate with a URL shortening API to generate short URLs.
- **Axios**: Use Axios for making HTTP requests to the API.
- **.env**: Use environment variables to securely manage API keys and other sensitive information.
- **Hooks**: Utilize React hooks for state management and lifecycle methods.
- **Error Handling**: Implement robust error handling to manage API errors and other potential issues.
- **Mobile Responsive**: Ensure the application is responsive and works well on mobile devices.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/PranaV-Shimpi/20-React-apps.git
    cd 19-url-shortener
   ```

2. Install the dependencies:

   ```bash
   npm install
   npm i axios
   ```

3. Environment Variables
   Create a .env file in the root directory of the project and add your environment variables:

   ```bash
      REACT_APP_BITLY_ACCESS_TOKEN= 'YOUR TOKEN'
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Axios Integration

All API calls are made using Axios, with a central configuration to handle the base URL and headers.

```
// src/services/bitlyService.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
  }
});

export default api;
```

## Explanation of Project Structure

- **components/Background**: Components related to custom animations to enhance the user interface.

* **components/URLShortener**: Components specific to the URL shortening feature, including form and result display.

- **services/bitlyService.js**: Configuration and instance of Axios for making API calls, including setting the base URL and headers.

* **App.js**: Main App component where the primary application structure is defined.

* **index.js**: Entry point of the React application.
* **App.css**: Global styles applied across the application.

* **.env**: Environment variables file to manage API keys and other configuration securely.

## Contributing

We welcome contributions! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

<p align="center">
 Made with ❤️ by  PranaV Shimpi
</p>

<p align="center" >This project is part of the <a href="https://github.com/PranaV-Shimpi/20-React-apps" target="_blank">20 React Apps</a> series by PranaV Shimpi.</p>
