import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="contactform">
          <div className="container">
            <div className="row">
              <div className="col-md-1">
              </div>
              <div className="col-md-6">
                <p className="hear">Send us a question or comment!</p>
                <form action="https://formspree.io/isabellemajerus54@gmail.com" method="POST">
                  <input className="text-input" required type="text" name="first_name" placeholder="First name" />
                  <input className="text-input" type="text" name="last_name" placeholder="Last name" />
                  <input className="text-input" required type="email" name="_replyto" placeholder="Your email address" />
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