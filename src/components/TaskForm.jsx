import { useState } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState("");

  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
