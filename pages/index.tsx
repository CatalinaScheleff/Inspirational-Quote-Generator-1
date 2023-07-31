import Head from 'next/head'
import Image from 'next/image'
// Components
import { GradientBackgroundCon, BackgroundImage1, BackgroundImage2} from '@/QuoteGenerator/QuoteGeneratorElements'
// Assets
import Clouds1 from '@/assets/Clouds1.png'
import Clouds2 from '@/assets/Clouds2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       {/* Background */}
       <GradientBackgroundCon>
       <BackgroundImage1 
       src={Clouds1}
       height="300"
       alt="cloudybackground1" 
       />
       <BackgroundImage2 
       src={Clouds2}
       height="300"
       alt="cloudybackground2" 
       />
       </GradientBackgroundCon>
    </>
  )
}
