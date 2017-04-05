// var giphy_api = "http://api.giphy.com/v1/gifs/search";  //  example from 'solutions' does not work on my page - get error msg:
// 2jquery-2.2.2.min.js:4 GET http://api.giphy.com/v1/gifs/search 401 (Unauthorized)

$(document).on("ready", function(){
  var searchForm = $('.btn-primary');  //the 'go' button
  $("form").on('submit', hijack);
  // searchForm.on('click', hijack);   // my original way
  function hijack(event){
    event.preventDefault();
    userAjax() ;
  }   //  function hijack
});   // document

function userAjax() {
  $.ajax( {
    method: "GET",
    // url: "https://github.com/Giphy/GiphyAPI", // this is a "relative" link
    url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC" , //  from example of "Fetch GIFs currently trending online.",  "Returns 25 results by default."
    // url: giphy_api,  //  example from 'solutions' - different url
    // data: bookData,
    dataType: "json",
    success: onSuccess
  });   // ajax

  function onSuccess(responseData) {
    console.log("celebrate! sucessfuly hijacked search function");
    console.log(responseData);
    // celebrate!
  };  // function onSuccess
}  // userAjax
