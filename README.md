# Lassonde Games 2022 Geared In (Programming)

[![Netlify Status](https://api.netlify.com/api/v1/badges/9f7b37d6-b6ea-41c0-a0fd-5e4bb15d852e/deploy-status)](https://app.netlify.com/sites/unruffled-goldwasser-566d13/deploys)

OSC Scavenger is a web application for scavenger hunts at the Ontario Sciecne Center. It is also able to be printed into a pdf form so that it can be used offline.

Links to the sites attached below. For testing the backend admin panel use for signing in. Then navigate to content management in the upper left corner then press to "create a new entry". After filling in the data insure that it set to published and not draft then view the frontend site to see your new challenge added.

```
username: testuser@my.yorku.ca
password: LassondeGames22!
```


[Frontend Link](https://unruffled-goldwasser-566d13.netlify.app/)
[Backend Link](https://lassonde-games-strapi.herokuapp.com/admin/)


## Features
- Maintainable by OSC by using a headless CMS strapi more challenges can be added
- Filter by difficulty for the varying age ranges (ex. 8-13 can use easy,medium,hard challenges)
- TTS added for reading out the scavenger hunt questions in multiple languages
- Badges added for when successfully completing challenges

## Tech

Jamstack 🍯🍇🍓🫐
- React
- TailwindCSS 
- Strapi (Headless CMS, Postgres for storing the CMS data) 
- Netlify & Heroku & Cloudinary for deployment of Frontend,Backend and image storage respectively.


## Installation

Install the dependencies and devDependencies and start the server.

```
cd scavenger-frontend
npm install
npm start
```


```
cd scavenger-backend
npm install
npm run develop // for changing and updating the CMS in development
```
API keys for cloudinary etc. will need to be provided in a .env file if you are wanting to create your own. Guide below gives a pretty good idea of getting it set up.
https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application

## Libraries Used



| Library | 
| ------ | 
| React-to-print |  
| React-speech-kit | 
| TailwindCSS| 
