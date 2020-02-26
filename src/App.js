import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  const {sidebar, profilePage, messagesPage} = props.state;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar sidebar={sidebar}/>
        <main className="app-wrapper-content">
          <Route path='/profile' render={ () => <Profile profilePage={profilePage}
                                                          dispatch={props.dispatch}/>} />
          <Route path='/dialogs' render={() => <Dialogs messagesPage={messagesPage} store={props.store}/>} />
          <Route path='/news' render={() => <News/>} />
          <Route path='/music' render={() =>  <Music />} />
          <Route path='/settings' render={() => <Settings/>} />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
