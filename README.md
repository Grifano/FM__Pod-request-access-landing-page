# Frontend Mentor - Pod request access landing page

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
    - [My Process](#my-process)
      - [Build with](#built-with)
      - [What I learned](#what-i-learned)
      - [Continued Development](#continued-development)
      - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./images/ScreenShot.jpg)

### Links

- Solution URL: [Solution]()
- Live Site URL: [Live](https://grifano.github.io/FM__Pod-request-access-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS/SCSS
- Regular Expressions
- JavaScript
- DOM Manipulation
- Flexbox
- Responsive Web Design

### What I learned

In this challenge I'm playing with DOM. I try to make some practice with DOM manipulation. setTimeout method was help me to make error-message appearing smoothly.

```js
...
const setErrorMsg = (parent, whatEl, msg, className) => {
  // Defining the variable and function
  const newElement = document.createElement(whatEl);
  newElement.innerText = msg;
  newElement.classList.add(className);
  setTimeout(() => {
    newElement.classList.add("show");
  }, 100);

  // Procede...
  if (!form.contains(document.querySelector("small"))) {
    return parent.appendChild(newElement);
  }
};

setErrorMsg(form, "small", "Oops! Please check your email", "error-msg");
...
```

### Continued development

I'm focusing on improving my programming skills with HTML&CSS and JavaScript. My plan is to get comfortable with the basics before I going to dive into the Frontend framework/library like React, Angular, Vue, etc.
I hope that such amzing tools like [Frontend Mentor](https://www.frontendmentor.io/), [freeCodeCamp](https://www.freecodecamp.org/learn), and [Uxcel](https://uxcel.com?invite=EE4PBID94EEH) help me with my this.

### Useful resources

[Frontend Mentor](https://www.frontendmentor.io/) - Get a challenge and try to make them as close to a mockup as you can.  
[Uxcel](https://uxcel.com?invite=EE4PBID94EEH) - improv UX/UI Design skills, by reading the article and check your new knowledge by passing a quiz.  
[freeCodeCamp](https://www.freecodecamp.org/learn) - Free learning platform for learning programing, as Frontend, Backend, Web technology, and more.

## Author

- Website - [Serhii "Gr[i]fano" Orlenko"](https://grifano.webflow.io/)
- Frontend Mentor - [@Grifano](https://www.frontendmentor.io/profile/Grifano)
- Twitter - [@Grifano](https://twitter.com/OrlenkoSerhii)
- LinkedIn - [@Grifano](https://www.linkedin.com/in/serhii-orlenko-44aaa4a3/)

<!-- ## Acknowledgments -->
