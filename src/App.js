import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import store from "./redax/state";

const App = (props) => {
    console.log(props)
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sitebar}/>
            <div className='app-wrapper-content'>
                <Route path="/profile" render={() =>
                    <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}/>}/>
                <Route path="/dialogs" render={() =>
                    <Dialogs
                        state={props.state.dialogsPage}
                        dispatch={props.dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>

        </div>
    );
}

export default App;