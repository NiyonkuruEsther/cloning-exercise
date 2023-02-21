import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "@/components/Image";
import Info from "@/components/Info";
import Visit from "@/components/Visit";
import Impact from "@/components/Impact";
import UkraineCard from "@/components/UkraineCard";
import ImgCard from "@/components/ImgCard";
import { BsArrowRight } from "react-icons/bs";
import Calendar from "@/components/Calendar";
import Features from "@/components/Features";
import InfiniteScroll from "@/components/InfiniteScroll";
import Tour from "@/components/Tour";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vrije Universiteit Amsterdam</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/Capture.PNG" />
      </Head>
      <div className="bg-gray text-[#333333] overflow-hidden">
        <div className="bg-white max-w-[1600px] mx-auto shadow-3xl overflow-hidden">
          <Navbar />
          <Hero />
        </div>
        <Image />
        <div className="bg-white max-w-[1600px] mx-auto shadow-3xl ">
          <Info />
          <div className="px-5">
            <Visit />
          </div>
          <Impact />
          {/* <UkraineCorona /> */}
          <div className="grid grid-cols-1 px-5 py-7 lg:grid-cols-2 lg:px-0 gap-8 lg:py-24 max-w-[1250px] mx-auto">
            <UkraineCard text={"Ukraine"} styles={"text-green"} />
            <UkraineCard text={"VU & Corona"} styles={"text-darkBlue"} />
          </div>
          {/* ImageCards component */}
          <div className="bg-gray py-12 px-5 lg:px-0 lg:py-24">
            <p className="text-darkBlue text-2xl lg:text-3xl font-semibold max-w-[1250px] mx-auto mb-5 lg:mb-12">
              NEWS
            </p>
            <div
              className="grid grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-2 max-w-[1250px] mx-auto
    "
            >
              <div className="grid gap-8 lg:gap-6">
                <ImgCard
                  num={5}
                  src={
                    "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226"
                  }
                  styles={
                    "lg:max-w-[360px] lg:w-max  lg:min-w-[360px] lg:min-h-[274px] lg:max-h-[274px] min-w-[150px] lg:w-[150px] min-h-[114px] lg:h-[114px] lg:h-[274px] object-cover"
                  }
                />
                <ImgCard
                  num={11}
                  src={
                    "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/d8e771d2-c135-499c-a67c-d1da825f453b/robofinch%20def.png"
                  }
                  styles={
                    "min-w-[150px] lg:min-w-[360px] lg:min-h-[274px] lg:w-[150px] min-h-[114px] lg:h-[114px]   object-cover"
                  }
                />
              </div>
              <div className="gap-8 lg:gap-24 grid justify-self-end">
                {" "}
                <ImgCard
                  num={13}
                  src={
                    "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/45e509b2-1cf3-49a7-b40d-53310c2e2219/7%20ton%20voor%20welzijn%20Oekrai%CC%88ne%20vluchtelingen_afb_1250x600.jpg"
                  }
                  styles={
                    "min-w-[150px] lg:w-[150px] min-h-[114px] lg:h-[114px]  object-cover"
                  }
                />
                <ImgCard
                  num={15}
                  src={
                    "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c49919f7-968b-41d7-8776-e9e555f737c5/Sapiens_VUweb_2200x720.jpg?w=1250&h=600&fit=clip&rect=350,0,1500,720"
                  }
                  styles={
                    "min-w-[150px] lg:w-[150px] min-h-[114px] lg:h-[114px]  object-cover"
                  }
                />
                <ImgCard
                  num={9}
                  src={
                    "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/f9f7b751-4e22-4175-add9-3aec344e16ed/Wouter-Botzen.png"
                  }
                  styles={
                    "min-w-[150px] lg:w-[150px] min-h-[114px] lg:h-[114px]   object-cover"
                  }
                />
              </div>
            </div>{" "}
            <div
              className="font-semibold max-w-[1250px] mx-auto text-lg flex w-full justify-center mt-12 lg:mt-28
            "
            >
              <p className="flex gap-6 items-center">
                {" "}
                News Overview
                <BsArrowRight />
              </p>
            </div>
          </div>
          <Calendar />
          <div className="bg-gray px-5">
            <Visit />
          </div>
          <InfiniteScroll />
          <Tour />
          <Features />
          <Footer />
        </div>
      </div>
    </>
  );
}
