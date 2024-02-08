import React, { useState } from "react";
import img from "../utils/images/Contact.svg";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        setErrorMessage("");
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json();
        setSuccessMessage("");
        setErrorMessage(data.message);
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Internal Server Error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="justify-center items-center min-h-90vh mt-10 mb-10 font-customFont flex flex-col sm:flex-row gap-8">
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg flex-1"
        style={{ minHeight: "400px" }}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md shadow-lg input"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md shadow-lg input"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md shadow-lg input"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          {submitting ? (
            <Alert severity="info" sx={{ p: 1, fontSize: "0.875rem" }}>
              Submitting...
            </Alert>
          ) : (
            <>
              {successMessage && (
                <Alert
                  icon={<CheckIcon fontSize="inherit" />}
                  severity="success"
                  sx={{ p: 0.5, fontSize: "0.875rem" }}
                >
                  {successMessage}
                </Alert>
              )}
              {errorMessage && (
                <Alert severity="error" sx={{ p: 0.5, fontSize: "0.875rem" }}>
                  {errorMessage}
                </Alert>
              )}
              {!successMessage && !errorMessage && (
                <button type="submit" className="btn">
                  Send Message
                </button>
              )}
            </>
          )}
        </form>
      </div>
      <img
        src={img}
        className="hidden sm:block md:block"
        alt=""
        style={{ maxWidth: "40%", height: "auto" }}
      />
    </div>
  );
};

export default Contact;
