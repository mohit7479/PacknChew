import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import chef from "../pdf/chef.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">CHEF'S NOTE</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Celebrating <b>Pack N Chew's 25th Anniversary</b>, a silver
              milestone achieved with the love of our well-wishers and patrons.
              Heartfelt thanks to critiques for refining our craft. I hope Team
              PNC has consistently brought joy through its food and service. Our
              dishes, a blend of experimentation and simplicity, remain
              sumptuous and healthy. Specialized kitchens, tasteful decor,
              eco-friendly practices, and immaculate facilities make me
              immensely proud. While I personally supervise every detail,
              there's always room for improvement. I invite you to provide an
              honest feedback on the food and service, enabling Team PNC to
              enhance your dining experience. A big compliment to my dedicated
              team, enduring the journey with an eccentric perfectionist,
              serving all guests with a smile. Here's to more years of culinary
              excellence! <br />
              <br />
              <b>
                <i>Bon Appetit `</i>
              </b>
              <br />
              <br />
              <i>NITTIN </i>
              <br />
              Founder & Chef
            </p>
            <br />
            <Link to={"/exploreMenu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src={chef} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
