import React , { useState } from "react";
import ReactDom from "react-dom";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function CreatNote(props) {

  const [note,setNote] = useState({
    title : '' ,
    content: ''
  });

  const [showFull,setShowFull] = useState(false);

  function handleChange(e) {
    const {value, name} = e.target;

    setNote( (prevNote) => {
      return {
        ... prevNote,
        [name] : value
      }
    } )

  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function clickForm(event) {
    event.preventDefault();
  }

  function expand() {
    setShowFull(true);
  }


  return  <form onSubmit={clickForm} className="create-note">
            {showFull && (<input onChange={handleChange} type="text" name="title" placeholder="Add Title" value ={note.title}/>)}
            <textarea onClick = {expand} onChange={handleChange} type="text" name="content" placeholder="Add Content ..." value ={note.content} rows = {showFull ? 3 : 1}/>
            <Zoom in = {showFull}>
              <Fab role = "submit" onClick = {submitNote} color="primary">
                <AddIcon />
              </Fab>
            </Zoom>


          </form>
}

export default CreatNote;
