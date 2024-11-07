import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="heading">
        <h2>CONTACT US</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Eu amet quis sagittis
          ultricies cursus convallis ultrices. Iaculis enim amet lacus aliquam
          senectus dignissim dictum luctus augue. Ornare viverra non faucibus
          vitae cursus nisi orci quis viverra. Sollicitudin vestibulum
          scelerisque molestie ut fermentum.
        </p>
      </div>
      <form>
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
