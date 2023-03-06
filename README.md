# Using Apollo to execute GraphQL queries

We'll use this code as a starting point for exploring how to use [Apollo](https://www.apollographql.com/) to make queries to a GraphQL API.  The first time you run this app, make sure to run `npm install` first, to install needed dependencies.

Also, before running this app, make sure you have the environment variable `REACT_APP_NOT_SECRET_GITHUB_TOKEN` set to contain a [GitHub personal access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) with `user` scope as well as `public_repo` scope.

Then, to run the app and see it in your browser, you can run
```
npm start
```
This will run the app in the development mode, and it should automatically open [http://localhost:3000](http://localhost:3000) to view the app in your browser (though you can manually open that URL in your browser, too).  The app is set up so that the page will reload if you make edits to the code.  You will also see any lint errors in the console.
