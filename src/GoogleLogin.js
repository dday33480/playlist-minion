import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import {useGoogleLogin} from '@react-oauth/google';

const GoogleUserLogin = () => {     
    
    /*const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'auth-code',
    })*/

    return ( 
        <div className="google-login">
            <div>
                <h2>Login to your Google Account</h2>
                <p>Once you're logged in AI Minion will be able to generate and save your playlist within your YouTube account.</p>
            </div>
            <div>
                <div className="google-login-btn">
                    <GoogleLogin
                        onSuccess = {credentialResponse => {
                            console.log(credentialResponse);
                           }}
                        onFailure = {() => {
                            console.log('Login failed');
                        }}
                           />
                </div>
            </div>
            <div>
                <Link to='/google-login' id="next-btn">Next</Link>
            </div>
        </div>
     );                
}
 
export default GoogleUserLogin;