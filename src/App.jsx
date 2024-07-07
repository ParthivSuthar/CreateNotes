import logo from "./assets/notes.png";
import create from "./assets/edit.png";
import deleteBtn from "./assets/delete.png";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote() {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        content: "",
      },
    ]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((notes) => notes.id !== id));
  }

  function updateNote(id, newContent) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, content: newContent } : note
      )
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-xl mx-auto flex justify-center items-center">
        <h1 className="text-white mt-4">Notes</h1>
        <img src={logo} className="w-8 mt-4" />
      </div>
      <div className="text-center mx-auto space-y-2 w-28 mt-5 flex flex-col justify-center">
        <button
          onClick={addNote}
          className=" bg-blue-700 text-white p-2 flex items-center gap-3 rounded-lg"
        >
          Create
          <img src={create} className="w-5" />
        </button>
        {notes.map((note) => (
          <div key={note.id} className="relative mt-4">
            <textarea
              className="relative"
              cols={25}
              rows={5}
              contentEditable
              onChange={(e) => updateNote(note.id, e.target.value)}
            ></textarea>
            <img
              onClick={() => deleteNote(note.id)}
              src={deleteBtn}
              className="mx-16 cursor-pointer absolute sm:top-48 w-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
