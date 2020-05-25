import React from 'react';
import TextComponent, {TextComponentItem} from './components/TextComponent'

function App() {
  return (
      <TextComponent>
        <TextComponentItem>Header</TextComponentItem>
        <TextComponentItem>Content</TextComponentItem>
        <TextComponentItem>Footer</TextComponentItem>
      </TextComponent>
  );
}

export default App;
