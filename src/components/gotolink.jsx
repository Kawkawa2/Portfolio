import React from "react";
import { motion } from "framer-motion";

function Gotolink(props) {
  return (
    <div>
      <a
        href={props.linkpath}
        className="inline-flex items-center mt-3 font-semibold text-gray-700 text-base leading-5 hover:underline hover:text-blue-700"
      >
        {props.content}
        <div className="ml-2.5 flex items-center">
          <motion.svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 10"
            initial={{ x: 0 }}
            animate={{ x: [0, 20, 0], rotate: [0, 0, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1" // Set the strokeWidth to 1
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </motion.svg>
        </div>
      </a>{" "}
    </div>
  );
}

export default Gotolink;
