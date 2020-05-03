# Node TypeScript Boilerplate

## Description:

This boilerplate is intended to be used to create new projects for node.

## Rationale

The boiler plate includes route handling, error handling, rate limiter with redis and also logging.

## Project Structure

This boilerplate shows how routes are handled with a router and also handlers. It is advisable to use the asyncHandler from express-async-handler. I show this at errorTest.ts in the router. Try using route GET /six with and without the asyncHandler. Without it the program will stop cause the unhandled rejection. With asyncHandler at least it will throw an error but the app will not stall.

Needless to mention that the above should never happen if all the exceptions are caught appropriately in the program as shown for routes one to five and seven.

The app also uses an instance of Winston to log the messages. Feel free to modify it according to your needs, for example, you might send all the errors to a queue instead of a file. Or to send it to an APM manager. It is up to you. I think that the wrapper used there should be implemented to make sure all the messages share the same format though.

There is also a rate limiter in place. To use it make sure you have a redis server up and running. Please create a .env file following the .example.env. There is also a .env checker in utils to make sure all the .env vars are available and also exports them to be used anywhere.

Not sure if I am missing anything, I will keep updating this

## To be done

Next I am planning to add docker to this boiler plate. Perhaps some connnections to different DBs as well . And of course some testing with Jest.

## Help

If you have any suggestions please feel free to contact me at oscar.computer.guy@gmail.com or by a MR.

## Run it

Clone it, npm install and then npm run start:dev
