import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hasEnvVars } from "@/lib/utils";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher"


const Navbar = () => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-28 bg-primary text-white">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          {/* Put here logo */}
          <Image src={"/logo.png"} alt="logo" className="object-cover" width={64} height={64}/>
          <Link href="/">PAK Homes Builder</Link>
        </div>
        {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
        <ThemeSwitcher />
      </div>
      
    </nav>
  )
}

export default Navbar