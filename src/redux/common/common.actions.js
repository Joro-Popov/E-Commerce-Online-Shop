import { SET_IS_LOADING } from "./common.types";

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});
