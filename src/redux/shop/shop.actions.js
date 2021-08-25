import { SET_COLLECTIONS, FETCH_COLLECTIONS_START } from "./shop.types";

export const fetchCollectionsSuccess = (collections) => ({
  type: SET_COLLECTIONS,
  payload: collections,
});

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});
