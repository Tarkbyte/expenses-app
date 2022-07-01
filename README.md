
![image](https://user-images.githubusercontent.com/58805919/176917784-16692cdd-c517-4e87-b914-b0d6f6d3a4bf.png)

# Introduction
This app was built with the MERN stack and the purpose is to track your expenses.

You can add and remove them and even change the currency from euros (€) to dollars ($).

# Setup Back-End

You must create a `.env` file in the root of the `backend` folder and include the following:

```
APP_PORT=4000
MONGO_DB_URI=mongodb+srv://<username>:<password>@expenses-app.av3xq.mongodb.net/?retryWrites=true&w=majority
```

The `APP_PORT` is the port where the development server will run, and the `MONGO_DB_URI` is the connection string to your MongoDB Atlas cluster. Check https://www.mongodb.com/docs/compass/current/connect/ for more information. 

# Setup Front-End

Create a `.env.local` file in the root of the `client` folder and include the following:

`VITE_API_URL=http://localhost:4000/api`

The `VITE_API_URL` is the Node API where you will do the requests, keep in mind this is only for local development.

# Starting the app

From a terminal, go to the `backend` folder and execute the following command and don't close it: `npm run dev`

You must repeat this process for the `client` folder: `npm run dev`

You will see that both, the front-end and the back-end server, are now running.

# Contribution

This project was made for educational purposes, if you plan to expand this project, feel free to create a Pull Request.
