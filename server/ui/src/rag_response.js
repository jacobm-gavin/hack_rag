import { useState } from 'react';
import { final_question } from './App.js';
import { final_context } from './App.js';
let answer = '';
let context = '';
export async function GetData() {
    const ip = '127.0.0.1';
    answer='hello';
    try {
      const ctxresponse = await fetch(ip,{method:'POST', text:final_context});
      const response = await fetch(ip,{method:'POST', text:final_question});
      if (!response.ok || !ctxresponse.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      answer = json[0];
      context = json[1];
      
    } catch (error) {
        console.error(error.message);
    }
  }
export {answer};
export {context};
