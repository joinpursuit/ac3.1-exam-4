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

  poem = poem.split("")
for (var i = 0; i < poem.length; i++) {
  if(poem[i] === ''){
    poem.splice(i,1).join('')
  }
}
console.log(poem);

for(var i = 0; i < 140; i++) {
  var poemLine = "poem-" + (i+1) + ".txt"
fs.writeFile(poemLine, poem[i],function(err,success){
  fs.readFile(poemLine,function(err,success){
    console.log(success.toString())
    })
  })
}