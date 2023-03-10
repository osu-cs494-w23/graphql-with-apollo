import React from 'react'
import { gql, useQuery } from '@apollo/client'

import UserHeader from '../components/UserHeaderForGraphQL'
import ReposList from '../components/ReposListForGraphQL'

/*
 * Caution!!!  This is not a safe way to incorporate an authentication token
 * into your app.  The token will be readable by anyone who runs the code.
 * We're doing it this way for ease of demonstration only.
 */
const token = process.env.REACT_APP_NOT_SECRET_GITHUB_TOKEN
const login = 'robwhess'

const GET_USER_DATA = gql`query getUserData ($login: String!) {
	user(login: $login) {
		name
		url
		avatarUrl
		repositories(first: 10) {
			nodes {
				name
				url
				issues(first: 3, states: OPEN) {
					nodes {
						title
						url
						createdAt
					}
				}
			}
		}
	}
}`

export default function UserIssuesDashboard() {
  const { data, loading, error, refetch } = useQuery(GET_USER_DATA, {
    variables: { login: login }
  })
  return (
    <div>
      {token ? (
        <>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {data && data.user && (
            <>
              <button onClick={() => refetch()}>Refresh data</button>
              <UserHeader login="octocat" user={data.user} />
              <ReposList repos={data.user.repositories.nodes} />
            </>
          )}
        </>
      ) : (
        <p>
          Rerun with a valid <a href="https://help.github.com/articles/creating-an-access-token-for-command-line-use/">GitHub OAuth Token</a> set in the environment variable <code>REACT_APP_NOT_SECRET_GITHUB_TOKEN</code>
        </p>
      )}
    </div>
  )
}
