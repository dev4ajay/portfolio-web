"use client";

import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineLoading } from "react-icons/ai";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/xeojgapz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <div className="h-screen ">
        <div className="pt-10 md:pt-20">
          <div className="p-4 md:p-8">
            <h1 className="text-white pb-8 font-light text-3xl font-semibold">
              Contact Me
            </h1>

            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <div className="w-full">
                <div className="flex flex-col md:flex-row">
                  <input
                    id="name"
                    type="text"
                    autoComplete="off"
                    name="name"
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-red-300"
                    placeholder="Name"
                    required
                  />
                  <input
                    id="email"
                    type="email"
                    autoComplete="off"
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-red-300"
                    placeholder="Email"
                    required
                    name="email"
                  />
                </div>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  autoComplete="off"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-red-300"
                  required
                />
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  autoComplete="off"
                  placeholder="Say Something"
                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-red-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300"
                disabled={isSubmitting}
              >
                <div className="flex gap-2 items-center">
                  {isSubmitting ? (
                    <AiOutlineLoading className="animate-spin mt-1" />
                  ) : (
                    <BsFillSendFill className="mt-1" />
                  )}
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
