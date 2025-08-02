#About the Project

My project is a web store for my mom’s small crafting business.  She sells things like macramé potholders, tie-dyed T-shirts, suncatchers, dream-catchers, paracord bracelets, and macramé keychains.  She makes some really wonderful things, and I want to help her reach more people outside of local craft shows and farmers’ markets.  While the web store doesn’t actually allow purchasing, the plan is to turn this into a fuller website after the project is completed. 

There are three main pages that the user will see.  The first is the index page, which holds cards for product categories.  The index page also allows the user to log in or log out.  When the user clicks on one of these product categories, they will be taken to a page with more details about that specific product.  The final page the user will see is the cart page, with a summary of the items in their cart (including size, color, quantity, and price), a grand total (including tax), and a “checkout form”.

###Features
node.js server created via Express (this is used for the login, using a POST request to the server and login credentials from dummyJSON).  This allows the user to log in, which enables adding items to the cart and thus checking out. 
A fetch request using user data from dummyJSON for the information required for the “checkout form”--first and last name, street address, city, state, ZIP code, and bank card. This specifically is necessary for the user to “check out”.
Regex to validate both the username and password for the login and to validate the user information entered on the checkout form. 
The use of modern interactive UI features in two ways. Tooltips to indicate the information that should be entered for the purposes of utilizing the login and checkout form. Also the use of dropdown menus for size and/or color for various products, where applicable.  Each product has at least size or color options. 
A media query for mobile devices (specifically set for the maximum screen size of 600 pixels), utilizing larger buttons and page layouts that are more flattering and easier to read for a smaller screen size. 

###How to Run the Project

If you have not done so already, please take a moment to download and install VSCode.  You can do so here: https://code.visualstudio.com/download.  
You’ll also need to install node.js, if you haven’t already.
Getting the Live Server extension in VSCode will also be helpful to view the website.  (You can do so by opening Extensions in VSCode, searching Live Server, and then following the prompts.)
You will need to clone the repository from Github into your terminal.  If you’re unsure of how to do so, please check out this link!  https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
Once you’ve opened the project in VSCode, open up your terminal (I use GitBash) and run the command npm install.  This will install Express.  
Run the command node server.js to start the server. From there, navigate to index.html in VSCode and click “Go Live” in the bottom-right.  You can also use http://127.0.0.1:5500/.

####Technologies Used
HTML, CSS (Grid and Flexbox included), and Javascript
DummyJSON API
Express.js(node.js)