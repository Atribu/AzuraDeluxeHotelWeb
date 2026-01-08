import React from 'react'
import Reservation from './Reservation'
import Image from 'next/image'
import sembol from "./Icons/sembol2.svg"

export default function HomePage() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">

      {/* MOBİL – Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[30] lg:hidden"
      >
        <source
          src="/videos/azuraMobile.mp4"
          type="video/mp4"
        />
      </video>

      {/* DESKTOP – IMAGE */}
      <Image
        src="/photos/azuradeluxeworldmain.jpg"
        alt="Azura Deluxe World"
        fill
        priority
        className="absolute top-0 left-0 object-cover z-[30] hidden lg:block"
      />

      {/* LOGO */}
      <Image
        alt="logo"
        src={sembol}
        width={454.81}
        height={647}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[40] 
                   w-[40vh] lg:w-[50vh] 2xl:w-[45vh] h-auto mix-blend-overlay"
      />

      <Reservation/>
    </div>
  )
}