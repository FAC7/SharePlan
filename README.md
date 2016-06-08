# SharePlan

[![Join the chat at https://gitter.im/Virginie-T/SharePlan](https://badges.gitter.im/Virginie-T/SharePlan.svg)](https://gitter.im/Virginie-T/SharePlan?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The goal of [the initial hack](https://github.com/katbow/annafreud-hackathon)
for this project was to provide a way for clinician to keep track of letters
which needed to be sent on behalf of clients. The clients would receive
notifications as progress on letters was made.

In this prototype, in addition to the above, the client will also be able to
view progress on a client dashboard. As letters are completed, the clinician
can upload the letters so they can be seen by the client. The client can then
provide feedback as necessary.

## Start up instructions
1. Open a terminal
2. enter ``git clone https://github.com/FAC7/SharePlan.git`` into terminal
2. then `` cd SharePlan ``
3. then `` npm i``
4. then `` npm run watch``
5. open a second terminal tab
5. type `` npm start`` into the second terminal
6. then open a third terminal
7. make sure you have postgres sql database installed
8. then type ``sudo -u postgres psql``
9. then ``\connect shareplan`` into your postgres server 
10. open a browser and go to localhost:4000 

## Features
### Home page
You can sign in / up as a patient or a clinician 
### Clinician Dashboard
You can add letters for your patients with the Add Letter Modal; view previously added letters and their current status; change the status of individual letters; search for individual patients; log out

### Client Dashboard
You can see pending letters and their current status; view sent letters; log out

## Why
This app creates better communication between clients and patients. It also creates a to do list for the clinicians so they can keep track of all the letters they need to send. 

## How
The technologies used:
**Front End** - React, Sass, React Bootstrap, axios

**Back End** - Hapi

**Security** - bcryptjs, jsonwebtoken, joi

**Database** - Postgres

**Testing** - Tape
