import { useEffect, useState } from "react";

import { projectFireStore } from "../firebase/config";

const useFireStore = (collection) => {
  console.log("Hello");
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    console.log("Hello2");
    //use projectFireStore to reach out to the collection to grab the data

    //onSnapshot fires a callback function everytime a change occurs inside this function, also calls back the function one time initially as well
    //snap represents documents at the moment, everytime a new image added, then it takes snap from all the documents as well, real time data updates it takes
    const unsub = projectFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((document) => {
          //push data from document into document array
          //object represent single document
          documents.push({ ...document.data(), id: document.id });
          console.log("documents");
          console.log(documents);
        });
        setDocs(documents);
      });
    //ImageGrid is going to use this hook
    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFireStore;
