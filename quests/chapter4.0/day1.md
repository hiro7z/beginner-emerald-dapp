#### 1. How did we get the address of the user? Please explain in words and then in code.

When the user presses the "Log In" button, the handleAuthentication function is called.
Since the user is not logged in, fcl.authenticate() is called to log in and obtain the address.

press "Log In" button and call handleAuthentication()
![day1-1-1](https://github.com/hiro7z/beginner-emerald-dapp/blob/main/quests/chapter4.0/images/day1-1-1.PNG)

loggedIn is false and call fcl.authenticate()
![day1-1-2](https://github.com/hiro7z/beginner-emerald-dapp/blob/main/quests/chapter4.0/images/day1-1-2.PNG)


---
#### 2. What do fcl.authenticate and fcl.unauthenticate do?

If the user is not logged in, fcl.authenticate logs him in, and if he is logged in, fcl.unauthenticate logs him out.

---
#### 3. Why did we make a config.js file? What does it do?

To import FCL to connect to Flow TestNet and to be able to connect to Wallet.


---
#### 4. What does our useEffect do?

This function is executed every time something occurs.
In this case, fcl.currentUser.subscribe(setUser) is called every time the page is refreshed.


---
#### 5. How do we import FCL?

Put the following in config.js.

![day1-5](https://github.com/hiro7z/beginner-emerald-dapp/blob/main/quests/chapter4.0/images/day1-5.PNG)


---
#### 6. What does fcl.currentUser.subscribe(setUser); do?

Keep current user when page is refreshed.
