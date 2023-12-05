import Image from 'next/image'
import { IBM_Plex_Sans } from 'next/font/google'
import bg from '@/img/foto.png'
import logo from '@/img/logo.png'

export default function Home() {
  return (
   <>
      <main className=' flex flex-col m-10 gap-[150px]'>
         <Image src={logo} alt="" width={218} height={33}  className='flex self-center'/>
          <form  className='flex flex-col self-center gap-[27px]'>
            <div className='' >
              <label htmlFor="" className='font- text-base text-white  font-thin '>
                Nome de Usuario
              </label>
              <input type="text" className='w-[250px] h-[40px] rounded-lg border border-slate-50 bg-zinc-700 duration-75 hover:rounded-xl'/>
            </div>

            <div>
              <label htmlFor="" className=' text-base text-white  font-thin'>
                Senha
              </label>
              <input type="text" className='w-[250px] h-[40px] rounded-lg border border-slate-50 bg-zinc-700 duration-75 hover:rounded-xl'/>
            </div>

            <div className='flex flex-col gap-2 ' >
              <button className='w-[250px] h-[40px]  bg-pink-600 text-white font-semibold rounded-lg duration-100 hover:bg-pink-400'>
                Entrar
              </button>

              <button className='w-[250px] h-[40px] bg-white text-pink-700 font-semibold rounded-lg duration-100 hover:bg-slate-200	'> 
                Esqueci minha senha
              </button>
            </div>

          </form>
      </main>
   </>
  )
}
