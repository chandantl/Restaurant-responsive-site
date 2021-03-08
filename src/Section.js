import React from 'react'
import './Section.css'
function Section() {
    return (
        <div>
            <section className="features  mt-4 pl-0" >
                <div className="row container">
                    <div className="col-sm feature mr-4 mb-2" >
                        <span className="icon">🌮</span>
                        <h3>Tacos</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
                    </div>

                    <div className=" col-sm feature mr-4 mb-2">
                        <span className="icon">🍺</span>
                        <h3>Beer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
                    </div>
                    <div className="col-sm feature mr-4 mb-2">
                        <span className="icon">🍷</span>
                        <h3>Wine</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
                    </div>

                    <div className="col-sm feature  mb-2">
                        <span className="icon">🎵</span>
                        <h3>Music</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda.</p>
                    </div>
                </div>
            </section>

            <section className="my-4 mx-3">
                <div className="row burgerSection container">
                    <div className="col-5">
                        <img src="https://jolly-kalam-23776e.netlify.app/restaurantwebsite/images/queso-taco.png" alt="Yummy" className="about_mockup"></img>
                    </div>
                    <div className="col-6">
                        <div className="about_detailes ">
                            <h2>Featured Taco</h2>
                            <p>Slim Profile, easy to hold and loaded with cheese.</p>
                            <p>This is the one you have been waiting for</p>
                            <button>
                                Learn More →
                </button>
                        </div>
                    </div>
                </div>
            </section>



            <section className="gallery mt-4 container pl-0 ">
                <h2 className="col-sm ">
                    Insta Grams
                    </h2>

                <img src="https://source.unsplash.com/random/201x201" alt="123" />
                <img src="https://source.unsplash.com/random/202x202" alt="123" />
                <img src="https://source.unsplash.com/random/203x203" alt="123" />
                <img src="https://source.unsplash.com/random/204x204" alt="123" />
                <img src="https://source.unsplash.com/random/205x205" alt="123" />
                <img src="https://source.unsplash.com/random/206x206" alt="123" />
                <img src="https://source.unsplash.com/random/207x207" alt="123" />
                <img src="https://source.unsplash.com/random/207x208" alt="123" />
                <img src="https://source.unsplash.com/random/207x209" alt="123" />
                <img src="https://source.unsplash.com/random/207x203" alt="123" />

            </section>
        </div>
    )
}

export default Section
