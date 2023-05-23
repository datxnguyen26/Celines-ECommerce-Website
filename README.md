<!-- PROJECT LOGO -->
<br />
<h1>CELINE'S DESSERTS</h1>
<div align="center">
    <img src="images/celine2.png" alt="Logo" width="1340" height="600" />
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
<p>
The page is being deployed on <a href="https://celines-e-commerce-website.vercel.app/" target='_blank'>Vercel</a></p>

### Built With

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<br />
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
<br />
<img src="images/sanity.io.png" alt="Sanity logo" width="90" height="28"/>
<br />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" width="95" height="28" />

<!-- GETTING STARTED -->
## Getting Started

You can either view this app using the deployment link or the follow the steps below to run it in your local environment.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install --legacy-peer-deps
   ```
3. Change the baseUrl in /client/src/api/index.js from Heroku to your localhost port for the backend
   ```js
   const API = axios.create({ baseURL: 'http://localhost:YOUR-PORT-NUMBER' });
   ```
4. Change the script of /server/package.json
   ```js
   "scripts": {
       "start": "nodemon index.js"
   }
   ```   
5. Run the back end server
   ```sh
   npm start
   ```
6. Run the front end page
   ```sh
   npm start
   ```
<!-- USAGE EXAMPLES -->
## Usage
To start using the social media page, you can fill in the form to the left with all the information and hit submit. The user can delete, like a post and edit a post that they recently published.
