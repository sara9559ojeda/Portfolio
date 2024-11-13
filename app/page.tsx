import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="text-blue-200 w-auto">
      <dl id="home" className="bg-[url('/img/bgimg.png')] bg-cover bg-center bg-no-repeat h-screen ">
        <nav className="  ml-auto p-3 bg-opacity-10 flex flex-row text-sky-250 border-b border-sky-200">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="40pt" height="40pt" viewBox="0 0 234.000000 295.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,295.000000) scale(0.100000,-0.100000)" fill="#bae6fd" stroke="none">
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
          {/* JEEEEELP */}
          <Navbar className="  mx-auto p-5">
            <NavbarBrand >
              <Link href="#" className="text-lg  group relative w-max">
                <span>Projects</span>
                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
              </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4 " >
              <NavbarItem>
                <Link href="#" className="text-lg  group relative w-max">
                  <span>Llaboral</span>
                  <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="#" className="text-lg  group relative w-max">
                  <span>Academic</span>
                  <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="#" className="text-lg  group relative w-max">
                  <span>Courses</span>
                  <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent >
              <NavbarItem className="hidden lg:flex">
                <Link href="#" className="text-lg group relative w-max">
                  <span>Me</span>
                  <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-sky-200 group-hover:w-full"></span>
                </Link>
              </NavbarItem>
              <NavbarItem>
                {/* ayudaaa */}
                <Button as={Link} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-sky-900 rounded-lg hover:bg-sky-900 group py-1.5 px-2.5" color="primary" href="#" variant="flat">
                  <span className="w-56 h-48 rounded bg-sky-200 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-sky-200 transition-colors duration-300 ease-in-out group-hover:text-sky-900">Contact me</span>

                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </nav>
        <section className="grid grid-cols-1 gap-4   sm:grid-cols-2">
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
            <p className="md:w-[80%]  pr-3 sm:w-[80%] lg:w-[70%] p-3 m-2 bg-gray-900 backdrop-blur-sm bg-opacity-60 rounded-2xl  ">I am a software engineer student passionate about creating technological
              solutions that turn ideas into reality. Since the beginning of my training,
              I have been fascinated by how software can solve complex problems and optimize
              processes in various fields <br /> <br />
              Come see my projects and my experiences then
              you will learn a little more about me
            </p>
          </dl>
          <a href="# " className=" hidden md:block  justify-self-center sm:justify-self-end"><br />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" size-10 hover:animate-bounce hover:text-sky-800 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </a>
        </section>
      </dl>
      <dl id="myprojects" className="bg-gradient-to-b from-[#000414] to-sm-D-blue-950 h-screen ">
        <h1>MY PROJECTS</h1>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        <p>first</p>
        hola <br /> <br /> <br />
        <p>hola
        </p>
      </dl>
      <section id="myCourses" className="bg-[url('/img/bgimg2.png')] bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold h-[20%] md:-mt-24 text-center md:pl-10 md:text-start ">MY COURSES</h1>
        <dl className="grid md:grid-cols-2 gap-16 md:w-[60%] lg:w-[50%] w-[40%] text-center  mx-auto">
          <p className="bg-sm-ebony-clay-600 bg-opacity-40 rounded-3xl flex items-center p-4 justify-center h-32">Labor systems Technician <br /> 2024 - ...</p>
          <p className="bg-sm-ebony-clay-600 bg-opacity-40 rounded-3xl flex items-center p-4 justify-center h-32">Labor electronics Technician <br /> 2022 - 2023</p>
        </dl>
      </section>
      <section id="moreAboutMe" className="bg-sm-bunker-950 bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center">
        <h1 className="text-3xl font-bold h-[20%] md:-mt-24 text-center md:pl-10 md:text-start ">MORE ABOUT ME</h1>
        <h1 className="text-xl ml-10 h-[20%] md:-mt-11 text-center md:pl-10 md:text-start ">MY HOBBIES</h1>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-16 md:w-[90%] lg:w-[80%] w-[70%] text-center mx-auto md:-mt-11 justify-evenly relative group">
          <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40">5
            <p className="bg-yellow-400 p-7 rounded-lg absolute top-10 left-10 opacity-0 duration-300 group-hover:opacity-100 ">hola
              <img src="./img/bgimg2.png" alt="Imagen hover" className="w-40 h-40 mt-5 rounded-lg p-1 border-2 border-sm-bunker-950"></img>
            </p>
          </button>
          <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40">1
            <p className="bg-yellow-400 p-7 rounded-lg absolute top-10 left-40 opacity-0 duration-300 group-hover:opacity-100 ">hola
              <img src="./img/bgimg2.png" alt="Imagen hover" className="w-40 h-40 mt-5 rounded-lg p-1 border-2 border-sm-bunker-950"></img>
            </p>
          </button>
          <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40">2
            <p className="bg-yellow-400 p-7 rounded-lg absolute top-10 left-40 opacity-0 duration-300 group-hover:opacity-100 ">
              hola
              <img src="./img/bgimg2.png" alt="Imagen hover" className="w-40 h-40 mt-5 rounded-lg p-1 border-2 border-sm-bunker-950"></img>
            </p>
          </button>
          <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40">3
            <p className="bg-yellow-400 p-7 rounded-lg absolute top-10 left-40 opacity-0 duration-300 group-hover:opacity-100 ">
              hola
              <img src="./img/bgimg2.png" alt="Imagen hover" className="w-40 h-40 mt-5 rounded-lg p-1 border-2 border-sm-bunker-950"></img>
            </p>
          </button>
        </dl>

        <h1 className="text-xl ml-10 h-[20%] text-center mt-11 md:pl-10 md:text-start ">SKILLS</h1>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-16 md:w-[90%] lg:w-[80%] w-[70%] text-center mx-auto md:-mt-11 justify-evenly relative group">
          <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40">1</button>
          <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40">1</button>
          <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40">1</button>
          <button className="bg-sm-bunker-900 p-3 pl-5 pr-5 rounded-3xl bg-opacity-40">1</button>
         
        </dl>
      </section>





    </main>

  );

}

