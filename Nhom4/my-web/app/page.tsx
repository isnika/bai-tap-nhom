"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import NoteInput from "@/components/NoteInput";
import NoteItem from "@/components/NoteItem";
import { ThemeProvider } from "@/context/ThemeContext";
import { Note } from "@/types/note";
import "./globals.css"
;
export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

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

    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <ThemeProvider>
<div className="app">
  <div className="header">
    <h2>📒 Ghi Chú Cá Nhân</h2>

    <div style={{ display: "flex", gap: "8px" }}>
      <span className="badge">{notes.length} ghi chú</span>
      <button className="toggle" onClick={toggle}>🌙</button>
    </div>
  </div>

  <div className="input-group">
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Nhập ghi chú..."
    />
    <button onClick={() => addNote(input)}>+ Thêm</button>
  </div>

  <div className="list">
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
    </ThemeProvider>
  );
}