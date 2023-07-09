import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    const firebaseConfig = {
      apiKey:  process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };
    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig)
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error);
  }
}

export default admin.firestore();