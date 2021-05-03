# Welcome to BottomsUp

![BottomsUp Logo](/frontend/public/readmelogo.png)

### BottomsUp is a educative and interactive resource for people wanting to find the ingredients of classic cocktails as well as step by step instructions for how to make those cocktails.  Search for cocktails by name or by scrolling through the available options. Use the ingredients and instructions provided to make the cocktail of your choosing and leave a comment letting the community know your thoughts.

---
### Index

[Technologies](#Technologies)

[Key Features](#Key-Features)

[Visit BottomsUp](https://app-bottoms-up.herokuapp.com/)

[Database Schema](#Database-Schema)

[Frontend Routes](#Frontend-Routes)

<!-- [API Routes](https://github.com/jemcodes/travelScape/wiki/API-Documentation) -->

[Details](#Details)

[Feature Spotlight](#Feature-Spotlight)

[Code Snippets](#Code-Snippets)

[BottomsUp Future Roadmap](#TravelScape-Future-Roadmap)

[Technical Instructions for Project](#Technical-Instructions-for-Project)

[Pre-Project Planning](#Pre-Project-Planning)

[Developer](#Developer)

---
### Technologies

* React
* Redux
* JavaScript
* Express
* CSS
* Sequelize
* PostgreSQL
* Heroku
* VSCode
* DrawSql
* npm
* canva
* colorhunt

### Database Schema
![Database Schema](/frontend/public/bottoms-up-schema.png)

### Frontend Routes

#### /
* Once logged in users can view the cocktails that are a part of the app
  * GET /

#### /login
* Users with an account can login to BottomsUp
    * GET /login
    * POST /login

#### /signup
* New users can signup for an account
    * GET /signup
    * POST /signup

#### /cocktails
* Logged in users can view some of the cocktails available to us on the app
    * GET /cocktails
    * POST /cocktails

#### /cocktails/:id
* Logged in users can view individual cocktails and get in depth information about them
    * GET /cocktail/:id
	
#### /users/:id
* User profile with a description of themselves and links to their comments
    * GET /users/:id

#### /about
* About page about the developer of the app
    * GET /about


### Key Features
* Search for cocktails by scrolling through the options or searching by name
* Find ingredients and instructions to make cocktails
* Add comments to the cocktails letting the community know whether or not you enjoyed that cocktail

### Details

```
"Here's to nights we'll never remember with people we'll never forget."
```

### Visit BottomsUp
https://app-bottoms-up.herokuapp.com/

* Search for cocktails
* Read cocktail ingredients and the instructions for for to make them
* Add comments to cocktails

### Feature Spotlight
* 30+ classic cocktails were seeded with my favorite recipes from my years bartending. 
* There is a search feature to find a cocktail by name or by scrolling through the list of avalable cocktails
* Each cocktail has a dedicated page that includes the ingredients and instructions for how to make it
* Each cocktail page has a comments section for users to leave their thoughts on the cocktails
* Each user has a profile that lists all of the comments they have left on various cocktail pages.

#### Code Snippets
* This is the thunk action creator used to query the database  for the cocktails used in BottomsUp
![Thunk](/frontend/public/thunk.png)

* This is the reducer that updates the state of BottomsUp to include all of the cocktails
![Reducer](/frontend/public/reducer.png)

### BottomsUp Future Roadmap
- Search for cocktails by ingredients
- Add new cocktails
- Add variations on cocktails

### Technical Instructions for Project
* Git Clone
* On local machine, run 'npm install' to install required dependenices.
* Create initial database user as stated in .env.example
* Run npx dotenv sequelize commands (migrate, seed)
* Run 'npm start' command in backend directory
* Run 'npm start' command in frontend directory
* Navigate to localhost:3000 in browser.

### Pre-Project Planning
* Picked and researched a clone and decided on general theme to distinguish
* Created model schema for database relations with drawSQL



### Developer
* Jamie Sullivan [Github](https://github.com/bilbopicard) [Linkedin](https://www.linkedin.com/in/sullivan-jamie/) 