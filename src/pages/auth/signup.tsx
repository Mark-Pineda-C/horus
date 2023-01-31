import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import { signInWithGoogle } from '../../../firebase.config.mjs'
import PasswordStrengthBar from 'react-password-strength-bar';
import * as Tooltip from '@radix-ui/react-tooltip';
import CenterCircle from '../../../components/CenterCircle';



const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <>
          <Head>
            <title>HORUSweb - Register</title>
            <meta name="description" content="Ingreso al sistema" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="bg-signup absolute -z-20 w-screen h-screen"></div>
          <main className="flex min-h-screen w-screen items-center justify-around">
            <div className="flex flex-col max-w-sm items-center">
                <div className='flex items-center justify-center mb-20'>
                    <Image src="/horus-logo.svg" alt="logo horus" width={100} height={50}></Image>
                    <span className='text-5xl font-title font-bold mt-6 ml-2'>HORUS</span>
                </div>
                <div className='my-10 text-5xl font-subtitle font-light text-center tracking-wider px-2 uppercase'>El mejor Sistema de evaluaciones</div>
                <div className='my-10 font-body text-stone-500 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus risus in ipsum scelerisque, vel auctor nisi faucibus. Ut sed velit non tellus luctus dictum non at nisl. Nullam a sapien felis. </div>
                <button className='rounded-full w-44 global-gradient-to-r h-10 font-subtitle text-2xl text-white'>Mas Información</button>
            </div>
            <div className="flex flex-col max-w-sm text-white items-center w-full">
                <div className="my-10 text-5xl font-subtitle font-light uppercase">Registrar usuario</div>
                <button className='w-64 flex gap-2 items-center h-10 bg-gray-200 justify-center rounded-full text-black'> <Image src="/google.svg" alt="google" width={20} height={20}></Image> <span> Continuar con google </span></button>
                <div className='w-full my-8 flex flex-col items-center'>
                    <hr className='border-gray-300 w-full'/>
                    <span className='font-subtitle text-2xl text-gray-400 text-center w-14 bg-[#1E202A] -my-5'>ó</span>
                </div>
                <input onChange={handleNameChange} value={name} className="w-full h-10 my-2 border-gray-500 hover:border-[#136381] border-2 rounded-full px-5 font-body bg-[#1E202A] focus-visible:border-[#136381] duration-200 outline-none" type="text" placeholder='Nombres' />
                <input onChange={handleEmailChange} value={email} className="w-full h-10 my-2 border-gray-500 hover:border-[#136381] border-2 rounded-full px-5 font-body bg-[#1E202A] focus-visible:border-[#136381] duration-200 outline-none" type="text" placeholder='Correo' />
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <input onChange={handlePasswordChange} value={password} className="w-full h-10 my-2 border-gray-500 hover:border-[#136381] border-2 rounded-full px-5 font-body bg-[#1E202A] focus-visible:border-[#136381] duration-200 outline-none" type="password" placeholder="Contraseña" />
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Content sideOffset={5} className="password-tooltip" side="right">
                                La contraseña debe tener al menos 6 caracteres 
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </Tooltip.Provider>

                <PasswordStrengthBar password={password} className="w-full" scoreWords={["insegura", "debil", "poco segura", "segura", "muy fuerte"]} minLength={6} shortScoreWord="muy corta" />
                <button className='rounded-full w-44 global-gradient-to-r h-10 font-subtitle text-2xl text-white mt-5 self-baseline'>Registrarse</button>
                <span className='self-baseline pl-2 mt-2'>Ya estas registrado? <Link href="/auth/signin" className='hover:text-[#A3CBD5] duration-200'>Inicia Sesion</Link></span>
            </div>
          </main>
          <CenterCircle />
        </>
      )
}

export default Signup