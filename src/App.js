import React, { Fragment, useEffect } from 'react';
import { Header, Todo, Info } from './components';
import { BrowserRouter, Route } from 'react-router-dom';
import { setCurrentInput, setItem } from './redux/actions/notes'
import { useSelector, useDispatch } from 'react-redux'
import { db } from './firebase'
import firebase from 'firebase';
import './App.css';

function App() {

  const notes = useSelector(({ notes }) => notes.items);
  const currentInput = useSelector(({ notes }) => notes.currentInput);
  const dispatch = useDispatch();




  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      dispatch(setItem(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo }))))
      console.log('was used')
    })

  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setCurrentInput(e.target.value))
  }

  const onAdd = (e) => {
    e.preventDefault();

    !currentInput ? alert('Заметка не может быть пустой, введите пожалуйста текст') : db.collection('todos').add({
      todo: currentInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })


  }


  const onDelete = (id) => {
    db.collection('todos').doc(id).delete()
  }
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <div className="container">
          <Route exact path='/' render={() => <Todo currentInput={currentInput} onDelete={onDelete} onAdd={onAdd} handleChange={handleChange} notes={notes} />} />
          <Route exact path='/info' render={() => <Info />} />
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
