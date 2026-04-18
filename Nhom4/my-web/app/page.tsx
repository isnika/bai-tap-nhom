"use client";

import { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { Note } from "@/types/note";

function AppContent() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState("");

  const { toggle } = useTheme();

  // load localStorage
  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) setNotes(JSON.parse(data));
  }, []);

  // save localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    if (!text.trim()) return;

    const newNote: Note = {
      id: Date.now(),
      text,
      time: new Date().toLocaleString(),
    };

    setNotes((prev) => [newNote, ...prev]);
    setInput("");
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="wrapper">
      <div className="app">

        {/* HEADER */}
        <div className="header">
          <h2>📒 Ghi Chú Cá Nhân</h2>

          <div className="header-right">
            <span className="badge">{notes.length} ghi chú</span>
            <button className="toggle" onClick={toggle}>
              🌙
            </button>
          </div>
        </div>

        {/* INPUT */}
        <div className="input-section">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập ghi chú..."
          />
          <button onClick={() => addNote(input)}>+ Thêm</button>
        </div>

        {/* LIST */}
        <div className="list">
          {notes.length === 0 && (
            <p style={{ textAlign: "center", color: "#9ca3af" }}>
              Chưa có ghi chú nào
            </p>
          )}

          {notes.map((note) => (
            <div className="note" key={note.id}>
              <div>
                <div className="note-text">{note.text}</div>
                <div className="note-time">{note.time}</div>
              </div>

              <button
                className="delete"
                onClick={() => deleteNote(note.id)}
              >
                Xoá
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
