"use client";
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ imgUrl, videoUrl, title, description, gitUrl, previewUrl }) => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const openMedia = () => setIsMediaOpen(true);
  const closeMedia = () => setIsMediaOpen(false);

  const openDescription = () => setIsDescriptionOpen(true);
  const closeDescription = () => setIsDescriptionOpen(false);

  return (
    <>
      <div className="group transform transition-all duration-300 hover:scale-105">
        <div
          className="h-52 md:h-72 rounded-t-xl relative overflow-hidden group-hover:opacity-75 transition-opacity duration-500"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay with icons */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={openMedia}
              className="h-14 w-14 mr-3 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-all duration-300"
            >
              <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white transition-colors duration-300" />
            </button>
            <button
              onClick={openDescription}
              className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-all duration-300"
            >
              <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Card Title */}
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          {!isDescriptionOpen && (
            <p className="text-[#ADB7BE]">{description.slice(0, 80)}...</p>
          )}
        </div>
      </div>

      {/* Media Modal (Video or Image) */}
      <AnimatePresence>
        {isMediaOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMedia}
          >
            <motion.div
              className="relative max-w-full max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {videoUrl ? (
                <video
                src={videoUrl}
                controls
                // autoPlay
                poster={imgUrl} 
                className="rounded-lg max-h-[90vh]"
              />
              ) : (
                <img
                  src={imgUrl}
                  alt="Project"
                  className="max-w-full max-h-[90vh] rounded-lg"
                />
              )}
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold"
                onClick={closeMedia}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Description Modal */}
      <AnimatePresence>
        {isDescriptionOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDescription}
          >
            <motion.div
              className="relative bg-white p-6 rounded-lg max-w-3xl mx-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-black">{description}</p>
              <button
                className="absolute top-2 right-2 text-black text-3xl font-bold"
                onClick={closeDescription}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
