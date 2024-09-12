'use client';
import { Button } from 'react-aria-components';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen bg-center bg-cover bg-[url('../public/binary-4851165_1280.jpg')] flex items-center justify-center">
      <div>
        <h1 className="max-w-3xl text-center font-bold text-5xl leading-tight mb-3">Secure Password Vault</h1>
        <p className="max-w-3xl text-lg font-medium text-center mb-5">
          Store your secrets securely without the need for third party hosting
        </p>
        <div className="flex flex-row">
          <Button className="justify-center items-center m-auto text-lg w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out px-10 rounded-lg text-gray-50 font-semibold py-[10px]">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="justify-center items-center m-auto text-lg w-fit bg-emerald-700 hover:bg-emerald-800 transition-color duration-200 ease-in-out px-10 rounded-lg text-gray-50 font-semibold py-[10px]">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
