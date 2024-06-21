'use client'
import React from "react";
import './Home.css';

export default function Home() {
  return (
    <>
      <div className="home-main">
        <div className="welcome">
          <div className="welcome-l">
            <p className="heading">RAKT</p>
            <p className="subHeading">Donate blood, Save lives!</p>
            <p className="subText">Welcome to Rakt, your urgent blood donation platform. When every second counts, Rakt connects those in critical need with nearby donors ready to help. Post your urgent blood requirements and find local donors quickly. Join our life-saving community and make a difference today.</p>
          </div>
          <div className="welcome-r">
            <div className="image">
              <img src="./blood.png" alt="blood" />
            </div>
          </div>
        </div>
        <div className="bottomLine"></div>
        <div className="why donate">
            <p className="heading" style={{textAlign: 'left'}}>Why Donate Blood?</p>
            <p className="subText" style={{textAlign: 'left'}}>Donating blood is a simple yet powerful act of kindness that can save lives. Every donation can help up to three people in critical need, from accident victims to those undergoing surgery or battling severe illnesses. Blood cannot be manufactured, and the demand is constant, making your donation invaluable. By donating, you not only help others in their time of need but also contribute to the well-being of your community. Join the effort to give the gift of life and make a profound impact today.</p>
        </div>
        <div className="bottomLine"></div>
        <div className="why rakt">
            <p className="heading" style={{textAlign: 'left'}}>Why Rakt?</p>
            <p className="subText" style={{textAlign: 'left'}}>Every year, millions of lives are lost due to unavailability of blood. Rakt is here to bridge the gap between blood donors and recipients. Our platform is designed to help you find blood donors quickly and easily, so you can get the help you need when you need it the most. Join our community and make a difference today.</p>
        </div>
        <div className="bottomLine"></div>
        <div className="why how-rakt">
            <p className="heading" style={{textAlign: 'left'}}>How Rakt Works?</p>
            <p className="subText" style={{textAlign: 'left'}}>
              Rakt is a simple and user-friendly platform that connects blood donors with those in urgent need. To get started, simply post your blood requirement on our platform. Our system will automatically match you with nearby donors who are ready to help. Once you find a donor, you can connect with them directly to arrange for the donation. Join our life-saving community and make a difference today.
              <br /><br />
              We believe difference starts from a single step. Take your first step with Rakt and save lives.  
            </p>
        </div>
      </div>
    </>
  );
}