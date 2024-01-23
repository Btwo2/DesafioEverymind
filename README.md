# Everymind Challenge

##  Node.js CRUD + MongoDB Native Driver

Solving the challenge proposed by EveryMind for the fictional client Nunes Sports, a system was implemented for displaying, creating, editing, and deleting products sold by the company.

Using the NoSQL MongoDB database and the Express.js framework, it is possible to create web applications and APIs very quickly and easily. Therefore, considering the short timeframe for developing the CRUD system, I chose to use them as tools in this solution.

https://github.com/Btwo2/DesafioEverymind/assets/110456965/13f23e4d-f51e-4f12-8f1b-fb461f9fda73

## Getting Started

 1 - Unzip the node_modules folder;
 
 2 - Make sure all files are in the same folder;
 
 3 - Now, run the server app:

  ```cmd
  npm start
  ```

 4 - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 
In this solution, I could consider some issues like:
 - All field must be filled for a new product register
 - Two step verification for deleting a product
 - Multiple product deletion also requiring double confirmation
 - Codes and Prices must be numbers, codes must be integers and prices allowing just two digits after decimal
 - A improvements that would be relevant but wasn't implemented is searching the code number before register, considering mistakes registering same code twice
