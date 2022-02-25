import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Dice from './images/icon-dice.svg'
import Divider from './images/pattern-divider-desktop.svg'

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
  background-color: hsl(217, 19%, 50%);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25rem;
  margin: 0 2rem;
  position: relative;
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
  margin-bottom: 0;
`
const ButtonWrapper = styled('div')`
  position: absolute;
  bottom: -2rem;
`

const DividerWrapper = styled('div')`
  padding: 2rem 0;
  > img {
    width: 22rem;
  }
`
const Button = styled('button')`
  background-color: hsl(150, 100%, 66%);
  border-radius: 99rem;
  border: none;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out 0s;
  transform: rotate(0);
  
  :hover {
    box-shadow: 0px 5px 12px hsl(150, 100%, 66%);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    transition: 0.2s;
    transform: rotate(45deg);
  }
`
type Advice = {
  id: number;
  advice: string;
}

function App() {
  const [advice, setAdvice] = useState<Advice | {}>({})
  const [loading, setLoading] = useState(false)

  const getAdvice = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('https://api.adviceslip.com/advice')
      setAdvice(data.slip)

      setTimeout(() => {
        setLoading(false)
      }, 500)

    } catch (e) {
      console.log(e);
    }
  }

  const Loader = () => {
    const LoaderWrapper = styled('div')`
      padding: 3rem 3rem 0 3rem;
      color: hsl(193, 38%, 86%);
      display: flex;
      justify-content: center;
      align-items: center;
    `
    return (
      <LoaderWrapper>
        Loading
      </LoaderWrapper>
    )
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <Container className="App">
      <CardWrapper>
        {
          loading ? <Loader /> : <><AdviceTitle>advice #{advice.id}</AdviceTitle>
            <AdviceBody>"{advice.advice}"</AdviceBody></>
        }
        <DividerWrapper>
          <img src={Divider} alt="divider" />
        </DividerWrapper>
        <ButtonWrapper>
          <Button><img src={Dice} alt="Dice Icon" onClick={getAdvice} /></Button>
        </ButtonWrapper>
      </CardWrapper>
    </Container>
  )
}

export default App
