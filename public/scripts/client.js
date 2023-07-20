/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () { 

  const createTweetElement = () => {
    const $tweet = $(`
      <article id="demoTweets">
        <header>
        <div><i class="fa-solid fa-user"></i> Rhoda Jacobs</div> 
        <div id="At">@Mrs. Jacobs</div>
        </header>
        <div id="demoTweetsText"><p>Hello World!</p></div>    
        <footer id="demoTweetsFooter"> 
        <div>10 days ago</div> 
        <div id="icons" >
        <i class="fa-solid fa-flag"></i> 
        <i class="fa-solid fa-retweet"></i> 
        <i class="fa-solid fa-heart"></i>
        </div>
        </footer> 
      </article>
  `);
    return $tweet;
  };



const $tweet = createTweetElement();

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$(document).ready( () => {
    $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});

});