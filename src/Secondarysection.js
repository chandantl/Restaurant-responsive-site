import React from "react";
import "./SecondarySection.css"
export default function Secondarysection() {
    return (
        <div>
            <div className="row container pl-0">
                <div className="col-8 mb-2">
                    <header className="heroa">
                        <h1>Terry's joint</h1>
                        <p>Pretty Good Tacos!</p>
                    </header>
                </div>

                <div className="col">
                    <div className="col secondaryBoxes mb-4">
                        <p className="price my-0">$1.99</p>
                        <p>Tacos</p>
                    </div>
                    <div className="col secondaryBoxes">
                        <p className="price my-0">$3.99</p>
                        <p>Kombucha</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
