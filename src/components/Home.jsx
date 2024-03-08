import React from "react";
// Import your image here
import zenliBanner from "../assets/png1.svg"; // Adjust the path as needed
import Banner from "../assets/banner.jpg";
import ailogo from "../assets/ai_logo.jpg";
import webd from "../assets/webd.jpg";
import iot from "../assets/iot.jpeg";
import ai_img from "../assets/ai_image.jpg";
import iot_img from "../assets/iot_image.png";
import backgrd from "../assets/background.png";

const HomePage = () => {
  return (
    <div>
      <div className="relative w-full max-w-lg">
        <div className="absolute top-5 left-40 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute top-35 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute top-5 -left-5 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-gray-50 via-sky-100 to-blue-200 flex flex-col justify-center items-center pt-12">
        <h1 className="mb-4 text-6xl md:text-8xl lg:text-10xl font-sans text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Learn.
          </span>{" "}
          Network. Grow.
        </h1>
        <div className="mt-10 flex justify-center items-center space-x-4 md:space-x-8">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Python
          </button>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            C++
          </button>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Javascript
          </button>
          <button
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            SystemVerilog
          </button>
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Go
          </button>
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Kotlin
          </button>
          <button
            type="button"
            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            PHP
          </button>

          <div class="mt-10 relative w-full max-w-lg">
            <div class="absolute top-0  left-20  w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            <div class="absolute top-0  -left-20 -right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 "></div>
            <div class="absolute top-20 -right-50 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 "></div>
          </div>
        </div>

        {/*Cards*/}
        {/* <div className="flex justify-center space-x-20 bottom-0 left-0 right-0 pt-12 mt-40">
    <div className="relative group w-80 h-80 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${ai_img})` }}></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-opacity-75 group-hover:h-full group-hover:bg-opacity-100 transition-all duration-1000 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold">Artificial Intelligence</h3>
            <p className="text-sm text-black-600 line-clamp-2 group-hover:line-clamp-none">Explore the transformative world of AI, from machine learning to neural networks. Join us on a journey of innovation as we harness AI's
             power to solve complex problems and shape the futures</p>
      </div>
    </div>

    <div className="relative group w-80 h-80 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${iot_img})` }}></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 group-hover:h-full group-hover:bg-opacity-100 transition-all duration-1000 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold">Internet of Things</h3>
            <p className="text-sm text-gray-600 line-clamp-2 group-hover:line-clamp-none">Embark on a digital journey: from innovative ideas to immersive experiences. Redefining online presence, propelling your vision into the digital realm</p>
        </div>
    </div>

    <div className="relative group w-80 h-80 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 group-hover:h-full group-hover:bg-opacity-100 transition-all duration-1000 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold">Web Development</h3>
            <p className="text-sm text-gray-600 line-clamp-2 group-hover:line-clamp-none">Experience the future with our Internet of Things project, infusing intelligence into everyday objects.
               From smart homes to efficient industries, discover a connected world where devices communicate, learn, and adapt, revolutionizing your environment.</p>
        </div>
    </div>
</div> */}

        {/* <h1 className="text-5xl font-bold text-blue-900 mb-4 pt-20">
        Welcome to Zenli
      </h1>
      <p className="text-lg text-blue-700 mb-8">
        Empowering the future through education
      </p>
      <div className="flex">
        <a
          href="/courses"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          View Courses
        </a>
        <a
          href="/about"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Learn More
        </a>
      </div> */}
      </div>

      <div className="min-h-screen bg-[url('./assets/background.svg')] bg-cover bg-center flex flex-col justify-center items-center">
        <div class="elative w-full max-w-lg">
          {/* <div class="absolute top-45 -bottom-40 -left-0  w-72 h-72 bg-purple-300 rounded-full"></div> */}
        </div>
        <h1 class="mt-10 mb-4 px-4 text-6xl font-sans text-gray-900 dark:text-white md:text-7xl lg:text-7xl">
          Access the Projects Mentored by Top IITians.
        </h1>
        {/* <div className="mt-20 carousel rounded-box overflow-x-auto scrollbar-hide whitespace-nowrap pl-10 pr-10">
    <div className="px-12 carousel-item inline-block">
      <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
    </div>
    <div className="px-12 carousel-item inline-block">
      <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
    </div>
    <div className="px-12 carousel-item inline-block">
      <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
    </div>

    <div class="elative w-full max-w-lg">
      <div class="absolute top-25 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div class="absolute top-25 right-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
     </div>
  </div> */}

        <div className="flex justify-center space-x-20 bottom-0 left-0 right-0 pt-12 mt-20">
          <div className="relative group w-80 h-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage:
                  "url('https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg')",
              }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-opacity-75 group-hover:h-full group-hover:bg-opacity-100 transition-all duration-1000 ease-in-out hover:scale-105">
              <h3 className="text-lg font-semibold">Deep-Carlsen</h3>
              <p className="text-sm text-white-600 line-clamp-2 group-hover:line-clamp-none">
                Experience the future with our Internet of Things project,
                infusing intelligence into everyday objects. From smart homes to
                efficient industries, discover a connected world where devices
                communicate, learn, and adapt, revolutionizing your environment.
              </p>
            </div>
          </div>
          <div className="relative group w-80 h-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage:
                  "url('https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg')",
              }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-opacity-75 group-hover:h-full group-hover:bg-opacity-100 transition-all duration-1000 ease-in-out hover:scale-105">
              <h3 className="text-lg font-semibold">
                Computer Vision using OpenCV
              </h3>
              <p className="text-sm text-white-600 line-clamp-2 group-hover:line-clamp-none">
                "Computer Vision" is a project that explores the implementation
                of advanced algorithms to analyze and interpret visual data from
                the real world. It focuses on tasks such as image recognition,
                object detection, and image segmentation using deep learning and
                image processing techniques.
              </p>
            </div>
          </div>
          <div className="relative group w-80 h-80 bg-white shadow-lg rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage:
                  "url('https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg')",
              }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-opacity-75 group-hover:h-full group-hover:bg-opacity-100 transition-all duration-1000 ease-in-out hover:scale-105">
              <h3 className="text-lg font-semibold">Reg-Ex</h3>
              <p className="text-sm text-white-600 line-clamp-2 group-hover:line-clamp-none">
                "Regex" is a project that involves utilizing regular expressions
                (regex) to search, match, and manipulate text based on specified
                patterns. It focuses on understanding and implementing regex
                patterns in various programming languages to efficiently process
                and validate textual data.
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="mt-20 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-8 py-3 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transform hover:scale-110 transition-transform duration-150 ease-in-out"
        >
          Explore More Projects
        </button>
      </div>

      <div>
        <div className="min-h-screen bg-gradient-to-r from-gray-50 to-sky-200 flex flex-col justify-center items-center">
          <div class="px-4 py-4">
            <div class="max-w-md mx-auto bg-gradient-to-r from-gray-50 to-teal-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img
                    class="h-48 w-full object-cover md:h-full md:w-48"
                    src={ailogo}
                    alt="Modern building architecture"
                  />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Artificial Intelligence
                  </div>
                  <a
                    href="#"
                    class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Explore, Learn and Innovate with AI
                  </a>
                  <p class="mt-2 text-slate-500">
                    Explore the transformative world of AI, from machine
                    learning to neural networks. Join us on a journey of
                    innovation as we harness AI's power to solve complex
                    problems and shape the future
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="px-4 py-4">
            <div class="max-w-md mx-auto bg-gradient-to-r from-gray-50 to-sky-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img
                    class="h-48 w-full object-cover md:h-full md:w-48"
                    src={webd}
                    alt="Modern building architecture"
                  />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Web Development
                  </div>
                  <a
                    href="#"
                    class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Transforming Ideas into Digital Experiences
                  </a>
                  <p class="mt-2 text-slate-500">
                    Embark on a digital journey: from innovative ideas to
                    immersive experiences. Redefining online presence,
                    propelling your vision into the digital realm
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="px-4 py-4">
            <div class="max-w-md mx-auto bg-gradient-to-r from-zinc-50 to-blue-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img
                    class="h-48 w-full object-cover md:h-full md:w-48"
                    src={iot}
                    alt="Modern building architecture"
                  />
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Internet of Thing
                  </div>
                  <a
                    href="#"
                    class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    Bringing Intelligence to Everyday Objects
                  </a>
                  <p class="mt-2 text-slate-500">
                    Experience the future with our Internet of Things project,
                    infusing intelligence into everyday objects. From smart
                    homes to efficient industries, discover a connected world
                    where devices communicate, learn, and adapt, revolutionizing
                    your environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black bg-cover bg-center flex flex-col justify-center items-center">
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-10 mx-auto">
            <span class="text-sm text-gray-500 font-medium text-center block mb-2">
              TESTIMONIAL
            </span>
            <h2 class="text-4xl text-center font-bold text-gray-900 ">
              What our accomplished user says!
            </h2>
            <div class="mt-6 md:flex md:items-center md:justify-between">
              <div>
                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"></h1>

                <div class="flex mx-auto mt-6">
                  <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                  <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                  <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>
              </div>

              <div class="flex justify-between mt-8 md:mt-0">
                <button
                  title="left arrow"
                  class="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/*Testimonial section*/}
            <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
              <div class="p-8 border rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                  "Connecting with IITians have helped me a lot! Earlier I was
                  with a group of people who were not that motivated to pursue a
                  task. But projects done on this platform have help me learn
                  and explore a lot!"
                </p>
                <div class="flex items-center mt-8 -mx-2">
                  <img
                    class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />

                  <div class="mx-2">
                    <h1 class="font-semibold text-gray-800 dark:text-white">
                      Aditya
                    </h1>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      Pre-final year student, IITB
                    </span>
                  </div>
                </div>
              </div>

              <div class="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
                <p class="leading-loose text-white">
                  “Moving forward and networking with people has always been the
                  key for my success, which Zenli is providing to all”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img
                    class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />

                  <div class="mx-2">
                    <h1 class="font-semibold text-white">Rohan</h1>
                    <span class="text-sm text-blue-200">Graduate, IITM</span>
                  </div>
                </div>
              </div>

              <div class="p-8 border rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “Getting an Exposure to the Machine Learning through
                  mentorship has helped me a lot!”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img
                    class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                    src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />

                  <div class="mx-2">
                    <h1 class="font-semibold text-gray-800 dark:text-white">
                      Bishal{" "}
                    </h1>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      Pre-final year student, IIT K
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* <div className="min-h-screen bg-gradient-to-r from-zinc-50 to-blue-200 flex flex-col justify-center items-center">
      </div> */}
    </div>
  );
};

export default HomePage;
