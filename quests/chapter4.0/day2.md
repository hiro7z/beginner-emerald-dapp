


You have a lot of tools under your belt now, in fact much more than you think you do. Let's see what you're capable of...

#### 1. Instead of console logging the result after the script executes, I want you to:
- Make a new variable named greeting using useState
- Set the greeting variable to the response of the script call
- Create a <p> tag after the <div className={styles.flex}> tag
- Put the greeting variable inside of that <p> tag. This will make the result of your script show on your webpage! It should look something like this:


![day2-1](https://github.com/hiro7z/beginner-emerald-dapp/blob/main/quests/chapter4.0/images/day2-1.PNG)

---


#### 2a. I deployed a contract called SimpleTest to an account with an address of 0x6c0d53c676256e8c. I want you to make a button that, when clicked, executes a script to read the number variable from that contract. If you're curious, you can see the contract here: https://flow-view-source.com/testnet/account/0x6c0d53c676256e8c/contract/SimpleTest

Submit all the code you used to call the script, and the result of the script.

![day2-2-1](https://github.com/hiro7z/beginner-emerald-dapp/blob/main/quests/chapter4.0/images/day2-2-1.PNG)

```cadence
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav.jsx"
import { useState, useEffect } from 'react';
import * as fcl from "@onflow/fcl"

export default function Home() {

  const [newGreeting, setNewGreeting] = useState('');

  const [greeting, setGreeting] = useState('');

  const [number, setNumber] = useState('');

  function runTransaction() {
    console.log("Running transaction!");
    console.log("Changing the greeting to: " + newGreeting);
  }

  async function executeScript() {
    const response = await fcl.query({
      cadence: `
      import HelloWorld from 0x4e90838535e7b353

      pub fun main(): String {
          return HelloWorld.greeting
      }
      `, // CADENCE CODE GOES IN THESE ``
      args: (arg, t) => [] // ARGUMENTS GO IN HERE
    })

    setGreeting(response)
  }

  async function readNumberScript() {
    console.log("Read Number");
    const response = await fcl.query({
      cadence: `
      import SimpleTest from 0x6c0d53c676256e8c

      pub fun main(): Int {
          return SimpleTest.number
      }
      `, // CADENCE CODE GOES IN THESE ``
      args: (arg, t) => [] // ARGUMENTS GO IN HERE
    })

    setNumber(response)
  }

  useEffect(() => {
    executeScript()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by Emerald Academy" />
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="https://academy.ecdao.org" target="_blank">Emerald DApp!</a>
        </h1>
        <p>
          created by hiro
        </p>
        <div className={styles.flex}>
          <button onClick={runTransaction}>Run Transaction</button>
          <input onChange={(e) => setNewGreeting(e.target.value)} placeholder="Hello, Idiots!" />
        </div>
        <p>{greeting}</p>
        <button onClick={readNumberScript}>Read Number</button>
        <p>{number}</p>
      </main>
    </div>
  )
}
```


#### 2b. Then, I want you to remove the button, and make the script execute every time the page refreshes.

Submit all the code you used to do this.

![day2-2-2](https://github.com/hiro7z/beginner-emerald-dapp/blob/main/quests/chapter4.0/images/day2-2-2.PNG)


```cadence
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from "../components/Nav.jsx"
import { useState, useEffect } from 'react';
import * as fcl from "@onflow/fcl"

export default function Home() {

  const [newGreeting, setNewGreeting] = useState('');

  const [greeting, setGreeting] = useState('');

  const [number, setNumber] = useState('');

  function runTransaction() {
    console.log("Running transaction!");
    console.log("Changing the greeting to: " + newGreeting);
  }

  async function executeScript() {
    const response = await fcl.query({
      cadence: `
      import HelloWorld from 0x4e90838535e7b353

      pub fun main(): String {
          return HelloWorld.greeting
      }
      `, // CADENCE CODE GOES IN THESE ``
      args: (arg, t) => [] // ARGUMENTS GO IN HERE
    })

    setGreeting(response)
  }

  async function readNumberScript() {
    console.log("Read Number");
    const response = await fcl.query({
      cadence: `
      import SimpleTest from 0x6c0d53c676256e8c

      pub fun main(): Int {
          return SimpleTest.number
      }
      `, // CADENCE CODE GOES IN THESE ``
      args: (arg, t) => [] // ARGUMENTS GO IN HERE
    })

    setNumber(response)
  }

  useEffect(() => {
    executeScript(),
    readNumberScript()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Emerald DApp</title>
        <meta name="description" content="Created by Emerald Academy" />
        <link rel="icon" href="https://i.imgur.com/hvNtbgD.png" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my <a href="https://academy.ecdao.org" target="_blank">Emerald DApp!</a>
        </h1>
        <p>
          created by hiro
        </p>
        <div className={styles.flex}>
          <button onClick={runTransaction}>Run Transaction</button>
          <input onChange={(e) => setNewGreeting(e.target.value)} placeholder="Hello, Idiots!" />
        </div>
        <p>{greeting}</p>
        <p>{number}</p>
      </main>
    </div>
  )
}
```

