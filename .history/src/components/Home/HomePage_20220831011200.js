import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoplay mutes loop>
                <source src={videoHomePage} type="video/mp4" />
            </video>
        </div>
    );
};

export default HomePage;
