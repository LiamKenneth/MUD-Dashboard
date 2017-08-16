# Multi User Dungeon - Admin Dashboard

[![Travis](https://img.shields.io/travis/LiamKenneth/MUD-Dashboard.svg)]()

A project to learn React by building an Admin Dashboard for <a href="https://github.com/LiamKenneth/ArchaicQuest">ArchaicQuest.</a> This can also be used for any other MUD that would want an online dashboard to manage and track the performance of their game.

## Setup
Clone this repo and run `npm install` to install all the dependencies.

## Run
Run `npm start` to fire up the webpack dev server and navigate to [http://localhost:8080/](http://localhost:8080/). If you need to you can change the port edit the const port in the webpack config.

## Tests & linting
Run `npm test` to start the karma test runner.

Run `npm run lint` to run tslint over the project src folder.

## Some things I want the dashboard to show:

* Count of new players by month, week and day. Comparing the difference with the previous value.
* Average, shortest and longest play time
* List of logged errors
* List of most and least used skills and spells
* Stats on most picked race, class, gender
* Stats on most completed and most unfinished quests
* Most popular areas and mobs killed
* List of users that can be edited
* Show who's playing now
* Controls to reload the world 
* Show log of channel chats and allow Admin to respond to in game messages
* Allow Admin to view a player and see what they are doing
