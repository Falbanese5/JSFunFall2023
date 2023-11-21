/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  //let img = document.querySelector("img");
  document.querySelector("img").src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";
  //document.querySelector(".alert alert-warning").target = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
  let javaLink = (document.querySelector("#javaLink"));
  javaLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
  let success = (document.querySelector(".alert-success"));
  success.textContent = "I am victorious!";
  let button = (document.querySelector(".btn-primary"));
  let check = (document.querySelector("#dark"));
  if (button.classList.contains("btn-primary"))
  {
    check.textContent = "✓ blue";
  }
})();
