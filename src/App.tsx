import { useState } from 'react'
import styled from 'styled-components'

const Container = styled('section')`
  :root {
    --light-cyan: hsl(193, 38%, 86%);
    --neon-green: hsl(150, 100%, 66%);
    --grayish-blue: hsl(217, 19%, 38%);
    --dark-grayish-blue: hsl(217, 19%, 24%);
    --body-copy-size: 1.75rem;
  }

  height: 100vh;
  background-color: hsl(217, 19%, 24%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardWrapper = styled('div')`
  background-color: hsl(217, 19%, 38%);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25rem;
  margin: 0 2rem;
`

const AdviceTitle = styled('h1')`
  color: hsl(150, 100%, 66%);
  font-size: 0.75rem;
  text-transform: uppercase; 
  padding: 0;
  margin: 0;
  padding-top: 1rem;
`

const AdviceBody = styled('blockquote')`
  font-weight: 800;
  color: hsl(193, 38%, 86%);
  font-size: 1.5rem;
  text-align: center;
`

function App() {
  return (
    <Container className="App">
      <CardWrapper>
        <AdviceTitle>advice #117</AdviceTitle>
        <AdviceBody>"It is easy to sit up and take notice, what's difficult is getting up and taking action"</AdviceBody>

      </CardWrapper>
    </Container>
  )
}

export default App
