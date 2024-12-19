import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="heading">
        <h2>CONTACT US</h2>
        <p>
          We would love to hear from you.
          <br /> Let us know if you want to consult with our team or leave a
          simple inquiry.
        </p>
      </div>
      <form>
        <section>
          <input
            name="name"
            type="text"
            required
            autoComplete="on"
            placeholder="Your Name"
            aria-label="Enter your name"
          />
          <input
            name="mobile_number"
            type="tel"
            required
            autoComplete="on"
            placeholder="Your Mobile Number"
            aria-label="Enter your mobile number"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number."
          />
        </section>
        <input
          name="email_address"
          type="email"
          required
          autoComplete="on"
          placeholder="Your Email Address"
          aria-label="Enter your email address"
        />
        <button type="submit" aria-label="Submit the contact form">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Contact;
