import styled from 'styled-components'

const LoaderWrapper = styled('div')`
   padding: 3rem 3rem 0 3rem;
   color: hsl(193, 38%, 86%);
   display: flex;
   justify-content: center;
   align-items: center;
 `

const Loader = (): JSX.Element => {
 return (
  <LoaderWrapper>
   Loading
  </LoaderWrapper>
 )
}

export default Loader