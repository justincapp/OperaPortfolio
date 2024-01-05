"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  Battery50Icon,
  CameraIcon,
  HeartIcon,
  HomeIcon,
  StarIcon,
  ClockIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import LinkCard from "./components/LinkCard";
import { Box, Link, X } from "react-feather";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [hiddenIconsState, setHiddenIconsState] = useState(false);

  const showMoreIcons = () => {
    if (hiddenIconsState) {
      setHiddenIconsState(false);
      return;
    }

    setHiddenIconsState(true);
  };

  return (
    <main
      className="flex min-h-screen w-full justify-center items-center md:h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url("website_background.jpg")`,
      }}
    >
      <div className="absolute bg-black/60 top-0 left-0 w-full h-screen"></div>

      <div
        id="container"
        className="w-full md:h-[95%] max-h-[1200px] max-w-[1700px] relative md:p-3 "
      >
        <div className="flex items-top justify-start gap-1 h-[100%] bg-white bg-opacity-10 backdrop-blur-xl drop-shadow-2xl rounded-lg p-2">
          <div className="hidden md:flex bg-[#252836] rounded-lg  min-w-[40px] w-1/12 max-w-[50px] h-[100vh] md:h-[100%]  flex-1  top-0 left-0 z-[9999] flex-col items-center justify-between pt-3 pb-7 gap-7">
            <div className="flex flex-col gap-7">
              <div className="flex items-center justify-center flex-col space-y-2">
                <div className="bg-red-500 h-3 w-3 rounded-full"></div>
                <div className="bg-yellow-500 h-3 w-3 rounded-full"></div>
                <div className="bg-green-500 h-3 w-3 rounded-full"></div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-1 rounded-xl bg-indigo-700 flex items-center justify-center h-8 w-8 group ">
                  <HomeIcon className="w-5 h-5 text-white group-hover:scale-110 transition"></HomeIcon>
                </div>

                <div className="p-1 rounded-xl flex items-center justify-center h-8 w-8 group hover:bg-[#484d65] transition ">
                  <StarIcon className="w-5 h-5 text-white/70 group-hover:scale-110 transition "></StarIcon>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="bg-[#484d65] h-9 w-9 group flex items-center justify-center rounded-xl cursor-pointer">
                <Image
                  alt="Messenger"
                  height="200"
                  width="200"
                  src="/icons/messenger.png"
                  className="w-5 group-hover:scale-110 transition h-auto"
                />
              </div>

              <div className="bg-[#484d65] h-9 w-9 flex items-center justify-center rounded-xl group cursor-pointer">
                <Image
                  width="200"
                  height="200"
                  alt="Whatsapp icon"
                  src="/icons/whatsapp.png"
                  className="w-5 h-auto rounded-full group-hover:scale-110 transition"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-3">
                <div className="p-1 rounded-xl flex items-center justify-center h-8 w-8 group hover:bg-[#484d65] transition ">
                  <PlayCircleIcon className="w-5 h-5 text-white/70 group-hover:scale-110 transition "></PlayCircleIcon>
                </div>
                <div className="p-1 rounded-xl flex items-center justify-center h-8 w-8 group hover:bg-[#484d65] transition ">
                  <HeartIcon className="w-5 h-5 text-white/70 group-hover:scale-110 transition "></HeartIcon>
                </div>
                <div className="p-1 rounded-xl flex items-center justify-center h-8 w-8 group hover:bg-[#484d65] transition ">
                  <ClockIcon className="w-5 h-5 text-white/70 group-hover:scale-110 transition "></ClockIcon>
                </div>
                <div className="p-1 rounded-xl flex items-center justify-center h-8 w-8 group hover:bg-[#484d65] transition ">
                  <div className="flex items-center gap-0.5 justify-center">
                    <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                    <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                    <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>

          <div class="w-full flex-1 space-y-1 flex flex-col md:m-0">
            <div className="flex w-full items-center gap-2 justify-between">
              <div className="flex gap-2 w-full items-center justify-start">
                <div className="gap-0 flex items-center w-full">
                  <div className="cursor-pointer group xl:w-[10%] shadow-[-00px_6px_10px_0px_#e2e8f030] bg-[#3d4051] px-3 xl:px-1 py-2 rounded flex items-center gap-2 ">
                    <HomeIcon className="group-hover:hidden w-4 h-4 text-gray-100" />
                    <div className="w-4 group-hover:flex hidden  items-center justify-center">
                      <X className=" w-3 h-3 text-gray-100" />
                    </div>
                    <p className="text-xs text-white">Fast access</p>
                  </div>

                  <div className="cursor-pointer group select-none hover:bg-gray-100/10 transition xl:w-[10%] bg-[#3d4051]/0 px-3 xl:px-1 py-2 rounded flex items-center gap-2 ">
                    <Link className="group-hover:hidden w-4 h-4 text-gray-100" />
                    <div className="w-4 group-hover:flex hidden  items-center justify-center">
                      <X className=" w-3 h-3 text-gray-100" />
                    </div>
                    <p className="text-xs text-white">About me</p>
                  </div>

                  <div className="w-2"></div>
                  <div className="h-5 w-5 rounded-full flex items-center justify-center bg-gray-800 ">
                    <PlusIcon className="h-3 w-3 text-white"></PlusIcon>
                  </div>
                </div>
              </div>
              <MagnifyingGlassIcon className="h-4 w-4 text-white" />
            </div>

            <div className="flex items-center justify-between gap-1">
              <div className="rounded-lg bg-[#252836] md:px-3 py-4 h-[40px] w-full flex justify-between relative items-center">
                <div className="hidden md:flex items-center gap-1 md:gap-3 w-2/12 md:w-1/12">
                  <div className="w-5/12 flex items-center justify-between">
                    <ChevronLeftIcon className="h-4 w-4 text-gray-500" />
                    <ChevronRightIcon className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="hover:bg-[#484d65] h-6 w-6 flex items-center justify-center group rounded hover:text-cyan-400">
                    <ArrowPathIcon className="h-4 w-4 text-gray-300 cursor-pointer group-hover:text-cyan-400" />
                  </div>
                </div>

                <div className="p-1 gap-0 md:gap-2 w-full flex items-center justify-between ">
                  <div className="py-1 px-2 inline-flex w-6/12 md:w-full md:flex items-center gap-2 hover:bg-[#353a4e] rounded-lg transition">
                    <div className="flex items-center gap-1 justify-start">
                      <div class="rounded  bg-indigo-600 px-0.5 inline-flex">
                        <p className="uppercase text-[8px] p-0.5 text-white">vpn</p>
                      </div>
                      <LockClosedIcon className="h-4 w-4 text-gray-200"></LockClosedIcon>
                    </div>

                    <input
                      type="text"
                      className="bg-transparent text-sm truncate text-white"
                      value="portfolio-opera.vercel.app"
                    />
                  </div>

                  <div className="flex items-center gap-1 md:gap-2 w-8/12 md:w-2/12 justify-center md:justify-end">
                    <div className="hover:bg-[#484d65] h-6 w-6 flex items-center justify-center group rounded hover:text-cyan-400">
                      <CameraIcon className="h-4 w-4 text-gray-200/70 group-hover:text-cyan-400" />
                    </div>
                    <div className="hover:bg-[#484d65] h-6 w-6 flex items-center justify-center group rounded hover:text-cyan-400">
                      <HeartIcon className="h-4 w-4 text-gray-200/70 group-hover:text-cyan-400" />
                    </div>
                    <div className="hover:bg-[#484d65] h-6 w-6 flex items-center justify-center group rounded hover:text-cyan-400">
                      <Battery50Icon className="h-4 w-4 text-gray-200/70 group-hover:text-cyan-400" />
                    </div>
                    <div className="hover:bg-[#484d65] h-6 w-6 flex items-center justify-center group rounded hover:text-cyan-400">
                      <AdjustmentsHorizontalIcon className="h-4 w-4 text-gray-200/70 group-hover:text-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded flex items-center cursor-pointer justify-end bg-[#252836] md:px-1 h-[40px] transition">
                <div
                  className={clsx(
                    hiddenIconsState
                      ? "w-20 transition-all justify-end duration-300"
                      : "w-2 transition-all duration-300",
                    "flex items-center gap-2 h-[100%] relative"
                  )}
                >
                  {hiddenIconsState && (
                    <div className="flex items-center gap-2 transition-opacity duration-300">
                      <div className="hover:bg-[#484d65] h-6 w-6 flex items-center justify-center group rounded hover:text-cyan-400">
                        <Box className="h-4 w-4 text-gray-200/70 group-hover:text-cyan-400" />
                      </div>
                      <div className="hover:bg-[#484d65] mr-4 h-6 w-6 flex items-center justify-center group rounded hover:text-cyan-400">
                        <Box className="h-4 w-4 text-gray-200/70 group-hover:text-cyan-400" />
                      </div>
                    </div>
                  )}

                  <div
                    className="h-[60%] absolute right-0  py-1 w-2 rounded-full bg-violet-600"
                    onClick={showMoreIcons}
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="relative w-full overflow-y-auto flex-1 flex-col flex bg-gray-900 rounded-lg bg-cover bg-center p-2 md:p-4"
              style={{
                backgroundImage: `url("browser_background.jpg")`,
              }}
            >
              <div className="flex w-full flex-col text-sm space-y-1 z-[9999] p-3 md:p-0">
                <div>
                  <p className="text-white">Montreux</p>
                </div>

                <div className="flex items-center gap-2">
                  <SunIcon className="h-6 w-6 text-white"></SunIcon>

                  <p className="text-white">19°C</p>
                </div>
              </div>
              <div className="flex w-full justify-center z-[9999]">
                <div className="w-11/12 mt-10 md:mt-0 md:w-5/12 pl-2 pr-10 flex items-center justify-between gap-4 py-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-full drop-shadow-lg">
                  <div className="flex gap-4 items-center">
                    <div className="w-3/12">
                      <div className="lg:h-12 lg:w-12 h-9 w-9 bg-white rounded-full flex items-center justify-center">
                        <Image
                          height="200"
                          width="200"
                          src="/icons/google.png"
                          alt="google icon"
                          className="w-4"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      className="text-white bg-transparent placeholder:text-white text-[0.9em] w-full py-4"
                    />
                  </div>
                  <MagnifyingGlassIcon className="text-white/70 h-3 w-3 cursor-pointer" />
                </div>
              </div>
              <div className="w-full flex items-center gap-2 justify-center mt-20 z-[9999]">
                <div className="w-11/12 md:w-8/12 space-y-4 mx-auto">
                  <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:grid-cols-6">
                   

                    <LinkCard
                      type="icon"
                      image="/icons/github.png"
                      background="bg-neutral-900/70"
                      alt="Call me"
                      href="www.linkedin.com"
                    >
                      GitHub
                    </LinkCard>
                    <LinkCard
                      type="icon"
                      image="/icons/instagram.png"
                      background="bg-red-400/10"
                      alt="Call me"
                      href="www.linkedin.com"
                    >
                      Instagram
                    </LinkCard>

                    <LinkCard
                      type="icon"
                      image="/icons/cal.png"
                      background="bg-white/50"
                      alt="Call me"
                      href="www.linkedin.com"
                    >
                      Call me
                    </LinkCard>

                    <LinkCard
                      type="icon"
                      image="/icons/whatsapp.png"
                      background="bg-green-400/20"
                      alt="Call me"
                      href="www.linkedin.com"
                    >
                      GitHub
                    </LinkCard>


                    <LinkCard
                      type="icon"
                      image="/icons/dribbble.png"
                      background="bg-pink-200/70"
                      alt="Dribbble"
                      href="www.linkedin.com"
                    >
                      Dribbble
                    </LinkCard>
                    <LinkCard
                      type="icon"
                      image="/icons/linkedin.png"
                      background="bg-blue-200/70"
                      alt="Linkedin"
                      href="www.linkedin.com"
                    >
                      Linkedin
                    </LinkCard>
                  </div>
                </div>
              </div>{" "}
              <div className="w-full flex items-center gap-2 justify-center mt-14 z-[9999]">
                <div className="w-11/12 md:w-8/12 space-y-4">
                  <h2>My latests projects</h2>
                  <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:grid-cols-6">
                    <div className="w-full space-y-2">
                      <div className="bg-blue-200 rounded-2xl w-full h-24 flex items-center justify-center">
                        <div className="h-10 w-10 font-extrabold text-xl bg-blue-900 flex items-center justify-center rounded-lg">
                        <p className="text-white">M</p>
                          
                        </div>
                      </div>
                      <p className="text-sm text-white text-start">Project Name</p>
                    </div>
                    <div className="w-full space-y-2">
                      <div className="bg-sky-200 rounded-2xl w-full h-24 flex items-center justify-center">
                        <div className="h-10 w-10 font-extrabold text-xl bg-sky-900 flex items-center justify-center rounded-lg">
                          <p className="text-white">S</p>
                        </div>
                      </div>{" "}
                      <p className="text-sm text-white text-start">Project Name</p>
                    </div>
                    <div className="w-full space-y-2">
                      <div className="bg-red-200 rounded-2xl w-full h-24 flex items-center justify-center">
                        <div className="h-10 w-10 font-extrabold text-xl  bg-red-900 flex items-center justify-center rounded-lg">
                          <p className="text-white">S</p>
                        </div>
                      </div>
                      <p className="text-sm text-white text-start">Project Name</p>
                    </div>
                    <div className="w-full space-y-2">
                      <div className="bg-pink-200 rounded-2xl w-full h-24 flex items-center justify-center">
                        <div className="h-10 w-10 font-extrabold text-xl bg-pink-900 flex items-center justify-center rounded-lg">
                        <p className="text-white">M</p>
                        </div>
                      </div>
                      <p className="text-sm text-white text-start">Project Name</p>
                    </div>
                    <div className="w-full space-y-2">
                      <div className="bg-zinc-200 rounded-2xl w-full h-24 flex items-center justify-center">
                        <div className="h-10 w-10 font-extrabold text-xl bg-zinc-900 flex items-center justify-center rounded-lg">
                          <p className="text-white">K</p>
                        </div>
                      </div>
                      <p className="text-sm text-white text-start">
                        A SaaS template
                      </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="z-[0] bg-black/50 absolute top-0 left-0 w-full h-[100%] "></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
