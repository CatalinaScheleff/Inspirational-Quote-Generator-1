import React from 'react'

//materiial UI imports
import { Backdrop, Fade, Modal } from '@mui/material'
import { ModalCircularProgress, QuoteGeneratorModalCon, QuoteGeneratorModalInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from './QuoteGeneratorElements';
import ImageBlob from '../animations/ImageBlob';
import { ImageBlobCon } from '../animations/AnimationElements';
import AnimatedDownloadButton from '../animations/AnimatedDownloadButton';

interface QuoteGeneratorModalProps {
  open: boolean,
  close: () => void;
  processingQuote: boolean;
  setProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
  quoteRecived: String | null;
  setQuoteRecived: React.Dispatch<React.SetStateAction<String | null>>;
}

const style = {

}

const QuoteGeneratorModal = ({
  open, 
  close,
  processingQuote,
  setProcessingQuote,
  quoteRecived,
  setQuoteRecived,
}: QuoteGeneratorModalProps) => {

  const wiseDevQuote = '"If you can center a div, anything is possible."';
  const wiseDevQuoteAuthor = "- a wise senior software engineer"
  return (
    <Modal
    id="QuoteGeneratorModal"
    aria-labelledby="spring-modal-quotegeneratormodal"
    aria-describedby="spring-modal-opens-and-closes-quote-generator"
    open={open}
    onClose={close}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
        timeout: 500,
    }}
    >
      <Fade in={open}>
        <QuoteGeneratorModalCon sx={style}>
          <QuoteGeneratorModalInnerCon>
            {/* State #1: Processing request of quote + quote state is empty */}
            {(processingQuote === true && quoteRecived === null) &&
            <>
              <ModalCircularProgress
                size={"8rem"}
                thickness={2.5}
                />
              <QuoteGeneratorTitle>
                Creating your quote...
              </QuoteGeneratorTitle>
              <QuoteGeneratorSubTitle style={{marginTop: "20px"}}>
                {wiseDevQuote}
                <br />
                <span style={{fontSize: 26}}>{wiseDevQuoteAuthor}</span>
              </QuoteGeneratorSubTitle>
            </>
            }

            {/* State #2 Quote state fulfilled */}
            {quoteRecived !== null &&
              <>
                <QuoteGeneratorTitle>
                  Download your quote!
                </QuoteGeneratorTitle>
                <QuoteGeneratorSubTitle style={{marginTop: "20px"}}>
                  See a preview:
                </QuoteGeneratorSubTitle>
                <ImageBlobCon>
                    <ImageBlob/>
                    
                  </ImageBlobCon>
                  <AnimatedDownloadButton/>
              </>
            }
            
          </QuoteGeneratorModalInnerCon>
        </QuoteGeneratorModalCon>
      </Fade>

    </Modal>
  )
}

export default QuoteGeneratorModal