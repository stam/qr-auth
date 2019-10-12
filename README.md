# QR Auth
Sample app with backend with QR code validation

![QR Scan screenshot](https://raw.githubusercontent.com/stam/qr-auth/master/screenshot.jpeg)

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

# Demo
First generate a couple of medications in the Factory view.
Ideally the *Scan* view is visited on a mobile device while the *Demo* view is open on another device.

Due to browser constraints, the scan view only works on localhost or on a page with `https`.

To demo this locally, run the frontend in HTTPS mode (https://create-react-app.dev/docs/using-https-in-development)
On Windows, run `set HTTPS=true && yarn start`, on UNIX based machines, run `HTTPS=true yarn start`.
Then you can visit the url of your dev machine on your mobile device and visit the scan page there.

Note: HTTPS mode uses self signed certificates so you will encounter some security warnings.

## Generating migrations
`yarn typeorm migration:generate -n MigrationName`
