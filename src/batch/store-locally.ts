import { writeFile } from 'fs';
import fetch from 'node-fetch';

const sample = {
  'test': {
    'name': 'batch test',
    'description': 'Das ist ein Test',
    'count': 1
  }
};

fetch('https://restcountries.eu/rest/v2/all', {
  method: 'get'
})
  .then(response => {
  console.log('Status: ', response.status);
  console.log('Headers: ', JSON.stringify(response.headers));
  return response.json();
})
  .then(body => {
    writeFile('countries.json', JSON.stringify(body), 'utf-8', err => {
      if (err) {
        console.error(err);
      }
      console.log('Success: > countries.json');
    });
})
  .catch(function(err) {
  console.error(err);
});

console.log('batch works ...');
