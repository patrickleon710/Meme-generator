export default function Meme() {
    return (
        <main className="meme-section">
            <form className="meme--form" action="">
                    <input className="form--input" type="text" placeholder="Top text" />
                    <input className="form--input" type="text" placeholder="Bottom text" />
                    <button className="meme-image-btn">Get a new meme image 🖼</button>
            </form>
        </main>            
    )
}