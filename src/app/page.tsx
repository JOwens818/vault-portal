'use client';
import { Button } from 'react-aria-components';
import Link from 'next/link';

export default function Landing() {
  return (
    <main className="min-h-screen bg-center bg-cover bg-[url('../public/binary-4851165_1280.jpg')] flex justify-center">
      <div className="mt-56 mb-56">
        <h1 className="max-w-3xl text-center font-bold text-5xl leading-tight mb-3">Vault Secrets Manager</h1>
        <p className="max-w-3xl text-lg font-medium text-center mb-5">Simple and Secure</p>
        <div className="flex flex-row">
          <Button className="justify-center items-center ml-auto mr-2 text-lg w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out px-10 rounded-lg text-gray-50 font-semibold py-[10px]">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="justify-center items-center mr-auto ml-2 text-lg w-fit bg-emerald-700 hover:bg-emerald-800 transition-color duration-200 ease-in-out px-10 rounded-lg text-gray-50 font-semibold py-[10px]">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
