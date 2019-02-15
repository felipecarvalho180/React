import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('cockpit js useEffect');
    //Http request...
    setTimeout(() => {
      alert('Saved data to clound!');
    }, 10);
    return () => {
      console.log('cockpit js clean up in useEffect')
    }
  }, [] /*if array is empty the useEffect executed once*/ );

  useEffect(() => {
    console.log('cockpit js 2nd useEffect');
    return () => {
      console.log('cockpit js 2nd clean up in useEffect')
    }
  })

  const assignClasses = [];
  let btnClass = '';
  
  if (props.showPersons) {
      btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignClasses.push(classes.red); //the same of classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold); //the same of classes = ['red', 'bold']
  }

  return(
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignClasses.join(' ')}>This is really working!!!</p>
          <button className={btnClass}
              onClick={props.clicked}>
              Toogle Persons</button>
      </div>
  );
};

export default React.memo(cockpit);