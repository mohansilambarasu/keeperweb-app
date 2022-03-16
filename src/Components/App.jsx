import React , { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import NoteList from '../Notes.jsx'
import CreatNote from "./createNote.jsx";


function App() {

  const [notes,setNotes] = useState([]);


  function addnote(note) {
    console.log(note);
    setNotes( (prevNotes) => {
      return [...prevNotes,note]
    } )
  }

  function deletenote(id) {
    console.log('deleted' + id);
    setNotes( function (prevNotes) {
      return (
        prevNotes.filter( (noteitem,index) => {
          return index !== id;
        })
      )
    } )

  }


  return <div>
            <Header />
            <CreatNote
              onAdd = {addnote}
            />
            <div className = "noteContainer">
              {notes.map ( (noteItem,index) => {
                return <Note
                    key = {index}
                    id = {index}
                    title = {noteItem.title}
                    content = {noteItem.content}
                    onDelete = {deletenote}
                  />
              })}
            </div>

            <Footer />
        </div>
}

export default App;

// {NoteList.map( noteItem => {
//   return <Note
//           key={noteItem.key}
//           title={noteItem.title}
//           content={noteItem.content}
//         />
// })}
