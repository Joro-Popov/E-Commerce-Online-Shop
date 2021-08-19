import { firestore, auth } from "../utils/firebase";

const signUp = async (email, password) => {
  const {user} = await auth.createUserWithEmailAndPassword(email, password);
  return user;
};

const createUserProfile = async (userAuth, additionalData) => {
  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return userRef;
};

const authService = {
  createUserProfile,
  signUp,
};

export default authService;
