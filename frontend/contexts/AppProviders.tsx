import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/theme/index';

interface AppProvidersProps {
  children?: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppProviders;
