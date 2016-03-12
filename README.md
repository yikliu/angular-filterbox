# angular-filterbox

 A list of select controls in which the options of next select depend on the selected item on the previous one.

## Getting Started

Clone the repository using git clone:

```
git clone https://github.com/yikliu/angular-fliterbox.git
cd angular-filterbox
```

or unzip the package to local directory. 

### Install Dependencies

```
npm install
```


## Run the Application


```
npm start
```

Now browse to the app at `http://localhost:3000/`.


## Testing

Unit Testing uses Karma and Jasmine. 

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `xxx.test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

## Serving the Application Files

Chrome has strict cross-domain restriction and may not support accessing angular files via file:/// protocol. Try using Safari to access the index.html page if you don't want to use node or other servers to host the files. 

## Licence
MIT