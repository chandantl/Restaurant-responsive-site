import React, { useState, useEffect } from 'react'
import './Menu.css'
function Menu() {
    const [hidelist, Sethidelist] = useState(true)


    const changeHideState = () => {
        Sethidelist(prevState => !prevState)
    }

    function refreshPage() {
        window.location.reload(false);
    }

    useEffect(() => {

    }, [hidelist]);

    return (
        <nav className="container pl-0 mb-5">
            <button onClick={changeHideState} className="menu px-4 ml-4 mb-4">
                {hidelist ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}    Menu
         </button>

            {hidelist ? <ul className="row pl-3 " >
                <li className="col-sm tabSelections mr-2 mb-1 " onClick={refreshPage}>
                    TACOS
</li>
                <li className="col-sm tabSelections mr-2 mb-1 ">
                    BEERS
</li>
                <li className="col-sm tabSelections mr-2 mb-1 ">
                    WINES
</li>

                <li className="col-sm tabSelections mr-2 mb-1 ">
                    DESSERTS
</li>

                <li className="col-sm tabSelections mr-2 mb-1 ">
                    RESERVATIONS
</li>
            </ul> : null}

        </nav>

    )
}

export default Menu
