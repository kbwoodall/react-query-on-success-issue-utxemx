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

  const arr = [
    {
      id: 3,
      name: 'Salk',
      phone: '702-123-4567',
      notes: 'Famous MD from Cleveland, Ohio',
    },
    {
      id: 5,
      name: 'Aristotle',
      phone: '702-123-9999',
      notes: 'Platos teacher and friend',
    },
    {
      id: 6,
      name: 'Kerry',
      phone: '702-521-0815',
      notes:
        'Check programs in production for errors and functions using hooks',
    },
    {
      id: 7,
      name: 'Kent',
      phone: '725-232-2092',
      notes: 'Perform unit test for brother Kerry',
    },
    {
      id: 2,
      name: 'Plato',
      phone: '702-123-3456',
      notes: 'Knows Socrates from school',
    },
  ];

  console.log('array ' + arr);
  return arr;
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
  const data = Showdb();

  return (
    <div>
      <Hello name={'phone list'} />
      <p>Phone List now</p>

      {data.map(({ name, phone }, index) => (
        <div key={index}>
          <h3>{phone}</h3>
          <p> {name}</p>{' '}
        </div>
      ))}
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
