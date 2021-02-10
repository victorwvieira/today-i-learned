import { useState } from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
display: flex;
justify-content: center;
align-itens: center;
width: 100vw;
background-color: blue;
`
const HeaderContentWrapper = styled(HeaderWrapper)`
background-color: red;
width: 50vw;
@media(max-width: 800px) {
  flex-direction: column;
}
`

const Item = styled.p`
font-size: 2rem;
padding: 0.8rem;
text-align: center;
color: ${props => props.isOdd ? 'white' : 'green'}
`

const Button = styled.button`
margin: 1rem;
border: 1px solid black;
border-radius: 10px
`

function App() {
  const [value, setValue] = useState(0)


  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <Item isOdd={value%2 !== 0}>{value}</Item>
        <Button onClick={() => setValue(value + 1)}>Click here</Button>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
}

export default App;
