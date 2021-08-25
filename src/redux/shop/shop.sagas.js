import { takeLatest, call, put, all } from "redux-saga/effects";
import { firestore } from "../../utils/firebase";
import { fetchCollectionsSuccess } from "./shop.actions";
import { setIsLoading } from "../common/common.actions";
import { FETCH_COLLECTIONS_START } from "./shop.types";
import DatabaseService from "../../services/DatabaseService";

export function* fetchShopCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      DatabaseService.convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
    yield put(setIsLoading(false));
  } catch (error) {
    yield console.log(error.message);
  }
}

export function* fetchShopCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchShopCollectionsAsync);
}

export function* userSagas() {
  yield all([call(fetchShopCollectionsStart)]);
}
