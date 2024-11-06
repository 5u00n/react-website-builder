# Web Page Builder with CraftJS, React, Tailwind CSS, and Firebase

This project is a powerful web page builder that combines the flexibility of CraftJS with the robustness of React, Tailwind CSS, and Firebase. It allows users to create dynamic web pages with a drag-and-drop interface while leveraging Firebase for authentication and database management. The project also incorporates shadcn UI components and Aceternity UI for enhanced design capabilities.

## Features

- Drag-and-drop page builder using CraftJS
- React-based frontend for a smooth user experience
- Tailwind CSS for utility-first styling
- shadcn UI components for consistent and customizable UI elements
- Aceternity UI for advanced animations and interactions
- Firebase Authentication for secure user management
- Firebase Realtime Database for storing and retrieving page designs
- Responsive design for various screen sizes

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- Firebase account and project set up

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/5u00n/react-webpage-builder.git
   cd react-webpage-builder
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up Firebase configuration:

   - Create a `.env` file in the root directory
   - Add your Firebase configuration details:
     ```
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

4. Install and configure Tailwind CSS:

   ```
   npm install -D tailwindcss
   npx tailwindcss init
   ```

5. Install shadcn UI and Aceternity UI:
   ```
   npm install @shadcn/ui aceternity-ui
   ```

## Usage

1. Start the development server:

   ```
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Sign up or log in using Firebase Authentication

4. Start building your web pages using the drag-and-drop interface, leveraging Tailwind CSS classes, shadcn UI components, and Aceternity UI animations

5. Your designs will be automatically saved to Firebase Realtime Database

## Deployment

To deploy the application:

1. Build the project:

   ```
   npm run build
   ```

2. Deploy to Firebase Hosting:
   ```
   firebase deploy
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## extra

- please remove material ui , and typescript , i dont wnat to loose funtionality and style , also use tailwind for stttyling

## Acknowledgments

- [CraftJS](https://craft.js.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn UI](https://ui.shadcn.com/)
- [Aceternity UI](https://ui.aceternity.com/)
- [Firebase](https://firebase.google.com/)
