import React from "react";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-gray-700 dark:text-gray-200 mb-4 text-lg font-medium">
        Loading...
      </p>
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};
