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

    this.setState({ title: "", body: "" });
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="flex flex-col gap-4 p-6 shadow-md bgrounded-xl"
      >
        <input
          type="text"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.onTitleChange}
          required
          className="p-3 text-base text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
        />
        <textarea
          placeholder="Write your note here..."
          value={this.state.body}
          onChange={this.onBodyChange}
          required
          rows={4}
          className="p-3 text-base text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="self-end px-6 py-2 text-white transition duration-200 bg-green-600 rounded-md hover:bg-green-700"
        >
          Add Note
        </button>
      </form>
    );
  }
}

export default UserInput;
