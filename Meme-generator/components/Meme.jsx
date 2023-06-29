import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="meme-section">
            <div className="meme--form" action="">
                    <input 
                    className="form--input"
                    name="topText" 
                    onChange={handleChange}
                    placeholder="Top text" 
                    type="text" 
                    value={meme.topText}
                    />
                    <input 
                    className="form--input" 
                    name="bottomText"
                    onChange={handleChange}
                    placeholder="Bottom text" 
                    type="text" 
                    value={meme.bottomText}
                    />
                    <button 
                    className="meme-image-btn"
                    onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>            
    )
}