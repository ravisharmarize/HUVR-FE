import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { persistCache } from 'apollo-cache-persist';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';

import errorHandler from './error-handler';
import resolvers from '../graphql/resolvers';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_GRAPHQL_SERVER_BASE_URL}/graphql` || '',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('app-token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null,
        },
    };
});

const defaults = {
    isLoggedIn: false,
    isAdmin: false,
    dialogs: [{
        __typename: 'Dialog',
        id: 'login',
        isOpen: false,
    }, ],
};

persistCache({
    cache,
    storage: window.localStorage,
    maxSize: false,
});

const stateLink = withClientState({
    defaults,
    resolvers,
    cache,
});

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(errorHandler),
        stateLink,
        authLink.concat(httpLink),
    ]),
    cache,
    resolvers,
    typeDefs: {},
    connectToDevTools: true,
});

client.onResetStore(stateLink.writeDefaults);

export default client;