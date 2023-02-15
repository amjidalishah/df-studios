import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = (jwt) => {
    let client 
    if(jwt){
        client = new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({
                uri: 'http://localhost:1337/graphql',
                headers: {
                  Authorization: `Bearer ${jwt}`,
                },
            }),
        })
    }else{
        client = new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({
                uri: 'http://localhost:1337/graphql'
            })
        })
    }
    return client
};

export default client