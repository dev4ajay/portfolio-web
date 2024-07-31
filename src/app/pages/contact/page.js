"use client";

import { BsFillSendFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <>
        <div className="h-screen ">
          <div className="pt-10 md:pt-20">
            <div className="p-4 md:p-8">
              <h1 className="text-white  pb-8 font-light text-3xl font-semibold">
                Contact form
              </h1>

              <form
                className="flex flex-col items-center"
                action="https://formspree.io/f/xeojgapz"
                method="POST"
              >
                <div className="w-full">
                  <div className="flex flex-col md:flex-row">
                    <input
                      id="name"
                      type="text"
                      autoComplete="off"
                      name="name"
                      className="my-2 py-2 px-4 round
                            med-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-red-300"
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
                  type=" submit"
                  className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-300"
                >
                  <div className="flex gap-2">
                    <span>
                      <BsFillSendFill className="mt-1" />
                    </span>{" "}
                    <span>Send Message </span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
