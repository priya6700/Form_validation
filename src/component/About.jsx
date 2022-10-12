import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              odio, deleniti eius eveniet quaerat fuga deserunt dicta. Earum
              assumenda, accusantium at optio, mollitia dolorem aperiam
              reiciendis id vitae minima aliquam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Repellendus quia nisi incidunt
              explicabo minus dolores esse laudantium provident magnam iure
              architecto dolorum, enim quae quis suscipit repudiandae. Eius,
              accusantium dolor. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum, at iusto maxime debitis asperiores
              dolorum quam neque unde officia assumenda qui voluptatibus
              accusantium cumque. Magnam tenetur necessitatibus quidem rem
              officia? consectetur adipisicing elit. Repellendus quia nisi incidunt
              explicabo minus dolores esse laudantium provident magnam iure
              architecto dolorum, enim quae quis suscipit repudiandae. Eius,
              accusantium dolor. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum, at iusto maxime debitis asperiores
              dolorum quam neque unde officia assumenda qui voluptatibus
              accusantium cumque. Magnam tenetur necessitatibus quidem rem
              officia?
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/ecom2.jpg" alt="About Us" height="650px" width="700px"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
