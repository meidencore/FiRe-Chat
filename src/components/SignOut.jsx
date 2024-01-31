import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth';

const SignOut = ({auth, setIsSignIn }) => {
    
  const [signOut, loading, error] = useSignOut(auth);

  const handleSignOut = () => {
    const success = signOut();
    if (success) {
        alert('You are sign out');
    }
    setIsSignIn(true)
  }
  
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return auth.currentUser && (
    <div className="App">
      <button
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default SignOut