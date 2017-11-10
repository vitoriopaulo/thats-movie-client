![Capstone Project](https://78.media.tumblr.com/d1ef6fab3df0dcf5b83ed5b51a1d68b7/tumblr_oz3ntwtJez1wvd0d5o1_1280.png)

## **Introduction:**
This is the Capstone full-stack (front-end and back-end) project developed in
the scope of the program of the WDI (Web Development Immersive) 020 Fall
class Boston.

The web-application was designed as a SPA (Single page application) with basic
user authentication features: sign up, sign in, sign out, change password;
that interacts with a custom built API.

## **Technologies:**

Technologies used to build the front-end of the application:
HTML5, CSS3, JAVASCRIPT, jQuery, AJAX, GIT, GITHUB, BASH.

## **Concept:**
A web-based application inspired in the universe of the cinema.
In it's first version, the app was thought as a place where registered users
could build and manipulate their own list of movies (data) by communicating to
a SQL database from the UI performing CRUD (create, read, update, and delete)
actions.

## **UI | UX and related matters:**
Issues related to UI|UX, Information of Architecture and Usability: the web
application was designed to be as elegant, functional and aesthetically
pleasant to the eyes as possible. An interface to make the user navigates
through it with easy and be motivated to come back by the quality of
it's visual design and easy of usage.

The navigation occurs in two levels: the home-page, where the user do the
Sign Up and Sign In; and the second level of navigation, where the user
has access to all CRUD functionalities related to the interaction with a SQL
database and is also able to change the password and do the sign out.

## **Wireframe & User Stories:**
The following images displays the skecthed wireframe and user stories of the
front-end of the web application:
* ![Wireframe](https://78.media.tumblr.com/fad7cd899023dc6fb509b8abbc9b1fd2/tumblr_oz06jhxWcV1wvd0d5o1_1280.jpg)
* ![User Stories](https://78.media.tumblr.com/6540caadfed3306971044721eda18b6d/tumblr_oz06mbaPsp1wvd0d5o1_1280.jpg)

## **Planning Process and Problem Solving Strategy:**
Firstly, I elected some ideas of apps that could be a good fit for my Capstone project. Among the options, 
I realized the one I would be most excited to develop would be a database management system for movies, because 
I am a cinema lover. Decided the theme of the capstone, it was time to think on how to implement the idea. 
Considering the wide broad of technologies practiced throughout the cohort, it was time to decide with which 
technologies I would feel more confortable to develop both the front-end and back-end of my web app. Elected the
technologies, it was time to start sketching the interface of the app, writing the user stories and sketching also
the ERD. 

Something really interesting to be said regarding an example of problem solving through the process of 
development of the app relates to the images of the posters of the movies rendered in the client: ruby doesn't accepts 
images as values for its attributes. Images, regadless of it's extensions are not accepted as value in ruby. And once
Cinema relates a lot with visualities, I really would like to have the images of the posters of the movies rendered in the UI.
Thinking creatively, I was able to problem solve the matter: I realize that urls are strings, which are values accepted 
by ruby. As such, I settled to ruby the entity poster the value string, so we could use urls of the images as endpoints 
and render them in the client, and it worked.

## **Routes (paths and methods) of the api:**


## **Github Repository of the server-side of the Web App:**
The server-side of the web application is also hosted in Github:
https://github.com/vitoriopaulo/thats-movie-server

## **Depoyed Urls of the Full-stack Web App:**
Bellow follows the deployed urls of both front-end and back-end of the
full-stack web application:
https://vitoriopaulo.github.io/thats-movie-client/
https://thats-movie.herokuapp.com/

## **Further developments:** 
Make the application cross-device mobile responsive.

By: Vitorio Paulo :: Made with much love for General Assembly.
Boston, MA. USA. WDI 020 Fall Class 2017.
