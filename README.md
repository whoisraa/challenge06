# 🌾 Binar Challenge 6 Submission 

## 📋 Prequisites
### You'll need these programs installed on your computer
- [Git](https://git-scm.com/downloads) - Version Control
- [NodeJS](https://nodejs.org/en/download/) - Back-end JavaScript Runtime Environment
- [NPM](https://www.npmjs.com/) - Node Package Manager (usually comes with NodeJS)
- [PostgreSQL](https://www.postgresql.org/download/) - SQL Database

## 🚀 Follow these steps to run the app

1. Clone the repository 
```bash
git clone https://github.com/whoisraa/challenge06.git
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
5. Check the database configuration on **config/config.json**, and then run this command
```bash
sequelize db:create
```
6. Run this command to migrate the tables based on **models** and **migrations** directory files
```bash
sequelize db:migrate
```
7. Run this command to seed all the tables based on **seeders** directory files
```bash
sequelize db:seed:all
```
8. Refresh and check **PostgreSQL** database if it successfully made a change
9. Run this command to enable the **server**
```bash
npm start
```

### Interact as a user

10. Open this URL on your browser : `http://localhost:4000`
11. Try to sign up at `http://localhost:4000/register`
* **Note**: if you tried to sign up using existing account, an error message would be shown up
12. Try to log in at `http://localhost:4000/login`
* **Note**: you will be redirected to **homepage**. Here you can also click to enter the profile page or even to log out
13. Try to play the game with or without logging in first. Then see the difference

### Interact as an administrator

14. Try to open admin page : `http://localhost:4000/admin`
* **Note**: you will see an **Admin Portal** page
15. Try to login by using provided credentials based on **config/admin.json**
* **Note**: you will be provided a dashboard page immediately after you log in
16. You will also see the tables of the database on the dashboard page
17. On **user_game** section, try to add, edit, and delete the users
* **Note**: after you add, edit, or delete the user, you will be redirected to **Admin Portal** page (you need to log in again to see the changes)
18. Refresh and check **PostgreSQL** database again whether it successfully made a change or not yet

## 📦 Packages used 

- Express
- EJS 
- Morgan 
- Nodemon
- pg
- Sequelize
- Dotenv
- Chalk
- CryptoJS
- Faker

## 🌌 Technologies used 

- [ExpressJS](https://expressjs.com) - NodeJS Framework
- [EJS](https://ejs.co/) - Template Engine
- [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/) - CSS Framework
- [PostgreSQL](https://www.postgresql.org/download/) - SQL Database
