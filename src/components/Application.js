import React, { Component } from 'react';
import '../App.css';

class Application extends Component {

  // need an if/else to decide whether to render 
  // stove or oven depending on chosen ingredient for game
  render() {
    return (
      <div className="Application">
        <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <form action="https://formspree.io/liztrenholme@gmail.com" method="POST">
                                <label htmlFor="full_name">Full Name</label>
                                <input type="text" required name="full_name" />

                                <label htmlFor="email">Your Email Address</label>
                                <input type="email" required name="_replyto" />

                                <label htmlFor="occupation">Occupation</label>
                                <input type="text" required name="occupation" />

                                <label htmlFor="spouse_name">Spouse's Name</label>
                                <input type="text" name="spouse_name" />

                                <label htmlFor="spouse_occupation">Spouse's Occupation</label>
                                <input type="text" name="spouse_occupation" />

                                <label htmlFor="address">Street Address</label>
                                <textarea required rows="10" cols="40" name="address" width="50%" height="50%"></textarea>

                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" required name="phone" />

                                Best time to contact:
                                <input type="radio" required name="best_time" value="mornings" />
                                <label htmlFor="best_time">Mornings</label>

                                <input type="radio" required name="best_time" value="afternoons" />
                                <label htmlFor="best_time">afternoons</label>

                                <input type="radio" required name="best_time" value="evenings" />
                                <label htmlFor="best_time">evenings</label>

                                <label htmlFor="children">Children's Names and Ages</label>
                                <textarea required rows="10" cols="40" name="children" width="50%" height="50%"></textarea>

                                <label htmlFor="veterinarian">Veterinarian Name, Address and Phone</label>
                                <textarea required rows="10" cols="40" name="veterinarian" width="50%" height="50%"></textarea>
                                
                                <label htmlFor="hobbies">Family Hobbies</label>
                                <textarea required rows="10" cols="40" name="hobbies" width="50%" height="50%"></textarea>

                                Do you prefer a male or a female?
                                <input type="radio" required name="puppy_gender_preference" value="male" />
                                <label htmlFor="puppy_gender_preference">Male</label>

                                <input type="radio" required name="puppy_gender_preference" value="female" />
                                <label htmlFor="puppy_gender_preference">Female</label>

                                <input type="radio" required name="puppy_gender_preference" value="no preference" />
                                <label htmlFor="puppy_gender_preference">No preference</label>

                                Do you plan to neuter or spay your dog?
                                <input type="radio" required name="neuter_or_spay" value="yes" />
                                <label htmlFor="neuter_or_spay">Yes</label>

                                <input type="radio" required name="neuter_or_spay" value="no" />
                                <label htmlFor="neuter_or_spay">No</label>

                                <input type="radio" required name="neuter_or_spay" value="unsure" />
                                <label htmlFor="neuter_or_spay">Unsure</label>

                                Do you hope to breed your dog?
                                <input type="radio" required name="plan_to_breed" value="yes" />
                                <label htmlFor="plan_to_breed">Yes</label>

                                <input type="radio" required name="plan_to_breed" value="no" />
                                <label htmlFor="plan_to_breed">No</label>

                                <input type="radio" required name="plan_to_breed" value="unsure" />
                                <label htmlFor="plan_to_breed">Unsure</label>

                                If yes, have you ever whelped a litter or owned a stud dog?
                                <input type="radio" required name="whelped_litter_or_owned_stud" value="yes" />
                                <label htmlFor="whelped_litter_or_owned_stud">Yes</label>

                                <input type="radio" required name="whelped_litter_or_owned_stud" value="no" />
                                <label htmlFor="whelped_litter_or_owned_stud">No</label>

                                <label htmlFor="address">If yes, please describe your experience:</label>
                                <textarea required rows="10" cols="40" name="experience_breeding" width="50%" height="50%"></textarea>
                                

                                If yes, are you willing to have your dog screened for eye abnormalities and hip dysplasia, and to take the breeder's advice on all aspects of the breeding?
                                <input type="radio" required name="willing_to_screen_health" value="yes" />
                                <label htmlFor="willing_to_screen_health">Yes</label>

                                <input type="radio" required name="willing_to_screen_health" value="no" />
                                <label htmlFor="willing_to_screen_health">No</label>

                                Do you prefer a certain color or markings?
                                <textarea required rows="10" cols="40" name="preferred_color_markings" width="50%" height="50%"></textarea>

                                Are there other animals in the house? (Please be specific with species, temperament, etc...)
                                <textarea required rows="10" cols="40" name="other_animals_in_house" width="50%" height="50%"></textarea>

                                Have you ever owned a dog before?
                                <input type="radio" required name="owned_dog_before" value="yes" />
                                <label htmlFor="owned_dog_before">Yes</label>

                                <input type="radio" required name="owned_dog_before" value="no" />
                                <label htmlFor="owned_dog_before">No</label>

                                If yes, what breed and for how long? 
                                <textarea required rows="10" cols="40" name="other_animals_in_house" width="50%" height="50%"></textarea>

                                How often do you travel? 
                                <input type="radio" required name="how_often_travel" value="weekly" />
                                <label htmlFor="how_often_travel">Weekly</label>

                                <input type="radio" required name="how_often_travel" value="once to twice per month" />
                                <label htmlFor="how_often_travel">Once to twice per month</label>

                                <input type="radio" required name="how_often_travel" value="every 3 to 6 months" />
                                <label htmlFor="how_often_travel">Every three to six months</label>

                                <input type="radio" required name="how_often_travel" value="once or twice per year" />
                                <label htmlFor="how_often_travel">Once or twice per year</label>

                                <input type="radio" required name="how_often_travel" value="almost never" />
                                <label htmlFor="how_often_travel">Almost never</label>

                                <label htmlFor="where_dog_when_travel">Where will your dog be when you travel?</label>
                                <input type="text" required name="where_dog_when_travel" />

                                <label htmlFor="groom_yourself_or_take_to_groomer">Do you have the time and patience to groom a longhaired double-coated dog, or are you planning on taking the dog to a groomer? </label>
                                <input type="text" required name="groom_yourself_or_take_to_groomer" />

                                <label htmlFor="fenced-in_yard">Do you have a fenced-in yard?  How large, if so?</label>
                                <input type="text" required name="fenced-in_yard" />

                                Will you attend obedience and/or conformation classes with your puppy?
                                <input type="radio" required name="will_attend_obedience_with_puppy" value="yes" />
                                <label htmlFor="will_attend_obedience_with_puppy">Yes</label>

                                <input type="radio" required name="will_attend_obedience_with_puppy" value="no" />
                                <label htmlFor="will_attend_obedience_with_puppy">No</label>

                                <input type="radio" required name="will_attend_obedience_with_puppy" value="unsure" />
                                <label htmlFor="will_attend_obedience_with_puppy">Unsure</label>
 
                                <label htmlFor="plan_to_show">Do you plan to show your dog in Conformation, Obedience, Herding, Agility, CGC, etc.?</label>
                                <textarea required rows="10" cols="40" name="hobbies" width="50%" height="50%"></textarea>

                                <label htmlFor="why_attracted_to_PON">Why are you attracted to a PON?</label>
                                <textarea required rows="10" cols="40" name="hobbies" width="50%" height="50%"></textarea>

                                <label htmlFor="looking_for_in_puppy">Please describe what you are looking for in a puppy. (Temperament, attitude, personality, etc.)</label>
                                <textarea required rows="10" cols="40" name="hobbies" width="50%" height="50%"></textarea>

                                <label htmlFor="any_questions">Are there any specific questions you have pertaining to our puppies?</label>
                                <textarea required rows="10" cols="40" name="hobbies" width="50%" height="50%"></textarea>

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