import * as $ from 'jquery';
import * as ace from '../node_modules/ace-builds/src-min-noconflict/ace.js';
import * as solarized_light from '../node_modules/ace-builds/src-min-noconflict/theme-solarized_light.js';
/* editor */

const editor = ace.edit('editor');
// editor.setTheme(solarized_light);
editor.getSession().setUseWrapMode(true); /* 折り返しあり */
// editor.setFontSize(24);
