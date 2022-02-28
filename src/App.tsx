import styled from 'styled-components'
import AdviceCard from './components/AdviceCard'

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

function App() {
  return (
    <Container>
      <AdviceCard />
    </Container>
  )
}

export default App
