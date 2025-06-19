import react, { useState } from "react";

function AudioUploader(){

    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const transcribeAudio = () =>{

    };

    return(
        <div className="container">
            <h2>Audio to Text Transcriber</h2>
            <div className="file-input">
                <input type="file" accept="audio/*" onChange={handleFileChange} />
            </div>
            <button className="upload-button" onClick={transcribeAudio}>
                Upload and Transcribe
            </button>
            <div className="transcription-result">
                <h2>Transcription Result</h2>
                <p>{transcription}</p>
            </div>
        </div>        
    );
}

export default AudioUploader;