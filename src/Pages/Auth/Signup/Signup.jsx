import React from 'react';
import SignupMobileLayout from './SignupMobileLayout';
import SignupWebLayout from './SignupWebLayout';
import './Signup.css';

function Signup() {
    return (
        <div>
            <div>
                <div className="webView">
                    <SignupWebLayout />
                </div>
                <div className="mobileView">
                    <SignupMobileLayout />
                </div>
            </div>                 

        </div>
    );
}

export default Signup;