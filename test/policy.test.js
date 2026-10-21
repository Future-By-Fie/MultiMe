import test from 'node:test';
import assert from 'node:assert/strict';
import { createProfile, previewProfile, switchContext } from '../src/policy.js';
test('public preview does not leak private fields', () => {
 const p=createProfile('p1','work',{name:{value:'Alex',visibility:'public'},email:{value:'private@example.test',visibility:'private'},role:{value:'Designer',visibility:'connections'}});
 assert.deepEqual(previewProfile(p,'public'),{name:'Alex'});
 assert.deepEqual(previewProfile(p,'connections'),{name:'Alex',role:'Designer'});
 assert.equal(previewProfile(p,'private').email,'private@example.test');
});
test('invalid contexts and audiences are rejected',()=>{
 assert.throws(()=>createProfile('x','unknown'),RangeError);
 assert.throws(()=>previewProfile(createProfile('x','hobby'),'stranger'),RangeError);
});
test('switching context is explicit',()=>{
 assert.deepEqual(switchContext('work','personal'),{context:'personal',changed:true});
 assert.deepEqual(switchContext('work','work'),{context:'work',changed:false});
});
