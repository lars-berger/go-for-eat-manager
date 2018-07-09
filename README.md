
![manager-gif](src/assets/kapture-manager2.gif)
## Getting Started

To get up and running clone this repo to your machine.
Run the following commands in terminal, in the project folder:

- `git clone https://github.com/lars-berger/go-for-eat-manager`
- `cd go-for-eat-manager`
- `npm install`
- `npm run start`

Your frontend app is now running with webpack server and hot reloading when you edit the code

### REST API Server:

Get it from [Go 4 Eat Server](https://github.com/papplo/go-for-eat-server), clone the repo and follow instructions to create your own .env variables.
The most important is the MONGOLAB_URI, that tells the server where your db resides.

Now run your server as described in the instructions. The frontend expects to connect to port 5000 (can be changed in the apiMiddleware.js).

## Contributors

- [Lars Berger](https://github.com/lars-berger)
- [Xavi Guasch](https://github.com/xaviguasch)
- [Pablo Anttila](https://github.com/papplo)
