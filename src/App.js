import React from "react";
// import { Helmet } from "react-helmet";
import "./assets/style/App.css";
// import logo from "./assets/images/logo.png"
import TaskListContextProvider from "./contexts/TaskListContext";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";


const App = () => {
  return (

  // <Helmet>
  //     <meta charSet="utf-8" />
  //     <title>Task-Manager</title>
  //     <link rel="canonical" href=" " />
  //     <meta name="description" content="Task-Manager" />
  //   </Helmet>
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo"/>
  
  //   </header>
    <TaskListContextProvider>
        <div className="container">
          <div className="app-wrapper">
            <Header />
            <div className="main">
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskListContextProvider>



  );
};

export default App;
