import React, {useEffect, useState} from 'react'

import Head from 'next/head'
import Image from 'next/image'
// Components
import { GradientBackgroundCon, BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, RedSpan, QuoteGeneratorCon, QuoteGenertorInnerCon, QuoteGeneratorTitle, QuoteGeneratorSubTitle, GenerateQuoteButton, GenerateQuoteButtonText} from '@/components/QuoteGenerator/QuoteGeneratorElements'
import QuoteGeneratorModal from '@/components/QuoteGenerator'

// Assets
import Clouds1 from '@/assets/Clouds1.png'
import Clouds2 from '@/assets/Clouds2.png'
import { API } from 'aws-amplify'
import { quoteQueryName } from '@/src/graphql/queries'
import { GraphQLResult } from '@aws-amplify/api';


//interface for our DynamoDB object

interface UpdateQuoteInfoData {
  id: string;
  queryName: string;
  quotesGenerated: number;
  createdAt: string;
  updatedAt: string;
}

//type guard for out fetch function
function isGraphQLResultForquoteQueryName (response: any): response is GraphQLResult<{
  quoteQueryName: {
    items: [UpdateQuoteInfoData];
  };
}> {
  return response.data && response.data.quoteQueryName && response.data.quoteQueryName.items;
}

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  const [openGenerator, setOpenGenerator] = useState(false);

  //Function to fetch out DynamoDB object (quotes generated)
  const updateQuoteInfo = async () => {
    try {
      const response = await API.graphql<UpdateQuoteInfoData>({
        query: quoteQueryName,
        authMode: "AWS_IAM",
        variables:{
          queryName: "LIVE",
        },
      })
      console.log('response', response);
      //setNumberOfQuotes();
       
      //Create type guards
      if (!isGraphQLResultForquoteQueryName(response)) {
        throw new Error('Unexpected response from API.graphql');
      }

      if (!response.data) {
        throw new Error('Response data is undefined');
      }

      const receivedNumberOfQuotes = response.data.quoteQueryName.items[0].quotesGenerated;
      setNumberOfQuotes(receivedNumberOfQuotes);
      
    } catch (error) {
      console.log('error getting quote data', error)
    }
    
  }

  useEffect(() => {
    updateQuoteInfo();
  }, [])

  //Functions for quote generator modal

  const handleCloseGenerator = () => {
    setOpenGenerator(false);
  }

  const handleOpenGenerator = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenGenerator(true);
  }

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

      {/* Quote Generator Modal Pop-Up */}
      <QuoteGeneratorModal
      open={openGenerator} 
      close ={handleCloseGenerator}
      // processingQuote={processingQuote}
      // setProcessingQuote={setProcessingQuote}
      // quoteRecived={quoteRecived}
      // setQuoteRecived={setQuoteRecived}
      />

    <QuoteGeneratorCon>
      <QuoteGenertorInnerCon>
        <QuoteGeneratorTitle>
          Daily Inspiration Generator
        </QuoteGeneratorTitle>
        <QuoteGeneratorSubTitle>
          Looking for a splash of inspiration? Generate a quote card with a random innspirational quote provided by <FooterLink href="https://zenquotes.io/" target='_blank' rel='noopener noreferrer'>ZenQuotes API</FooterLink>
        </QuoteGeneratorSubTitle>
        <GenerateQuoteButton>
          <GenerateQuoteButtonText 
          onClick={handleOpenGenerator}
          >
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
