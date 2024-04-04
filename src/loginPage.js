import React, { useState } from 'react';
import { MobileStepper, Paper, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import slider1 from './assets/Home/slider1.jpg';
import slider2 from './assets/Home/1.jpg';
import slider3 from './assets/Home/2.jpg';

const images = [
  'https://i.pinimg.com/564x/8c/9c/9e/8c9c9e7b28b01e538993af1d5512ce19.jpg',
  slider2,
  slider3
  ];


const ImageSlider = () => {
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    return (
      <div>
        <Paper square elevation={0}>
          <Typography>{images[activeStep]}</Typography>
        </Paper>
        <MobileStepper
          steps={images.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
              Next
              {theme.direction === 'rtl' ? '›' : '›'}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? '‹' : '‹'}
              Back
            </Button>
          }
        />
      </div>
    );
  };
  
  export default ImageSlider;