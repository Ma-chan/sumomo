import * as $ from 'jquery';
import * as ace from '../node_modules/ace-builds/src-min-noconflict/ace.js';
import * as solarized_light from '../node_modules/ace-builds/src-min-noconflict/theme-solarized_light.js';
import * as marked from 'marked';
import * as auth from './auth';
/* editor */

const editor = ace.edit('editor');
// editor.setTheme(solarized_light);
editor.getSession().setUseWrapMode(true); /* 折り返しあり */
// editor.setFontSize(24);

console.log(marked('# Marked in the browser\n\nRendered by **marked**.'));
document.getElementById('canvas').innerHTML = marked('# Marked in the browser\n\nRendered by **marked**.');

const git_handler = new auth.GithubHandler();

document.getElementById('github').addEventListener('click', () => {
  git_handler.singin();
});
