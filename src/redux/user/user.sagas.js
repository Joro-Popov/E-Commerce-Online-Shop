import { takeLatest, put, all, call } from "redux-saga/effects";
import { GOOGLE_SIGN_IN_START } from "./user.types";
import { auth, googleProvider } from "../../utils/firebase";
import AuthService from "../../services/AuthService";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(AuthService.createUserProfile, user);
    const userSnapshot = yield userRef.get();

    yield put(googleSignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
    }));
  } catch (error) {
      yield put(googleSignInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
