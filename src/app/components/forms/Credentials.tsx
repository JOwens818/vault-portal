'use client';

import React, { FC } from 'react';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';
import { FormCredentialsProps } from '@/types';

const FormCredentials: FC<FormCredentialsProps> = (
  props
): React.JSX.Element => {
  return (
    <Form className="react-aria-Form">
      <TextField className="react-aria-TextField" name="username" isRequired>
        <Label>Username</Label>
        <Input className="react-aria-Input" />
        <FieldError className="react-aria-FieldError" />
      </TextField>
      {!props.isLogin && (
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
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FormCredentials;
