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

  const urls = [
    'https://jugaad-hacks-v1-0.onrender.com/chat',
    // 'https://jugaad-hacks-v1-0.onrender.com:5000/chat',
    'http://18.142.128.26:5000/chat',
    'http://54.254.162.138:5000/chat'
  ];
  

  useEffect(() => {
    if (fetch) {
      setLoading(true);
      // for(let url of urls){
      axios.post('https://jugaad-hacks-v1-0.onrender.com/chat',  {
          prompt: prompt,
          new_chat: true,
        })
        .then((response) => {
          console.log('Response from backend: ', response);
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
    // }
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
