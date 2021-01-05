import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../src/store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance,reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import firebaseConfig from './config/fbConfig'

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),
    reduxFirestore(firebase, firebaseConfig)
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </React.StrictMode>
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
