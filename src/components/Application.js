import React, { Component } from 'react';
import '../App.css';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
            <h3 className="title">Application</h3>
            <p>If you are interested in one of our puppies, fill out and submit this application. We will be in touch shortly!</p>
            <p className="bold">Serious inquiries only, please.</p>
              <form action="https://formspree.io/isabellemajerus54@gmail.com" method="POST">
                <label htmlFor="full_name">Full Name</label>
                <input className="text-input" type="text" required name="full_name" />

                <label htmlFor="email">Your Email Address</label>
                <input className="text-input" type="email" required name="_replyto" />

                <label htmlFor="occupation">Occupation</label>
                <input className="text-input" type="text" required name="occupation" />

                <label htmlFor="spouse_name">Spouse's Name</label>
                <input className="text-input" type="text" name="spouse_name" />

                <label htmlFor="spouse_occupation">Spouse's Occupation</label>
                <input className="text-input" type="text" name="spouse_occupation" />

                <label htmlFor="address">Street Address</label>
                <textarea className="text-input" required rows="10" cols="40" name="address" width="50%" height="50%"></textarea>

                <label htmlFor="phone">Phone Number</label>
                <input className="text-input" type="text" required name="phone" />

                <p className="survey-question">Best time to contact:</p>
                <input className="select" type="checkbox" name="best_time" value="mornings" />
                <label htmlFor="best_time">Mornings</label>

                <input className="select" type="checkbox" name="best_time" value="afternoons" />
                <label htmlFor="best_time">Afternoons</label>

                <input className="select" type="checkbox" name="best_time" value="evenings" />
                <label htmlFor="best_time">Evenings</label>

                <label className="new-q" htmlFor="children">Children's Names and Ages</label>
                <textarea rows="10" cols="40" name="children" width="50%" height="50%"></textarea>

                <label htmlFor="veterinarian">Veterinarian Name, Address and Phone</label>
                <textarea required rows="10" cols="40" name="veterinarian" width="50%" height="50%"></textarea>

                <label htmlFor="hobbies">Family Hobbies</label>
                <textarea required rows="10" cols="40" name="hobbies" width="50%" height="50%"></textarea>

                <p className="survey-question">Do you prefer a male or a female?</p>
                <input className="select" type="radio" required name="puppy_gender_preference" value="male" />
                <label htmlFor="puppy_gender_preference">Male</label>

                <input className="select" type="radio" required name="puppy_gender_preference" value="female" />
                <label htmlFor="puppy_gender_preference">Female</label>

                <input className="select" type="radio" required name="puppy_gender_preference" value="no preference" />
                <label htmlFor="puppy_gender_preference">No preference</label>

                <label className="new-q" htmlFor="where_will_dog_stay_while_home">Where will your dog stay while you are home?</label>
                <input className="text-input" type="text" name="where_will_dog_stay_while_home" />

                <p className="survey-question">Do you plan to neuter or spay your dog?</p>
                <input className="select" type="radio" required name="neuter_or_spay" value="yes" />
                <label htmlFor="neuter_or_spay">Yes</label>

                <input className="select" type="radio" required name="neuter_or_spay" value="no" />
                <label htmlFor="neuter_or_spay">No</label>

                <input className="select" type="radio" required name="neuter_or_spay" value="unsure" />
                <label htmlFor="neuter_or_spay">Unsure</label>

                <p className="survey-question">Do you hope to breed your dog?</p>
                <input className="select" type="radio" required name="plan_to_breed" value="yes" />
                <label htmlFor="plan_to_breed">Yes</label>

                <input className="select" type="radio" required name="plan_to_breed" value="no" />
                <label htmlFor="plan_to_breed">No</label>

                <input className="select" type="radio" required name="plan_to_breed" value="unsure" />
                <label htmlFor="plan_to_breed">Unsure</label>

                <p className="survey-question">If yes, have you ever whelped a litter or owned a stud dog?</p>
                <input className="select" type="radio" required name="whelped_litter_or_owned_stud" value="yes" />
                <label htmlFor="whelped_litter_or_owned_stud">Yes</label>

                <input className="select" type="radio" required name="whelped_litter_or_owned_stud" value="no" />
                <label htmlFor="whelped_litter_or_owned_stud">No</label>

                <input className="select" type="radio" required name="whelped_litter_or_owned_stud" value="I do not plan to breed ny dog." />
                <label htmlFor="whelped_litter_or_owned_stud">I do not plan to breed my dog.</label>

                <label className="new-q" htmlFor="experience_breeding">If yes, please describe your experience:</label>
                <textarea className="text-input" rows="10" cols="40" name="experience_breeding" width="50%" height="50%"></textarea>

                <p className="survey-question">If yes, are you willing to have your dog screened for eye abnormalities and hip dysplasia, and to take the breeder's advice on all aspects of the breeding?</p>
                <input className="select" type="radio" required name="willing_to_screen_health" value="yes" />
                <label htmlFor="willing_to_screen_health">Yes</label>

                <input className="select" type="radio" required name="willing_to_screen_health" value="no" />
                <label htmlFor="willing_to_screen_health">No</label>

                <input className="select" type="radio" required name="willing_to_screen_health" value="I do not plan to breed my dog." />
                <label htmlFor="willing_to_screen_health">I do not plan to breed my dog.</label>

                <label className="new-q" htmlFor="preferred_color_markings">Do you prefer a certain color or markings?</label>
                <textarea className="text-input" required rows="10" cols="40" name="preferred_color_markings" width="50%" height="50%"></textarea>

                <label htmlFor="other_animals_in_house">Are there other animals in the house? (Please be specific with species, temperament, etc...)</label>
                <textarea className="text-input" required rows="10" cols="40" name="other_animals_in_house" width="50%" height="50%"></textarea>

                <p className="survey-question">Have you ever owned a dog before?</p>
                <input className="select" type="radio" required name="owned_dog_before" value="yes" />
                <label htmlFor="owned_dog_before">Yes</label>

                <input className="select" type="radio" required name="owned_dog_before" value="no" />
                <label htmlFor="owned_dog_before">No</label>

                <label className="new-q" htmlFor="what_breed">If yes, what breed and for how long? </label>
                <textarea className="text-input" rows="10" cols="40" name="what_breed" width="50%" height="50%"></textarea>

                <p className="survey-question">How often do you travel?</p>
                <input className="select" type="radio" required name="how_often_travel" value="weekly" />
                <label htmlFor="how_often_travel">Weekly</label>

                <input className="select" type="radio" required name="how_often_travel" value="once to twice per month" />
                <label htmlFor="how_often_travel">Once to twice per month</label>

                <input className="select" type="radio" required name="how_often_travel" value="every 3 to 6 months" />
                <label htmlFor="how_often_travel">Every three to six months</label>

                <input className="select" type="radio" required name="how_often_travel" value="once or twice per year" />
                <label htmlFor="how_often_travel">Once or twice per year</label>

                <input className="select" type="radio" required name="how_often_travel" value="almost never" />
                <label htmlFor="how_often_travel">Almost never</label>

                <label className="new-q" htmlFor="where_dog_when_travel">Where will your dog be when you travel?</label>
                <input type="text" className="text-input" required name="where_dog_when_travel" />

                <label htmlFor="groom_yourself_or_take_to_groomer">Do you have the time and patience to groom a longhaired double-coated dog, or are you planning on taking the dog to a groomer? </label>
                <input type="text" className="text-input" required name="groom_yourself_or_take_to_groomer" />

                <label htmlFor="fenced-in_yard">Do you have a fenced-in yard?  How large, if so?</label>
                <input type="text" className="text-input" required name="fenced-in_yard" />

                <p className="survey-question">Will you attend obedience and/or conformation classes with your puppy?</p>
                <input className="select" type="radio" required name="will_attend_obedience_with_puppy" value="yes" />
                <label htmlFor="will_attend_obedience_with_puppy">Yes</label>

                <input className="select" type="radio" required name="will_attend_obedience_with_puppy" value="no" />
                <label htmlFor="will_attend_obedience_with_puppy">No</label>

                <input className="select" type="radio" required name="will_attend_obedience_with_puppy" value="unsure" />
                <label htmlFor="will_attend_obedience_with_puppy">Unsure</label>

                <label className="new-q" htmlFor="plan_to_show">Do you plan to show your dog in Conformation, Obedience, Herding, Agility, CGC, etc.?</label>
                <textarea className="text-input" required rows="10" cols="40" name="plan_to_show" width="50%" height="50%"></textarea>

                <label htmlFor="why_attracted_to_PON">Why are you attracted to a PON?</label>
                <textarea className="text-input" required rows="10" cols="40" name="why_attracted_to_PON" width="50%" height="50%"></textarea>

                <label htmlFor="looking_for_in_puppy">Please describe what you are looking for in a puppy. (Temperament, attitude, personality, etc.)</label>
                <textarea className="text-input" required rows="10" cols="40" name="looking_for_in_puppy" width="50%" height="50%"></textarea>

                <label htmlFor="any_questions">Are there any specific questions you have pertaining to our puppies?</label>
                <textarea className="text-input" rows="10" cols="40" name="any_questions" width="50%" height="50%"></textarea>

                <input type="submit" className='btn-secondary' value="Send" />
              </form>
            </div>
            <div className="col-md-3">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Application;