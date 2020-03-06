# MyReads Project

A simple catalog app usefull for organizing books in different bookshelves. 
The app has also a search which you can access with the bottom right green button or by visiting /search path. 
The 

## Installation
You can clone from https://github.com/migkapa/reactnd-myreads.git `git clone https://github.com/migkapa/reactnd-myreads.git` 
or download the repository. 
Change the directory to the repo folder.

To get started developing right away:

* install all project dependencies with `npm install` or `yarn`
* start the development server with `npm start` or `yarn start`
* you should be able to view the app at `http://localhost:3000`


## Using the App
To change a book's shelve select the right shelve in the dropdown button on each book. 
To add a new book from the search you can access with the bottom right green button or by visiting /search path. 
Find the right book and add it to prefered shelf from the dropdown button.


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is for learning purposes so most likely I will not accept pull requests.
