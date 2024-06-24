"use client";
import Image from "next/image";
import React, { useState } from "react";

type SidebarFooterProps = {
  onCreateMemo: () => void;
  onEditClick: () => void;
  onCancelEdit: () => void;
};

const SidebarFooter = ({
  onCreateMemo,
  onEditClick,
  onCancelEdit,
}: SidebarFooterProps) => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateClick = () => {
    setIsCreating(true);
    onEditClick();
  };

  const handleCancelClick = () => {
    setIsCreating(false);
    onCancelEdit();
  };

  return (
    <div className="absolute bottom-[-147px] w-full py-[10px] bg-gray-200 flex justify-end">
      {isCreating ? (
        <div className="flex space-x-2">
          <button
            onClick={onCreateMemo}
            className="bg-white text-blue-500 border border-blue-500 px-[20px] rounded-[8px] flex flex-col items-center"
            style={{ marginRight: "77px" }}
          >
            <Image src="/+.svg" alt="Save Icon" width={20} height={20} />
            <span className="mt-0.5 text-xs">New page</span>
          </button>
          <button
            onClick={handleCancelClick}
            className="bg-white text-blue-500 border border-blue-500 px-[30px] rounded-[8px] flex flex-col items-center"
            style={{ marginRight: "5px" }}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <path
                  d="M4,4 C5.0543618,4 5.91816512,4.81587779 5.99451426,5.85073766 L6,6 L6,12 L20,12 C21.0543618,12 21.9181651,12.8158778 21.9945143,13.8507377 L22,14 C22,15.0543618 21.1841222,15.9181651 20.1492623,15.9945143 L20,16 L4,16 C2.9456382,16 2.08183488,15.1841222 2.00548574,14.1492623 L2,14 L2,6 C2,4.8954305 2.8954305,4 4,4 Z"
                  transform="translate(12.000000, 10.000000) rotate(-50.000000) translate(-12.000000, -10.000000) "
                ></path>
              </g>
            </svg>
            <span className="text-xs">Done</span>
          </button>
        </div>
      ) : (
        <button
          onClick={handleCreateClick}
          className="bg-blue-500 text-white px-[35px] rounded-[8px] flex-col items-center"
        >
          <Image src="/edit.svg" alt="Edit Icon" width={20} height={20} />
          <span className="mt-0.5 text-xs">Edit</span>
        </button>
      )}
    </div>
  );
};

export default SidebarFooter;
