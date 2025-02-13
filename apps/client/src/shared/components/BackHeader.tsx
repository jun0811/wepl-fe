'use client';

import { Button } from '@ui/src/Button';
import Header from '@ui/src/components/Header';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackHeader = () => {
  const router = useRouter();

  const LeftHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0" onClick={() => router.back()}>
        <img src="left_arrow.svg" />
      </Button>
    );
  };

  return <Header left={<LeftHeader />} />;
};

export default BackHeader;
