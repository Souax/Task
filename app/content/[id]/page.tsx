import { getDetailMemo } from "@/types/memoAPI";
import React from "react";

const MemoPage = async ({ params }: { params: { id: string } }) => {
  const detailMemo = await getDetailMemo(params.id);
  return (
    <div>
      <h1 className="pt-[30px] pb-[20px] pl-[60px] pr-[30px] text-2xl font-bold">
        {detailMemo.title}
      </h1>

      <div className="pl-[30px] pr-[20px]">
        <div className="shadow rounded-[8px] w-full h-[80vh] py-[30px] px-[30px] text-black bg-[#FFFFFF] leading-tight focus:outline-none">
          <p>{detailMemo.body}</p>
        </div>
      </div>
    </div>
  );
};

export default MemoPage;
