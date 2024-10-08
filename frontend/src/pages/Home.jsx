import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";

import "../styles/Home.css";

function Home() {
  const [notes, setNotes] = useState({});
  const [data, setData] = useState({});

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setData(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = async (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted");
        else alert("Something went wrong");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  const createNote = async () => {
    api
      .post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) alert("Note created");
        else alert("Something went wrong");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Notes</h2>
        {data.results &&
          data.results.map((note) => (
            <Note
              key={note.id}
              note={note}
              onDelete={() => deleteNote(note.id)}
            />
          ))}
      </div>
      <h2>Create Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">Content</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="form-button" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
