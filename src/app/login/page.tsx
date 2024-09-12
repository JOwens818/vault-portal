'use client';

import Link from 'next/link';
import FormCredentials from '../components/forms/Credentials';

export default function Login() {
  return (
    <div className="max-w-lg items-center justify-center mt-16 m-auto TileContainer w-[90%]">
      <h2 className=" text-center font-bold text-3xl leading-tight mb-3">Log In</h2>
      <FormCredentials isSignup={false} />
      <p className="max-w-2xl text-sm font-medium text-center mb-3 mt-5">
        Don't have an account?
        <Link className="ml-2 text-blue-600" href="/signup">
          Click here to sign up
        </Link>
      </p>
    </div>
  );
}
