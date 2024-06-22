"use client";

import Image from "next/image";
import React, { useState } from "react";

type BodyEditButtonProps = {
  id: string;
  initialBody: string;
  onUpdate: (body: string) => void;
  onCancel: () => void;
};

const BodyEditButton = ({
  id,
  initialBody,
  onUpdate,
  onCancel,
}: BodyEditButtonProps) => {
  const [body, setBody] = useState(initialBody);

  const handleUpdateBody = () => {
    onUpdate(body);
  };

  return (
    <div className="flex items-start w-full">
      <textarea
        className="shadow rounded-[8px] w-[88%] h-[90vh] py-[30px] px-[30px] text-black leading-tight focus:outline-none bg-[#FFFFFF]"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="flex flex-row">
        <button
          className="ml-[30px] px-0.5 py-0.5 bg-blue-500 text-white text-xs rounded flex flex-col items-center"
          onClick={onCancel}
        >
          <Image src="/cancel.svg" alt="Cancel Icon" width={20} height={10} />
          <span className="text-[10px]">Cancel</span>
        </button>
        <button
          className="ml-1 px-1 py-0.5 bg-blue-500 text-white text-xs rounded flex flex-col items-center"
          onClick={handleUpdateBody}
        >
          <Image src="/save.svg" alt="Save Icon" width={20} height={10} />
          <span className="text-xs">Save</span>
        </button>
      </div>
    </div>
  );
};

export default BodyEditButton;
