import { useState } from "react";
import toast from "react-hot-toast";

import Layout from "../Layout/Layout";

const sendMessageToUser = async (data, setUserInput) => {
  const botToken = "7573792473:AAGgb_vLI9GNnD4n8d2jl-0DTAem1v3r-SA"; // ⚠️ Don't expose this in production!
  const chatId = "6669773921";  // Your Telegram user ID

  const messageToSend = `Full Name: ${data.name}\nPhone Number: ${data.phone}\nMessage: ${data.message}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
      const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              chat_id: chatId,
              text: messageToSend
          }),
      });

      const result = await response.json();
      if (result.ok) {
          toast.success("Message sent successfully!");
      } else {
          toast.error("Failed to send message.");
          console.error("Telegram API error:", result);
      }
  } catch (error) {
      toast.error("Network error. Try again.");
      console.error("Error sending message:", error);
  }
};



function Contact() {

  const [userInput, setUserInput] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  async function onFormSubmit(e) {
    e.preventDefault();

    if(!userInput.phone || !userInput.name || !userInput.message ) {
        toast.error("All fields are mandatory!");
        return;
    }

    try {
    console.log(userInput);
    sendMessageToUser(userInput);
    } catch (err) {
        toast.error("operation failed....",);
        console.log(err.message);
    }
}

  return (
    <Layout>
      <div
      data-theme="coffee"
      className="flex items-center justify-center min-h-[90vh]">
        <form
        onSubmit={onFormSubmit}
          noValidate
          data-theme="night"
          className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem] "
        >
          {/* (1). Contact-Form-Heading */}
          <h1 className="text-3xl font-extrabold">Contact Form</h1>

          {/* (2). Name */}
          <div
            className="flex flex-col w-full gap-1 justify-center
            "
            // items-center
          >
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              onChange={handleInputChange}
              className="bg-transparent border px-2 font-semibold"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name..."
              value={userInput.name}
            />
          </div>

          {/* (3). Phone */}
          <div
            className="flex flex-col w-full gap-1 justify-center
            "
            // items-center
          >
            <label htmlFor="phone" className="text-xl font-semibold">
              Phone Number
            </label>
            <input
              onChange={handleInputChange}
              className="bg-transparent border px-2 font-semibold"
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your Phone Number..."
              value={userInput.phone}
            />
          </div>

          {/* (4). Message */}
          <div
            className="flex flex-col w-full gap-1 justify-center
            "
            // items-center
          >
            <label htmlFor="message" className="text-xl font-semibold">
              Message
            </label>
            <textarea
              onChange={handleInputChange}
              className="bg-transparent border px-2 font-semibold resize-none h-40"
              name="message"
              id="message"
              placeholder="Enter your message..."
              value={userInput.message}
            />
          </div>

          {/* (5). Form-submit-button */}
          <div className="flex gap-1">
            <button
              type="submit"
              className="btn btn-primary w-60"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;