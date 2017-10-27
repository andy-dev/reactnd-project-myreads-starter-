import React from 'react';
import { Link } from 'react-router-dom';


//Stateless functional component, just shows nav bar
function OpenSearchButton() {
    return (
        <div className="open-search">
            <Link to="/search" className="open-search">
                Add a book
            </Link>
        </div>
    );
}

export default OpenSearchButton;