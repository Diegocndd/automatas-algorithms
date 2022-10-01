const states = {
  'q1': {
    'a': 'q1',
    'b': 'q2',
  },
  'q2': {
    'a': 'q3',
    'b': 'q4',
  },
  'q3': {
    'a': 'q3',
    'b': 'q4',
  },
  'q4': {
    'a': 'q4',
    'b': 'q4',
  },
};

const acceptsStates = ['q2', 'q3', 'q4'];
const initialState = 'q1';
const input = 'aaaa';

let actualState = initialState;

for (let i = 0; i < input.length; i++) {
  actualState = states[actualState][input[i]];
};

if (acceptsStates.includes(actualState)) {
  console.log(`ACCEPTED! FINAL STATE: ${actualState}`);
} else {
  console.log('NOT ACCEPTED!')
}
