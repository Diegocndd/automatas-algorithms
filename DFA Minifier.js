const states = {
  '1': {
    'a': '2',
    'b': '3',
  },
  '2': {
    'a': '4',
    'b': '5',
  },
  '3': {
    'a': '6',
    'b': '7',
  },
  '4': {
    'a': '4',
    'b': '5',
  },
  '5': {
    'a': '6',
    'b': '7',
  },
  '6': {
    'a': '4',
    'b': '5',
  },
  '7': {
    'a': '6',
    'b': '7',
  },
};

const initialState = '1';
const alphabet = ['a', 'b'];
const acceptsStates = ['2', '6'];

const qtyStates = Object.keys(states).length;
const table = Array(qtyStates).fill().map(() => Array(qtyStates - 1).fill());

const areEquivalents = (state1, state2) => {
  let equivalent = false;

  for (let i in alphabet) {
    const destiny1 = states[state1][alphabet[i]]
    const destiny2 = states[state2][alphabet[i]]

    if (table[destiny1 - 1][destiny2 - 2]) {
      equivalent = true;
    }
  }

  return equivalent;
}

// pre-processing (or first iteration)
for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table[i].length; j++) {
    const x = acceptsStates.includes(String(i + 1));
    const y = acceptsStates.includes(String(j + 2));
    if ((x || y) && !(x && y)) { // XOR
      table[i][j] = '1';
    };    
  }
}

// iterations
let modification = false;

for (let iteration = 2; iteration < Number.POSITIVE_INFINITY; iteration++) {

  for (let i = 0; i < table.length; i++) {
    modification = false;
    for (let j = 0; j < table[i].length; j++) {
      if (!table[i][j]) {
        const x = String(i + 1);
        const y = String(j + 2);
        if (areEquivalents(x, y)) {
          table[i][j] = String(iteration);
          modification = true;
        }
      }
    }
  };

  if (!modification) {
    break;
  };
};

console.log('THE FOLLOWING STATES MAY BE MERGED:');
for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table[i].length; j++) {
    if (!table[i][j]) {
      console.log(`${i + 1} and ${j + 2}`);
    };    
  }
};
