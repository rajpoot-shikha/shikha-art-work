//creating custom hook to interact with firebase
//it focuses on uploading the file and returning some useful information regarding that upload.
//hooks are small chunk of reusable code, which can be used in
import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFireStore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  //url that we gonna get back from firebase once the image is uploaded
  const [url, setUrl] = useState(null);
  const collectionRef = projectFireStore.collection("images");

  //we will use storage sdk to upload teh file
  //we wanna get the url and upload that in a database
  //then we can use that data (set of urls) to load the images in our react component.

  useEffect(() => {
    //logic to upload the file
    //this function is going to fire, when the dependency array changes
    //get the reference of where the file shall be saved
    //references
    const storageRef = projectStorage.ref(file.name);
    //put method will take a file and put it in that location
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        //figure out the progress of upload
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(error);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createAt = timestamp();
        collectionRef.add({ url: url, createdAt: createAt });
        setUrl(url);
        //we need to save this url to file store
      }
    );
  }, [file]);
  return { progress, url, error };
};

//we have to now store this url
export default useStorage;
