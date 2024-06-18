import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="relative h-screen w-[20%]">
      <div className="absolute top-0 right-0 h-[105vh] w-[1px] bg-gray-200"></div>
      <div className="pt-[30px] pl-[40px]">
        <h1 className="text-3xl font-extrabold mb-[20px]">メモアプリ</h1>
        <nav>
          <ul>
            <li className="mb-[1.5rem]">
              <Link href="/">リンク1</Link>
            </li>
            <li className="mb-[1.5rem]">
              <Link href="/">リンク2</Link>
            </li>
            <li className="mb-[1.5rem]">
              <Link href="/">リンク3</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
