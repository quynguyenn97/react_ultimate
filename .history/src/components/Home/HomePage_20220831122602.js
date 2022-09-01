import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div>There's a better way to ask</div>
                <div>
                    You don't want to make a boring form. And your audience
                    won't answer one. Create a typeform instead—and make
                    everyone happy.
                </div>
                <div>
                    <button>Get started - it's free</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
