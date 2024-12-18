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
            name="email"
            type="email"
            required
            autoComplete="on"
            placeholder="Your Email"
            aria-label="Email Address"
          />
          <input
            name="email"
            type="email"
            required
            autoComplete="on"
            placeholder="Your Email"
            aria-label="Email Address"
          />
        </section>
        <input
          name="email"
          type="email"
          required
          autoComplete="on"
          placeholder="Your Email"
          aria-label="Email Address"
        />
        <button type="submit" aria-label="Submit form">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Contact;
