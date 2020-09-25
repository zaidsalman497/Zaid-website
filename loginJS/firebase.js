const projectId = 'zaid-login'
const config = {
  apiKey: 'AIzaSyDAGGzX38y8zsqrdFAP5Uqh2tOKtlm-8sg',
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `http://${projectId}.firebaseio.com`,
  projectId: projectId,
  storgeBucket: `${projectId}.appspot.com`,
  messagingSenderId: '24016897478'
}
firebase.initializeApp(config);