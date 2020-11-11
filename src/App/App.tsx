import * as React from 'react';
import HomePage from '../pages/home/home.page';
import { Container } from './App.styles';

const App: React.FunctionComponent = () => {
  return ( 
    <Container>
      <HomePage />
    </Container>
  );
}
 
export default App;