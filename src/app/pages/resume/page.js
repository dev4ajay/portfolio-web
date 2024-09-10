import { FaBookOpen } from "react-icons/fa";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="container mx-auto p-4">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
      <article data-page="resume">
        <br />
        <br />

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
         
            </div>
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item mb-6">
              <h4 className=" font-semibold">Maharshi Dayanand University</h4>
              <span className="record">2023 — 2026</span>
              <p className="text-lg">BCA Pursuing (2nd Year)</p>
            </li>
            <li className="timeline-item mb-6">
              <h4 className=" font-semibold">Ridh Nath Sr Sec School, Balak (Hisar)</h4>
              <span className="record">2019 — 2020</span>
              <p className="text-lg">12th</p>
            </li>
            <li className="timeline-item mb-6">
              <h4 className=" font-semibold">Ridh Nath Sr Sec School, Balak (Hisar)</h4>
              <span className="record">2017 — 2018</span>
              <p className="text-lg">10th</p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
         
            </div>
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item mb-6">
              <h4 className=" font-semibold">Prometheus Technologies Pvt. Ltd (Junior React JS Developer)</h4>
              <span className="record">Feb 2023 — May 2024</span>
              <p className="text-lg">I worked for about  1 year ,3 months and signed a bond, but the company didn&apos;t have any projects, so they had to lay me off.</p>
            </li>
            <li className="timeline-item mb-6">
              <h4 className=" font-semibold">Zidio Development Pvt. Ltd (React JS Developer, Internship)</h4>
              <span className="record">May 2023 — Jun 2024</span>
              <p className="text-lg">I worked for about 1 month and signed for an internship.</p>
            </li>
            <li className="timeline-item mb-6">
              <h4 className=" font-semibold">The Entrepreneurship Network (TEN)</h4>
              <span className="record">July 2024 — Present</span>
              <p className="text-lg">I have been working for about 3 months and started my journey as a React JS Developer for an internship.</p>
            </li>
          </ol>
        </section>
        <br />
        <br />

        <section className="skill">
          <h3 className="text-2xl font-semibold">My skills</h3>
          <ul className="skills-list content-card">
            <li className="skills-item mb-4">
              <div className="flex justify-between">
                <h5 className="text-lg font-semibold">React JS Developer</h5>
                <data value="100" className="record">100%</data>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
              </div>
            </li>
            <li className="skills-item mb-4">
              <div className="flex justify-between">
                <h5 className="text-lg font-semibold">Next JS Developer</h5>
                <data value="80" className="record">95%</data>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </li>
            <li className="skills-item mb-4">
              <div className="flex justify-between">
                <h5 className="text-lg font-semibold">JavaScript</h5>
                <data value="93" className="record">93%</data>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skills-item mb-4">
              <div className="flex justify-between">
                <h5 className="text-lg font-semibold">WordPress</h5>
                <data value="95" className="record">95%</data>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
              </div>
            </li>
            <li className="skills-item mb-4">
              <div className="flex justify-between">
                <h5 className="text-lg font-semibold">Firebase</h5>
                <data value="90" className="record">90%</data>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
              </div>
            </li>
            <li className="skills-item mb-4">
              <div className="flex justify-between">
                <h5 className="text-lg font-semibold">Postman</h5>
                <data value="95" className="record">95%</data>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
