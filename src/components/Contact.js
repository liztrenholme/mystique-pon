import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="contactform">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-6">
              <h3 className="title">Ask a question</h3>
                <p className="hear">Send us a general question or comment here.  If you are interested in one of our puppies, please fill out the application.</p>
                <form action="https://formspree.io/isabellemajerus54@gmail.com" method="POST">
                <label htmlFor="first_name">First name</label>
                  <input className="text-input" required type="text" name="first_name" />
                  <label htmlFor="last_name">Last name</label>
                  <input className="text-input" type="text" name="last_name" />
                  <label htmlFor="email">Your email address</label>
                  <input className="text-input" required type="email" name="_replyto" />
                  <textarea required rows="10" cols="38" name="message" placeholder="Message..." width="50%" height="50%"></textarea>
                  <input type="submit" className='btn-secondary' value="Send" />
                </form>
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;