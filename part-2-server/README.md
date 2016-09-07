## Setup
Add all of the following files to this folder (the 'part-2-server' folder):
- Add an `index.html` file to this folder. In your `index.html` file add an `h1` tag that says "Welcome to the home page"
- Add a `page-2.html` file and within that file add an `h1` tag that says "Welcome to page 2...or page 3?"
- Add a `server.js` file. This is where you'll write most of your code
- Add a new file called `createPoemFiles.js` into your folder. This file will be used to create new files locally...you will not need to send this file as a response in your server
- To test your app, run your `server.js` file and open up 'localhost:3000' (or whatever port number you set your server to listen to) in your browser

## Instructions
Create a server in your `server.js` file that does the following:

1. If the request url is '/' the server should read the `index.html` file and write the contents as a response
2. If the request url is '/page-2' OR 'page-3' the server should read the `page-2.html` file and write the contents as a response
3. Copy and paste the poem found at the bottom of this page (that's saved in the `poem` variable) into your createPoemFiles.js file. Within that same file use the `fs` module to write a function that will create 140 new text (.txt) files, and insert a word from the  poem into each file. The files should be called `poem-0.txt`, `poem-1.txt`, `poem-2.txt`, etc., all the way up to `poem-139.txt`. Each file should contain one word from the poem, so for example, `poem-0.txt` should contain the first word from the poem, `poem-9.txt` should contain the tenth word, etc. When you are ready, run the `createPoemFiles.js` script.
4. Update your server.js file to do the following: If the request url starts with '/poem' (followed by a dash and a number, i.e. `/poem-1`), you should read the appropriate file and respond with the word within it. In other words, if the request url is '/poem-10', your server should read your 'poem-10' file and `response.write` the word contained in that file. If your request url is '/poem-67' your server should response with the word in your `poem-67.txt` file, etc.
***

**[Dream Within a Dream](https://en.wikipedia.org/wiki/A_Dream_Within_a_Dream)** by Edgar Allen Poe:
```js
var poem = [ 'Take', 'this', 'kiss', 'upon', 'the',
  'brow!','And,','in','parting','from',
  'you','now,','Thus','much','let','me',
  'avow','You','are','not','wrong,',
  'who','deem','That','my','days',
  'have','been','a','dream;',
  'Yet','if','hope','has','flown','away',
  'In','a','night,','or','in','a','day,',
  'In','a','vision,','or','in','none,',
  'Is','it','therefore','the','less','gone?',
  'All','that','we','see','or','seem','Is',
  'but','a','dream','within','a','dream.',
  'I','stand','amid','the','roar',
  'Of','a','surf-tormented','shore,',
  'And','I','hold','within','my','hand','Grains',
  'of','the','golden','sand--',
  'How','few!','yet','how','they','creep',
  'Through','my','fingers','to','the','deep,',
  'While','I','weep--while','I','weep!','O',
  'God!','can','I','not','grasp','Them','with',
  'a','tighter','clasp?',
  'O','God!','can','I','not','save',
  'One','from','the','pitiless','wave?',
  'Is','all','that','we','see','or','seem',
  'But','a','dream','within','a','dream?' ]
  ```
