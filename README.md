# Everymind Challenge

##  Node.js CRUD + MongoDB Native Driver

Challenge proposed by EveryMind for the fictional client Nunes Sports, a system was implemented for displaying, creating, editing, and deleting products sold by the company.

Using NoSQL MongoDB database and Express.js framework, it's possible to create web applications and APIs very quickly and easily. Therefore, considering the deadline for developing the CRUD system, this tools were chosen for the final solution.

![image](https://github.com/Btwo2/DesafioEverymind/assets/110456965/abceee6e-56ff-41f9-bd73-4bfff163f6e1)

## Try by yourself!

- Create a [Deta Space](https://deta.space/) account

- Access [Deta Space - CyberThoughts](https://deta.space/discovery/r/bsua4ptrgftbxpan) and install on your Space

## Getting Started

 1 - Retrieve this repository via URL
 
  ```git
   git clone https://github.com/Btwo2/DesafioEverymind
  ```

 2 - Install the dependencies and configure the .env file with your database credentials;
 
 ```cmd
  npm install dotenv
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
  
<p align="center">
<img src="https://github.com/Btwo2/DesafioEverymind/assets/110456965/5250db26-bf84-4ad1-9b70-d93c064387a5" width="800"/>
</p>

 Final considerations and results:
 - All field must be filled for a new product register
 - Two step verification for deleting a product
 - Multiple product deletion also requiring double confirmation
 - Codes and Prices must be limited numbers, codes must be integers and prices allowing just two digits after decimal
 - Code number is searched before register, considering mistakes registering same code twice
