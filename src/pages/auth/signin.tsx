import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import { signInWithGoogle } from '../../../firebase.config.mjs'
import RememberCB from '../../../components/RememberCB'
import CenterCircle from '../../../components/CenterCircle'

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(false);
  const [passvisible, setPassVisible] = useState(false);

  return (
    <>
      <Head>
        <title>HORUSweb - Login</title>
        <meta name="description" content="Ingreso al sistema" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-signin absolute -z-10 w-screen h-screen"></div>
      <main className="flex min-h-screen w-screen items-center justify-around">
        <div className="flex flex-col max-w-sm items-center text-white">
          <div className='flex items-center justify-center mb-20'>
            <Image src="/horus-logo.svg" alt="logo horus" width={100} height={50}></Image>
            <span className='text-5xl font-title font-bold mt-6 ml-2'>HORUS</span>
          </div>
          <div className='my-10 text-5xl font-subtitle font-light text-center tracking-wider px-14 uppercase'>Bienvenido de nuevo</div>
          <div className='my-10 font-body text-stone-400 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus risus in ipsum scelerisque, vel auctor nisi faucibus. Ut sed velit non tellus luctus dictum non at nisl. Nullam a sapien felis. </div>
          <button className='rounded-full w-44 global-gradient-to-r h-10 font-subtitle text-2xl text-white'>Mas Información</button>
        </div>
        <div className="flex flex-col max-w-sm items-center w-full">
          <div className="my-10 text-5xl font-subtitle font-light uppercase">Iniciar session</div>
          <button className='w-64 flex gap-2 items-center h-10 bg-gray-200 justify-center rounded-full'> <Image src="/google.svg" alt="google" width={20} height={20}></Image> <span> Continuar con google </span></button>
          <div className='w-full my-8 flex flex-col items-center'>
            <hr className='border-gray-300 w-full'/>
            <span className='font-subtitle text-2xl text-gray-400 text-center w-14 bg-white -my-5'>ó</span>
          </div>
          <input className="w-full h-10 my-2 border-gray-500 hover:border-[#136381] focus-visible:border-[#136381] border-2 rounded-full px-5 font-body outline-none duration-200" type="text" placeholder='Correo' />
          <input className="w-full h-10 my-2 border-gray-500 hover:border-[#136381] focus-visible:border-[#136381] border-2 rounded-full px-5 font-body outline-none duration-200" type="password" placeholder="Contraseña" />
          <RememberCB />
          <button className='rounded-full w-44 global-gradient-to-r h-10 font-subtitle text-2xl text-white mt-5 self-baseline'>Iniciar session</button>
          <Link href="/auth/verify-request" className="self-baseline mt-2 pl-2 hover:text-[#136381]  duration-200">Olvidaste tu contraseña?</Link>
          <span className='self-baseline pl-2'>No tienes cuenta? <Link href="/auth/signup" className='hover:text-[#136381] duration-200'>Registrate Aqui</Link></span>
        </div>
      </main>
      <CenterCircle />
    </>
  )
}

export default Signin
