# Everymind Challenge

##  Node.js CRUD + MongoDB Native Driver

Solving the challenge proposed by EveryMind for the fictional client Nunes Sports, a system was implemented for displaying, creating, editing, and deleting products sold by the company.

Using the NoSQL MongoDB database and the Express.js framework, it is possible to create web applications and APIs very quickly and easily. Therefore, considering the short timeframe for developing the CRUD system, I chose to use them as tools in this solution.

 ![image](https://github.com/Btwo2/DesafioEverymind/assets/110456965/dde424c9-17d8-45ce-b833-d3a50b7cf396)

## Try by yourself!

- Create a [Deta Space](https://deta.space/) account

- Access [Deta Space - CyberThoughts](https://deta.space/discovery/r/bsua4ptrgftbxpan) and install on your Space

## Getting Started

 1 - Retrieve this repository via URL
 
  ```git
   git clone https://github.com/Btwo2/DesafioEverymind
  ```

 2 - Unzip the node_modules folder to node_modules\;
 
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

![Nunes Sports](https://github.com/Btwo2/DesafioEverymind/assets/110456965/982c1acd-3a73-42a6-b68b-f1fcbd711192)

 In this solution, I could consider some issues like:
 - All field must be filled for a new product register
 - Two step verification for deleting a product
 - Multiple product deletion also requiring double confirmation
 - Codes and Prices must be limited numbers, codes must be integers and prices allowing just two digits after decimal
 - Code number is searched before register, considering mistakes registering same code twice
