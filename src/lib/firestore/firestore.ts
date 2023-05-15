import admin, { ServiceAccount } from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    const credentials = serviceAccount as ServiceAccount
    admin.initializeApp({
      credential: admin.credential.cert(credentials)
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error);
  }
}

export default admin.firestore();