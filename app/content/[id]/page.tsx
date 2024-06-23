"use client";

import { getDetailMemo, updateMemo } from "@/types/memoAPI";
import React, { useState, useEffect } from "react";
import TitleEditButton from "./edit/TitleEditButton";
import BodyEditButton from "./edit/BodyEditButton";
import Image from "next/image";

const MemoPage = ({ params }: { params: { id: string } }) => {
  const [detailMemo, setDetailMemo] = useState<{ title: string; body: string }>(
    { title: "", body: "" }
  );
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingBody, setIsEditingBody] = useState(false);

  useEffect(() => {
    const fetchMemo = async () => {
      try {
        const memo = await getDetailMemo(params.id);
        setDetailMemo(memo);
      } catch (error) {
        console.error("Error fetching memo:", error);
      }
    };
    fetchMemo();
  }, [params.id]);

  const handleTitleUpdate = async (title: string) => {
    try {
      await updateMemo(params.id, title, detailMemo.body);
      setDetailMemo({ ...detailMemo, title });
      setIsEditingTitle(false);
    } catch (error) {
      console.error("Error updating title:", error);
    }
  };

  const handleBodyUpdate = async (body: string) => {
    try {
      await updateMemo(params.id, detailMemo.title, body);
      setDetailMemo({ ...detailMemo, body });
      setIsEditingBody(false);
    } catch (error) {
      console.error("Error updating body:", error);
    }
  };

  return (
    <div className="pt-[30px] pb-[20px] pl-[60px] pr-[30px] flex flex-col">
      <div className="flex justify-between items-center">
        {isEditingTitle ? (
          <TitleEditButton
            id={params.id}
            initialTitle={detailMemo.title}
            onUpdate={handleTitleUpdate}
            onCancel={() => setIsEditingTitle(false)}
          />
        ) : (
          <>
            <h1 className="text-2xl pl-[30px] font-bold">{detailMemo.title}</h1>
            <button
              className="mr-[19px] px-6 py-1 bg-blue-500 text-white rounded flex flex-col items-center"
              onClick={() => setIsEditingTitle(true)}
            >
              <Image src="/edit.svg" alt="Edit Icon" width={20} height={20} />
              <span className="mt-1 text-xs">Edit</span>
            </button>
          </>
        )}
      </div>
      <div className="mt-4 flex items-start">
        {isEditingBody ? (
          <BodyEditButton
            id={params.id}
            initialBody={detailMemo.body}
            onUpdate={handleBodyUpdate}
            onCancel={() => setIsEditingBody(false)}
          />
        ) : (
          <>
            <div className="shadow rounded-[8px] w-[88%] h-[90vh] py-[30px] px-[30px] text-black bg-[#FFFFFF] leading-tight focus:outline-none overflow-y-auto">
              <p className="whitespace-pre-wrap">{detailMemo.body}</p>
            </div>
            <button
              className="ml-[30px] px-6 py-1 bg-blue-500 text-white rounded flex flex-col items-center"
              onClick={() => setIsEditingBody(true)}
            >
              <Image src="/edit.svg" alt="Edit Icon" width={20} height={20} />
              <span className="mt-1 text-xs">Edit</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MemoPage;
