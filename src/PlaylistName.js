import { Link } from 'react-router-dom';

const PlaylistName = () => {
    return ( 
        <div className="playlist-name">
            <div>
                <h2>Give your playlist a name</h2>
                <p>Enter a name for your newly created playlist that you can then find in your YouTube account</p>
                <p>The playlist name can be a new name or an existing playlist name, please note if the playlist name already exists, 
                    the AI generated songs will be added to that existing playlist.</p>
            </div>
            <div className="name-form">
                <div className="form-group">
                    <label >Playlist Name</label>
                    <input type="text" required />
                </div>
            </div>
            <div>
                <Link to='/google-login' id="next-btn">Next</Link>
            </div>
        </div>
     );
}
 
export default PlaylistName;