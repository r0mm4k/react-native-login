import Constants from 'expo-constants';

const FIREBASE_CONFIG = {
  apiKey: Constants.manifest?.extra?.API_KEY,
  authDomain: Constants.manifest?.extra?.AUTH_DOMAIN,
  projectId: Constants.manifest?.extra?.PROJECT_ID,
  storageBucket: Constants.manifest?.extra?.STORAGE_BUCKET,
  messagingSenderId: Constants.manifest?.extra?.MESSAGING_SENDER_ID,
  appId: Constants.manifest?.extra?.APP_ID,
};

const ANDROID_GOOGLE_CLIENT_ID =
  Constants.manifest?.extra?.ANDROID_GOOGLE_CLIENT_ID;
const IOS_GOOGLE_CLIENT_ID = Constants.manifest?.extra?.IOS_GOOGLE_CLIENT_ID;

export { FIREBASE_CONFIG, ANDROID_GOOGLE_CLIENT_ID, IOS_GOOGLE_CLIENT_ID };
