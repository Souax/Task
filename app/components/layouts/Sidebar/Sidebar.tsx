"use client";
import { createMemo, getAllMemos } from "@/types/memoAPI";
import React, { useEffect, useState } from "react";
import SidebarComponents from "./SidebarComponents";
import SidebarFooter from "./SidebarFooter";
import { MemoType } from "@/types/types";

const Sidebar = () => {
  const [memos, setMemos] = useState<MemoType[]>([]);

  useEffect(() => {
    const fetchMemos = async () => {
      const fetchedMemos = await getAllMemos();
      setMemos(fetchedMemos);
    };

    fetchMemos();
  }, []);

  const handleCreateMemo = async () => {
    const title = "タイトル";
    const body = "コンテンツ";

    try {
      const newMemo = await createMemo(title, body);
      setMemos([...memos, newMemo]);
    } catch (error) {
      console.error("Error creating memo:", error);
    }
  };

  return (
    <div className="relative h-screen w-[20%] flex flex-col justify-between">
      <div className="absolute top-0 right-0 h-[105vh] w-[1px] bg-gray-200"></div>
      <div className="pl-[40px]">
        <h1 className="text-3xl font-extrabold mb-[20px] pt-[30px]">
          メモアプリ
        </h1>
        <SidebarComponents memos={memos} />
      </div>
      <SidebarFooter onCreateMemo={handleCreateMemo} />
    </div>
  );
};

export default Sidebar;
