import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
    // animate={{ opacity: 0 }}
    // initial={{ opacity: 0 }}
    // exit={{ opacity: 0 }}
    // transition={{ duration: 0.6 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  );
}

export default Home;
