# Everymind Challenge

##  Node.js CRUD + MongoDB Native Driver

Solving the challenge proposed by EveryMind for the fictional client Nunes Sports, a system was implemented for displaying, creating, editing, and deleting products sold by the company.

Using the NoSQL MongoDB database and the Express.js framework, it is possible to create web applications and APIs very quickly and easily. Therefore, considering the short timeframe for developing the CRUD system, I chose to use them as tools in this solution.

![image](https://github.com/Btwo2/DesafioEverymind/assets/110456965/abceee6e-56ff-41f9-bd73-4bfff163f6e1)

## Try by yourself!

- Create a [Deta Space](https://deta.space/) account

- Access [Deta Space - CyberThoughts](https://deta.space/discovery/r/bsua4ptrgftbxpan) and install on your Space

## Getting Started

 1 - Retrieve this repository via URL
 
  ```git
   git clone https://github.com/Btwo2/DesafioEverymind
  ```

 2 - Install the node_modules;
 
 ```cmd
  npm install express
  ```
 
 3 - Make sure all files are in the same folder;
 
 4 - Now, run the server app:

  ```cmd
  npm start
  ```

 5 - Open [http://localhost:3000](http://localhost:3000) with your browser to interact.

 # Web Deployed Version

 ![image](https://github.com/Btwo2/DesafioEverymind/assets/110456965/c04c016b-4b64-4b68-ae8a-bc019adc4f4a)

## Try by yourself!

- Create a [Deta Space](https://deta.space/) account

- Access [Deta Space - Nunes Sports](https://deta.space/discovery/r/gr8gc93iasoqsap6) and install on your Space

![ezgif-2-6fdc79c4c2](https://github.com/Btwo2/DesafioEverymind/assets/110456965/5250db26-bf84-4ad1-9b70-d93c064387a5)

 In this solution, I could consider some issues like:
 - All field must be filled for a new product register
 - Two step verification for deleting a product
 - Multiple product deletion also requiring double confirmation
 - Codes and Prices must be limited numbers, codes must be integers and prices allowing just two digits after decimal
 - Code number is searched before register, considering mistakes registering same code twice
