import { MemoType } from "@/types/types";
import Link from "next/link";
import React, { useState } from "react";
import DeleteButton from "../../Delete/DeleteButton";

type SidebarProps = {
  memos: MemoType[];
  showDeleteButtons: boolean;
  onDeleteMemo: (id: string) => void;
};

const SidebarComponents = ({
  memos,
  showDeleteButtons,
  onDeleteMemo,
}: SidebarProps) => {
  const [selectedMemoId, setSelectedMemoId] = useState<string | null>(null);

  const handleMemoClick = (id: string) => {
    setSelectedMemoId(id);
  };

  return (
    <div>
      <nav className="overflow-y-auto h-[calc(100vh)]">
        <ul>
          {memos.map((memo) => (
            <li
              key={memo.id}
              className={`h-[44px] flex items-center rounded-[4px] ${
                selectedMemoId === memo.id ? "bg-[#F5F8FA]" : ""
              }`}
              onClick={() => handleMemoClick(memo.id)}
            >
              <Link
                href={`/content/${memo.id}`}
                className={`flex-1 truncate ml-[10px] pr-[60px] ${
                  selectedMemoId === memo.id ? "text-[#32A8F8]" : ""
                }`}
              >
                {memo.title}
              </Link>
              {showDeleteButtons && (
                <div className="flex-shrink-0 pr-[10px]">
                  <DeleteButton
                    id={memo.id}
                    onDelete={() => onDeleteMemo(memo.id)}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarComponents;
