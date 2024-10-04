import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Contact = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serviceID = "service_yf9n9kr";
      const templateID = "template_js4bbwj";
      const userID = "FrSvW5muyCJ9mbyTO";
      const emailData = {
        username: data.username,
        email: data.email,
        message: data.message,
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        emailData,
        userID
      );

      if (response.status === 200) {
        setData({
          username: "",
          email: "",
          message: "",
        });
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center h-[70vh] lg:min-h-screen bg-slate-400 p-4">
      <div className="bg-white p-6 mt-20 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl text-black font-semibold mb-6 text-center">
          Contact Us
        </h2>
        {formError && <div className="text-red-500 mb-4">{formError}</div>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleOnChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={data.message}
              onChange={handleOnChange}
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
