import { useState } from "react";
import Notes from "./components/notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Name : Geetesh Sood",
    },
    {
      id: 2,
      text: "Roll Number : 2020UCA1811",
    },
  ]);

  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
