import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toogleBtnRef = useRef(null);

  useEffect(() => {
    console.log('cockpit js useEffect');
    /*Http request...
    setTimeout(() => {
      alert('Saved data to clound!');
    }, 10);*/
    toogleBtnRef.current.click();
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
          <button 
              ref={toogleBtnRef} 
              className={btnClass}
              onClick={props.clicked}>
              Toogle Persons
          </button>
          <AuthContext.Consumer>
            {context => <button onClick={context.login}>Log in</button>}
          </AuthContext.Consumer>
      </div>
  );
};

export default React.memo(cockpit);