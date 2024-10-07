import { Link } from 'react-router-dom';


const Criteria = () => {
    return ( 
        <div className="criteria-selection">
            <div>
                <h2>Set your criteria</h2>
                <p>Specify upto 3 different artists and titles for our AI to search against and find similar styles of music to add to your future playlist.</p>
                <p>PRO TIP: If you're looking for a mix of variety add 3 different artists from different music genres.</p>
            </div>
            <div className="criteria-form">
                <form>
                    <div className="form-group">
                        <label >Artist 1</label>
                        <input type="text" required />
                    </div>

                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" required />
                    </div>

                    <div className="form-group">
                        <label >Artist 2</label>
                        <input type="text" />
                    </div>

                    <div className="form-group">        
                        <label >Title</label>
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <label >Artist 3</label>
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" />
                    </div>

                </form>
            </div>
            <div>
                <Link to='/playlist-name' id="next-btn">Next</Link>
            </div>
        </div>
     );
}
 
export default Criteria;