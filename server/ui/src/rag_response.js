import { useState } from "react";
import { final_question } from "./App.js";
let answer = "";
let context = "";
export async function GetData() {
  const ip = "/request";
  //answer = 'hello';
  //let context = '';
  try {
    const response = await fetch(ip, {
      method: "POST",
      body: JSON.stringify({ text: final_question }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    //const arr = JSON.parse(json);
    answer = json[0];
    context = json[1];
    console.log(answer);
    return { answer: answer, context: context };
  } catch (error) {
    console.error(error.message);
  }
}
console.log(answer);
export { answer };
export { context };
// export const context = getData.ctx
