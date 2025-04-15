import React, { useState, useEffect } from "react";
import "./Login.css";

function SocialMediaWebSignIn() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize the auth providers when component mounts
  useEffect(() => {
    // Load Google API
    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleAuth;
      document.body.appendChild(script);
    };

    // Load Microsoft API
    const loadMicrosoftScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://alcdn.msauth.net/browser/2.30.0/js/msal-browser.min.js";
      script.async = true;
      script.defer = true;
      script.onload = initializeMicrosoftAuth;
      document.body.appendChild(script);
    };

    // Apple Sign-in doesn't require a separate script load
    // It uses a REST API approach

    loadGoogleScript();
    loadMicrosoftScript();
  }, []);

  // Google Authentication setup
  const initializeGoogleAuth = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Replace with your actual Google Client ID
        callback: handleGoogleResponse,
      });

      // Render the Google Sign-In button
      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"), // ID of the container where the button will be rendered
        { theme: "outline", size: "large" } // Customize the button
      );
    } else {
      setError("Google API failed to load.");
    }
  };

  // Microsoft Authentication setup
  const initializeMicrosoftAuth = () => {
    if (window.msal) {
      const msalConfig = {
        auth: {
          clientId: "YOUR_MICROSOFT_CLIENT_ID", // Replace with your client ID
          authority: "https://login.microsoftonline.com/common",
          redirectUri: window.location.origin,
        },
        cache: {
          cacheLocation: "sessionStorage",
          storeAuthStateInCookie: false,
        },
      };

      window.msalInstance = new window.msal.PublicClientApplication(msalConfig);
    }
  };

  // Google Sign-in handler
  const handleGoogleSignIn = () => {
    setLoading(true);
    setError(null);

    if (window.google?.accounts.id) {
      // Avoid using prompt (FedCM issue), use One Tap or button
      // Fallback if identity-credentials is not supported
      setError("Google One Tap login requires a supported browser context.");
      setLoading(false);
    } else {
      setError("Google Sign-In failed to load");
      setLoading(false);
    }
  };

  // Microsoft Sign-in handler
  const handleMicrosoftSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      if (window.msalInstance) {
        const loginRequest = {
          scopes: ["user.read"],
        };

        const response = await window.msalInstance.loginPopup(loginRequest);
        if (response) {
          // Get the user info
          const user = response.account;
          setUser({
            name: user.name,
            email: user.username,
            provider: "Microsoft",
            token: response.accessToken,
          });
        }
      } else {
        setError("Microsoft Sign-In failed to load");
      }
    } catch (error) {
      setError("Microsoft Sign-In failed: " + error.message);
    }

    setLoading(false);
  };

  // Apple Sign-in handler
  const handleAppleSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      // Apple Sign In uses a different approach
      // It requires a server-side component to validate the token
      // and exchange for user information

      // For Apple Sign In, you typically:
      // 1. Redirect to Apple's OAuth URL
      // 2. Handle the callback from Apple on your backend
      // 3. Process the token and get user info on your server

      // A simplified client-side approach:
      window.location.href = `https://appleid.apple.com/auth/authorize?client_id=${YOUR_APPLE_SERVICE_ID}&redirect_uri=${encodeURIComponent(
        window.location.origin + "/auth/apple/callback"
      )}&response_type=code id_token&scope=name email&response_mode=form_post`;

      // Note: You'll need a server endpoint to handle the callback
      // This is just for demonstration purposes
    } catch (error) {
      setError("Apple Sign-In failed: " + error.message);
      setLoading(false);
    }
  };

  // Handle Google Sign-in response
  const handleGoogleResponse = (response) => {
    if (response.credential) {
      // Decode the JWT token to get user information
      const base64Url = response.credential.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      const { name, email, picture } = JSON.parse(jsonPayload);

      setUser({
        name,
        email,
        picture,
        provider: "Google",
        token: response.credential,
      });
    }

    setLoading(false);
  };

  // Handle sign out
  const handleSignOut = () => {
    setUser(null);
    // Additional sign out logic for each provider if needed
  };

  if (user) {
    return (
      <div className="user-profile p-4 border rounded shadow">
        <h2 className="text-xl font-bold mb-4">Welcome, {user.name}</h2>
        <p className="mb-2">Logged in with: {user.provider}</p>
        <p className="mb-4">Email: {user.email}</p>
        {user.picture && (
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-full w-16 h-16 mb-4"
          />
        )}
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="otherSignIn grid gap-3 p-6">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}{" "}
        </div>
      )}

      <div className="flex justify-center gap-10 pt-4 pb-10">
        {/* Microsoft Sign-in Button */}
        <button onClick={handleMicrosoftSignIn} disabled={loading}>
          <img
            src="src/assets/logos_microsoft-icon.svg"
            alt="Microsoft Icon"
            className="w-10 h-10"
          />
        </button>

        {/* Google Sign-in Button */}
        <button onClick={handleGoogleSignIn} disabled={loading}>
          <img
            src="src/assets/devicon_google.svg"
            alt="Google Icon"
            className="w-10 h-10"
          />
        </button>

        {/* Apple Sign-in Button */}
        <button onClick={handleAppleSignIn} disabled={loading}>
          <img
            src="src/assets/ic_outline-apple.svg"
            alt="Apple Icon"
            className="w-10 h-10"
          />
        </button>
      </div>
    </div>
  );
}

export default SocialMediaWebSignIn;
