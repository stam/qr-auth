# QR Auth
Sample app with backend with QR code validation

# Getting started
```
cd frontend
yarn && yarn start
```

In a separate thread:
```
cd ../backend
yarn && yarn typeorm migration:run
yarn start
```

The frontend can be visited at `localhost:3000`, the backend will run at `localhost:4000`

## Generating migrations
`yarn typeorm migration:generate -n MigrationName`
