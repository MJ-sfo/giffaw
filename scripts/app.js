$(document).on("ready", function(){

  var searchForm = $('.btn-primary');  //the 'go' button
  searchForm.on('click', hijack);
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
      // data: bookData,
      dataType: "json",
      success: onSuccess
    });   // ajax

    function onSuccess(responseData) {
      console.log("celebrate!");
      console.log(responseData);
      // celebrate!
    };  // function onSuccess
}  // userAjax
