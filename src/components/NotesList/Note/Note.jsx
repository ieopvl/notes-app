import React from "react";
import {FileIcon, PencilIcon, TrashcanIcon, XIcon} from "@primer/octicons-react";

export const Note = (props) => {
  const {id, title, text}  = props.note;

  const onDeleteNote = (id) => {
      props.deleteNote(id);
  }

  const onUpdateNote = (id) => {
    props.updateNote(id);
  }

  return (
      <div className="card">
          <div className="card-body">
              <h5 className="card-title">{`${title}`}</h5>
              <p className="card-text">{text}</p>
              <button className="btn btn-outline-info btn-sm mr-1" onClick={() => onUpdateNote(id) }>
                  <PencilIcon size={16} />
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => onDeleteNote(id) } type="button">
                  <TrashcanIcon size={16} />
              </button>
          </div>
      </div>
  )
}

export class UpdatingNote extends React.Component {

    state = {
        title: this.props.note.title,
        text: this.props.note.text,
    }


    changeTitle = (event) => {
        this.changeHandler(event, "title")
    }

    changeText = (event) => {
        this.changeHandler(event, "text")
    }

    changeHandler = (event, property) => {
        const value = event.target.value;
        this.setState({
            [property]: value,
        })
    }

    saveChanges = () => {
        const data = {
            id: this.props.note.id,
            title: this.state.title,
            text: this.state.text,
        }

        this.props.saveChanges(data);
    }

    cancelChanges = () => {
        this.props.cancelChanges();
    }


    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <input className="card-title" type="text" onChange={this.changeTitle} value={`${this.state.title}`} />
                    <input className="card-text mb-2" type="text" onChange={this.changeText} value={this.state.text} />
                    <button className="btn btn-outline-success btn-sm mr-1" onClick={this.saveChanges}>
                        <FileIcon size={16} />
                    </button>
                    <button className="btn btn-outline-warning btn-sm" onClick={this.cancelChanges}>
                        <XIcon size={16} />
                    </button>
                </div>
            </div>
        )
    }
}