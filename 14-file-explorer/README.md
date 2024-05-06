# File Explorer in React

The **Folder Explorer Component** is a React component that allows users to create, view, and manage a folder structure. It provides functionalities like adding folders and files, renaming items, and deleting items. The component is designed to be highly customizable and responsive across different devices.

- Source-code : [File explorer code](https://github.com/PranaV-Shimpi/20-React-apps/tree/main/14-file-explorer)
- Project Demo: [https://ps-file-explorer.netlify.app/](https://ps-file-explorer.netlify.app/)


## Images
![image](https://github.com/PranaV-Shimpi/20-React-apps/assets/40532644/a6d81c53-0311-4342-a4d7-109cf9857cec)

## Features

- Create folders and files
- Rename folders and files
- Delete folders and files
- Expand and collapse folder structure
- Error handling for invalid operations
- Responsive design for desktop, tablet, and mobile devices
  
## Functionalities

### Create

- **Add Folder:** Click the "+" button to add a new folder. Enter the folder name and press Enter to create it.
- **Add File:** Click the "+" button to add a new file. Enter the file name and press Enter to create it.

### Rename

- **Edit Name:** Double-click on the folder or file name to edit it. Press Enter to save the new name.

### Delete

- **Delete:** Click the "❌" button to delete a folder or file. Note: Root folder and package.json file cannot be deleted.

### Expand/Collapse

- **Expand/Collapse:** Click on a folder to expand or collapse its contents.

### Error Handling

- Error messages are displayed when invalid operations are attempted, such as creating a folder under a file or deleting the root folder.

### Data Structures

- The component internally uses Depth-First Search (DFS) to traverse the folder structure and dynamic programming techniques for efficient node manipulation.

### Custom Hooks

- The component utilizes custom hooks for state management and encapsulation of logic, such as useTraverseTree for traversing the folder structure and performing operations.

### Responsive Design

- The component is designed to adapt to different screen sizes, with adjustments made for desktop, tablet, and mobile devices.


## Running the Application

To run the Recipe Finder app locally:

1. Clone the repository: `git clone https://github.com/PranaV-Shimpi/20-React-apps.git`
2. Navigate to the project directory: `cd 14-file-explorer`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request. Be sure to follow the project's coding conventions and guidelines.

---

<p align="center">
 Made with ❤️ by  PranaV Shimpi
</p>


<p align="center" >This project is part of the <a href="https://github.com/PranaV-Shimpi/20-React-apps" target="_blank">20 React Apps</a> series by PranaV Shimpi.</p>
