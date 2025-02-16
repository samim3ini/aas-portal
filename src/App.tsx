import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Dashboard from './Dashboard';

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main>
      <Dashboard />
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;