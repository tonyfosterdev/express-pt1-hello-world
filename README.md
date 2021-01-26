# Express-Hello-World

A basic example of Express.js.

## Getting Started

1. Clone the repository
  ``` bash
  # if you use SSH
  ~$ git clone git@github.com:tonyfosterdev/express-pt1-hello-world.git
  ```
  ``` bash
  # if you use HTTPS
  ~$ git clone https://github.com/tonyfosterdev/express-pt1-hello-world.git
  ```
1. Navigate to application folder and install npm dependencies
  ```
  ~$ cd express-pt1-hello-world
  ~/express-pt1-hello-world$ npm install
  ```
1. Start the application
  ```
  ~/express-pt1-hello-world$ npm run start
  ```
1. Optionally, build and run in a docker container
  ```
  ~/express-pt1-hello-world$ docker build -t <docker-user-name>/express-pt1-hello-world .
  ~/express-pt1-hello-world$ docker run -p 3000:3000 -d <docker-user-name>/express-pt1-hello-world
  ```
## Demonstrate

When the application is running, navigate to `http://localhost:3000` in a browser.
