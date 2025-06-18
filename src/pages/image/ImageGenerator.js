import react, { useState } from "react";

function ImageGenerator(){

    const [prompt, setPrompt] = useState('')
    const [imageUrls, setImageUrls] = useState([])

    const generateImages = async () => {};

    return (
        <div>
            <h2>Generate Images</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a prompt for generate an image"
            />
            <button onClick={generateImages}>
                Generate Image
            </button>
            <div className="image-grid">
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index}`} />
                ))}
                {
                    [...Array(4 - imageUrls.length)].map((_, index) => (
                        <div 
                            key={index + imageUrls.length} 
                            className="empty-image-slot">
                        </div>
                    ))
                }
            </div>
        </div>    
    );
}

export default ImageGenerator;