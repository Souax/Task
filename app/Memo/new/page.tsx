import React from "react";

const CreateMemoPage = () => {
  return (
    <div>
      <div className="pt-[30px] pb-[20px] pl-[60px] pr-[30px] text-2xl font-bold">
        タイトル
      </div>

      <div className="pl-[30px] pr-[20px]">
        <textarea
          className="shadow rounded-[8px] w-full h-[80vh] py-[30px] px-[30px] text-black leading-tight focus:outline-none"
          placeholder="コンテンツ"
        />
      </div>
    </div>
  );
};

export default CreateMemoPage;
