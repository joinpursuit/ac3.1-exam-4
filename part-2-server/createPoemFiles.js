var fs = require('fs')
    // Within that same file use the fs module to write a function that will create 140 new text (.txt) files, and insert a word from the poem into each file. 

// The files should be called poem-0.txt, poem-1.txt, poem-2.txt, etc., all the way up to poem-139.txt. 

// Make sure the files end in '.txt'. 

// Each file should contain one word from the poem, so for example, poem-0.txt should contain the first word from the poem, poem-9.txt should contain the tenth word, etc.

//  When you are ready, run the createPoemFiles.js script.



var poem = ['Take', 'this', 'kiss', 'upon', 'the',
    'brow!', 'And,', 'in', 'parting', 'from',
    'you', 'now,', 'Thus', 'much', 'let', 'me',
    'avow', 'You', 'are', 'not', 'wrong,',
    'who', 'deem', 'That', 'my', 'days',
    'have', 'been', 'a', 'dream;',
    'Yet', 'if', 'hope', 'has', 'flown', 'away',
    'In', 'a', 'night,', 'or', 'in', 'a', 'day,',
    'In', 'a', 'vision,', 'or', 'in', 'none,',
    'Is', 'it', 'therefore', 'the', 'less', 'gone?',
    'All', 'that', 'we', 'see', 'or', 'seem', 'Is',
    'but', 'a', 'dream', 'within', 'a', 'dream.',
    'I', 'stand', 'amid', 'the', 'roar',
    'Of', 'a', 'surf-tormented', 'shore,',
    'And', 'I', 'hold', 'within', 'my', 'hand', 'Grains',
    'of', 'the', 'golden', 'sand--',
    'How', 'few!', 'yet', 'how', 'they', 'creep',
    'Through', 'my', 'fingers', 'to', 'the', 'deep,',
    'While', 'I', 'weep--while', 'I', 'weep!', 'O',
    'God!', 'can', 'I', 'not', 'grasp', 'Them', 'with',
    'a', 'tighter', 'clasp?',
    'O', 'God!', 'can', 'I', 'not', 'save',
    'One', 'from', 'the', 'pitiless', 'wave?',
    'Is', 'all', 'that', 'we', 'see', 'or', 'seem',
    'But', 'a', 'dream', 'within', 'a', 'dream?'
]

function poe(array) {
    for (var i = 0; i < array.length; i++) {
        fs.writeFile('poem-' + i + '.txt', array[i])
    }
}
poe(poem)
