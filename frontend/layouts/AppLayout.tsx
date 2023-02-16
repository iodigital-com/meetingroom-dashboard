import React from 'react';
import AppProviders from '@/contexts/AppProviders';

import { Flex } from '@chakra-ui/react';

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <AppProviders>
      <Flex>{children}</Flex>
    </AppProviders>
  );
};

export default AppLayout;
