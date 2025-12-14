# Story Teller - A Firebase Studio Project

This is a children's story generation application built with Next.js and Firebase Studio. It allows users to create story outlines, generate creative prompts, expand outlines into full stories using AI, and save their creations.

## Key Features

- **Interactive Story Template**: A form to create a detailed story outline.
- **AI-Powered Prompt Generation**: Generates unique story ideas based on a theme and keywords.
- **AI Story Expander**: Transforms a simple outline into a complete children's story.
- **Saved Stories**: Persists user-created stories using Firebase Firestore.
- **Multi-language Support**: English and Traditional Chinese.

## Technical Details

This project is built on a modern, server-centric web stack:

| Technology         | Version | Description                                |
| ------------------ | ------- | ------------------------------------------ |
| **Next.js**        | `15.x`  | The React framework for server-driven UI.  |
| **React**          | `19.x`  | A library for building user interfaces.    |
| **TypeScript**     | `5.x`   | Superset of JavaScript for type safety.    |
| **Tailwind CSS**   | `3.x`   | A utility-first CSS framework.             |
| **ShadCN/UI**      | `latest`| Re-usable UI components.                   |
| **Genkit**         | `1.x`   | Google's framework for building AI flows.  |
| **Firebase**       | `11.x`  | Platform for backend services.             |
| **- Firestore**    | `sdk`   | NoSQL database for saving stories.         |

## Getting Started

To run this project locally, you will need Node.js and an active Firebase project.

### 1. Set Up Environment Variables

This project requires credentials to connect to Firebase.

1.  Create a file named `.env` in the root of the project.
2.  Follow the instructions provided in the Firebase Studio conversation to get your Firebase project's public configuration keys.
3.  Add the keys to your `.env` file like this:

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY="..."
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="..."
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="..."
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="..."
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="..."
    NEXT_PUBLIC_FIREBASE_APP_ID="..."
    ```
    
    _Note: Any packages added to `package.json` are installed automatically._

### 2. Run the Development Server

Once your environment variables are set, you can start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:9002](http://localhost:9002).
