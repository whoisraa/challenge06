# 🌾 Binar miniChallenge 6 Submission 

## 📋 Prequisites
### You'll need these programs installed on your computer
- [Git](https://git-scm.com/downloads) - Version Control
- [NodeJS](https://nodejs.org/en/download/) - Back-end JavaScript Runtime Environment
- [NPM](https://www.npmjs.com/) - Node Package Manager (usually comes with NodeJS)
- [PostgreSQL](https://www.postgresql.org/download/) - NoSQL Database

## 🚀 Follow these steps to run the app 

1. Clone the repository 
```bash
git clone https://github.com/whoisraa/challenge06-mini.git
```
2. Open the directory
3. Rename the file `.env.example` to `.env`. Or you can use this command
```bash
# GitBash or Terminal on Linux machine
mv .env.example .env

# Command Prompt on Windows machine
ren .env.example .env
```
4. Run this command to install all required packages based on **packages.json**
```bash
npm install 
```
5. Run this command to enable the **server**
```bash
npm start
```
6. Open this URL on your browser : `http://localhost:4000`
7. The app finally ran, you can try to interact as a user in this page
8. Try to open admin page : `http://localhost:400/admin`
8. Try to login using provided credentials based on **config/admin.json**
9. Open `MongoDBCompass` to check if the database just updated
* **Note**: try to sign up using any existing accounts, then an error message would be showed up

## 📦 Packages used 

- Express
- EJS 
- Morgan 
- Nodemon
- Sequelize
- Dotenv
- Chalk
- CryptoJS
- Faker

## 🌌 Technologies used 

- [ExpressJS](https://expressjs.com) - NodeJS Framework
- [EJS](https://ejs.co/) - Template Engine
- [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/) - CSS Framework
