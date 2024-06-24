"use client";
import { createMemo, deleteMemo, getAllMemos } from "@/types/memoAPI";
import React, { useEffect, useState } from "react";
import SidebarComponents from "./SidebarComponents";
import SidebarFooter from "./SidebarFooter";
import { MemoType } from "@/types/types";
import Image from "next/image";

const Sidebar = () => {
  const [memos, setMemos] = useState<MemoType[]>([]);
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);

  const fetchMemos = async () => {
    try {
      const fetchedMemos = await getAllMemos();
      setMemos(fetchedMemos);
    } catch (error) {
      console.error("Error fetching memos:", error);
    }
  };

  useEffect(() => {
    fetchMemos();
  }, []);

  const handleCreateMemo = async () => {
    const title = "タイトル";
    const body = "コンテンツ";

    try {
      await createMemo(title, body);
      await fetchMemos();
    } catch (error) {
      console.error("Error creating memo:", error);
    }
  };

  const handleDeleteMemo = async (id: string) => {
    try {
      await deleteMemo(id);
      await fetchMemos();
    } catch (error) {
      console.error("Error deleting memo:", error);
    }
  };

  const handleEditClick = () => {
    setShowDeleteButtons(true);
  };

  const handleCancelEdit = () => {
    setShowDeleteButtons(false);
  };

  return (
    <div className="relative h-screen w-[20%] flex flex-col justify-between">
      <div className="absolute top-0 right-0 h-[118vh] w-[1px] bg-gray-200"></div>
      <div className="pl-[40px]">
        <h1 className="text-3xl font-extrabold mb-[20px] pt-[30px] flex items-center">
          <Image src="/logo.svg" alt="Logo Icon" width={32} height={32} />
          <span className="ml-1">メモアプリ</span>
        </h1>
        <SidebarComponents
          memos={memos}
          showDeleteButtons={showDeleteButtons}
          onDeleteMemo={handleDeleteMemo}
        />
      </div>
      <SidebarFooter
        onCreateMemo={handleCreateMemo}
        onEditClick={handleEditClick}
        onCancelEdit={handleCancelEdit}
      />
    </div>
  );
};

export default Sidebar;
