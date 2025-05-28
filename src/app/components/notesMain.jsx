import React from "react";
import NotesList from "./notesList.jsx";
import UserInput from "./userInput.jsx";
import { supabase } from "@/lib/supabase";

class NotesMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      loading: true,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  async componentDidMount() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return alert("Please log in");

    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error(error);
      return;
    }

    this.setState({ notes: data, user, loading: false });
  }

  async onAddNotesHandler({ title, body }) {
    const { user } = this.state;
    const { data, error } = await supabase
      .from("notes")
      .insert([
        {
          title,
          content: body,
          user_id: user.id,
        },
      ])
      .select();

    if (!error && data) {
      this.setState((prevState) => ({
        notes: [...prevState.notes, data[0]],
      }));
    }
  }

  async onDeleteHandler(id) {
    await supabase.from("notes").delete().eq("id", id);
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  async onArchiveHandler(id) {
    const { data, error } = await supabase
      .from("notes")
      .update({ archived: true })
      .eq("id", id)
      .select();

    if (!error && data) {
      this.setState((prevState) => ({
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: true } : note
        ),
      }));
    }
  }

  render() {
    const { notes, loading } = this.state;
    if (loading) return <p>Loading...</p>;

    const activeNotes = notes.filter((note) => !note.archived);
    const archivedNotes = notes.filter((note) => note.archived);

    return (
      <div className="notes-app">
        <h1>Notes App</h1>
        <UserInput addNotes={this.onAddNotesHandler} />
        <h2>Your Notes</h2>
        <NotesList
          notes={activeNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h2>Archived Notes</h2>
        <NotesList
          notes={archivedNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NotesMain;
