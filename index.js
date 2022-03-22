import React, { useEffect, Fragment } from 'react';
import { render } from 'react-dom';
import { useQuery } from 'react-query';

import Hello from './Hello';
import './style.css';

const Showdb = () => {
  console.log('in Showdb');
  //const d = Getstuff();
  const d = 'ok';
  console.log('in Showdb data is ' + d);
};
const Getstuff = () => {
  const { data = [], status } = useQuery({
    queryKey: 'id',
    queryFn: () =>
      fetch('https://kwoodallsapp.herokuapp.com/getitems').then((res) =>
        res.json()
      ),
    config: {
      onSuccess: (data) => [...data].reverse(),
    },
  });

  return data;
};

const App = () => {
  Showdb();
  return (
    <div>
      <Hello name={'phone list'} />
      <p>Phone List now</p>
    </div>
  );
};

render(<App />, document.getElementById('root'));

/*

{data.map(({ name, phone }, index) => (
        <div key={index}>
          <h3>{phone}</h3>
          <p> {name}</p>
        </div>
      ))}


*/
