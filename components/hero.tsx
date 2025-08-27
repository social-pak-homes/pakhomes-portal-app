"use client"
import Image from "next/image";
import Link from "next/link";

export function Hero() {

  return (
    <div className="flex flex-col gap-16 items-center align-middle place-content-center bg-signInBG h-screen w-screen">
      <div className="flex flex-row justify-center self-center align-middle shadow-2xl ">
        {/* Left side panel */}
        <div className="flex flex-col justify-center place-items-center bg-primary sm:w-[320px] sm:h-[600px]">
          <Image src="/logoHD.png" alt="Logo" width={168} height={168} className="absolute sm:top-[240px]"/>
          <h3 className="text-white text-6xl -translate-y-[80%]">SIGN IN</h3>
          <p className="text-white text-xl -translate-y-[40px]">TO YOUR PROJECT ACCOUNT</p>
          <p className="text-white text-[11px] -translate-y-[30px]">Secure  Access for Clients  &  Contractors</p>
        </div>
        {/* Right side panel */}
        <div className="flex flex-col gap-5 justify-center place-items-center bg-white sm:w-[600px] sm:h-[600px]">
          <h3 className="text-slate-800 font-semibold text-2xl">What type of company do you work for?</h3>
          <h3 className="text-slate-800 font-semibold text-xl">SELECT ONE OPTION</h3>
          <div className="flex flex-col gap-0">
            {/* Client Login */}
            <Link href="/auth/login">
              <div className="flex flex-col justify-center place-items-center bg-[#e5e9e8] w-[350px] h-[150px] cursor-pointer border-2 hover:border-primary duration-300 transition-all ease-in-out">
                <Image src={"/clients.png"} alt="" width={98} height={98} className=""/>
                <span className="text-gray-400 text-md font-semibold">Client Login</span>
              </div>
            </Link> 
            <div className="w-full flex flex-row justify-center place-items-center">
              <div className="w-1/4 p-[1px] bg-gradient-to-r from-foreground/10 to-transparent my-4" />
              <span className="text-sm text-gray-400">OR</span>
              <div className="w-1/4 p-[1px] bg-gradient-to-r from-transparent to-foreground/10 my-4" />
            </div>

            {/* Contractor Login */}
            <Link href="/auth/login-contractor">
              <div className="flex flex-col justify-center place-items-center bg-[#e5e9e8] w-[350px] h-[150px] cursor-pointer border-2 hover:border-primary duration-300 transition-all ease-in-out">
                <Image src={"/contractor.png"} alt="" width={98} height={98} className=""/>
                <span className="text-gray-400 text-md font-semibold">General Contractor Login</span>
              </div>
            </Link>
            <span className="text-sm text-gray-400 text-center pt-4 pb-2 font-semibold">NEED HELP TO ACCESS YOU ACCOUNT?</span>
            <Link className="bg-primary px-4 py-2 text-white text-center text-xs w-auto self-center" href="/support">
              CONTACT SUPPORT
            </Link>
            <span className="text-sm text-gray-400 text-center py-2 font-semibold">OR CONTACT OUR OFFICE (905) 904 5353</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
