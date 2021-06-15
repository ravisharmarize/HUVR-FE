// import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloProvider } from "react-apollo"
import { SnackbarProvider } from 'notistack';
import client from './apollo/apollo-client';

import Router from './router';
function App() {
  return (
    <ApolloProvider client={ client }>
      <SnackbarProvider maxSnack={ 3 }>
        <Router/>
      </SnackbarProvider>
    </ApolloProvider>
  );
}

export default App;
