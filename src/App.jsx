import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Selector from "./components/Selector";



function App() {

  return (
    <div className="bg-stone-100 w-screen h-screen ">
      <Header />
      <Selector />
      <TaskList />
    </div>
  )
}




export default App;