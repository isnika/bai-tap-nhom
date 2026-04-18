"use client";

import { Note } from "@/types/note";

export default function NoteItem({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: (id: number) => void;
}) {
  return (
    <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 dark:bg-[#0f172a]">
      <div>
        <p className="text-sm dark:text-white">{note.text}</p>
        <p className="text-xs text-gray-400">{note.time}</p>
      </div>

      <button
        onClick={() => onDelete(note.id)}
        className="text-red-400"
      >
        Xoá
      </button>
    </div>
  );
}