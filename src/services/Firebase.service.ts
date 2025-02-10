import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGE_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
};

const app = initializeApp(config);

const auth = getAuth(app);

export { auth };
