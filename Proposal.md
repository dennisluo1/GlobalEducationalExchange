*** Dennis Luo / Monday, July 31, 2017 ***

# Global Educational Exchange's donation App Proposal

## What is Global Educational Exchange?

Global Educational Exchange is an non profit organization that connects volunteers around the around to students in American under-privilege classrooms in order to foster intercultural exchange in foreign language classes.

At the moment, I am building a platform to allow users to sign up and donate money to American classrooms to support causes relating to educational costs such as books, computers, field trips, etc. 


## Wireframes

Login screen

<img src="images/loginwf.jpg">

This is the register/login page.

<img src="images/donatewf.jpg">

This is the donate page that allows users to select which causes they want to support.


## Database

The app will require a database 'users_table' with tables called: 

* 'users-table' with the following columns:
    * id SERIAL PRIMARY KEY,
    * firstname VARCHAR UNIQUE NOT NULL,
    * lastname VARCHAR UNIQUE NOT NULL,
    * username VARCHAR UNIQUE NOT NULL,
    * email VARCHAR UNIQUE NOT NULL,
    * password_digest TEXT NOT NULL

* 'donate-table' with the following columns: 
    * id SERIAL PRIMARY KEY,
    * title VARCHAR,
    * cost VARCHAR,
    * category VARCHAR,
    * description VARCHAR,
    * deadline VARCHAR


## Use of API Key to retrieve donation causes

For each donation causes I plan on creating a table that allows users to fill out the following for a posting:

* title, 
* cost, 
* category, 
* description,
* deadline

## Phases of Completion

* Phase -5: Create folders and necessary files 
* Phase -4: Set up database with tables
* Phase -3: Set up MVC  
* Phase -2: Set up basic layout of page 
* Phase -1: Set up Auth/login 
* Phase 0: Use API key 
* Phase 1: Work on CSS
* Phase 2: Make final edits 
* Phase 3: Deploy app through Heroku


## Resources
 
I will be using an API key from ProgrammableWeb that takes this key from an organization called DonorsChoose.org