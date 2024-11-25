"use client";

import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useState } from "react";
import ModalPage from "@/app/components/ModalPage";
import Page from "./components/Page";
import ThemeSwitch from './components/ThemeSwitch';



export default function Home() {

  return (
    <main className="text-blue-200 dark:text-orange-950 w-auto">

      <dl id="home" className="bg-[url('/img/bgimg.png')] dark:bg-gradient-to-b border-b border-sm-D-blue-950 dark:from-orange-100 dark:to-orange-700 bg-cover bg-center bg-no-repeat h-screen  ">
        <Navbar className="border-b border-sky-200 dark:border-orange-950">
          <NavbarBrand>
            <nav className="  ml-auto p-3 bg-opacity-10 flex flex-row text-sky-250 dark:text-orange-950 ">
              <svg className="dark:hidden" xmlns="http://www.w3.org/2000/svg" version="1.0" width="40pt" height="40pt" viewBox="0 0 234.000000 295.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,295.000000) scale(0.100000,-0.100000)" fill="#bae6fd" stroke="none">
                <path d="M1035 2734 c-209 -50 -408 -230 -481 -436 -8 -24 -20 -65 -25 -93 -11 -54 -14 -1443 -3 -1504 3 -20 13 -60 21 -90 55 -196 237 -386 428 -447 77 -24 213 -45 255 -39 231 35 333 83 463 219 81 83 145 206 171 325 23 105 24 1422 2 1528 -32 151 -93 261 -200 366 -55 54 -93 80 -171 117 -55 27 -127 54 -159 59 -82 15 -229 12 -301 -5z m354 -89 c41 -13 93 -36 117 -50 101 -59 210 -188 256 -300 43 -106 43 -109 43 -865 l0 -725 -23 -69 c-51 -151 -126 -253 -245 -333 -97 -66 -183 -94 -308 -100 -194 -11 -348 52 -482 196 -65 71 -123 182 -143 273 -19 90 -20 1444 0 1533 50 234 246 418 496 465 75 15 207 3 289 -25z" />
                <path d="M1072 2554 c-136 -36 -268 -141 -324 -256 -28 -57 -58 -163 -58 -207 0 -13 30 -73 66 -135 37 -61 83 -140 104 -176 21 -36 96 -164 167 -285 362 -615 396 -677 395 -711 -3 -71 -61 -147 -142 -183 -52 -24 -70 -25 -141 -10 -42 9 -62 21 -101 60 -26 26 -48 55 -48 62 0 23 -23 27 -145 27 -142 0 -147 -2 -139 -49 20 -116 149 -278 266 -334 59 -28 176 -57 232 -57 106 0 268 72 353 156 82 82 143 217 143 314 0 54 34 -8 -390 715 -375 639 -343 581 -337 621 14 84 109 182 181 186 120 7 190 -28 249 -124 l17 -28 137 0 136 0 -7 43 c-24 154 -186 324 -352 370 -73 20 -189 21 -262 1z" />
                <path d="M1437 2064 c-4 -4 -7 -149 -7 -322 l0 -315 91 -156 c50 -86 108 -184 128 -218 20 -35 39 -63 42 -63 13 0 14 78 9 575 l-5 500 -126 3 c-69 1 -128 -1 -132 -4z" />
                <path d="M692 1353 l3 -538 135 0 135 0 3 313 c1 220 -1 319 -9 335 -41 79 -253 427 -260 427 -5 0 -8 -226 -7 -537z" />
              </g>
              </svg>
              <p className="font-bold text-inherit pl-2 pt-1 text-center">
                MY <br />
                PORTFOLIO
              </p>
            </nav>
          </NavbarBrand>
          <NavbarContent justify="end">
            <ThemeSwitch />
            <NavbarItem>
              <Link href="#myprojects" className=" hidden md:block  font-sans text-lg lg:flex group  relative w-max">
                <span>Projects</span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="Laboral" className=" hidden md:block font-sans text-lg lg:flex group relative w-max">
                <span>Laboral</span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="Academic" className=" hidden md:block font-sans text-lg lg:flex group relative w-max">
                <span>Academic</span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#myCourses" className=" hidden md:block font-sans text-lg lg:flex group relative w-max">
                <span>Courses</span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="Hobbies" className=" hidden lg:block font-sans text-lg  group relative w-max">
                <span>Me</span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#contact" className=" hidden md:block font-sans text-lg lg:flex group relative w-max">
                <span>CV</span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <ModalPage />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="Flex mx-auto justify-center ">
            <br /><br />
            <h2 className="text-3xl font-extralight">Hi, i'm</h2>
            <section className="font-semibold md:flex-col md:flex md:text-7xl  text-5xl" >
              <article className="order-1  flex sm:flex-col">
                <h1 className="order-1 ">SARA </h1>
                <h1 className="order-2 ml-3 sm:ml-0 ">MARÍA </h1>
              </article>
              <article className="order-2  flex sm:flex-col" >
                <h1 className="order-1">OJEDA </h1>
                <h1 className="order-2 ml-3 sm:ml-0">LÓPEZ </h1>
              </article>
            </section>
          </article>
          <dl className=" sm:text-left text-center md:mt-11 sm:my-auto my-auto ">
            <p className="text-3xl font-extralight  sm:pt-10 md:pt-0">I'll tell you about me</p> <br />
            <p className="md:w-[80%]  pr-3 sm:w-[80%] lg:w-[70%] p-3 m-2 bg-gray-900 backdrop-blur-sm dark:bg-orange-950 dark:text-orange-300 bg-opacity-60 rounded-2xl  ">I am a software engineer student passionate about creating technological
              solutions that turn ideas into reality. Since the beginning of my training,
              I have been fascinated by how software can solve complex problems and optimize
              processes in various fields <br /> <br />
              Come see my projects and my experiences then
              you will learn a little more about me
            </p>
          </dl>
          <a href="#myprojects " className=" hidden lg:block justify-self-center sm:justify-self-end"><br />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" size-10 hover:animate-bounce hover:text-sky-800 dark:hover:text-orange-400 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </a>
        </section>
      </dl>
      <dl id="myprojects"
        className="h-screen bg-gradient-to-b  from-[#000414] to-sm-D-blue-950 
             "
      >
        <section className="w-full h-full">
          <Page />
        </section>
      </dl>

      <section id="laboral" className=" bg-gradient-to-b from-sm-D-blue-950 to-[#000414] dark:bg-orange-300 dark:bg-none h-screen pt-28 border-t border-white border-opacity-25 border-b border-b-sm-bunker-950">
        <h1 className="text-3xl font-bold text-center pb-9 md:pl-10 md:text-start ">LABORAL EXPERIENCES</h1>
        <dl className="flex flex-col  space-y-3 w-[70%] md:w-[50%] mx-auto  bg-gray-950 bg-opacity-60 backdrop-blur rounded-2xl pl-24 p-8" >
          <dl className="relative">
            <dl className="absolute left-2 top-0 w-px h-full bg-gray-300"></dl>
            <dl className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full"></dl>
            <dl className="ml-8">
              <h3 className="text-lg font-semibold">English teacher</h3>
              <p className="text-sm text-gray-600">2022</p>
            </dl>
          </dl>
          <dl className="relative">
            <dl className="absolute left-2 top-0 w-px h-full bg-gray-300"></dl>
            <dl className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full"></dl>
            <dl className="ml-8">
              <h3 className="text-lg font-semibold">Accounting assistant</h3>
              <p className="text-sm text-gray-600">2023</p>
            </dl>
          </dl>
          <dl className="relative">
            <dl className="absolute left-2 top-0 w-px h-full bg-gray-300"></dl>
            <dl className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full"></dl>
            <dl className="ml-8">
              <h3 className="text-lg font-semibold">Waiter</h3>
              <p className="text-sm text-gray-600">2024</p>
            </dl>
          </dl>
        </dl>

      </section>
      <section id="Academic" className="bg-[url('/img/bgimg3.png')] dark:bg-gradient-to-b dark:from-orange-100 dark:to-orange-700 bg-cover bg-center bg-no-repeat h-screen pt-28">
        <h1 className="text-3xl font-bold text-center pb-9 md:pl-10 md:text-start">ACADEMIC EXPERIENCES</h1>
        <dl className="flex flex-col space-y-4 w-[80%] md:w-[50%] mx-auto bg-gray-950 bg-opacity-60 backdrop-blur-lg rounded-2xl pl-24 p-8">
          
          <dl className="relative group">
            <dl className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-blue-500 to-blue-700 transition-all duration-500 group-hover:bg-gradient-to-b group-hover:from-orange-500 group-hover:to-yellow-500"></dl>
            <dl className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full group-hover:bg-orange-500 transition-all duration-300"></dl>
            <dl className="ml-8 group-hover:text-white transition-all duration-300">
              <h3 className="text-lg font-semibold">Start Electronics Technician</h3>
              <p className="text-sm text-gray-400">August 2021</p>
            </dl>
          </dl>

        
          <dl className="relative group">
            <dl className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-blue-500 to-blue-700 transition-all duration-500 group-hover:bg-gradient-to-b group-hover:from-orange-500 group-hover:to-yellow-500"></dl>
            <dl className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full group-hover:bg-orange-500 transition-all duration-300"></dl>
            <dl className="ml-8 group-hover:text-white transition-all duration-300">
              <h3 className="text-lg font-semibold">Graduated</h3>
              <p className="text-sm text-gray-400">2022</p>
            </dl>
          </dl>

          <dl className="relative group">
            <dl className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-blue-500 to-blue-700 transition-all duration-500 group-hover:bg-gradient-to-b group-hover:from-orange-500 group-hover:to-yellow-500"></dl>
            <dl className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full group-hover:bg-orange-500 transition-all duration-300"></dl>
            <dl className="ml-8 group-hover:text-white transition-all duration-300">
              <h3 className="text-lg font-semibold">English Course</h3>
              <p className="text-sm text-gray-400">2022</p>
            </dl>
          </dl>
          <dl className="relative group">
            <dl className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-blue-500 to-blue-700 transition-all duration-500 group-hover:bg-gradient-to-b group-hover:from-orange-500 group-hover:to-yellow-500"></dl>
            <dl className="absolute left-0 top-0 w-3 h-3 bg-blue-500 rounded-full group-hover:bg-orange-500 transition-all duration-300"></dl>
            <dl className="ml-8 group-hover:text-white transition-all duration-300">
              <h3 className="text-lg font-semibold">Software Engineering Career</h3>
              <p className="text-sm text-gray-400">2023</p>
            </dl>
          </dl>
          <dl className="relative group">
            <dl className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-blue-500 to-blue-700 transition-all duration-500 group-hover:bg-gradient-to-b group-hover:from-orange-500 group-hover:to-yellow-500"></dl>
            <dl className="absolute left-0 top-0 w-3 h-3 bg-sm-D-blue-500 rounded-full group-hover:bg-orange-500 transition-all duration-300"></dl>
            <dl className="ml-8 group-hover:text-white transition-all duration-300">
              <h3 className="text-lg font-semibold">Start Systems Technician</h3>
              <p className="text-sm text-gray-400">2024</p>
            </dl>
          </dl>
        </dl>
      </section>

      <section id="myCourses" className="bg-[url('/img/bgimg2.png')] dark:bg-gradient-to-b dark:from-orange-100 dark:to-orange-700 bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold h-[20%] md:-mt-24 text-center md:pl-10 md:text-start">MY COURSES</h1>
        <dl className="grid md:grid-cols-2 gap-16 md:w-[60%] lg:w-[50%] w-[40%] text-center mx-auto">
          <p className="bg-sm-ebony-clay-600 bg-opacity-40 rounded-3xl flex items-center p-4 justify-center h-32 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg hover:shadow-orange-500/50 hover:text-white">
            Labor systems Technician <br /> 2024 - ...
          </p>
          <p className="bg-sm-ebony-clay-600 bg-opacity-40 rounded-3xl flex items-center p-4 justify-center h-32 transition-all duration-500 ease-in-out transform hover:scale-110 hover:-rotate-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg hover:shadow-orange-500/50 hover:text-white">
            Labor electronics Technician <br /> 2022 - 2023
          </p>
        </dl>
      </section>

      <section id="Hobbies" >
        <section id="moreAboutMe" className="bg-sm-bunker-950 dark:bg-gradient-to-b dark:from-orange-100 dark:to-orange-700 bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center">
          <h1 className="text-3xl font-bold h-[20%] md:-mt-24 text-center md:pl-10 md:text-start">MORE ABOUT ME</h1>
          <h1 className="text-xl ml-10 h-[20%] md:-mt-11 text-center md:pl-10 md:text-start">MY HOBBIES</h1>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-16 md:w-[90%] lg:w-[80%] w-[70%] text-center mx-auto md:-mt-11 justify-evenly relative">
            <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40 transition-all duration-500 ease-out transform hover:scale-125 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50">
              Taekwondo🥋
            </button>
            <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40 transition-all duration-500 ease-out transform hover:scale-125 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50">
              Photography📸
            </button>
            <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40 transition-all duration-500 ease-out transform hover:scale-125 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50">
              Climbing🧗🏽
            </button>
            <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40 transition-all duration-500 ease-out transform hover:scale-125 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50">
              Drawing📒
            </button>
          </dl>

          <h1 className="text-xl ml-10 h-[20%] text-center mt-11 md:pl-10 md:text-start">SKILLS</h1>
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-16 md:w-[90%] lg:w-[80%] w-[70%] text-center mx-auto md:-mt-11 justify-evenly relative">
            <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40 transition-all duration-500 ease-out transform hover:scale-125 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50">
              Responsibility
            </button>
            <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40 transition-all duration-500 ease-out transform hover:scale-125 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50">
              Optimism
            </button>
            <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40 transition-all duration-500 ease-out transform hover:scale-125 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50">
              Flexibility
            </button>
            <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40 transition-all duration-500 ease-out transform hover:scale-125 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50">
              Self-motivation
            </button>
          </dl>
        </section>




      </section>

      <dl>
        <section id="contact" className="bg-gradient-to-b from-sm-bunker-950 to-sm-D-blue-950 dark:text-orange-950 dark:bg-orange-300 dark:bg-none  text-white  py-16 flex flex-col items-center">
          <dl className="relative mb-6">

            <dl className="w-52 h-52 rounded-lg overflow-hidden border-4 dark:border-orange-400 border-sm-D-blue-950">
              <img src="/img/me.jpeg" alt="Photo" className="w-full h-full object-cover" />
            </dl>


            <a
              href="/HojadevidaSaraOjeda.pdf"
              download
              className="absolute -top-4 -right-4 bg-sm-D-blue-800 dark:bg-orange-400 text-sm-bunker-950 dark:text-orange-950 p-3 rounded-full shadow-lg dark:hover:bg-orange-500 transition duration-300"
              aria-label="Download CV"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
            </a>
          </dl>


          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p className="text-center text-gray-300 dark:text-orange-700 mb-8">Social Networks</p>
          <dl className="flex space-x-4 mt-6">

            <a
              href="https://www.instagram.com/gh0st.mar_505/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sm-D-blue-600 dark:hover:text-orange-400 transition duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.37 3.608 1.344.975.975 1.283 2.242 1.344 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.37 2.633-1.344 3.608-.975.975-2.242 1.283-3.608 1.344-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.37-3.608-1.344-.975-.975-1.283-2.242-1.344-3.608-.059-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.37-2.633 1.344-3.608C4.518 2.605 5.785 2.297 7.151 2.235c1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.052.072 5.775.13 4.535.425 3.515 1.445 2.494 2.466 2.2 3.705 2.142 4.982.084 8.332.071 8.741.071 12c0 3.259.014 3.668.072 4.948.058 1.277.353 2.517 1.373 3.537 1.021 1.021 2.261 1.316 3.537 1.373C8.332 23.916 8.741 23.93 12 23.93c3.259 0 3.668-.014 4.948-.072 1.277-.058 2.517-.353 3.537-1.373 1.021-1.021 1.316-2.261 1.373-3.537.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.058-1.277-.353-2.517-1.373-3.537C19.465.425 18.225.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
              </svg>
            </a>


            <a
              href="https://www.facebook.com/saramaria.ojeda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sm-D-blue-600 dark:hover:text-orange-400 transition duration-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.794.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </dl>




          <footer className="mt-16 w-full text-center py-4 text-gray-400 dark:text-orange-950">
            Made with <span className="text-orange-500 dark:text-sm-D-blue-700">&lt;3</span> by Sara
          </footer>
        </section>


      </dl>












    </main>
  );
}
