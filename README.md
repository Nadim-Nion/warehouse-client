# BooksHive (Client Side)
## Warehouse or Inventory Management Website

BooksHive is a comprehensive MERN (MongoDB, Express.js, React, Node.js) stack project designed to manage inventory items efficiently. This web application provides user authentication, inventory management, and more.

### Key Features & Functionalities:

- **User Authentication**:
  - Implement secure email/password-based authentication and social logins (Google, Facebook, GitHub).
  - Persistent login sessions and secure logout functionality.

- **Inventory Management**:
  - View, update, and manage inventory items.
  - Each inventory item includes detailed information such as name, image, description, price, quantity, supplier name.
  - Ability to update item quantities, mark items as delivered, and restock inventory.

- **Multiple Pages**:
  - Home Page:
    - Displays a header with navigation, banner, and sections showcasing inventory items.
    - Interactive buttons for managing items and navigating to detailed views.
    - Additional unique sections and tips to enhance user engagement.
  - Inventory Details Page (`inventory/:id`):
    - Protected route showing detailed information of a specific inventory item.
    - Option to update quantities, mark items as delivered, and restock items.
  - Manage Inventory Page:
    - Accessible through the Manage Inventories link/button.
    - View all inventory items in a structured format (e.g., table).
    - Perform actions such as deleting items and adding new inventory items.

- **User-Specific Views**:
  - My Items Page:
    - Display items specific to the logged-in user.
    - Ability to delete or cancel items with confirmation prompts.

- **Blog Section**:
  - Non-protected route featuring informative blog posts.
  - Addresses common queries related to JavaScript, Node.js, MongoDB, SQL vs NoSQL, and JWT.

- **Authentication & Security**:
  - Implement JWT (JSON Web Tokens) for secure authentication.
  - Error handling for incorrect login credentials and unauthorized access.
  - Send email verification (with toast notifications).

- **Additional Features**:
  - Responsive design for desktop and mobile.
  - Meaningful 404 (Not Found) page.

### Bonus Features:
  - Loading spinners for data fetching.
  - Environment variables for secure configuration.
  - Enhanced confirmation dialogues.
  - Pagination for managing large inventories.
  - Use of axios for API calls.

This project aims to provide a seamless user experience for managing and tracking inventory items within a warehouse setting, coupled with essential security features and responsive design.

### Technologies Used:

#### React with Vite
- **React**: The project utilizes React, a popular JavaScript library for building user interfaces. React's component-based architecture enables efficient and reusable code, enhancing the development workflow.
- **Vite**: Vite is used as the build tool for the project, providing fast development server and optimized production build. It leverages native ES modules for quick loading in the browser.

#### React Router
- **React Router**: Used for navigation and routing within the React application. React Router allows for declarative routing, enabling different components to be rendered based on the URL.

#### Tailwind CSS & Daisy UI
- **Tailwind CSS**: A utility-first CSS framework used for styling components. Tailwind CSS streamlines the design process by offering a set of predefined utility classes, facilitating rapid development.
- **Daisy UI**: A Tailwind CSS component library that extends Tailwind with additional UI components, aiding in the creation of consistent and visually appealing user interfaces.

#### Fetch API / Axios JS
- **Fetch API / Axios**: Used for making HTTP requests from the client-side to interact with backend APIs. Fetch API provides a built-in way to fetch resources asynchronously, while Axios is a popular library for handling HTTP requests with additional features like request cancellation and interceptors.

#### Firebase (Authentication & Hosting)
- **Firebase Authentication**: Integrated Firebase Authentication for user authentication and authorization. Firebase offers robust authentication services, including email/password authentication and social login providers (e.g., Google, Facebook).
- **Firebase Hosting**: Leveraged Firebase Hosting for deploying and hosting the front-end application. Firebase Hosting provides a secure and scalable platform for serving static assets and dynamic content.

#### State Management: Context API
- **Context API**: Utilized React's Context API for managing application-level state. Context API facilitates state propagation across the component tree without using prop drilling, improving code readability and maintainability.

#### Tools
- **Netlify**: Deployed and hosted the project on Netlify, leveraging its continuous deployment capabilities and global CDN for fast content delivery.
- **Surge**: Used for deploying static assets and hosting the front-end during development stages or for smaller projects.
- **NPM**: Managed project dependencies and scripts using NPM (Node Package Manager), ensuring efficient package management and version control.

These front-end technologies and tools collectively enable efficient development, seamless user experience, and scalable deployment of the BooksHive project. Each technology contributes to specific aspects of the front-end architecture, ensuring robustness and flexibility in the application's design and functionality.


## Live Website

* Firebase: https://warehouse-client-74323.web.app/

* Netlify: https://warehouse-client-nion.netlify.app/

* Surge: http://narrow-yoke.surge.sh/
## Installation

Get up and running with the Car Doctor website's client-side code in just three easy steps using npm:

1. **Clone the Repository:**

   Begin by cloning this repository using Git. Replace `<repository-url>` with the actual URL of your repository:

   ```bash
   git clone <repository-url>
   cd warehouse-client  # Replace with your project's directory name
   ```

2. **Install Dependencies:**

   Navigate to the project directory (`Car-Doctor-Client-Side` in this example) and execute the following command to install all the necessary project dependencies:

   ```bash
   npm install
   ```

   This command will download and install the JavaScript libraries and tools required for the Car Doctor website to function correctly.

3. **Start the Development Server:**

   Once the dependencies are installed, you can launch the development server using the following command:

   ```bash
   npm start
   ```

   This command will typically start a development server using Vite or another similar tool, allowing you to view and interact with the website in your web browser (usually at `http://localhost:3000` or a similar address).

**Additional Notes:**

- Make sure you have Git and npm installed on your system before proceeding. You can download them from the official websites:
   - Git: [https://git-scm.com/downloads](https://git-scm.com/downloads)
   - npm: [https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)
- Refer to the project's README file for any specific configuration or environment setup instructions.

By following these steps, you'll have a local development environment set up and running, allowing you to explore the Car Doctor website's code and potentially contribute to its further development.Absolutely, here's the section on commits with a potential improvement:

## Commits

This repository adheres to a structured commit message convention to enhance readability and maintainability. Here's an overview of the key commit types:

- **feat:** Introduces a new feature to the application.
- **fix:** Addresses a bug or issue identified in the codebase.
- **docs:** Encompasses changes made to documentation, such as updates, additions, or corrections.
- **style:** Covers formatting adjustments, whitespace changes, or fixing minor inconsistencies like missing semicolons.
- **refactor:** Represents code structure improvements without altering functionality. This can involve code organization, renaming variables or functions, or improving readability.
- **test:** Introduces new tests or updates existing tests to ensure code quality and maintainability.
- **chore:** Encompasses changes that don't directly affect the application's functionality, such as updating build tasks, package manager configurations, or dependency versions.

**Optional Improvement:**

Consider adopting a more comprehensive commit message convention like Conventional Commits ([https://www.conventionalcommits.org/en/v1.0.0-beta.4/](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)). This approach provides a standard format for commit messages, including type, scope (optional), and a clear description of the change, making it easier to generate changelogs, automate workflows, and collaborate effectively.

By following these guidelines and potentially adopting a more detailed convention, you'll ensure clear and consistent commit messages that benefit you and your team in the long run.
## Contributing

Contributions are always welcome!

Contributions are welcome! Please open a pull request for any improvements or features.

Please adhere to this project's `code of conduct`.


## License

This project is licensed under the [MIT License](LICENSE).


## Deployment

To deploy this project run

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Nadim-Nion/warehouse-client.git
git push -u origin main

```


## Screenshots

* Image 1: 
![BooksHive 1](https://github.com/Nadim-Nion/warehouse-client/assets/60613933/b6f67526-6c98-4ecc-8164-dcbb9c120b23)

* Image 2: 
![BooksHive 2](https://github.com/Nadim-Nion/warehouse-client/assets/60613933/682355d4-fb88-472a-a50e-2924477c9d69)

* Image 3: 
![BooksHive 3](https://github.com/Nadim-Nion/warehouse-client/assets/60613933/dc168700-db23-4aa6-8a1e-a1bf526d9a26)

* Image 4: 
![BooksHive 4](https://github.com/Nadim-Nion/warehouse-client/assets/60613933/052727eb-c341-4c76-bec2-b3b9c696edb4)

* Image 5: 
![BooksHive 5](https://github.com/Nadim-Nion/warehouse-client/assets/60613933/0a8694c8-a179-45b2-9833-db3062e84574)

* Image 6:  
![BooksHive 6](https://github.com/Nadim-Nion/warehouse-client/assets/60613933/2dee9328-76a1-449d-994d-40d2b21c00ce)

## Tech Stack

**Client:** React+Vite, React Router, Firebase (Authentication & Hosting), Tailwind CSS, Daisy UI, Axios JS

**Server:** Express.js, Node.js, JWT

**Database:** MongoDB

**Tools:** Vite, Vercel, npm, Surge, Netlify

**State Management:** Context API



## FAQ

#### Is this website reponsible?

Answer : Yes, the full website is responsive for the all devices (Desktop, Tablet and Phone)

#### Is this website store data to the database?

Answer : I have stored all the data in MongoDB.

## 🚀 About Me
Hi, I am Nadim Mahmud Nion. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at the Daffodil International University (DIU). I have been learning MERN Stack Web Development since 2022. I am expertise in the following skills:

* React

* Express.js 

* Node.js 

* MongoDB

* JWT

* Vite

* React Router

* Firebase (Authentication & Hosting)

* Vercel

* JavaScript

* Advanced JavaScript

* Daisy UI 

* Bootstrap

* Tailwind

* HTML5

* CSS3

* Media Query

I have built multiple projects using these skills. You are invited to my GitHub profile to know about my projects and don't forget to give a star to my projects.

