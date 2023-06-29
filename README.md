# R&M API Fetching.

This project is a React-based application that fetches data from the Rick and Morty API. It leverages the power of HTML5, CSS, and JavaScript, with a focus on modern ES6+ syntax. The project utilizes Vite as the build tool to enhance development speed and efficiency.

By utilizing npm as the package manager, you can easily manage project dependencies and install additional libraries or frameworks as needed. The project integrates with the Rick and Morty API to retrieve information about characters, episodes, and locations from the popular animated TV show.

## Table of Contents

- [Technologies](#technologies)
- [API Reference](#api-reference)
- [Style Guide](#style-guide)
- [Contributing](#contributing)
- [License](#license)


## Technologies

The project utilizes the following technologies:

<p align="center">
  
<img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="HTML Logo" height="80" style="vertical-align:top; margin:14px">
  
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS Logo" height="80" style="vertical-align:top; margin:14px">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" alt="Sass Logo" height="80" style="vertical-align:top; margin:14px">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JS Logo" height="80" style="vertical-align:top; margin:14px">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="ReactJS Logo" height="80" style="vertical-align:top; margin:14px">

<img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" height="80" style="vertical-align:top; margin:14px">

<img src="https://ps.w.org/custom-wp-rest-api/assets/icon-128x128.png?rev=1975404" alt="RestAPI Logo" height="80" style="vertical-align:top; margin:14px">

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" alt="NPM Logo" height="80" width="140" style="vertical-align:top; margin:14px">

<img src="https://es.vitejs.dev/logo-with-shadow.png" alt="Vite Logo" height="80" style="vertical-align:top; margin:14px">

<p/>



## API Reference

This project fetches data from the [Rick and Morty API](https://rickandmortyapi.com/). The API provides information about characters, episodes, and locations from the show. 

#### Get all items

```http
  GET url/api/character
```
This will retrieve the characters for a single page, one of the features of the web app its that always the page its refreshed will load a random page of characters of the API giving always diferent characters.


## Style Guide

The following color variables are used in the project's SCSS styles:

| Variable             | Color                               |
|----------------------|-------------------------------------|
| primaryGreen   | ![Primary Green](https://via.placeholder.com/15/3D8548/000000?text=+) hsl(113, 51%, 52%)      |
| primaryOrange  | ![Primary Orange](https://via.placeholder.com/15/FF8300/000000?text=+) hsl(36, 100%, 47%)     |
| darkenOrange   | ![Darken Orange](https://via.placeholder.com/15/FF6E00/000000?text=+) hsl(36, 100%, 37%)      |
| spaceBlack     | ![Space Black](https://via.placeholder.com/15/231F20/000000?text=+) hsl(0, 0%, 14%)         |
| spaceGray      | ![Space Gray](https://via.placeholder.com/15/C5C8C6/000000?text=+) hsl(240deg 2.38% 83.53%) |
| cosmicWhite    | ![Cosmic White](https://via.placeholder.com/15/F2F2F2/000000?text=+) hsl(0, 

## License

This project is licensed under the [MIT License](LICENSE).
