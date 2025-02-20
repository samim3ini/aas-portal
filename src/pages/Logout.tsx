import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

const Logout: React.FC = () => {
  const { signOut } = useAuthenticator();

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Logout;