import React from 'react';
import './Auth.css'

const Home = () => (
    <div className="">
        <div className="row">
            <div className="sidenav col-md-4">
                <div className="sideNav-main-text">
                    <h1 className="CC">Covid Co-Op</h1>
                </div>
            </div>
            <div className="container main col-md-6 col-sm-10">
                {/* <div className="col-md-6 col-sm-12"></div> */}
                <h2>Welcome to Covid Cooperative, </h2>
                <br />
                <p className=" container homepage"> A place where you can <i>finally</i> share
                your unfiltered mental health experiences during the Covid-19 pandemic.
                The virus has affected <b>every human on the planet</b>, and yet most of us
                in our suffering forget this fact. When friends and loved ones ask how
                we are doing, it seems easier to just say, “ok,” or try to come up with some
                positive outlook. Having hope and faith is certainly a plus, and at
                the same time it’s critical not to ignore the true state of our mental health.
            </p>
                <p className=" container homepage">  At Covid Cooperative, we can share our <i><b>true</b></i> feelings. Our posts
                remain anonymous to encourage real soul searching. Covid Cooperative is
                a <b>judgment free zone</b>. It is not a place where likes or shares or even
                a comments section exists. It’s a place to find safety, shelter, and
                cooperation. Our mission is to eradicate loneliness through shared experience.
                </p>
                <h5 className="container"> We are not alone.</h5>
            </div>
        </div>
    </div>
);

export default Home;
