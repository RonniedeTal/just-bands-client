# Just Bands

## [See the App!](https://just-bands.netlify.app)

![App Logo](https://ibb.co/jJnNQPC)

## Description

**NOTE -** Describe your project in one/two lines.
#### [Client Repo here](https://github.com/RonniedeTal/just-bands-client)
#### [Server Repo here](https://github.com/RonniedeTal/just-bands-server)

## Technologies & Libraries used

**NOTE -**  HTML, CSS, Javascript, React, axios, React Context, React Bootstrap .

## Backlog Functionalities

**NOTE -** A live interaction with users.
            Add the crew of the bands.
            Payments with credit card.
            Next events of the Bands.

# Client Structure

## User Stories

**NOTE -**  List here all the actions a user can do in the app. Example:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **events list** - As a user I want to see all the events available so that I can choose which ones I want to attend
- **events create** - As a user I want to create an event so that I can invite others to attend

## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| ----------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Login           |                   | public                   | Login        

after signup                                                   |
| `/signup`                 | Signup          |                   | anon only `<IsAnon>`     | Signup form, link to login, navigate to homepage after loggin |
| `/home`                   | Home            |                   | user only `<IsPrivate>`  | Home form, link to signup, navigate to homepage after login  |
| `/profile/:userId`        | Profile         |                   | user only `<IsPrivate>`  | Show the user profile                session             |
| `/new-band`               | form to create  |                   | user only `<IsPrivate>`  | Form to create a band  backlog                                    |
| `/all-bands`              | show all the bands |                | user only `<IsPrivate>`  | Shows all bands on backlog                                    |
| `/games/favourites`       | FavouriteList   | GameCard          | user only `<IsPrivate>`  | Shows all games on backlog                                    |

## Other Components

- Navbar
- Footer

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.verify()

- Backlog Service
  - game.filter(type, status)
  - game.detail(id)
  - game.add(id)
  - game.delete(id)
  - game.update(id)
  
- External API
  - gameApi.details
  - gameApi.list
  
## Context

- auth.context
- theme.context
  
## Links

### Collaborators

[Developer 1 name](www.github-url.com)

[Developer 2 name](www.github-url.com)

### Project

[Repository Link Client](www.your-github-url-here.com)

[Repository Link Server](www.your-github-url-here.com)

[Deploy Link](www.your-deploy-url-here.com)

### Trello

[Link to your trello board](www.your-trello-url-here.com)

### Slides

[Slides Link](www.your-slides-url-here.com)