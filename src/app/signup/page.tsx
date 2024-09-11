'use client';

import FormCredentials from '../components/forms/Credentials';

export default function SignUp() {
  return (
    <div className="max-w-lg items-center justify-center mt-16 m-auto TileContainer w-[90%]">
      <FormCredentials isLogin={false} />
    </div>
  );
}
