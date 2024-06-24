"use client";

import Image from "next/image";
import React, { useState } from "react";

type TitleEditButtonProps = {
  id: string;
  initialTitle: string;
  onUpdate: (title: string) => void;
  onCancel: () => void;
};

const TitleEditButton = ({
  id,
  initialTitle,
  onUpdate,
  onCancel,
}: TitleEditButtonProps) => {
  const [title, setTitle] = useState(initialTitle);

  const handleUpdateTitle = () => {
    onUpdate(title);
    window.location.reload();
  };

  return (
    <div className="flex items-center">
      <input
        className="shadow rounded-[8px] w-[112.5vh] py-[10px] pl-[30px] text-2xl font-bold bg-[#FFFFFF]"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        className="ml-[30px] px-0.5 py-0.5 bg-blue-500 text-white text-xs rounded flex flex-col items-center"
        onClick={onCancel}
      >
        <Image src="/cancel.svg" alt="Cancel Icon" width={20} height={10} />
        <span className="text-[10px]">Cancel</span>
      </button>
      <button
        className="ml-1 px-1 py-0.5 bg-blue-500 text-white text-xs rounded flex flex-col items-center"
        onClick={handleUpdateTitle}
      >
        <Image src="/save.svg" alt="Save Icon" width={20} height={10} />
        <span className="text-xs">Save</span>
      </button>
    </div>
  );
};

export default TitleEditButton;
