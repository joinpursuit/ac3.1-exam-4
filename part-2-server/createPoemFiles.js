var http = require('http');
var fs = require('fs');

//---- THE POEM ARRAY ----
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

//	WRITE THE FOR LOOP THAT ITERATES THROUGH THE POEM ARRAY AND CREATES THE FILES- EACH FILE 
//  GETTING ONE WORD FROM THE POEM

function writeWord(files) {
   // FOR LOOP
   for(i=0; i < poem.length; i++) {
        fs.writeFile('/poem-' + i '.txt', arr[i], function(err) {
        if (err) throw err;
      });
   }

}


// function writeWord(files) {
// 	// FOR LOOP
// 	fs.writeFile('/poem-' + i + '.txt', poem[i], (err) => {
// 	  if (err) throw err;
// 	  console.log('Here are the new files!');
// 	});
// }

