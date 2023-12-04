(function () {
  /**
   * Problem 1: Dismiss the "Accept Cookies" popup
   *
   * When the user clicks on the "Accept Cookies" button, the "Accept Cookies" popup should disappear.
   */
  // Write your answer here
  const cookies = document.querySelector("#acceptCookiesButton");
  const popup =  document.querySelector("#acceptCookiesPopup");
  cookies.addEventListener("click", () => 
  {
      //const cookies = document.querySelector("#acceptCookiesButton");
      popup.classList.add('hidden');
  })
  //const cookies = document.querySelector("#acceptCookiesButton");
  //cookies.style.display = "none";
  /**
   * Problem 2: Show comments for the news story.
   *
   * You will need modify the HTML so that you can target HTML elements o the page.
   *
   * You will be toggling the comments on the page.
   * If the comments are hidden, this should happen when the user clicks on the "View Comments" button:
   * 1. The comment section should appear
   * 2. The "View Comments" button will change to say "Hide Comments"
   *
   * If the comments are visible, this should happen when the user clicks on the "Hide Comments" button:
   * 1. The comments sections should disappear
   * 2. The "Hide Comments" button should change to say "View Comments"
   *
   * HINT: Right now, the comments are hidden because they have the class ".hidden",
   * but you can switch up the HTML so that it uses inline styles if you like.
   */
  // Write your answer here
  const toggle = document.querySelector("#toggleComments");
  const comments =  document.querySelector("#comments");
  toggle.addEventListener("click", () => 
  {
      if(comments.classList.contains('hidden'))
      {
        toggle.innerHTML = 'Hide Comments';
        comments.classList.remove('hidden');
      }
      else
      {
        toggle.innerHTML = 'View Comments';
        comments.classList.add('hidden');
      }
  })
})();
