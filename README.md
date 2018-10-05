# vue-with-express

## Project setup
```
npm install
```

### Running server in development
To run the application for development, you must run 2 servers: one for the API and another to serve the Vue.js UI. The API server does not support hot reloading so you will have to restart it if there are any changes. The UI server will reload on save. You will need to run these commands in different terminals.

#### Starting the API server
This will start the server on port 8080.
```
npm run dev-server
```

#### Starting the Vue.js dev server
This will start the server on the next available port, probably 8081. Requests that start with `/api` will forward to the API server running on 8080 (see the `vue.config.js` file).
```
npm run serve
```

### Compiles and minifies for production
This will compile the front-end code into the `/dist` directory. In general, you probably don't need this command.
```
npm run build
```

### Running the application in production
There are 2 steps to running the application in production:
1. Compile the Vue.js code to JavaScript in the `/dist` folder
2. Start the server using `/dist` folder as a static assets folder

You can do these as one step
```
npm run start
```

The application will be available on the 8080 port or the port defined by the PORT env variable.

### Important for API server
`vue.config.js` file is used to proxy calls to the API from the Vue.js dev server
`server/` folder contains the code to run the API server. Regular JavaScript.

The scripts `dev-server` and `start` have been added to the `package.json` file. These scripts will start the API server and, in production, compile the Vue.js files before starting the API server. 

