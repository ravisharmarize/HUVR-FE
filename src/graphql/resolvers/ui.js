import gql from 'graphql-tag';

const graphqlUI = {
  Query: {
    dialog: async ( _root, args, { cache } ) => {
      const query = gql`
        query getDialogs {
          dialogs @client {
            id
            isOpen
          }
        }
      `;

      const { dialogs } = cache.readQuery( { query } );
      const filteredDialog = dialogs.filter( ( dialog ) => dialog.id === args.id );

      return filteredDialog[0];
    },
  },

  Mutation: {
    updateDialog: async ( _root, args, { cache, getCacheKey } ) => {
      const id = getCacheKey( { __typename: 'Dialog', id: args.id } );

      const fragment = gql`
        fragment dialog on Dialogs {
          id
          isOpen
        }
      `;

      const dialog = cache.readFragment( { fragment, id } );
      const data = { ...dialog, isOpen: args.isOpen };
      cache.writeData( { id, data } );

      return data;
    },
  },
}

export default graphqlUI;
