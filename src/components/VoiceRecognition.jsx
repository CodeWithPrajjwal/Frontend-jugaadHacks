import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import React from "react";

const VoiceRecognition = ({setInputMethod, setTranscript}) => {
    const recognitionRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

const handleSpeechRecognition = () => {
    if (!recognitionRef.current) {
      recognitionRef.current =
        new window.webkitSpeechRecognition() || window.SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        const lastResult = event.results[event.results.length - 1];
        if (lastResult.isFinal) {
          const input = lastResult[0].transcript.trim();
          // setTranscript((prevTranscript) => [...prevTranscript, input]);
          setTranscript(input);
        }
      };
    }

    recognitionRef.current.start();
  };

  const handleMicrophoneClick = () => {
    if (isClicked) {
        setInputMethod('text')
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    } else {
        setInputMethod('voice')
      handleSpeechRecognition();
    }
    setIsClicked(!isClicked);
  };

  return(
    <div style={{minWidth:"40px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <FontAwesomeIcon
        icon={isClicked ? faMicrophone : faMicrophoneSlash}
        size="xl"
        beat={isClicked}
        onClick={handleMicrophoneClick}
        style={{ cursor: "pointer" ,color:"#ffffff"}}
      />
    </div>
  )

}

export default VoiceRecognition;