# charles-aluminium-website

## Website Url (Vercel):
https://www.charlesaluminium.com/

## Technologies Used
[![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB)
[![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](https://vercel.com)
[![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-%23FF9900.svg?logo=Amazon%20AWS&logoColor=white)](https://aws.amazon.com/amplify/)

## Deploying the Website locally with local host
- Run 'yarn install' or 'npm install' - To Install all dependencies
- Run 'yarn start' - To run the app locally on local host

## AWS Amplify
### Configuration
- search for ~/.aws/credentials - To view all AWS profile credentials present locally on your Pc
- search for ~/.aws/config - To view all AWS profile config present locally on your Pc
- Run 'amplify configure' - To configure amplify on the react app with an existing AWS profile present locally on your Pc

### Initialization
Run 'amplify init' - To initialize a new AWS Amplify project by setting up the necessary configuration files and linking your local environment to the Amplify backend

### Build
Run 'amplify build' - To create the project build

### Deployment
Run 'amplify publish' - To deploy the project on amplify

## Quick Fix Option on JavaScript
Consider adding the jsconfig.json file for useful quick fixes
