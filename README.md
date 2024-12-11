# Web Crawler Application

A simple web application to crawl product data from Amazon, built with ReactJS for the frontend and Node.js with Cheerio for the backend. The app extracts product details including product name, price, source URL, and date collected, and displays them in an organized UI.

DEMO LINK: https://crawl-data-cheerio.vercel.app/

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Version Requirements](#version-requirements)
- [Environment Variables](#environment-variables)
- [Installation and Running the Application](#installation-and-running-the-application)
- [Client](#run-client)
- [Server](#run-server)
- [Database Setup](#database-setup)
- [Deployment](#deployment)
- [Deploying the Application](#deploying-the-application)
- [Connecting Frontend and Backend](#connecting-frontend-and-backend)
- [Testing and Updates](#testing-and-updating)
- [Contact Information](#contact-information)

## TECH STACK

- **Frontend**: ReactJS
- **Backend**: Node.js, Express.js, Cheerio
- **Database**: MongoDB

## FEATURES

- **Product Data Crawling**: Uses Cheerio to parse HTML and collect data from Amazon product pages.
- **Data Display**: The user interface is built with ReactJS, displaying product information including name, price, source URL, and date collected.
- **Simple Interface**: Designed with a simple, user-friendly interface to easily track product information.

## VERSION REQUIREMENTS

- **Node.js**: v16.14.0
- **MongoDB**: v4.4.2
- **Git**: Version 2.41.0.windows.1

## ENVIRONMENT VARIABLES

Create a `.env` file in the root of your server directory with the following variables:

MONGODB_URL=<your-mongodb-url>
PORT=<your-server-port>

## INSTALLATION AND RUNNING THE APPLICATION

Clone the repository and follow the instructions below to set up the project:

### RUN Client

cd frontend
npm install
npm start

### RUN Server

cd backend
npm install
npm start

## DATABASE SETUP

Use MongoDB Atlas for managing your database. You can restore the provided example database using the following command:
mongorestore --db <database_name> dump/crawldata
Replace `<database_name>` with your desired database name.

## DEPLOYMENT

### MongoDB Atlas Setup

- **Create an Account**: Sign up on MongoDB Atlas and create a new project.
- **Create a Cluster**: Configure your cluster and obtain the connection string.
- **Set Up Collections**: Import your database or create collections manually.

## DEPLOYING THE APPLICATION

- **Push Code to GitHub**: Ensure your client and server code is hosted on GitHub.
- **Deploy Backend**: Use platforms like Render to deploy your backend.
- **Deploy Frontend**: Use Vercel for deploying the frontend.

## CONNECTING FRONTEND AND BACKEND

Update your environment variables to point the frontend to the deployed backend API.
Ensure both frontend and backend URLs are correctly set in the deployment settings.

## TESTING AND UPDATING

Regularly test the application by navigating to the deployed frontend URL.
For updates, push changes to the respective GitHub repositories, which will trigger redeployment.

## CONTACT INFORMATION

- **Name**: Nguyễn Minh Trí
- **Email**: minhtri240301@gmail.com
