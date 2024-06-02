import React, { useState, useEffect} from "react";
import styled from "styled-components";
import VoiceRecognition from "./VoiceRecognition";

const InputContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: #202123;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 20px;
  border: none;
  outline: none;
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 20px;
  background-color: #0084ff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #006bbf;
  }
`;

const MessageInput = ({ setShowPopup, setFetch, setPrompt }) => {
  const [value, setValue] = useState("");
  const [inputMethod, setInputMethod] = useState("text"); // Can be 'text' or 'voice'
  const [transcript, setTranscript] = useState("");

  const endChatKeywords = [
    "bye",
    "goodbye",
    "thank you",
    "see you",
    "later",
    "farewell",
  ];

  const fetchResponse = () => {
    setFetch(true);
    setPrompt(value);

    if (
      endChatKeywords.some((keyword) =>
        value.toLowerCase().includes(keyword.toLowerCase())
      )
    ) {
      setShowPopup(true);
    }
    setValue(""); // Clear the input field
    //   setTimeout(() => { // Simulate a delay
    //   window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the chat window
    // }, 500);
  };

  useEffect(() => {
    if (inputMethod === "voice" && transcript !== "") {
        setValue(transcript);
    }
}, [inputMethod, transcript]); // Only re-run the effect if inputMethod or transcript changes

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type a message..."
      />
      <VoiceRecognition
        setInputMethod={setInputMethod}
        setTranscript={setTranscript}
      />
      <SendButton onClick={fetchResponse}>Send</SendButton>
    </InputContainer>
  );
};

export default MessageInput;
