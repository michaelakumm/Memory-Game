# React JS Game

![](/public/Main.png)
![](/public/FinishModal.png)

This is a capstone project for the Web Development with React and Express level of the Full Stack Developer bootcamp I did through [Hyperion Dev](https://www.hyperiondev.com/).

## The assignment

> For this Capstone Project, you will be tasked to create a simple game using React. To be able to successfully do this, you will need to consolidate all the concepts you have learned about React, JSX and JavaScript so far.
>
> Create a React app that allows users to play Minesweeper. Minesweeper is a simple game where a user clicks on tiles to reveal whether there is a “mine” behind the tile or not. If a tile that hides a “mine” is clicked, the user loses and the game is over. If you are not familiar with Minesweeper, try it out [here](https://codepen.io/gaearon/pen/gWWZgR?editors=0010) .
>
> It is not compulsory that you create a Minesweeper game. Feel free to create another game (such as Suduko, Mahong, a memory game etc) of your choice. Tic-tac-toe is not a suitable choice!
>
> Any game that you create should meet the following criteria:
> 1. It should be created using Create React App.
> 2. It should include attractively styled components (at least 4 different types of components) that respond to user interaction. Feel free to use React-Bootstrap or another library and/or your own custom stylesheets.
> 3. A number of components should be rendered using the array.Map() method. Each component rendered in this way should have a key that uniquely identifies it (see Task: React II).
> 4. User interaction should modify the state of some components.
> 5. The state of two or more components should be synced.
> 6. The user should be able to restart the game.
> 7. The user should be clearly informed if they have “won” or “lost” the game.
> 8. The user should easily be able to request “help” that will inform the user about the rules of the game from the UI.
> 9. The UI should be attractive, easy to use and intuitive.
> 10. It should include a file called “readMe.md” which explains the rules of the game. This file should also provide clear instructions that an end user will be able to follow to be able to install and run your app on their local machine.
> 11. Your mentor should be able to launch your app by typing ‘npm start’ from the command line interface.
> 12. The file structure of the project should be well organized in line with guidelines [here](https://reactjs.org/docs/faq-structure.html) .
> 13. Your code should be well documented with appropriate comments. The code should also be easy to read adhering to [Google’s style guide](https://google.github.io/styleguide/jsguide.html) about indentation, meaningful variable and component names etc.

## Demo
View the live demo [here](https://capstone-memory-game.herokuapp.com/).

## Running the Code

1. Clone / Download the project to your computer.
2. Open command prompt / terminal for the project folder.
3. Run `npm install` (This will install the node dependencies).
4. Run `npm start` (Runs the app in the development mode).
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to play

- On the game board, there are always two identical images.
- Start the game by flipping a card.
- Then try to find another card that has the same image as the first.
- If you can't find a pair, the flipped cards will be flipped back with the face down.
- Try to remember these images as it becomes easier to find pairs the longer you play.
- When you find a pair they are removed from the board and when you find all the pairs, you have completed the game.

***
###### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
