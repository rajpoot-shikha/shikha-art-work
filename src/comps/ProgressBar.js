import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion/dist/framer-motion";

const ProgressBar = ({ file, setFile }) => {
  //going to fire useEffect,  create ref and upload the file
  const { url, progress } = useStorage(file);

  useEffect(
    () => {
      if (url) {
        setFile(null);
      }
    },
    [url],
    setFile
  );

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
