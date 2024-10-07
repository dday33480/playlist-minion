import { Link } from 'react-router-dom';

const GoogleLogin = () => {
    return ( 
        <div className="google-login">
            <div>
                <h2>Login to your Google Account</h2>
                <p>Once you're logged in AI Minion will be able to generate and save your playlist within your YouTube account.</p>
            </div>
            <div className="login-form">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" required />
                </div>
            </div>
            <div>
                <Link to='/google-login' id="next-btn">Next</Link>
            </div>
        </div>
     );
}
 
export default GoogleLogin;