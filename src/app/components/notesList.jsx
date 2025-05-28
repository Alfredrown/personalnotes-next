import React from "react";

function NotesList({ notes, onDelete, onArchive }) {
  if (!notes.length) {
    return (
      <p className="py-4 italic text-center text-gray-500">
        No notes available.
      </p>
    );
  }

  return (
    <div className="grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <div
          key={note.id}
          className="flex flex-col justify-between p-4 transition duration-200 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md"
        >
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              {note.title}
            </h3>
            <p className="mb-3 text-gray-700 whitespace-pre-wrap">
              {note.content}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <small className="text-sm text-gray-400">
              {new Date(note.created_at).toLocaleString()}
            </small>
            <div className="flex gap-2">
              <button
                onClick={() => onDelete(note.id)}
                className="px-3 py-1 text-sm text-white transition bg-red-500 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
              {!note.archived && (
                <button
                  onClick={() => onArchive(note.id)}
                  className="px-3 py-1 text-sm text-white transition bg-yellow-500 rounded-md hover:bg-yellow-600"
                >
                  Archive
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
