# serverless-unify
CLI tool for building a single serverless.yml file from several files.

Define serverless.yml configurations near the code that requires it. Use serverless-unify to create
a single serverless.yml at the root of your service and deploy using the unified configuration file.

## Usage
### Install
```
npm install --save-dev @iekedemus/serverless-unify
```

### Configure
Write parts of serverless configuration anywhere in the codebase in files by the name of
`_serverless.yml`.

### Unify
Create a unified `serverless.yml` by running at the root of your service:
```
./node_modules/.bin/serverless-unify
```

### Deploy serverless service!

## License
MIT
