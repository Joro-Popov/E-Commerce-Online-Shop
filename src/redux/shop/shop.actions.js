import { SET_COLLECTIONS } from "./shop.types";

export const fetchCollectionsSuccess = (collections) => ({
  type: SET_COLLECTIONS,
  payload: collections,
});


