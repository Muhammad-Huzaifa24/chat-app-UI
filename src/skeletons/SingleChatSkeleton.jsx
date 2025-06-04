import React from 'react';

const SingleChatSkeleton = () => {
  return (
    <div className="flex gap-3 items-center w-full animate-pulse">
      {/* Skeleton for profile image */}
      <div className="size-14 rounded-full bg-gray-200" />

      {/* Skeleton for text content */}
      <div className="flex flex-col gap-2 w-full">
        {/* Top row: name and time */}
        <div className="flex justify-between w-full">
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
          <div className="h-3 w-1/4 bg-gray-200 rounded" />
        </div>

        {/* Bottom row: message and count */}
        <div className="flex justify-between items-center w-full">
          <div className="h-3 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-5 bg-gray-200 rounded-full px-1.5 py-0.5" />
        </div>
      </div>
    </div>
  );
};

export default SingleChatSkeleton;
