import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  //semi transparent sheet
  //src will be the source of whatever image clicked
  const handleClick = (e) => {
    //the image gets disappeared even when the image itself gets clicked
    //so to avoid that we need to check via the event object whats being clicked
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged-pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      ></motion.img>
    </motion.div>
  );
};
export default Modal;
