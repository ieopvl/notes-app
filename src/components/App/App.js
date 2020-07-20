import React from "react";
import {Header} from "../Header/Header";
import {Search} from "../Search/Search";
import {NotesList} from "../NotesList/NotesList";
import {AddNoteForm} from "../AddNoteForm/AddNoteForm";
import { randomGenerate } from  "../../utils/randomGenerate";

export class App extends React.Component {

    minId = 5;
    maxId = 100;

    state = {
        notes:[
            { id:"1", title: "Title", text:"Something intersting things" },
            { id:"2", title: "Title", text:"Something intersting things" },
            { id:"3", title: "Title", text:"Something intersting things" },
            { id:"4", title: "Title", text:"Something intersting things" }
        ],
        updated: false,
        query: "",
    }

    generateId() {
        let id;
        const idCollection = new Set(this.state.notes.map(note => note.id));

        do {
            id = randomGenerate(this.minId, this.maxId);
        } while( idCollection.has(id) )

        return id;
    }

    addNote = (note) => {
        const id = this.generateId();

        const newNote = {
            id,
            title: note.title,
            text: note.text,
        }

        this.setState((state) => {
            return {
                notes: [...this.state.notes, newNote]
            }
        })
    }

    deleteNote = (id) => {

        this.setState((state) => {
            return {
                notes: this.state.notes.filter(note => note.id !== id),
            }
        })
    }

    updateNote = (id) => {
        this.setState({
            updated: id,
        })
    }

    saveChanges = (data) => {
        this.setState( (state) => {
            const index = state.notes.findIndex(item => item.id === data.id);
            const notes = [...state.notes.slice(0, index), data, ...state.notes.slice(index + 1)];

            return {
                updated: false,
                notes,
            }
        })
    }

    cancelChanges = () => {
        this.setState({
            updated: false,
        })
    }

    addQuery = (query) => {
        this.setState({
            query: query.toLowerCase(),
        })
    }

    searchFilter = (query, data) => {
        if (query.length === 0) {
            return data;
        }

        return data.filter(item => item.title.toLowerCase().includes(query)
                                    || item.text.toLowerCase().includes(query));
    }

    render() {

        const renderedItems = this.searchFilter(this.state.query, this.state.notes);

        return (
            <div className="container">
                <Header/>
                <div className="row text-center mb-3">
                    <div className="col-sm">
                        <Search addQuery={this.addQuery}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3  mb-3" >
                        <AddNoteForm addNote={this.addNote}/>
                    </div>
                    <div className="col-sm-9">
                        <NotesList
                            data={renderedItems}
                            deleteNote={this.deleteNote}
                            updateNote={this.updateNote}
                            updated={this.state.updated}
                            saveChanges={this.saveChanges}
                            cancelChanges={this.cancelChanges}
                            query={this.state.query}
                        />
                    </div>
                </div>
            </div>
        )
    }
}