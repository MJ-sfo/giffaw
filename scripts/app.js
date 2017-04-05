// var giphy_api = "http://api.giphy.com/v1/gifs/search";  //  example from 'solutions' does not work on my page - get error msg:
// 2jquery-2.2.2.min.js:4 GET http://api.giphy.com/v1/gifs/search 401 (Unauthorized)

$(document).on("ready", function(){
  var searchForm = $('.btn-primary');  //the 'go' button
  $("form").on('submit', hijack);
  // searchForm.on('click', hijack);   // my original way
  function hijack(event){
    event.preventDefault();
    // console.log( $( this ).serialize() );   // for serialization:
    userAjax() ;
  }   //  function hijack
});   // document

function userAjax() {
  var xhr = $.ajax( {
    method: "GET",
    // url: "https://github.com/Giphy/GiphyAPI", // this is a "relative" link
    url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC" , //  from example of "Fetch GIFs currently trending online.",  "Returns 25 results by default."
    // url: giphy_api,  //  example from 'solutions' - different url
    // data: bookData,
    dataType: "json",
    // data: $("form").serialize(),    // from solutions - but not result.  documentions seems to say used data when POST to server - gives data in object format.
    success: onSuccess
  });   // ajax

  xhr.done(function (data) {    // this prints out all urls with gifs
    $.each(data.data, function () {
        var thisImageUrl = this.images.fixed_height.url;  // server returned url of gif
        if (thisImageUrl.slice(0,4) === "http" ){  // last url not for gif
          console.log(thisImageUrl);
          $(".col-sm-4").append('<img src=' + thisImageUrl + '>');  // need to concatinate !
        }
    })
  });

  function onSuccess(responseData) {
    console.log("celebrate! sucessfuly hijacked search function");
    console.log(responseData);
    // celebrate!


  };  // function onSuccess
}  // userAjax
