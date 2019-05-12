import * as $ from 'jquery';
import * as ace from '../node_modules/ace-builds/src-min-noconflict/ace.js';
import * as solarized_light from '../node_modules/ace-builds/src-min-noconflict/theme-solarized_light.js';
import * as marked from 'marked';
import * as auth from './auth';
/* editor */

const path = location.pathname;
const editor = ace.edit('editor');
// editor.setTheme(solarized_light);
editor.getSession().setUseWrapMode(true); /* 折り返しあり */
editor.setFontSize(18);

window.addEventListener('load', (e) => {
  $.ajax({
    url: '/problem' + path,
    type: 'GET',
  }).done((data) => {
    document.getElementById('canvas').innerHTML = marked(data);
  }).fail((data) => {
    console.log(data);
  }).always((data) => {
  });
  $.ajax({
    url: '/code' + path,
    type: 'GET',
  }).done((data) => {
    editor.setValue(data);
  }).fail((data) => {
    console.log(data);
  }).always((data) => {
  });
});

console.log(marked('# Marked in the browser\n\nRendered by **marked**.'));
<<<<<<< HEAD
=======
document.getElementById('canvas').innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');

const git_handler = new auth.GithubHandler();

document.getElementById('github').addEventListener('click', () => {
  git_handler.singin();
});
>>>>>>> fb71a2e6a2b3f35cd4c082b8898e3bf227207b88
