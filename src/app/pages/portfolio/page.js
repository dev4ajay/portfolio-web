"use client";

import { useState } from "react";
import Image from "next/image";
import img1 from "../../../image/combers.jpg";
import img2 from "../../../image/emstv.jpg";
import img3 from "../../../image/fluxEdu.jpg";
import img4 from "../../../image/BTShift.jpg";
import img5 from "../../../image/TextileApp.jpg";
import img6 from "../../../image/EMS.jpg";
import img7 from "../../../image/founder.jpg";
import img8 from "../../../image/GainApp.jpg";
import img9 from "../../../image/texotile.jpg";
import img10 from "../../../image/whalesBook.jpg";
import img11 from "../../../image/PBAPP.jpg";
import img12 from "../../../image/RKWrist.jpg";
import img13 from "../../../image/found.jpg";
import img14 from "../../../image/stackby.jpg";
import img15 from "../../../image/easyCall.jpg";

import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="container">
      <article className="container portfolio active" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <div className="flex gap-4 tab-buttons mt-4 mb-2">
            <button
              className={`select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none activeTab === 0 ? 'active' : ''`}
              onClick={() => handleTabClick(0)}
            >
              All
            </button>
            <button
              className={`select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none activeTab === 1 ? 'active' : ''`}
              onClick={() => handleTabClick(1)}
            >
              Web development
            </button>
            <button
              className={`select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none activeTab === 2 ? 'active' : ''`}
              onClick={() => handleTabClick(2)}
            >
              Application
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 1 && (
              <div className="container mt-4 mb-2">
                <div className="row  main-block">
                  <div
                    className=" col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="application"
                  >
                    <a
                      href="https://codecanyon.net/item/combers-saloon-appointment-booking-react-native-app/35566415"
                      target="_blank"
                    >
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon
                            name="eye-outline"
                            role="img"
                            className="md hydrated"
                            aria-label="eye outline"
                          ></ion-icon>
                        </div>

                        <Image
                          src={img1}
                          alt="finance"
                          className="rounded-xl"
                          loading="lazy"
                        />
                      </figure>

                      <h3 className="project-title">
                        Combers : Salon Appointment Booking
                      </h3>
                    </a>
                  </div>

                  <div
                    className=" col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.emstv"
                      target="_blank"
                    >
                      <figure className="project-img">
                        <div onclick="" className="project-item-icon-box">
                          <ion-icon
                            name="eye-outline"
                            role="img"
                            className="md hydrated"
                            aria-label="eye outline"
                          ></ion-icon>
                        </div>

                        <Image src={img2} alt="emsTV" loading="lazy" />
                      </figure>

                      <h3 className="project-title">EMSTV</h3>

                      {/* <p className="project-category">TV App</p>  */}
                    </a>
                  </div>

                  <div
                    className="col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a href="https://www.fluxeducare.in/" target="_blank">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon
                            name="eye-outline"
                            role="img"
                            className="md hydrated"
                            aria-label="eye outline"
                          ></ion-icon>
                        </div>

                        <Image src={img3} alt="fundo" loading="lazy" />
                      </figure>

                      <h3 className="project-title">Flux Educare</h3>
                    </a>
                  </div>
                </div>
                <div className="row  mt-5 mb-2 main-block">
                  <div
                    className="col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="startups"
                  >
                    <a href="#" target="_blank">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <Image src={img13} alt="founder" loading="lazy" />
                      </figure>

                      <div className="rowBox">
                        <h3 className="project-title">Founderr</h3>
                        <div className="info-content-box">
                          <ion-icon
                            className="title md hydrated"
                            name="construct-outline"
                            role="img"
                            aria-label="construct outline"
                          ></ion-icon>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="application"
                  >
                    <a href="#" target="_blank">
                      <div style={{ display: "flex" }}></div>
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <Image src={img14} alt="stackBy" loading="lazy" />
                      </figure>

                      <div className="rowBox">
                        <h3 className="project-title">StackBy</h3>
                        <div className="row">
                          <div className="info-content-box">
                            <a
                              style={{ color: "orange" }}
                              href="https://play.google.com/store/apps/details?id=com.relytree.stackby"
                              target="_blank"
                            >
                              <ion-icon
                                className="title md hydrated"
                                name="logo-google-playstore"
                                role="img"
                                aria-label="logo google playstore"
                              ></ion-icon>
                            </a>
                          </div>
                          <div className="info-content-box">
                            <a
                              style={{ color: "orange" }}
                              href="https://apps.apple.com/in/app/stackby/id1528175767"
                              target="_blank"
                            >
                              <ion-icon
                                className="title md hydrated"
                                name="logo-apple-appstore"
                                role="img"
                                aria-label="logo apple appstore"
                              ></ion-icon>
                            </a>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="application"
                  >
                    <a href="#" target="_blank">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <Image src={img15} alt="easyCall" loading="lazy" />
                      </figure>

                      <div className="rowBox">
                        <h3 className="project-title">Easy Call</h3>
                        <div className="info-content-box">
                          <ion-icon
                            className="title md hydrated"
                            name="construct-outline"
                            role="img"
                            aria-label="construct outline"
                          ></ion-icon>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="container">
                <div className="row  mt-5 mb-2 main-block">
                  <div
                    className="col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="web development"
                  >
                    <a href="#" target="_blank">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <Image src={img7} alt="founderr" loading="lazy" />
                      </figure>

                      <div className="rowBox">
                        <h3 className="project-title">Founderr</h3>
                        <div className="info-content-box">
                          <ion-icon
                            className="title md hydrated"
                            name="construct-outline"
                            role="img"
                            aria-label="construct outline"
                          ></ion-icon>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="application"
                  >
                    <a href="#" target="_blank">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <Image src={img8} alt="gainApp" loading="lazy" />
                      </figure>

                      <div className="rowBox">
                        <h3 className="project-title">Gains App</h3>
                        <div className="info-content-box">
                          <ion-icon
                            className="title md hydrated"
                            name="construct-outline"
                            role="img"
                            aria-label="construct outline"
                          ></ion-icon>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="application"
                  >
                    <a href="#" target="_blank">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <Image src={img9} alt="texotile" loading="lazy" />
                      </figure>

                      <div className="rowBox">
                        <h3 className="project-title">TexoTile</h3>
                        <div className="row">
                          <div className="info-content-box">
                            <a
                              style={{ color: "orange" }}
                              href="https://play.google.com/store/apps/details?id=com.textotile"
                              target="_blank"
                            >
                              <ion-icon
                                className="title md hydrated"
                                name="logo-google-playstore"
                                role="img"
                                aria-label="logo google playstore"
                              ></ion-icon>
                            </a>
                          </div>
                          <div className="info-content-box">
                            <a
                              style={{ color: "orange" }}
                              href="https://apps.apple.com/in/app/texotile/id6450002046"
                              target="_blank"
                            >
                              <ion-icon
                                className="title md hydrated"
                                name="logo-apple-appstore"
                                role="img"
                                aria-label="logo apple appstore"
                              ></ion-icon>
                            </a>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row  mt-5 mb-2 main-block">
                  <div
                    className="project-item active"
                    data-filter-item=""
                    data-category="startups"
                  >
                    <a href="https://www.whalesbook.com/" target="_blank">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon
                            name="eye-outline"
                            role="img"
                            className="md hydrated"
                            aria-label="eye outline"
                          ></ion-icon>
                        </div>

                        <Image src={img10} alt="whalesbook" loading="lazy" />
                      </figure>
                    </a>
                    <div className="rowBox">
                      <a href="https://www.whalesbook.com/" target="_blank">
                        <h3 className="project-title">WhalesBook</h3>
                      </a>
                      <div className="row">
                        <a
                          href="https://www.whalesbook.com/"
                          target="_blank"
                        ></a>
                        <div className="info-content-box">
                          <a
                            href="https://www.whalesbook.com/"
                            target="_blank"
                          ></a>
                          <a
                            style={{ color: "orange" }}
                            href="https://play.google.com/store/apps/details?id=com.whalesnetwork.whalesbook"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-google-playstore"
                              role="img"
                              aria-label="logo google playstore"
                            ></ion-icon>
                          </a>
                        </div>
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="https://apps.apple.com/in/app/whalesbook/id6502243553"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-apple-appstore"
                              role="img"
                              aria-label="logo apple appstore"
                            ></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="application"
                  >
                    <a href="#" target="_blank">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <Image src={img11} alt="pbApp" loading="lazy" />
                      </figure>

                      <div className="rowBox">
                        <h3 className="project-title">Paladiya Brothers</h3>
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="https://apps.apple.com/us/app/paladiya-brothers-co/id6469695413"
                            target="_blank"
                          >
                            {/* <ion-icon className="title md hydrated" name="logo-apple-appstore" role="img" aria-label="logo apple appstore"></ion-icon> */}
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="col-lg-4 project-item active"
                    data-filter-item=""
                    data-category="startups"
                  >
                    <a href="#" target="_blank">
                      <figure className="project-img">
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>

                        <Image src={img12} alt="rkwrist" loading="lazy" />
                      </figure>

                      <div className="rowBox">
                        <h3 className="project-title">Wrist Band Print</h3>
                        <div className="info-content-box">
                          <ion-icon
                            className="title md hydrated"
                            name="construct-outline"
                            role="img"
                            aria-label="construct outline"
                          ></ion-icon>
                        </div>
                      </div>

                      <p className="project-category">Applicaiton</p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {activeTab === 0 && (
            <div className="container mt-5 mb-2">
              <div className="row  main-block">
                <div
                  className=" col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="application"
                >
                  <a
                    href="https://codecanyon.net/item/combers-saloon-appointment-booking-react-native-app/35566415"
                    target="_blank"
                  >
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon
                          name="eye-outline"
                          role="img"
                          className="md hydrated"
                          aria-label="eye outline"
                        ></ion-icon>
                      </div>

                      <Image src={img1} alt="finance" loading="lazy" />
                    </figure>

                    <h3 className="project-title">
                      Combers : Salon Appointment Booking
                    </h3>
                  </a>
                </div>

                <div
                  className=" col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="web development"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.emstv"
                    target="_blank"
                  >
                    <figure className="project-img">
                      <div onclick="" className="project-item-icon-box">
                        <ion-icon
                          name="eye-outline"
                          role="img"
                          className="md hydrated"
                          aria-label="eye outline"
                        ></ion-icon>
                      </div>

                      <Image src={img2} alt="emsTV" loading="lazy" />
                    </figure>

                    <h3 className="project-title">EMSTV</h3>

                    {/* <p className="project-category">TV App</p>  */}
                  </a>
                </div>

                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="web development"
                >
                  <a href="https://www.fluxeducare.in/" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon
                          name="eye-outline"
                          role="img"
                          className="md hydrated"
                          aria-label="eye outline"
                        ></ion-icon>
                      </div>

                      <Image src={img3} alt="fundo" loading="lazy" />
                    </figure>

                    <h3 className="project-title">Flux Educare</h3>
                  </a>
                </div>
              </div>
              <div className="row  mt-5 mb-2 main-block">
                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="application"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <Image src={img4} alt="btShift" loading="lazy" />
                    </figure>
                    <div className="rowBox">
                      <h3 className="project-title">Better Trucks Shift</h3>
                      <div className="row">
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="https://play.google.com/store/apps/details?id=com.shiftappmobile"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-google-playstore"
                              role="img"
                              aria-label="logo google playstore"
                            ></ion-icon>
                          </a>
                        </div>
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="https://apps.apple.com/us/app/better-trucks-shift/id1627472809"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-apple-appstore"
                              role="img"
                              aria-label="logo apple appstore"
                            ></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="application"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img5} alt="textile" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">Textile App</h3>
                      <div className="info-content-box">
                        <ion-icon
                          className="title md hydrated"
                          name="construct-outline"
                          role="img"
                          aria-label="construct outline"
                        ></ion-icon>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="application"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img6} alt="ems" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">EMS</h3>
                      <div className="row">
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="play.google.com/store/apps/details?id=com.mk.ems"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-google-playstore"
                              role="img"
                              aria-label="logo google playstore"
                            ></ion-icon>
                          </a>
                        </div>
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="https://apps.apple.com/us/app/ems-efficiency-monitoring/id1493365230"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-apple-appstore"
                              role="img"
                              aria-label="logo apple appstore"
                            ></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row  mt-5 mb-2 main-block ">
                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="web development"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img7} alt="founderr" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">Founderr</h3>
                      <div className="info-content-box">
                        <ion-icon
                          className="title md hydrated"
                          name="construct-outline"
                          role="img"
                          aria-label="construct outline"
                        ></ion-icon>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="application"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img8} alt="gainApp" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">Gains App</h3>
                      <div className="info-content-box">
                        <ion-icon
                          className="title md hydrated"
                          name="construct-outline"
                          role="img"
                          aria-label="construct outline"
                        ></ion-icon>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="application"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img9} alt="texotile" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">TexoTile</h3>
                      <div className="row">
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="https://play.google.com/store/apps/details?id=com.textotile"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-google-playstore"
                              role="img"
                              aria-label="logo google playstore"
                            ></ion-icon>
                          </a>
                        </div>
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="https://apps.apple.com/in/app/texotile/id6450002046"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-apple-appstore"
                              role="img"
                              aria-label="logo apple appstore"
                            ></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row  mt-5 mb-2 main-block">
                <div
                  className="project-item active"
                  data-filter-item=""
                  data-category="startups"
                >
                  <a href="https://www.whalesbook.com/" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon
                          name="eye-outline"
                          role="img"
                          className="md hydrated"
                          aria-label="eye outline"
                        ></ion-icon>
                      </div>

                      <Image src={img10} alt="whalesbook" loading="lazy" />
                    </figure>
                  </a>
                  <div className="rowBox">
                    <a href="https://www.whalesbook.com/" target="_blank">
                      <h3 className="project-title">WhalesBook</h3>
                    </a>
                    <div className="row">
                      <a href="https://www.whalesbook.com/" target="_blank"></a>
                      <div className="info-content-box">
                        <a
                          href="https://www.whalesbook.com/"
                          target="_blank"
                        ></a>
                        <a
                          style={{ color: "orange" }}
                          href="https://play.google.com/store/apps/details?id=com.whalesnetwork.whalesbook"
                          target="_blank"
                        >
                          <ion-icon
                            className="title md hydrated"
                            name="logo-google-playstore"
                            role="img"
                            aria-label="logo google playstore"
                          ></ion-icon>
                        </a>
                      </div>
                      <div className="info-content-box">
                        <a
                          style={{ color: "orange" }}
                          href="https://apps.apple.com/in/app/whalesbook/id6502243553"
                          target="_blank"
                        >
                          <ion-icon
                            className="title md hydrated"
                            name="logo-apple-appstore"
                            role="img"
                            aria-label="logo apple appstore"
                          ></ion-icon>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="application"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img11} alt="pbApp" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">Paladiya Brothers</h3>
                      <div className="info-content-box">
                        <a
                          style={{ color: "orange" }}
                          href="https://apps.apple.com/us/app/paladiya-brothers-co/id6469695413"
                          target="_blank"
                        >
                          {/* <ion-icon className="title md hydrated" name="logo-apple-appstore" role="img" aria-label="logo apple appstore"></ion-icon> */}
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="startups"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img12} alt="rkwrist" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">Wrist Band Print</h3>
                      <div className="info-content-box">
                        <ion-icon
                          className="title md hydrated"
                          name="construct-outline"
                          role="img"
                          aria-label="construct outline"
                        ></ion-icon>
                      </div>
                    </div>

                    {/* <p className="project-category">Applicaiton</p>  */}
                  </a>
                </div>
              </div>
              <div className="row  mt-5 mb-2 main-block">
                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="startups"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img13} alt="founder" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">Founderr</h3>
                      <div className="info-content-box">
                        <ion-icon
                          className="title md hydrated"
                          name="construct-outline"
                          role="img"
                          aria-label="construct outline"
                        ></ion-icon>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="application"
                >
                  <a href="#" target="_blank">
                    <div style={{ display: "flex" }}></div>
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img14} alt="stackBy" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">StackBy</h3>
                      <div className="row">
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="https://play.google.com/store/apps/details?id=com.relytree.stackby"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-google-playstore"
                              role="img"
                              aria-label="logo google playstore"
                            ></ion-icon>
                          </a>
                        </div>
                        <div className="info-content-box">
                          <a
                            style={{ color: "orange" }}
                            href="https://apps.apple.com/in/app/stackby/id1528175767"
                            target="_blank"
                          >
                            <ion-icon
                              className="title md hydrated"
                              name="logo-apple-appstore"
                              role="img"
                              aria-label="logo apple appstore"
                            ></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="col-lg-4 project-item active"
                  data-filter-item=""
                  data-category="application"
                >
                  <a href="#" target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>

                      <Image src={img15} alt="easyCall" loading="lazy" />
                    </figure>

                    <div className="rowBox">
                      <h3 className="project-title">Easy Call</h3>
                      <div className="info-content-box">
                        <ion-icon
                          className="title md hydrated"
                          name="construct-outline"
                          role="img"
                          aria-label="construct outline"
                        ></ion-icon>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}
