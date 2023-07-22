import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {
  const [notes, setNote] = useState([]);

  function addNote(note){
   setNote((prevVal)=>{
    return [...prevVal,note];
   });
  }

  function deleteNote(id){
    setNote(()=>{
      return notes.filter((noteItem, index)=>{
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {notes.map((noteItem, index)=>{
        return(<Note 
        title={noteItem.title} 
        content={noteItem.content}
        key={index}
        id={index}
        onClick={deleteNote}
        />)
      })}
      <Footer />
    </div>
  );
}

export default App;
