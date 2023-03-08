const { ApolloClient, gql, InMemoryCache } = require('@apollo/client')

const token = process.env.REACT_APP_NOT_SECRET_GITHUB_TOKEN
const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
        Authorization: `Bearer ${token}`
    },
    cache: new InMemoryCache()
})

const query = gql`{
    user(login: "octocat") {
		name
		url
		avatarUrl
	}
}`

client.query({ query })
    .then(result => console.log(result))
