import React from "react";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    if (!this.state.title || !this.state.body) return;

    this.props.addNotes({
      title: this.state.title,
      body: this.state.body,
    });

    // Reset fields
    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="note-input">
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChange}
          required
        />
        <textarea
          placeholder="Write your note here..."
          value={this.state.body}
          onChange={this.onBodyChange}
          required
        />
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

export default UserInput;
