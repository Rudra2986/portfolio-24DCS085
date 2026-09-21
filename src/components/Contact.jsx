import { useState } from "react";

function Contact() {
  // useState 1: Managing form input (controlled input)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // useState 2: Toggling UI visibility
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Toggle visibility of the success message
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container contact-container">
      <h2>Contact Me</h2>

      {!isSubmitted ? (
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="4"
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          {/* Display user input in real-time */}
          <div className="real-time-preview">
            <h3>Live Preview:</h3>
            <p><strong>Name:</strong> {formData.name || "..."}</p>
            <p><strong>Email:</strong> {formData.email || "..."}</p>
            <p><strong>Message:</strong> {formData.message || "..."}</p>
          </div>
        </div>
      ) : (
        <div className="success-message">
          <h3>Thank you, {formData.name}!</h3>
          <p>Your message has been sent successfully. I will get back to you soon.</p>
          <button 
            className="submit-btn" 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", message: "" });
            }}
          >
            Send Another Message
          </button>
        </div>
      )}
    </div>
  );
}

export default Contact;
