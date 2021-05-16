# Cocktail-app

This is a small cocktail searcher web application utilizing the [https://www.thecocktaildb.com/api.php](thecocktaildb web api). The project contains both the frontend (Javscript, React, Redux, MaterialUI) and the backend (Typescript, Express). The former uses Redux to store the recieved data and the state of the request to the backend, while the latter forwards the API calls and transforms the data before returning it to the frontend. Due to the short available time, testing is out of scope for now.

## To run to app, you need to run both the backend and the frontend servers as well!

For both folders (frontend, backend) follow these instructions:

### Install the dependencies

```bash
npm install
```

### Start the server

```bash
npm start
```

### For the frontend you can additionally create a production bundle as well

```bash
npm run build
```

### You can also start the backend server in dev mode

```bash
npm run dev
```

The frontend server runs on port 3000 while the backend on port 3001.

Open [http://localhost:3000](http://localhost:3000/cocktail) to access the webapp in the browser.
Have fun!
