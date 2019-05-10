import * as firebase from 'firebase';

export function init_firebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyALN3HQPitPsxzVm7asqMzaScc7drl3p3E',
    authDomain: 'klab-arare.firebaseapp.com',
    databaseURL: 'https://klab-arare.firebaseio.com',
    projectId: 'klab-arare',
    storageBucket: 'klab-arare.appspot.com',
    messagingSenderId: '555849291700',
    appId: '1:555849291700:web:17106129b047d7aa',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope('repo');
  provider.setCustomParameters({
    allow_signup: 'false',
  });

  (async () => {
    try {
      const { user, credential } = await firebase.auth().getRedirectResult();
      console.log(user);
      console.log(credential);
    } catch (err) {
      /* エラー時の処理 */
    }
  })();

  document.getElementById('github').addEventListener('click', () => {
    firebase.auth().signInWithRedirect(provider);
  });
}
