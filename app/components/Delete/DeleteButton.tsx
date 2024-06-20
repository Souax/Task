"use client";
import { deleteMemo } from "@/types/memoAPI";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type DeleteButtonProps = {
  id: string;
  onDelete: (id: string) => void;
};

const DeleteButton = ({ id, onDelete }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteMemo(id);
      onDelete(id);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("エラー:", error);
    }
  };

  return (
    <div>
      <Image
        src="/delete.svg"
        alt="Delete Icon"
        width={24}
        height={24}
        onClick={handleDelete}
      />
    </div>
  );
};

export default DeleteButton;
