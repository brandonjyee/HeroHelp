# HeroHelp
![HeroHelp Logo](https://github.com/brandonjyee/HeroHelp/blob/master/client/components/assets/logo.png)

HeroHelp is the modern-day Bat Signal. More specifically, it's a two-sided real-time coordinated mobile app system for incident management. Citizens can call for help and Heroes can respond to dispatches and resolve incidents.

This project was created by four students at Fullstack Academy in Chicago. We had two weeks to put together a Capstone project -- a prototype application incorporating web technologies learned during the prior 10 weeks of the program as well as new technologies we were interested in exploring. We chose to explore integrating websockets with Google Maps and React Native to create a real-time incident management system.

![HeroHelp Demo](https://github.com/brandonjyee/HeroHelp/blob/master/herohelp-demo.gif)
<p align="center">
  <img src="https://github.com/brandonjyee/HeroHelp/blob/master/herohelp-demo.gif?raw=true" alt="HeroHelp Demo"/>
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

HeroHelp was primarily developed for the Apple IPhone 7S. Although react-native works across mobile platforms, it hasn't been tested on other platforms so there may be incompatibilities.

To run the react-native apps, you have a few options:

1.) If you have a Mac, you can run the iPhone simulator
2.) If you have an iPhone, you can run HeroHelp on your phone via Expo

```

```

### Installing

This repo contains multiple projects (i.e. admin, client, server, simulator, etc) that have their own package dependencies. To install, you must navigate into each of these top-level directories and run

```
npm install
```
An explanation of the top-level projects:
* **admin** : contains the admin interface
* **client** : contains the Citizen & Hero React Native apps
* **server** : contains the backend-server
* **simulator**    : contains the simulator. Essentially a node client that simulates the Citizen and Hero clients for helping to test the React Native apps independently

You can find more specific information on each of the projects in the READMEs for each of the projects.

**admin**
This project is a web app that displays information about the running system that would be useful to an operator (Ex: incidents in progress, heatmap of incidents, which hero is assigned to what incident, etc). It's dependent on the server project b/c it uses the server's database code to access the same database.

## Built With

* [React Native](https://github.com/react-community/create-react-native-app) - mobile application front end framework
* [Native Base](https://nativebase.io/) - React Native UI framework
* [Redux](https://redux.js.org/) - front end state management
* [Socket.io](https://socket.io/docs/) - send messages between citizen, hero, and server
* [Google Maps API](https://developers.google.com/maps/documentation/) - front end map interface
* [Expo](https://docs.expo.io/versions/latest/) - complimentary library to React Native
* [Sequelize](http://docs.sequelizejs.com/) - database queries
* [PostgreSQL](https://www.postgresql.org/docs/) - object-relational database management system

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Brandon Yee** - *Developer* - (https://github.com/brandonjyee)
* **Brad Smith** - *Developer* - (https://github.com/bradsmith712)
* **Jeff Hauser** - *Developer* - (https://github.com/jeffhauserchi)
* **Jessica Smith** - *Developer* - (https://github.com/jsmith2890)
* **Jasmine Munoz** - *Advisor* - (https://github.com/jmunoz1992)
* **Fullstack Academy** - *Boilerplate* - (https://github.com/FullstackAcademy)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

## Link to Demo Video
https://www.youtube.com/watch?v=N5SJ75VoWKA&amp=&t=0s&amp=&index=13

