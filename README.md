# Fantasy Fitness

This project is an experimental web app that will one day be used to organize fantasy fitness leagues.


### Prerequisites

Git: [http://git-scm.com/](http://git-scm.com/)

node.js: [http://nodejs.org/](http://nodejs.org/).

### Clone Fantasy Fitness

Clone this repo using git:

```
git clone https://github.com/thevoiceofzeke/fantasy-fitness.git
cd fantasy-fitness
```

### Run the Application

Use `npm start` to runt he application, then browse to: `http://localhost:8000/app/index.html`.

## Testing

This application contains both Unit tests and End to End tests.

### Running Unit Tests

Run `npm test` to run unit tests.

Unit tests are written in [Jasmine][jasmine], which run with the [Karma Test Runner][karma]. See the Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

Running `npm start` will automatically run end to end tests.

End to end tests are written in [Jasmine][jasmine]. These tests are run with [Protractor][protractor].

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Install the web driver with `npm run update-webdriver`.

Use `npm run protractor` to run only the end to end tests (without starting the web server).

## Running the App during Development

This project comes preconfigured with a local [http-server][http-server]. 
You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.
