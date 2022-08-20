import React from "react";

import {Link} from "react-router-dom"

import '../App.css';

function footer() {
    return (
        <>
      
      {/* Footer */}
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><i className="fab fa-facebook-f" /></Link>
            {/* Twitter */}
            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><i className="fab fa-twitter" /></Link>
            {/* Google */}
            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><i className="fab fa-google" /></Link>
            {/* Instagram */}
            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><i className="fab fa-instagram" /></Link>
            {/* Linkedin */}
            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><i className="fab fa-linkedin-in" /></Link>
            {/* Github */}
            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><i className="fab fa-github" /></Link>
          </section>
          {/* Section: Social media */}
          {/* Section: Form */}
          <section className>
            <form action>
              {/*Grid row*/}
              <div className="row d-flex justify-content-center  align-items-center; ">
                {/*Grid column*/}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-5 col-12">
                  {/* Email input */}
                  <div className="form-outline form-white mb-4">
                  <br></br>
                    <input type="email" id="form5Example21" className="form-control" /> 
                  </div>
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-auto">
                  {/* Submit button */}
                  <br></br>
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </form>
          </section>
          {/* Section: Form */}
          {/* Section: Text */}
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
              repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
              eum harum corrupti dicta, aliquam sequi voluptate quas.
            </p>
          </section>
          {/* Section: Text */}
          {/* Section: Links */}
          <section className>
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white">Link 1</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 2</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 3</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 4</Link>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white">Link 1</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 2</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 3</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 4</Link>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white">Link 1</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 2</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 3</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 4</Link>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="#!" className="text-white">Link 1</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 2</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 3</Link>
                  </li>
                  <li>
                    <Link to="#!" className="text-white">Link 4</Link>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2020 Copyright:
          <Link className="text-white" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
  
        </>
    )
}

export default footer;