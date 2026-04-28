"use client";

import { useState } from "react";

export default function NoteInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập ghi chú..."
        className="flex-1 px-4 py-2 rounded-xl border dark:bg-[#0f172a] dark:text-white"
      />
      <button
        onClick={() => {
          onAdd(input);
          setInput("");
        }}
        className="px-4 py-2 bg-purple-500 text-white rounded-xl"
      >
        + Thêm
      </button>
    </div>
  );
}