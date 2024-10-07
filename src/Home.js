import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className='home'>
            <div>
                <h2>Welcome to Playlist Minion</h2>
                <p>The app that creates YouTube playlists based on your musical tastes</p>
            </div>
            <div>
                <Link to="/criteria" id='next-btn'>Next</Link>  
            </div>
        </div>
     );
}
 
export default Home;