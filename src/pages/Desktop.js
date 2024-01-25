

const Reels = () =>{
    return(<>
     <link rel="./style" type="text/css"></link>
     <div className="reels-container">
        <div className="reel">
            <video src="https://youtu.be/9UKIPR06fVg" autoPlay loop muted></video>
            <div class="overlay">
                <div class="reel-info">
                    <div class="username">Username</div>
                    <div class="likes">100</div>
                </div>
            </div>
        </div>
     </div>
     <div className="reels-container">
        <div className="reel">
            <video src="https://youtu.be/9UKIPR06fVg" autoPlay loop muted></video>
            <div class="overlay">
                <div class="reel-info">
                    <div class="username">Username</div>
                    <div class="likes">100</div>
                </div>
            </div>
        </div>
     </div>
    
    </>)
}

export default Reels;