"use client";
import Image from "next/image";
import React from "react";

type DeleteButtonProps = {
  id: string;
  onDelete: (id: string) => void;
};

const DeleteButton = ({ id, onDelete }: DeleteButtonProps) => {
  const handleDelete = async () => {
    onDelete(id);
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
