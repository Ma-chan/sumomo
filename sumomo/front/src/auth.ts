import * as firebase from 'firebase/app';
import 'firebase/auth';

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

export class GithubHandler{

  private provider;
  private credential;

  constructor () {
    this.provider = new firebase.auth.GithubAuthProvider();
    // provider.addScope('repo');
    // provider.setCustomParameters({
    //   allow_signup: 'false',
    // });
    (async () => {
      try {
        const { user, credential } = await firebase.auth().getRedirectResult();
        this.credential = credential;
        const user_info = await this.get_user_info();
        alert(`こんにちは! ${user_info.name}さん!`);
      } catch (err) {
        console.log(err);
        alert('ログインに失敗しました．');
      }
    })();
  }

  public singin () {
    firebase.auth().signInWithRedirect(this.provider);
  }

  public get_user_info() {
    return fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        Authorization: `token ${this.credential.accessToken}` ,
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
      return json;
    }).catch((err) => {
      console.log(err);
    });
  }
}
