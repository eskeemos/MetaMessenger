import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import SignInComponent from './SignInComponent';

export default async function SignInPage() {
  const providers = await getProviders();
  return (
    <div>
      <div className='grid justify-center'>
        <Image  
          className='rounded-full mx-2 object-cover'
          height={700}
          width={700}
          src="https://links.papareact.com/161"
          alt="Profile Picture" />
      </div>
      <SignInComponent providers={providers} />
    </div>
  )
}
