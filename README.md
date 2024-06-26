# NC Games Backend



Link to deployed front-end

Link to backend on github




## NC Games in-browser Features
Using the URL above, you can explore the features of the website.

### Homepage

- The link above directs to the `Homepage`, which contains a carousel of 'editor's picks' news articles. The user can click on the articles in the carousel, or can navigate to all articles using the link at the bottom of the page or clicking on the `Articles` tab on the nav bar.

- If a user is logged in, a 'Welcome < user > !' greeting will be displayed alongside the user's profile picture. This defaults to 'Welcome Guest!' if no user is logged in. 

- Users can navigate to the `Homepage` at any time by clicking the 'NC News' logo in the top left of the screen.

### Articles

- Displays articles using a responsive layout, including title, creator data and a snippet of the article body. Users can click on an article card to navigate to a `Single Article`

- Users can filter by topic using the dropdown menu on the right of the screen

### Single Article

- Displays the article body, title, photo and creator data, as well as a comments section. 

- Users can click to give a vote and then click again to remove the vote. This functionality works even if not signed in. 

- Users can comment only if they are signed in. 

### Sign in 

- Error handling to ensure that a valid username has been entered - this can be any username recorded in the database, but `jessjelly` is recommended by the username hint if no valid username has been entered when trying to sign in. 

- Error handling to ensure that a password (any) has been entered. 

- Automatically redirects to `Account Page` and changes the display in the nav bar to match once logged in, showing the user's name and profile picture. 



* View all articles
* View a specific article
* Filter, sort and/or order articles via queries
* View, post and delete comments on articles
* Upvote or downvote an article
* View all users


## Running this project locally

If you would like to run this project locally, follow the guide below:

*Note: The minimum version of Node.js required to run this is `V19.1.0`*

- Firstly, fork and clone this repo onto your local device

- Navigate to the folder and install the npm packages with the following command:

    `npm install`

- Finally, run the project using the following command:

    `npm start`



