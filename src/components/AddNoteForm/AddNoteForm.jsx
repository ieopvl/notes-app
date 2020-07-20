import React from "react";
import {PlusIcon} from "@primer/octicons-react";

export class AddNoteForm extends React.Component {
  state = {
      title: "Title",
      text: "Type note...",
  }

    changeTitle = (event) => {
      this.changeHandler(event, "title")
    }

    changeText = (event) => {
        this.changeHandler(event, "text")
    }

    addNote = (event) => {
        event.preventDefault();
        this.props.addNote({
            title: this.state.title,
            text: this.state.text,
        })
    }

    changeHandler = (event, property) => {
      const value = event.target.value;
      this.setState({
          [property]: value,
      })
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <input
                        className="form-control mb-2"
                        type="text"
                        onChange={this.changeTitle}
                        value={this.state.title}
                    />
                </div>
                <div className="form-row mb-2">
                    <textarea
                        className="form-control"
                        onChange={this.changeText}
                        value={this.state.text}>
                    </textarea>
                </div>
                <div className="form-row">
                    <button className="btn btn-outline-success btn-sm" onClick={this.addNote} type="send">
                        <PlusIcon size={16} />
                    </button>
                </div>
            </form>
        )
    }
}