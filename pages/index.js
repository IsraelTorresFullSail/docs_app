import { useState } from 'react'
import Layout from 'components/layout/Layout'
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from '@mui/material'
import Text from '../components/text/Text'

const steps = [
  {
    label: 'Step 1: Login to cPanel',
    description: `Login to DR cPanel (yourdigitalresource1.com). You can find the credentials on Basecamp on the DR Team Web: Passwords document`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
]

export default function Home() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Layout
      pageTitle='Creating a Dev Environment'
      metaTitle='Creating a Dev Environment | Digital Resource'
      metaDescription='Creating a Dev Environment | Digital Resource'
    >
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation='vertical'>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                sx={{ fontSize: '1.25rem' }}
                optional={
                  index === 2 ? (
                    <Typography variant='caption'>Last step</Typography>
                  ) : null
                }
              >
                <Text variant='h3' font='secondary'>
                  {step.label}
                </Text>
              </StepLabel>
              <StepContent>
                <Text>{step.description}</Text>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant='contained'
                      onClick={handleNext}
                      sx={{ mt: 3, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </Layout>
  )
}
