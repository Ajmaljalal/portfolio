import React, { Component } from 'react'
import './contact.css';

export default class Contact extends Component {
  render() {
    return (
        <div class="formContainer" id = 'contact'>
            <form>
                <label for="fname">Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            
                <label for="lname">Email</label>
                <input type="email" id="lname" name="email" placeholder="Your email.."/>
            
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="What is in your mind.." style={{height:"200px"}}></textarea>
            
                <input type="submit" value="Submit"/>
            </form>
      </div>
    )
  }
}
