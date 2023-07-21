import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes";
import CreateArea from "./CreateArea";


function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note title={"Hello"} content={"Wassap this is content"}
      />
      <Footer />
    </div>
  );
}

export default App;
