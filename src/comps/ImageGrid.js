//we need access to data from our firestore database, so that we can cycle through the urls and display those images.
//we could import the firestore sdk and grab the data that way but
//but we gonna create a custom hook to do all that heavy lifting for us.
import React from "react";
import useFireStore from "../hooks/useFireStore";
import { motion } from "framer-motion/dist/framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore("images");
  console.log(docs);
  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          //we output this div for each individual image, so we need to attach a event listener here.
          <motion.div
            //now we can use motion attributes in it
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            //call setSelectedImg which then becomes the value of selectedImage
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            ></motion.img>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
