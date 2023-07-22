import React, {useState} from "react";

function CreateArea(props){
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function hadleTitleInput(event){
        const {name, value} = event.target;

        setInputText((prevVal)=>{
            return {
                ...prevVal,
                [name]: value
            }
        });
    }

    function saveNotes(event){
        props.onAdd(inputText);
        setInputText({title:"", content:"" });
        event.preventDefault();   
    }

    return (
    <div>
        <form>
          <input onChange={hadleTitleInput} name="title" placeholder="Title" value={inputText.title}/>
          <textarea onChange={hadleTitleInput} name="content" placeholder="Take a note..." rows="3" value={inputText.content}/>
          <button onClick={saveNotes}>Add</button>
        </form>
    </div>);
}

export default CreateArea;