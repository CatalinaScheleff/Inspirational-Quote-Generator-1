# ✨ Inspirational Quote Generator ✨

# AWS:

Cloud computing plataform offerd by Amazon.com
Provides cloud services like computing, storage, databases, analytics, security, etc. This services are offered through data centers around the world, and allows businesses and developers to use remote and scalable computing resourses.

Instalation:
npm install -g @aws-amplify/cli
amplify configure
Create an acount Amplify AWS
region: sa-south-1
create an IAM user

AWS Lambda: Serverless computing service that allows you to run code without provisioning and managing servers in response to events.
Used to build and deploy microservices that respond to API requests, processinng data stored in various AWS services like S3 ( Simple Storage Service ), automate tasks like rezising images when uploaded to S3 or cleaning up old data, process and analyze files as soonn as they are uploaded to S3.

AWS IAM (Identity and Access Management): Coontrol access to AWS services and resources. Manage users, groups, roles and permissions within AWS account.

Server: Is a computer or software system that provides services, resourses and functionality to other computers or programs called clients.

AWS Amplify: Development framework and set of tools to simplify the process of building full-stack web and mobile applications.

## AWS Amplify acts as a bridge between development and AWS services, making it easier to build and deploy cloud-powered applications. It can be used to configure and deploy AWS Lambda functions as part of your backend, and it simplifies the integration of AWS IAM for secure authentication and authorization. When using these services together, developers can create robust, scalable, and secure applications with less manual configuration and coding.

amplify init

I didn't had the permission to amplify:CreateApp. And in IAM Management Console did'nt apear the perrmissionn as well. So I created the permission.

Install Amplify libraries:
npm install aws-amplify @aws-amplify/ui-react

Add this imports to \_app.tsx file:
// AWS imports
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

Cloud infrastructure:

AWS AppSync GraphQL:

amplify add api

Select from one of the below mentioned services: GraphQL
? Here is the GraphQL API that we will create. Select a setting to edit or continue Authorization modes: API key (default, expiration time: 7 days
from now)
? Choose the default authorization type for the API IAM
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API
? Here is the GraphQL API that we will create. Select a setting to edit or continue Continue
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)
✔ Do you want to edit the schema now? (Y/n) · yes
Could not find selected code editor (Visual Studio Code) on your machine.
? Try opening with system-default editor instead? No
✅ Successfully added resource inspirationalquote locally

In backend/api/schema.graphql desactivate this:
input AMPLIFY { globalAuthRule: AuthRule = { allow: public } } # FOR TESTING ONLY!

configure schema

Amazon Cognito

-

In this epic build, we're going to create a completely serverless quote generator using AWS as our cloud back-end and NextJS/TypeScript as our front-end.

The most epic part is...we're going to be generating images in a server without any expensive software or hardware.

What you'll learn in this build is how to:

👨‍💻 Build a ~cool~ front-end for a quote generator

💡 Write a script to fetch a random inspirational quote from ZenQuotes' API

🌩 Use AWS to generate a quote graphic for you in the cloud & then let you download the file

🔥 Deploy live

This build combines ZenQuotes' amazing API for fetching quotes, AWS Amplify for framework deployment and hosting, NextJS and Typescript for our front-end, styled-components to handle our styling, and some spicy backend scripting 🌶

# Getting Started

**IMPORTANT:** Without the AWS backend configured, you will probably see an error like this if you try to run the app as-is: `Module not found: Can't resolve '../src/aws-exports'` Please check out the [full tutorial on freeCodeCamp here](https://www.youtube.com/watch?v=FRmCxj9K7II) or scroll to the below section titled: "Instructions for Building the Project from Scratch" to get started building the project.

First, install the project dependencies from the root of the project:

```bash
npm i
# or
npm install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Instructions for Building the Project from Scratch

The front-end development, which includes components, pages, framework setup, and styles, can be replicated with the code in this codebase.

The back-end development and deployment to AWS is intended to be built from scratch following the steps. It is imperative to build the project from start to finish so that you do not miss any of the requisite configuration steps.

⌨️ [0:00:00]() 📱 Intro + Demo of App

⌨️ [0:07:17]() 📂 Set up your GitHub Repository

⌨️ [0:10:53]() 💻 Create a new Next.js + Styled Components project

⌨️ [0:26:37]() 🅰️ Add Google Fonts to the App

⌨️ [0:30:22]() 🎑 Create a Dynamic Background

⌨️ [0:53:02]() 📑 Create a Footer for our Database Data

⌨️ [1:04:16]() 🚪 Create a Pop-Up with Material-UI Modal + Hype4Academy Glassomorphism

⌨️ [1:23:26]() 🖼️ Write a Node.js Script to Generate Images in CodeSandbox

⌨️ [1:36:23]() 📡 Use Node.js' fetch Function to Call ZenQuotes' API to Generate Images

⌨️ [2:04:33]() ⚙️ Use the AWS Amplify CLI to Initialize the Project

⌨️ [2:12:01]() 🔄 Configure the App to Communicate with AWS Amplify

⌨️ [2:16:31]() 🌐 Create a GraphQL API with AWS AppSync

⌨️ [2:26:12]() 🔒 Add Authentication with Amazon Cognito and IAM

⌨️ [2:30:08]() 🌩️ Add an AWS Lambda function to the AWS services stack

⌨️ [2:32:08]() ☁️ Deploy our initial AWS CloudFormation stack to the cloud

⌨️ [2:38:00]() 🛡️ Add Auth Directives to the GraphQL API

⌨️ [2:41:09]() 📝 Write NoSQL Data to Amazon DynamoDB

⌨️ [2:44:34]() ⏰ Write a Node.js Script to Generate AWSDateTime in CodeSandbox

⌨️ [2:51:45]() 🔎 Query Amazon DynamoDB Data with AWS AppSync

⌨️ [3:11:48]() 💬 Create the Quote Generator Pop-Up Modal with useState Hooks

⌨️ [3:35:15]() ⏳ Create Loading States for when the API calls AWS Lambda

⌨️ [4:02:26]() 🌠 Create a Button with a Lottie Image

⌨️ [4:11:21]() 📥 Write a Function to Download Images to your Device

⌨️ [4:15:22]() 🔁 Write a useEffect Hook with Buffer to Decode Base64 Image Strings

⌨️ [4:21:18]() 🧪 Test a Mock API Response with a Base64 Encoded String

⌨️ [4:33:49]() 🔄 Deploy the Node.js Script to AWS Lambda with Access to Amazon DynamoDB

⌨️ [5:05:45]() 🧪 Test the AWS Lambda Function & Debug with Amazon CloudWatch Logs

⌨️ [5:08:13]() 🛠️ Modify Installation Script for Sharp to Work Inside of AWS Lambda

⌨️ [5:20:05]() 📜 Write a Function to Retrieve Quotes via AWS Lambda, AWS AppSync, and IAM

⌨️ [5:39:18]() 🖥️ Add App Hosting with a CI/CD Pipeline using AWS Amplify & GitHub

⌨️ [5:52:47]() 🐞 Debug the CI/CD Pipeline by Modifying the AWS Amplify Build Settings

⌨️ [6:02:47]() 🚀 Celebrate the Final Build!

⌨️ [6:04:44]() 🎉 Project Wrap Up

# Instructions for Deploying to AWS (Hosting)

To add hosting to your project, you will want to run `amplify add hosting` and then follow the instructions including:

- Amplify Managed Hosting (not S3/CloudFront)
- Git-Based deployments with CI/CD
- Creating a `prod` branch of your code in GitHub and hooking that into the Amplify CI/CD pipeline.

The Lambda script requires a special method for 1.) running in the cloud; and 2.) being built for public deployment on a website.

Because of this, we will need to make a specific update to the Lambda script's `package.json` file so that it compiles correctly.

Next, we will need to edit the `amplify.yml` file to change the build settings of the project in the AWS Amplify Build Settings console:

## **PART 1:** Lambda Script Update:

### BEFORE UPDATE:

```json
{
  "name": "inspirationalquotelambda",
  "author": "Tech Stack Playbook™️ ",
  "version": "2.0.0",
  "description": "Lambda function generated by Amplify",
  "main": "index.js",
  "license": "Apache-2.0",
  "devDependencies": {
    "@types/aws-lambda": "^8.10.92"
  },
  "dependencies": {
    "@types/node": "^18.13.0",
    "node-fetch": "^2.6.9",
    "path": "^0.12.7",
    "sharp": "^0.31.3"
  }
}
```

### ✅ AFTER UPDATE:

```json
{
  "name": "inspoquotelambda",
  "author": "Tech Stack Playbook™️ ",
  "version": "2.0.0",
  "description": "Lambda function generated by Amplify",
  "main": "index.js",
  "scripts": {
    "install:sharp": "npm i --arch=x64 --platform=linux sharp"
  },
  "license": "Apache-2.0",
  "devDependencies": {
    "@types/aws-lambda": "^8.10.92"
  },
  "dependencies": {
    "@types/node": "^20.1.0",
    "node-fetch": "^2.6.8",
    "path": "^0.12.7",
    "sharp": "^0.32.1"
  }
}
```

## **PART 2:** `amplify.yml` AWS Amplify Build Settings Update:

To find this page, go to the AWS Amplify app for your project in the AWS Management Console, then go to `App settings`, and then `Build settings`. On this page, you will see an editor with a title `App build specification`, to which you will edit the file with the following:

### BEFORE UPDATE:

```yml
version: 1
backend:
  phases:
    build:
      commands:
        - "# Execute Amplify CLI with the helper script"
        - amplifyPush --simple
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - "**/*"
  cache:
    paths:
      - node_modules/**/*
```

### ✅ AFTER UPDATE:

```yml
version: 1
backend:
  phases:
    build:
      commands:
        - npm run install:sharp --prefix ./amplify/backend/function/inspoquoteLambda/src
        - "# Execute Amplify CLI with the helper script"
        - amplifyPush --simple
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - "**/*"
  cache:
    paths:
      - node_modules/**/*
```
