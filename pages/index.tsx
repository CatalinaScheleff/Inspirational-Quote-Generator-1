import { GradientBackgroundCon } from '@/QuoteGenerator/QuoteGeneratorElements'
import Head from 'next/head'
import Image from 'next/image'


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
        
       </GradientBackgroundCon>
    </>
  )
}
