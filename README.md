# Storefront Backend Project

## ENV
Values for Postgresql connection in .env
- POSTGRES_HOST
- POSTGRES_DB
- POSTGRES_USER
- POSTGRES_PASSWORD
- POSTGRES_TEST_DB
- ENV  

Other values in .env
- SALT_ROUND for bcrypt
- TOKEN_SECRET for JWT

env example used: 
```angular2html
POSTGRES_HOST=localhost
POSTGRES_DB=dev
POSTGRES_USER=eu
POSTGRES_PASSWORD=123
POSTGRES_TEST_DB=test
ENV=dev

BCRYPT_PASSWORD=my-name-is-enow-2021
SALT_ROUND=10
TOKEN_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.J8BgsyqA3Y6F71NXbfuYIfRVuvRa_qb08RStxrCVhlQ
JWT_SECRET = 5ae8adc9731627905ebf0905dbe4a114ba7d8354ae1796772dfa523a2142761b78d48cbfcd98000bb94fbdbd8147f30de6b3484c3a060d389068204df6a50630
```

Port is 5432 if you don't specify in options in `database.ts`

Create two db in Postgresql
`Create database dev;`
`Create database test;` 

Run migration
`db-migrate up`


## Install packages
`npm install`  

## Test
Change ENV to test in .env file first.    
Then run `npm run test`

## Lint
`npm run lint`

## watch
`npm run watch`

## run dev server: 
`npm run start`

## run prod server:
`npm run prod`