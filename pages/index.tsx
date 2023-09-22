import React, {useState} from 'react'

import Head from 'next/head'
import Image from 'next/image'
// Components
import { GradientBackgroundCon, BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, RedSpan, QuoteGeneratorCon, QuoteGenertorInnerCon, QuoteGeneratorTitle, QuoteGeneratorSubTitle, GenerateQuoteButton, GenerateQuoteButtonText} from '@/QuoteGenerator/QuoteGeneratorElements'
// Assets
import Clouds1 from '@/assets/Clouds1.png'
import Clouds2 from '@/assets/Clouds2.png'

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

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

      {/* Quote Generator Module Pop-Up */}
      {/* <QuoteGeneratorModule
      /> */}

    <QuoteGeneratorCon>
      <QuoteGenertorInnerCon>
        <QuoteGeneratorTitle>
          Daily Inspiration Generator
        </QuoteGeneratorTitle>
        <QuoteGeneratorSubTitle>
          Looking for a splash of inspiration? Generate a quote card with a random innspirational quote provided by <FooterLink href="https://zenquotes.io/" target='_blank' rel='noopener noreferrer'>ZenQuotes API</FooterLink>
        </QuoteGeneratorSubTitle>
        <GenerateQuoteButton>
          <GenerateQuoteButtonText onClick={null}>
            Make a Quote
          </GenerateQuoteButtonText>
        </GenerateQuoteButton>
      </QuoteGenertorInnerCon>
    </QuoteGeneratorCon> 

        {/*Background Images  */}
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

       {/* Footer */}
       <FooterCon>
        <>
        Quotes Generated: {numberOfQuotes}
        <br/>
        Developed with <RedSpan>❤</RedSpan> by <FooterLink href="https://github.com/CatalinaScheleff" target="_blank" rel= "noopener noreferrer">
          @Cata
        </FooterLink>
        </>
       </FooterCon>
       </GradientBackgroundCon>
    </>
  )
}
