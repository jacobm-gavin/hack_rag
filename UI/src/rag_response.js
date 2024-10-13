import { useState } from 'react';
import { final_question } from './App.js';
let answer = '';
let context = '';
export async function GetData() {
    const ip = '127.0.0.1';
    answer = 'hello';
    let context = '';
    // try {
    //   const response = await fetch(ip,{method:'POST', text:final_question});
    //   if (!response.ok) {
    //     throw new Error(`Response status: ${response.status}`);
    //   }
  
    //   const json = await response.json();
    //   const arr = JSON.parse(json);
    //   answer = arr['0'];
    //   context = arr['1'];
      
    // } catch (error) {
    //     console.error(error.message);
    // }
  }
console.log(answer);
export {answer};
export {context};
// export const context = getData.ctx
