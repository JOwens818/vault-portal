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
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [errorResp, setErrorResp] = useState<string>('');

  const renderErrorMessages = (errorResp: string): React.JSX.Element => {
    const messages: string[] = errorResp.split('|');
    messages.forEach((message) => console.log(message));
    const renderedMessages = messages.map((msg, ind) => {
      return (
        <div
          key={'errorMsg' + ind.toString()}
          className="mb-3 pl-3 py-1 bg-red-400 dark:bg-red-500 rounded-md whitespace-pre-wrap"
        >
          {msg}
        </div>
      );
    });
    return <div className="flex flex-col w-4/5 justify-center m-auto">{renderedMessages}</div>;
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setShowErrors(false);
    setErrorResp('');
    setLoading(true);
    const url = props.isSignup ? '/api/users/signup' : '/api/users/login';
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const requestInit = setupRequestInit('POST');
    requestInit.body = JSON.stringify(data);
    const resp: UserResponse = await fetcher(url, requestInit);
    if (resp.status === 'success') {
      router.push('/protected/dashboard');
    } else {
      setLoading(false);
      setErrorResp(resp.message!);
      setShowErrors(true);
    }
  };

  return (
    <>
      {showErrors && renderErrorMessages(errorResp)}
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
