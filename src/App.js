import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initialize} from "./redax/appReducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersPageContainer = React.lazy(() => import('./components/UsersPage/UsersPageContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if(!this.props.initialized)
            return <Preloader/>
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div>Завантаження...</div>}>
                        <Route path="/profile/:userId?" render={() =>
                            <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() =>
                            <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersPageContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <LoginContainer/>}/>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(withRouter, connect(mapStateToProps, {initialize}))(App);