## Welcome to my HackerU_College Final Project, a simulated stock market trading application. 

  

As part of my studies at HackerU College, I built a client-side application using React, simulating stock market trading. I implemented the data transfer between the client and the database using a Node.js server and managed the database itself with MongoDB Compass Atlas. To access the application and all its features, you need to download the project folder. After downloading the folder and extracting the files, you will find two subfolders: one for the client-side and the other for the server-side. You should open each folder separately in VSCode. Once they are displayed in the software, you need to install the project's supporting libraries by running the command in the terminal: `npm i`. 

  

Note that these actions are performed separately for each folder. 



After the installation is complete, you can run the application. To do this, first start the server-side folder named "ProjectNodeJs" using the command: `npm start` or `npm run watch`. 

  

Once you receive a blue-colored message in the terminal indicating that the system has connected to the MongoDB database, you can proceed to open the client-side folder "ProjectReact" and also perform an initial launch there using: `npm start`. 

  

After successfully connecting the client-side to the server-side and launching it, the application will open in your browser. 

  

### About the Application: 

  

The -investions house- is a demo application based on a stock market trading system managed by fictitious digital money. In this application, you can immerse yourself in a reality where you invest in securities, issue securities, and perform other actions related to this interesting field. 

  

The application has several user types: Regular, Pro, and Business. 

  

- **Regular Investor**: Can register and log in to an account, deposit money, trade in stocks listed in the application, stay updated with (demo) news related to stock price changes, and manage a personal finance page.


- **Pro Investor**: Has two additional privileges compared to a Regular user: 1. Perform stock transactions without limits and fees (a Regular user pays a symbolic amount for such actions). 2 Receive analytical analysis for each stock, serving as an additional tool before making a purchase/sale decision. 

  

- **Business Investor**: Can perform regular trading operations and also has access to creating securities for trading alongside other listed stocks. Each stock issued by a user starts with a default price of $300. After the user's stocks are available for trading by other users on the site, the user's cash balance will be updated according to the purchases and sales made by other users from their stock. A stock that gains popularity among many investors will bring in a lot of money for its creator! 

  

A Business user who has not upgraded to a Pro user cannot enjoy the tools open to Pro users. Therefore, to benefit from them, they must upgrade separately. 

  

Additionally, there is an ADMIN user who is the owner of all stocks not created by other business users and can access an additional panel displaying all users on the site. The ADMIN can edit Business users, edit their personal data, and if necessary, delete a user (but cannot delete themselves). A request has been made to the application users not to delete users they did not create. ADMIN user details for review of capabilities: email – admin@gmail.com, password – 123456aA!
Whether you are logged in or logged out, as soon as you launch the application, a general navigation bar is available to navigate between main pages. Among them is a Privacy Policy page, which should be read before using the application. Additionally, there is an About page. The About page details the available interfaces and tools for the user. This page will greatly help you understand the system as a client and the capabilities and tools available to you on the site. I wish you a pleasant experience. 

  

### Some Points about the Server-side: 

  

All types of requests that can be performed are in the path: `/ProjectNodeJS/src/routes`. Inside the routes folder, there are 2 files for HTTP requests: one for user requests and the other for stock requests. For user convenience, there is another folder named http located at: ProjectNodeJS/http. Inside this folder, there are templates for most types of requests that can be performed in the application, which I have tested extensively. You need to adjust the details transferred in the header as a token, and in requests receiving information, adjust the appropriate JSON for sending before sending requests to try out (you must run the server through the terminal before testing). 




User Requests: 

  

- Display all users - for ADMIN only. 

- Edit user details - can be done by the user themselves or ADMIN. Password or email cannot be edited. 

- Display single user - can be done by the user themselves or ADMIN. 

- Delete user - can be done by the user themselves or ADMIN. Users with stocks for which a sale request has been sent will first undergo a stock deletion that will benefit all purchasers, and only then will the user be automatically deleted. 

- Upgrade user to Pro user - can be done by the user themselves (a user who is already a Pro and still requests it will revert to Regular). 

- Upgrade user to Business user - can be done by the user themselves or ADMIN (a user who is already Business and still requests it will revert to Regular). 

- Update user wallet - add cash to the wallet for activities requiring a cash balance in the account - can only be done by the user themselves.
  
- Buying Stocks - Each user contains in their personal details stored in the database, information about all the securities they own, a purchase action will update this list for the user, and among other things, will also update the purchased security where all the owners of that security are also displayed. However, this request will be found under user requests since this type of request also updates his cash wallet after performing the action.

- Selling Stocks - Each user contains in their personal details stored in the database, information about all the securities they own, a selling action will update this list for the user, and among other things, will also update the sold security where all the owners of that security are also displayed. However, this request will be found under user requests since this type of request also updates his cash wallet after performing the action.

- User Registration - A systematic registration process

- User Login - A systematic login process that requires an email and password provided at registration.


    

Stock Requests: 

  

- Display all stocks - an automatically activated and open request for all users on the site. 

- Change stock price - an action that is automatically activated at regular intervals and will check for any updates on every login and refresh to the application, and if enough time has passed since the last change, it will be activated again. 

- Display my stocks - an automatic action that is only available to business users who have created one or more stocks. Those users have a dedicated page to display these stocks. 

- Display specific stock - available to everyone by sending an ID identifier in the request address (params). 

- Delete stock - possible only for the owner of the stock. When this action is performed, the system will check if there are buyers for this stock, and if so, it will credit their accounts with the current amount equal to the quantity of stocks they own. This amount will be deducted from the deleter's wallet. 

- Update stock details - an action only available to the owner of the stock. The stock price remains the same, but all content displayed for that security is editable. 

- Register a stock - an action only available to Business users. 

  

In conclusion, you have an application at your disposal that simulates stock market trading, allowing you to create securities, profit from their sale, purchase stocks yourself, and sell based on your personal feelings about the market situation (growth/decline). You can stay updated with news related to the stock market, upgrade to special tools to improve your user experience. I hope my work will be enjoyable for you, and you are welcome to provide comments for changes and improvements you see fit. Thank you very much. 
