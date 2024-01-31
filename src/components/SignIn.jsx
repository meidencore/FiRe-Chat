import React from 'react'
import { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SignIn = ({ auth, setIsSignIn }) => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleSignIn = async () => {
    await signInWithGoogle()
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

  if (auth.currentUser !== null) {
    return (
      <div>
        <p>Signed In User: { user.user.email }</p>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SignIn