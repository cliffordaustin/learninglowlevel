import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { MdQrCodeScanner } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

function Apply() {
  return (
    <div className="h-full flex text-white flex-col justify-center items-center relative w-full">
      <div className="flex flex-col gap-3 z-10 justify-center items-center">
        <div className="w-[60px] h-[60px] rounded-full backdrop-blur-md bg-white/30 flex items-center justify-center">
          <MdQrCodeScanner className="text-2xl text-white"></MdQrCodeScanner>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-2xl font-bold">Scan QR Code</h1>
          <p className="text-gray-300">Scan the QR code to apply</p>
        </div>

        <Image
          src="/qr.png"
          alt="Scan QR Code"
          className=""
          width={300}
          height={300}
        />

        <div className="flex items-center justify-between w-[400px] gap-2">
          <div className="bg-white flex-grow h-[1px]"></div>
          <span className="text-gray-300">or click on the link below</span>
          <div className="bg-white flex-grow h-[1px]"></div>
        </div>

        <Link href="https://forms.gle/AAWH64uLB6Dmf9Ur8" target="_blank">
          <div className="w-fit py-2 px-4 cursor-pointer backdrop-blur-sm bg-white/10 rounded-full text-sm border flex items-center gap-2">
            <p className="text-gray-300">https://forms.gle/AAWH64uLB6Dmf9Ur8</p>
            <FiExternalLink className="text-gray-300 text-lg"></FiExternalLink>
          </div>
        </Link>
      </div>

      {/* <div className="bg-green-500 mix-blend-color-burn w-[300px] z-[99] h-[300px]">
        <h1 className="text-2xl">Hello</h1>
      </div> */}

      <Image
        src="/bg.png"
        alt="Background"
        className="object-cover contrast-75"
        fill
      />
    </div>
  );
}

export default Apply;
