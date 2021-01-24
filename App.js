import React from 'react';
import RootNavigator from './src/navigation';
import { CountContextProvider } from './src/contexts/count';

export default function App() {
  return (
    <CountContextProvider>
      <RootNavigator />
    </CountContextProvider>
  );
}