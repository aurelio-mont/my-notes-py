function Note({ note, onDelete }) {
  const formatDate = new Date(note.created_at).toLocaleString("en-US");
  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formatDate}</p>
      <button className="note-delete" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
