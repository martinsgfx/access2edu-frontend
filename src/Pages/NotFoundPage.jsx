import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="not-found">
            <h1>404 Not Found</h1>
            <Link to="/">Home from Link</Link>            
        </div>
    );
}

export default NotFoundPage;