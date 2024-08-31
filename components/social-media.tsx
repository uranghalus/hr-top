import React from 'react';
import { Button } from './ui/button';
import { FcGoogle } from 'react-icons/fc';

const SocialMedia = () => {
  return (
    <Button
      size={'lg'}
      variant={'outline'}
      className="w-full gap-2 items-center text-gray-700 "
    >
      <FcGoogle className="size-5" /> Signin With Google
    </Button>
  );
};

export default SocialMedia;
