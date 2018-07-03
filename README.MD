# MEAN Stack login & registration form

-   This project is mainly to demonstrate the functionality of registration and login with token based authentication
-   This is a `MEAN` stack project i.e.

> ##### MEAN? :
>
> -   M: `MongoDB` - For database operation
> -   E: `Express` - For backend server and related functionality
> -   A: `Angular` - For frontend view
> -   N: `Nodejs` - For backend server and related functionality

-   User was provided a page to login, register and post any feeds.
-   The posts are shown per user who was signed in and related to the user who posted it can see the posts in his tab in users page
-   user authentication is token based
-   used `MongoDB` as the backend database along with express for server and backend API interactions
-   `Angular 5` was used as a front end for communication with the user
-   `Angular material` library was used to design the form and front-end styling

# Project folders

-   `backend` folder is the place where we can find all the code related to backend stuff
-   `frontend` folder contains all the angular user display view interaction code

# Database configuration

-   update your database connection string in `server.js` file as given with reference and comments in the code
-   I've used `MongoDB` for my database, use are free to use any other database and it doesn't matter as long as it is `NoSQL`. For `SQL` match the fields accordingly

# Running the application 
To run the backend application :

      - Go to backend folder
      > `nodemon server.js`
      (Make sure nodemon is installed: When you want to make changes in sever.js it will help to laod dynamically rather than restarting the server) or you can still use `node server.js`
      
      - Go to frontend folder
      simply start the angular project 
      > ng server -o . (or) ng server --open
