import react, { useState } from "react";
import api from "../../services/api";

function AudioUploader(){

    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const transcribeAudio = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await api.post('transcribe', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            });
            const data = await response.data;
            console.log(data);
            setTranscription(data);
        } catch (error) {
            console.log('Error transcribing audio: ', error)
        }
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