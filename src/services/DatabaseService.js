import { firestore } from "../utils/firebase";
import store from '../redux/store';
import { fetchCollectionsSuccess } from '../redux/shop/shop.actions';
import { setIsLoading } from "../redux/common/common.actions";

const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

const fetchShopCollections = async () => {
  const collectionRef = firestore.collection("collections");

  collectionRef.onSnapshot(async (snapshot) => {
    let documents = {};

    snapshot.docs.forEach(doc => {
      const { title, items } = doc.data();

      documents[title.toLowerCase()] = {
        id: doc.id,
        title: title.toLowerCase(),
        routeName: encodeURI(title.toLowerCase()),
        items,
      };
    });

    await store.dispatch(fetchCollectionsSuccess(documents));
    await store.dispatch(setIsLoading(false));
  });
};

const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

const databaseService = {
  addCollectionAndDocuments,
  fetchShopCollections,
  convertCollectionsSnapshotToMap,
};



export default databaseService;
