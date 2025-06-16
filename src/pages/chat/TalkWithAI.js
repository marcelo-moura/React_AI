import react, { useState } from "react";
import api from "../../services/api";

function TalkWithAI(){

    const [prompt, setPrompt] = useState('')
    const [chatResponse, setChatResponse] = useState('')

    const askAI = async () => {

        try {
            const response = await api.get(`ask-ai-options`, {
                params: {prompt}
            })
            const data = await response.data;
            console.log(data);
            setChatResponse(data);
        } catch (error) {
            console.log('Error generate respose: ', error)
        }
    }

    return (
        <div>
            <h2>Talk with AI</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a prompt for AI"
            />
            <button onClick={askAI}>
                Ask AI
            </button>
            <div className="output">
                <p>{chatResponse}</p>
            </div>
        </div>    
    );
}

export default TalkWithAI;