# Weather-Report
[View Live](https://mursalinir.github.io/Weathear-Report/)
## Overview
It is a web application built with VueJS framework. Here I used openweathermap API for collect realtime weather data of any city in the world. Here is a search box to search weather report of any city. Here Also I used conditional background to make the application attractive. For example if the weather is rainy then the background will show a rainy animation. Similarly sunny, cloudy, and snowy animated background changes depend on the weather. For the first time when the app will be load, there you can see two default location's weather "Dhaka" and "Tokyo", you can search for any city by typing the city name in search box.
<br/>
<br/>
## Screenshots from app:
![weather app](https://user-images.githubusercontent.com/7901643/175764374-6611e6dc-5116-49a4-b9c9-96183d6a4582.gif)

## cloud weather:

![cloud](https://user-images.githubusercontent.com/7901643/175646031-7527769d-912a-4830-be95-1c37b4ce2fae.jpg)

## rainy weather:

![rain](https://user-images.githubusercontent.com/7901643/175646089-8e572bc7-7ff1-4295-9eba-107266116f0e.jpg)

## clear weather:

![clear](https://user-images.githubusercontent.com/7901643/175646230-0e84962a-2d0b-49db-99ab-11b265252e9b.jpg)

### API Key
- Create Api Key from [OpenWeatherMap](https://openweathermap.org). 



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Deploy Vue app with GitHub page:
Navigate to gitignore file and remove dist folder from the list:

![step1](https://user-images.githubusercontent.com/7901643/195411918-5329fc33-49bf-4fc6-9525-178bc5010237.png

Create vue.config.js file in the root level of project and paste following code:
```
module.exports = {
  publicPath: '/weather/'
}
```
Create path: /src/router/index.js/ and pase this code:
```
import { createWebHistory, createRouter } from 'vue-router'
import BillPage from '@/views/BillPage.vue'
import Products from '@/views/Products.vue'

const routes = [
	{
		path: '/',
		name: 'products',
		component: Products
	},
    {
        path: '/billPage',
        name: 'BillPage',
        component: BillPage
    }
];

const router = createRouter({
	history: createWebHistory('/Weathear-Report/'),
	routes,
});

export default router;
```
Build production version of the project:

```
npm run build
```

Stage all changes.

Commit all changes

Push dist folder to the gh-pages remote branch on GitHub:
```
git subtree push --prefix dist origin gh-pages
```
Done!
