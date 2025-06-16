// components/ConfirmModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ConfirmModal = ({ isOpen, onClose, onConfirm, isLoading }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-teal-800/70  backdrop-blur-[px]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl w-[300px] p-6 text-center"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-12 h-12 text-red-500 mx-auto mb-2"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 
                  2v10a2 2 0 002 2h8a2 2 0 
                  002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 
                  0 0011 2H9zM7 8a1 1 0 
                  012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 
                  00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              />
            </svg>
            <h2 className="text-xl font-bold text-white">Are you sure?</h2>
            <p className="text-gray-400 text-sm mt-2">
              This action cannot be undone.
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center cursor-pointer"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-4 w-4 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="white"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                ) : (
                  "Confirm"
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
