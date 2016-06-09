# SharePlan

[![Join the chat at https://gitter.im/Virginie-T/SharePlan](https://badges.gitter.im/Virginie-T/SharePlan.svg)](https://gitter.im/Virginie-T/SharePlan?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The goal of [the initial hack](https://github.com/katbow/annafreud-hackathon)
for this project was to provide a way for clinician to keep track of letters
which needed to be sent on behalf of clients. The clients would receive
notifications as progress on letters was made.

In this prototype, the client will be able to view progress on the client dashboard without the notification system.
As the status of the letter changes, the clinician can change the status which will update on the client dashboard.
The clinician will also have more features to manage their dashboard such as adding new letters to do, 

## Start up instructions
1. Open a terminal
1. Enter ``git clone https://github.com/FAC7/SharePlan.git`` into terminal
1. Then `` cd SharePlan ``
1. Open the project and add a file called `config.env` and add in a variable called `JWT_SECRET` with a long random string
1. `` npm i``
1. `` npm run watch``
1. Open a second terminal tab
1. Type `` npm start`` into the second terminal
1. Open a third terminal
1. Make sure you have postgres sql database installed
1. Then type ``sudo -u postgres psql``
1. Then ``\connect shareplan`` into your postgres server 
1. Open a browser and go to localhost:4000 

## Features
### Home page
You can log in or sign up as a patient or a clinician 

### Clinician Dashboard
You can add letters for your patients with the Add Letter Modal; view previously added letters and their current status; change the status of individual letters; delete letters; search for individual patients; log out

### Client Dashboard
You can see pending letters and their current status; view sent letters; log out

## Why
This app creates better communication between clients and patients. It also creates a to do list for the clinicians so they can keep track of all the letters they need to send. 

## How
The technologies used:
**Front End** - React, Sass, React Bootstrap, axios

**Server** - Hapi

**Security** - bcryptjs, jsonwebtoken, joi

**Database** - Postgres

**Testing** - Tape
