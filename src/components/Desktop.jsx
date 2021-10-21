import './desktop.css'

const Desktop = () => {
    return (
        <div className="desktop">
            <div className="desktop-text-box">
                <img src="logo.png" alt="Logo" />
                <p>Please open the app from mobile device</p>
            </div>
            <div >
                <img className="phone-image" src="Mockup.png" alt="Phone image" />
            </div>
        </div>
    )
}

export default Desktop
