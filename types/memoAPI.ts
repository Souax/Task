import { MemoType } from "./types";

/* 全ての情報の取得 */
export const getAllMemos = async (): Promise<MemoType[]> => {
  const res = await fetch(`http://localhost:3000/content`, {
    cache: "no-store",
  });

  const memos = await res.json();
  return memos;
};

/* 詳細の取得 */
export const getDetailMemo = async (id: string): Promise<MemoType> => {
  const res = await fetch(`http://localhost:3000/content/${id}`, {
    cache: "no-store",
  });

  const memo = await res.json();
  return memo;
};

/* 新規情報の取得 */
export const createMemo = async (
  title: string,
  body: string
): Promise<MemoType> => {
  const res = await fetch(`http://localhost:3000/content`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const newMemo = await res.json();
  return newMemo;
};

/* 消去情報の取得 */
export const deleteMemo = async (id: string): Promise<MemoType> => {
  const res = await fetch(`http://localhost:3000/content/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Failed to delete memo with id ${id}`);
  }

  const text = await res.text();
  if (!text) {
    return { id, title: "", body: "" };
  }

  try {
    const deleteMemo = JSON.parse(text);
    return deleteMemo;
  } catch (error) {
    throw new Error(`Invalid JSON response for deleting memo with id ${id}`);
  }
};

/* 更新情報 */
export const updateMemo = async (
  id: string,
  title: string,
  body: string
): Promise<MemoType> => {
  const res = await fetch(`http://localhost:3000/content/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  if (!res.ok) {
    throw new Error(`Failed to update memo with id ${id}`);
  }

  const updatedMemo = await res.json();
  return updatedMemo;
};
