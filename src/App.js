import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {

    if(!localStorage.getItem("username")) return <LoginForm />

    return (
       <ChatEngine 
            height="100vh"

            projectID="cb684ded-244f-4640-9c8e-e63281e46ba4"

            userName={localStorage.getItem('username')}

            userSecret={localStorage.getItem('password')}

            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
       />
    )
}

export default App;
