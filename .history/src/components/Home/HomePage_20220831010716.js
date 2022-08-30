import videoHomePage from "../../assets/video-homepage.mp4";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video width="750" height="500" controls>
                <source src={videoHomePage} type="video/mp4" />
            </video>
        </div>
    );
};

export default HomePage;
