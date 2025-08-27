import React from 'react'
import Link from 'next/link'

const Support = () => {
  return (
    <div className="flex flex-col gap-2 justify-center text-xs">
      <span className="text-gray-400 text-center pt-4 pb-2 font-semibold self-center">NEED HELP TO ACCESS YOU ACCOUNT?</span>
      <Link className="bg-primary px-4 py-2 text-white text-center text-xs w-auto self-center rounded-md" href="/support">
        CONTACT SUPPORT
      </Link>
      <span className="text-gray-400 text-center pt-2 font-semibold self-center">OR CONTACT OUR OFFICE (905) 904 5353</span>
    </div>
  )
}

export default Support