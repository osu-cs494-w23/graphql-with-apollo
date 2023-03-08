import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import App from './App'

const token = process.env.REACT_APP_NOT_SECRET_GITHUB_TOKEN
const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        Authorization: `Bearer ${token}`
    },
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
)
