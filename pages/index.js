import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Federação Nacional dos Estudos Europeus</title>
        <meta name="description" content="Educar e informar a sociedade civil. Esta é a missão primordial da Federação Nacional dos Estudos Europeus." />
        <link rel="icon" href="/fav.png" />
      </Head>


      <div className="flex flex-col h-screen items-center justify-center bg-[url('/background.jpg')] bg-cover bg-center">
        <img src="/logo.png" width="40%" alt="Federação Nacional dos Estudos Europeus" />
        <h2 className='text-3xl text-white font-extrabold tracking-wider'>Brevemente</h2>
        <p className='text-white text-xs font-medium mt-3'>geral@fnee.pt</p>
      </div>

      
    </div>
  )
}
