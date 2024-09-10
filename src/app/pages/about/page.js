"use client"
import Link from "next/link";
import icondev from "../../../image/icon-dev.png";
// import iconapp from "../../../image/icon-app.png";
import Image from "next/image";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa6";
import { TbAppsFilled } from "react-icons/tb";

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <article className="about" data-page="about">
        <header>
          <h2 className="h2 article-title text-3xl font-bold">About me</h2>
        </header>
        <br/>
        <section className="about-text">
          <p className="text-lg">
            Hey there! 👋 I&apos;ve spent over 1 year diving deep into React JS development, focusing on
            creating awesome websites and mobile apps. 📱 I&apos;ve had the pleasure of working on a variety of projects for different clients, from cool startups,
            small and mid-level companies.
          </p>
          <br/>
          <p className="text-lg">
            💼 My knack lies in seamlessly integrating third-party tools and APIs to make sure everything runs smoothly
            and users have a great experience. I love building scalable solutions that fit exactly what my clients need,
            using my skills in front-end development, thoughtful UI/UX design, and making sure everything looks great on
            any device.
          </p>
          <br/>
          <p className="text-lg">
            🎨 My portfolio shows my passion for crafting top-notch work that goes beyond expectations. |
            🚀 I&apos;m known for hitting deadlines and sticking to budgets, and I thrive in teams where we can tackle
            challenges and make something amazing together. Let&apos;s create something awesome! 💪
          </p>
          <br/>
          <br/>
        </section>
        <section className="service">
          <h3 className="h3 service-title text-2xl font-semibold">What I&apos;m doing</h3>
          <br/>
          <div className="container">
            <div className="row flex flex-wrap gap-4">
              <div className="col-lg-6 service-item flex-1 min-w-[300px]">
                <div className="flex gap-3 service-content-box p-4 border rounded-lg shadow-lg">
            
                  <FaAppStoreIos className="fs"/>
                  <p className="service-item-text text-lg">App Development<br/>Professional development of applications.</p>
                </div>
              </div>
              <div className="col-lg-6 service-item flex-1 min-w-[300px]">
                <div className="flex gap-3 service-content-box p-4 border rounded-lg shadow-lg">
                  <MdDeveloperMode className="fs" />
                  <p className="service-item-text text-lg">Web Development<br/>High-quality development of sites at the professional level.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4 mb-2">
            <div className="row flex flex-wrap gap-4">
              <div className="col-lg-6 service-item flex-1 min-w-[300px]">
                <div className="flex gap-3 service-content-box p-4 border rounded-lg shadow-lg">
                <AiOutlineAntDesign className="fs" />
                  <p className="service-item-text text-lg">Web Design<br/>The most modern and high-quality design.</p>
                </div>
              </div>
              <div className="col-lg-6 service-item flex-1 min-w-[300px]">
                <div className="flex gap-3 service-content-box p-4 border rounded-lg shadow-lg">
                  <TbAppsFilled className="fs"/>
                  <p className="service-item-text text-lg">Photography<br/>I make high-quality photos in any category professionally.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
