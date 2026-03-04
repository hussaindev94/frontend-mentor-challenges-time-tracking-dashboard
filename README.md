# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./images/screenshot.svg)


### Links

- Solution URL: [Solution URL](https://github.com/hussaindev94/frontend-mentor-challenges-time-tracking-dashboard)
- Live Site URL: [Live site URL](https://hussaindev94.github.io/frontend-mentor-challenges-time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
I learned the following:
1. Take the differences between the layouts into considerations from the begining.
    * Why is that important?
        * Because this will make the styling process much more easer.
```html
<section class="all-cards-wrapper">
    <section class="three-cards-wrapper">
        <section class="card1"></section>
        <section class="card2"></section>
        <section class="card2"></section>
    </section>
</section>
```
* The first section will be used to control the layout styles for the desktop design.
* The second section will be used to control the layout styles for the tablet design.
* In the mobile layout style we will give them the same styles to behaive as one container. Then deal with the sections of the cards.

### Useful resources

- [Resource 1](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises) - This helped me in understanding how to use promises.
- [Resource 2](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests) - This is an amazing article which helped me in how the network is working.
- [Resource 3](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON) - This resource helped me in understanding how to utilize JSON in JS projects.
- [Resource 4](https://www.digitalocean.com/community/tutorials/js-filter-array-method) - This resource discusses how to use filter method to to filter the results coming back from the promises.
- [Resource 5](https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes) - This resource will teach you how to use the html data attribute to control html element using JS.
- [Resource 6](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting) - This resource go through DOM scripting, manipulation, and updating.
## Author

- Website - [Hussain Al-shaer](https://hussaindev94.github.io/Portfolio/)
- Frontend Mentor - [@hussaindev94](https://www.frontendmentor.io/profile/hussaindev94)
- Twitter - [@hussaindev94](https://www.twitter.com/hussaindev94)
