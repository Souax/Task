import { MemoType } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DeleteButton from "../../Delete/DeleteButton";
import { useRouter } from "next/navigation";

type SidebarProps = {
  memos: MemoType[];
};

const SidebarComponents = ({ memos: initialMemos }: SidebarProps) => {
  const [memos, setMemos] = useState<MemoType[]>(initialMemos);
  const router = useRouter();

  useEffect(() => {
    setMemos(initialMemos);
  }, [initialMemos]);

  const handleDelete = (id: string) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return (
    <div>
      <nav>
        <ul>
          {memos.map((memo) => (
            <li key={memo.id} className="h-[44px] flex items-center">
              <Link href={`/content/${memo.id}`}>{memo.title}</Link>
              <DeleteButton id={memo.id} onDelete={handleDelete} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarComponents;
