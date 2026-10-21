import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
test('standalone demo includes editing and preview controls',()=>{
 for(const id of ['tabs','name','bio','contact','nameVisibility','bioVisibility','contactVisibility','audience','export','importButton','importFile','reset'])assert.match(html,new RegExp('id="'+id+'"'));
});
test('JSON import has format and size checks',()=>{
 assert.match(html,/schemaVersion!==1/);
 assert.match(html,/file.size>20000/);
 assert.match(html,/levels.includes/);
});
test('demo clearly disclaims secure access control',()=>assert.match(html,/not secure access control/i));

test('guided viewer scenarios are available',()=>{
 for(const id of ['scenario'])assert.match(html,new RegExp('id="'+id+'"'));
 for(const name of ['recruiter','friend','stranger','self'])assert.match(html,new RegExp(name));
});
