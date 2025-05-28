import React from 'react';

function NotesList({ notes, onDelete, onArchive }) {
  if (!notes.length) {
    return <p>No notes available.</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <small>{new Date(note.created_at).toLocaleString()}</small>
          <div className="note-actions">
            <button onClick={() => onDelete(note.id)}>Delete</button>
            {!note.archived && (
              <button onClick={() => onArchive(note.id)}>Archive</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
