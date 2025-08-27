import { SignUpFormContractor } from "@/components/sign-up-form-contractor";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Support from "@/components/ui/support";
import { IoChevronBack } from "react-icons/io5";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-16 items-center align-middle place-content-center bg-signInBG h-screen w-screen">
        <div className="flex flex-row justify-center self-center align-middle shadow-2xl ">
          {/* Left side panel */}
          <div className="flex flex-col justify-center place-items-center bg-primary sm:w-[320px] sm:h-[600px]">
            <Image src="/logoHD.png" alt="Logo" width={168} height={168} className="absolute sm:top-[240px]"/>
            <h3 className="text-white text-6xl -translate-y-[80%]">SIGN UP</h3>
            <p className="text-white text-xl -translate-y-[40px]">TO ACCESS OUR PORTAL APP</p>
            <p className="text-white text-[11px] -translate-y-[30px]">Secure  Access for Clients  &  Contractors</p>
          </div>
          {/* Right side panel */}
          <div className="flex flex-col gap-2 justify-center place-items-center bg-white sm:w-[600px] sm:h-[600px]">
            <a href="/" className="text-greenTheme font-semibold absolute top-[32%] left-[44%]"><IoChevronBack size={20}/></a>
            <div className="flex flex-col gap-0">
              <SignUpFormContractor />
              <Support />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}