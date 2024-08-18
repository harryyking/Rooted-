"use client";

import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
    const {data: session, status} = useSession();
  const [providers, setProviders] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  },[]);

  useEffect(
    () => {
        if(status === "authenticated"){
            router.push("/record")
        }
    }, [status]
  );

  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading state while session is being established
}


  return (
    <section className="flex justify-center items-center min-h-screen">
        <div className="card bg-neutral text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Register with <span className="text-primary">Rooted</span></h2>

    {
              providers && Object.values(providers).map((provider) => (
                <button
                key={provider.name} 
                onClick={() => signIn(provider.id)}
                className="btn btn-primary w-full">
                Sign In with Google
                </button>
              ))
            }

  </div>
</div>
    </section>
  )
}

export default Register