/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here
  const first = document.querySelector("li");
  console.log(first);
  const myId = document.querySelector("#myId");
  console.log(myId);
  const warningClass = document.querySelectorAll(".bg-warning");
  for (let warnings of warningClass)
  {
    console.log(warnings);
  }
  const targetButton = document.querySelector("#TargetMe");
  console.log(targetButton);
  const socialMedia = document.querySelectorAll("#SocialMedia");
  for (let links of socialMedia)
  {
    console.log(links);
  }
  const row = document.querySelectorAll("#myRow");
  for (let cells of row) 
  {
    console.log(cells);
  }
             })();
