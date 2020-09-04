# Welcome to HANGMAN

Come play! <https://www.hangmantwosix.com>

I wanted to create a game of hangman that was functionally sound and visually pleasing. 

When starting a new game the application generates a new hidden word. The letters of that word are then guessed by the user. If the image of the hangman is shown before the letter is guessed then the user loses and vise versa. 

The logic for the game is handled in plain **JavaScript**. There are no dependencies required to run the game. Moreover, the application's functionality is a reflection of my love for both Object Oriented Programming and Functional Programming. It relies on instances of methods, classes, and parameters to execute either a *win* or *loss* state. 

Dynamically rendering the state of the game at any given moment is done by creating and evaluating instances of the word as new data types and objects. Most of the work is done through some variation of a *search algorithm*. The goal is to find items at a given index or key:value pairing and produce an action based on the resulting evaluation. 

The visual component of the application is done through **HTML5** and **CSS3**. It’s responsiveness to variating viewports, including mobile, is handled by *Flexible Box* layout mode in CSS3. This ensures visual consistency for the typography and design principles used in the application. 


# Table of Contents 
 
- <a href="#demo">Demo</a>
- <a href="#userst">User Stories</a>
- <a href="#stack">Stack</a>


# Demo

<p align= "center" id= "demo" > 
   <img src=https://i.gyazo.com/e6fed98d5dc4f3d3af0a63bce4a84598.gif width='100%'>
</p>

# User Stories 
<p id="userst"></p>

- As a player I want to see when I win or I lose 
- As a player I want to know how many letters are in the word I am uncovering
- As a player I want to know how many guesses I have left 
- As a player I want to see when I have guessed incorrectly 
- As a player I want to have an option to restart the game upon winning or losing 
- As a player I want to play a game that looks modern 
- As a player I want to see the hidden word, even if I guessed it wrong

# Stack
<p id="#stack"></p>

- JavaScript 
- HTML5
- CSS3

# Reflection

Creating hangman was a blast. This was the first time where I saw all of my skills as a Developer combine to make something that is authentically mine. Moreover, I loved the challenge of not relying on a framework or library to accomplish both the logical and visual components of the game. It’s not so much the technology that impresses me in regards to this game. It’s my ability to program everything from scratch that has ignited my love affair with it. 

All the **JavaScript** logic is mine. All the visual design is mine. 

That being said, there were many hurdles to overcome. Working with the hidden word as a **string data type** can be limiting. I had to find unique ways to evaluate that initial string as an **array**, or an **object**, and then return the current state of the game as I did so. 

This both tested and grew my skills in **Object Oriented Programming** and **Functional Programming**. For me the solutions I developed integrated both approaches and also helped me keep my toolkit of algorithms sharpe. That said - I’m looking forward to my next challenge. 

I’m grateful to share my work with you. I hope you enjoy it. 
