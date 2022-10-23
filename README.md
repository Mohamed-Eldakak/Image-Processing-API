# Image-Processing-API
## Requirements
Dependecies used :
#### 1. TypeScript
`npm install typescript --save-dev ts-node`

#### 2. express and type express
```
npm i  express
npm i -D @types/express
```

#### 3. nodemon
`npm i -D nodemon`

#### 4. jasmine
`npm install jasmine-spec-reporter jasmine`

#### 5. eslint
`npx eslint --init`

#### 6. prettier 
`npm install --save-dev prettier`

#### 7. set up prettier and eslint
`npm install --save-dev eslint-config-prettier eslint-plugin-prettier`

#### 8. SuperTest with type definition
`npm i  supertest @types/supertest`

#### 9. sharp and types
`npm i  sharp @types/sharp`

## Documentations
### Dependecies
1. [TypeScript](https://www.typescriptlang.org/docs/)
2. [Node.JS](https://nodejs.org/dist/latest-v16.x/docs/api/)
3. [Express](https://expressjs.com/)
4. [fs-extra](https://www.npmjs.com/package/fs-extra)
5. [Sharp](https://www.npmjs.com/package/sharp)

### Fixing and Formatting Code

1. [ESLint](https://eslint.org/docs/user-guide/getting-started)
2. [Prettier](https://prettier.io/docs/en/index.html)

### Unit testing

1. [Jasmine](https://jasmine.github.io/)
2. [supertest](https://www.npmjs.com/package/supertest)

## Endpoints

1. Homepage Endpoint
   `http://localhost:3000/`

2. API main Endpoint
   `/api`
   
3. Resizing Endpoint
   `/api/imageResize?name={image-name}&width=<image-width>&height=<image-height>`

## Setting Up The Project

1. Install all dependencies
   `npm install`

2. Build the project from TypeScript to JavaScript
   `npm run build`

3. Start the Server
   `npm start`

4. Run the Tests
   `npm run test`

5. Run Prettier and ESLint
   `npm run prettier`
   `npm run lint`



