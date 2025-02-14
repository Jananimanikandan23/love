import React, { useState } from "react";
import "./App.css";

function ValentineWish() {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
    };
    const handleDriveClick = () => {
        window.open("https://drive.google.com/drive/folders/1FvBNFHNsQGSv4rTbrUoLuuiSvXd6neKg?usp=drive_link", "_blank"); // Replace with your Google Drive link
    };

    return (
        <div className="valentine-container">
            <h1>Happy Valentine's Day! 💖 </h1>
            <h2>Ganesh 😽</h2>
            <button onClick={handleClick}>Click for a Special Message</button>
            {showMessage && (
                <div className="message">
                    <p>Our journey was really amazing and sometimes it wasn't enjoyable,
                       <br></br> But we have been going through and we reconstructed it from base.
                       <br></br>Four years, countless memories, and a love that keeps growing. 
                       <br></br>Through every high and low, we stand stronger together❤️✨</p>
                    
                    <p>You mean the world to me! 🌍💖</p>
                    <p>Will you be my Valentine for rest of our life? 💌</p>
                </div>
            )}
            <button onClick={handleDriveClick} className="drive-button">
                Open Valentine's Surprise 🎁
            </button>
            
        </div>
    );
}

export default ValentineWish;