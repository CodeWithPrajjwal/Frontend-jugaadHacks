import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import axios from 'axios';
import './App.css';
import {Routes , BrowserRouter,Route} from 'react-router-dom';
import Popup from './components/popup/popup';
import Homepage from './components/Homepage/Homepage';


const App = () => {
  const [fetch, setFetch] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [summary, setSummary] = useState('Medical Mitra');
  const[loading, setLoading] = useState(false);
  const[showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (fetch) {
      setLoading(true);
      axios
        .post(`http://127.0.0.1:5000/chat`, {
          prompt: prompt,
          new_chat: true,
        })
        .then((response) => {
          setResult(response.data.result);
          setSummary(response.data.summary);
          setFetch(false);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Error from backend: ', error);
          setFetch(false);
        });
    }
  }, [fetch,loading, prompt]);


  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Homepage/>} />
      <Route path="/chat" element={
        <div className='app'>
        <Header summary={summary} />
        {showPopup&&<Popup/>}
        <ChatWindow loading={loading} prompt={prompt} result={result} />
        <MessageInput
          setShowPopup={setShowPopup}           
          setFetch={setFetch}
          setPrompt={setPrompt}
        />
        </div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
