import React from "react";
import {Note, UpdatingNote} from "./Note/Note";

export const NotesList = (props) => {

    const items = props.data.map( item => {
        const condition = props.updated === item.id;
        return (
            <div className="col-sm-4 mb-2" key={item.id}>{
                condition ?
                    <UpdatingNote
                        note={item}
                        saveChanges={props.saveChanges}
                        cancelChanges={props.cancelChanges} /> :
                    <Note
                        note={item}
                        deleteNote={props.deleteNote}
                        updateNote={props.updateNote}
                    />
            }</div>
        )
    })

    return (
      <div className="container">
          <div className="row">
              {items}
          </div>
      </div>
    )
}