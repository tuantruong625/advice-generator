import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Loader from './Loader/Loader'
import Dice from '../images/icon-dice.svg'
import Divider from '../images/pattern-divider-desktop.svg'

type Advice = {
 id: number;
 advice: string;
}

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

const AdviceCard = (): JSX.Element => {
 const [advice, setAdvice] = useState<Advice | null>(null)
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

 useEffect(() => {
  getAdvice()
 }, [])

 return (
  <CardWrapper>
   {
    loading ? <Loader /> : <><AdviceTitle>advice #{advice?.id}</AdviceTitle>
     <AdviceBody>"{advice?.advice}"</AdviceBody></>
   }
   <DividerWrapper>
    <img src={Divider} alt="divider" />
   </DividerWrapper>
   <ButtonWrapper>
    <Button><img src={Dice} alt="Dice Icon" onClick={getAdvice} /></Button>
   </ButtonWrapper>
  </CardWrapper>
 )
}

export default AdviceCard