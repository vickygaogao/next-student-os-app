import { Amplify } from 'aws-amplify';

Amplify.configure({
  API: {
      GraphQL: {
        endpoint: 'https://tdkjy3haqffotpwagyeehk42ou.appsync-api.us-east-1.amazonaws.com/graphql',
        region: 'us-east-1',
        defaultAuthMode: 'apiKey',
        apiKey: 'da2-fcqkvbbzfrhkzg5lsm57usb4qa'
      }
  }
});

const configureAmplify = () => {
  Amplify.configure({
    API: {
        GraphQL: {
          endpoint: 'https://tdkjy3haqffotpwagyeehk42ou.appsync-api.us-east-1.amazonaws.com/graphql',
          region: 'us-east-1',
          defaultAuthMode: 'apiKey',
          apiKey: 'da2-fcqkvbbzfrhkzg5lsm57usb4qa'
        }
    }
  });
};

export default configureAmplify;


