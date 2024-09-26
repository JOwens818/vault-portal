'use client';

import React, { FC, useState } from 'react';
import { Button, FieldError, Form, Input, Label, TextField } from 'react-aria-components';
import InlineLoading from '../InlineLoading';
import { useRouter } from 'next/navigation';
import { UserResponse } from '@/types';
import { fetcher, setupRequestInit } from '@/lib/request';

interface FormCredentialsProps {
  isSignup: boolean;
}

const FormCredentials: FC<FormCredentialsProps> = (props): React.JSX.Element => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const url = props.isSignup ? '/api/users/signup' : '/api/users/login';
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const requestInit = setupRequestInit('POST');
    requestInit.body = JSON.stringify(data);
    const resp: UserResponse = await fetcher(url, requestInit);
    if (resp.status === 'success') {
      router.push('/protected/dashboard');
    }
    setLoading(false);
    setErrorMsg(resp.message!);
  };

  return (
    <>
      <div className="flex flex-col w-4/5 justify-center m-auto mb-3 pl-3 bg-red-500 dark:bg-red-600 rounded-md whitespace-pre-wrap">
        {errorMsg}
      </div>
      <Form className="react-aria-Form" onSubmit={formSubmit}>
        <TextField className="react-aria-TextField" name="username" isRequired autoFocus>
          <Label>Username</Label>
          <Input className="react-aria-Input" />
          <FieldError className="react-aria-FieldError" />
        </TextField>
        {props.isSignup && (
          <TextField name="email" type="email" isRequired>
            <Label>Email</Label>
            <Input />
            <FieldError />
          </TextField>
        )}
        <TextField name="password" type="password" isRequired>
          <Label>Password</Label>
          <Input />
          <FieldError />
        </TextField>
        {loading ? (
          <Button className="mt-3 text-lg bg-cyan-800 px-11 text-gray-50 font-semibold rounded-lg py-[10px]" isDisabled>
            <InlineLoading showLabel={true} label={'Submitting...'} />
          </Button>
        ) : (
          <Button
            className="mt-3 justify-center items-center text-lg bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out px-10 rounded-lg text-gray-50 font-semibold py-[10px]"
            type="submit"
          >
            Submit
          </Button>
        )}
      </Form>
    </>
  );
};

export default FormCredentials;
