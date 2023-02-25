# Skeleton Project for MEAN Stack

## **Things we have covered**
1) Angular 15
2) Express
3) MongoDB
4) Nodejs
5) Ngrx Store
6) Authentication with Cookies

## **Pre-requisite for setup**
1) MongoDB
2) NodeJS
3) Angular CLI

## **Step 1 : Start MongoDB local**
1) Connect to localhost database
    mongodb://localhost:27017/

2) Create database -- <span style="color:green">shopping_cart</span>

## **Step 2 : Start Backend**
1) Open Server folder and run commands

      `npm install`

      `npm start`
  
###  Expected Output
        [nodemon] 2.0.20
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node index.js`
        (node:2636) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.  
        (Use `node --trace-deprecation ...` to show where the warning was created)
        Listening at 3000
        database is connected successfully

## **Step 3: Start Angular**
1) Open angular folder and run commands

    `npm install`

    `ng add @angular/material`
  
    `npm start`

 ### Expected Output
        ✔ Browser application bundle generation complete.

        Initial Chunk Files   | Names         |  Raw Size
        vendor.js             | vendor        |   3.51 MB |
        styles.css, styles.js | styles        | 327.78 kB |
        polyfills.js          | polyfills     | 316.99 kB |
        main.js               | main          |  85.96 kB |
        runtime.js            | runtime       |   6.52 kB |

                            | Initial Total |   4.23 MB

        Build at: 2023-02-25T13:54:58.191Z - Hash: 7c48a7aa9dbf25ab - Time: 12230ms

        ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **  


        √ Compiled successfully.

## **Visit http://localhost:4200/login**

## Further help
To get more help on this project reach out to me : swapniltech0390@gmail.com