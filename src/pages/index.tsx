import Image from 'next/image'

import logo from '@/img/logo.png'
import logorosa from '@/img/Logoaaa.png'

export default function Home() {
  return (
   <>
      <main className="lg:bg-[url('/foto.png')] lg:bg-cover h-screen flex self-start justify-center">
        <div className="flex flex-col gap-[150px] self-center lg:bg-slate-50 lg:w-[516px] lg:h-[498px] lg:gap-[70px] lg:rounded-2xl">
          <Image src={logo} alt="" width={218} height={33}  className='flex self-center lg:hidden'/>
          <Image src={logorosa} alt="" width={218} height={33}  className='flex self-center  sm:hidden lg:block lg:pt-8'/>
         
          <form  className='flex flex-col self-center gap-[12px]'>
            <div className='flex flex-col self-center' >
              <label htmlFor="" className='font- text-base text-white  font-thin lg:font-normal lg:text-black'>
                Nome de Usuario
              </label>
              <input type="text" className='w-[430px] h-[61px] rounded-lg border border-slate-50 bg-zinc-700 duration-75 hover:rounded-xl lg:bg-white lg:border-slate-200'/>
            </div>
            
            
            <div className='flex flex-col self-center' >
              <label htmlFor="" className='font- text-base text-white  font-thin lg:font-normal lg:text-black'>
                Senha
              </label>
              <input type="text" className='w-[430px] h-[61px] rounded-lg border border-slate-50 bg-zinc-700 duration-75 hover:rounded-xl lg:bg-white lg:border-slate-200'/>
            </div>
            
            <div className='flex flex-col gap-2 self-center' >
              <button className='w-[430px] h-[61px]  bg-pink-600 text-white font-semibold rounded-lg duration-100 hover:bg-pink-400'>
                Entrar
              </button>

              <button className='w-[430px] h-[61px] bg-white text-pink-700 font-semibold rounded-lg duration-100 hover:bg-slate-200	 lg:bg-[#C8BDC5] lg:h-[30px] lg:hover:bg-slate-400'> 
                Esqueci minha senha
              </button>
            </div>
          </form>
        </div>
      </main>
   </>
  )
}
