"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Header({ count }: { count: number }) {
  const { toggle } = useTheme();

  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="font-semibold text-lg dark:text-white">
        📒 Ghi Chú Cá Nhân ({count})
      </h1>

      <button
        onClick={toggle}
        className="px-3 py-1 bg-purple-500 text-white rounded-lg"
      >
        Toggle
      </button>
    </div>
  );
}