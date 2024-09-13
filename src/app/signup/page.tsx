'use client';

import FormCredentials from '../components/forms/Credentials';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="max-w-lg items-center justify-center mt-16 m-auto TileContainer w-[90%]">
      <h2 className=" text-center font-bold text-3xl leading-tight mb-3">Sign Up</h2>
      <FormCredentials isSignup={true} />
      <p className="max-w-2xl text-md font-medium text-center mt-5">Already have an account?</p>
      <p className="max-w-2xl text-center mb-3">
        <Link className="text-blue-600 text-sm" href="/login">
          Click here to log in
        </Link>
      </p>
    </div>
  );
}
