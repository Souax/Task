"use client";
import { createMemo } from "@/types/memoAPI";
import { MemoType } from "@/types/types";
import React, { useState } from "react";

type SidebarFooterProps = {
  onCreateMemo: () => void;
};

const SidebarFooter = ({ onCreateMemo }: SidebarFooterProps) => {
  return (
    <div className="py-[10px] bg-gray-200 flex justify-end">
      <button
        onClick={onCreateMemo}
        className="bg-blue-500 text-white py-[10px] px-[20px] rounded-[8px]"
      >
        新
      </button>
    </div>
  );
};

export default SidebarFooter;
