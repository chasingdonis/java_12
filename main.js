$("document").ready(function (){
    
  $( "#ani" ).click(function() {
  $( "button" ).animate({
    top: "-=50px",
    width: "85%",
    opacity: 0.7,
    fontSize: "1.2em",
    marginBottom: "10px"
  }, 1500 );
});
    
    $( "#sarah" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry1" ).slideDown( "slow",  complete )
  $( "article:not(#entry1)" ).hide();
});
    
    $( "#morning" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry2" ).show( "slow",  complete );
  $( "article:not(#entry2)" ).hide();
});

  $( "#out" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry3" ).fadeIn( "slow",  complete );
  $( "article:not(#entry3)" ).hide();
});
    
  $( "#white" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry4" ).slideDown( "slow",  complete );
  $( "article:not(#entry4)" ).hide();
});
    
    $( "#glenn" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry5" ).show( "slow",  complete );
  $( "article:not(#entry5)" ).hide();
});
    
    $( "#mojito" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry6" ).fadeIn( "slow",  complete );
  $( "article:not(#entry6)" ).hide();
});
    
   $( "#vegan" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry7" ).slideDown( "slow",  complete );
  $( "article:not(#entry7)" ).hide();
});
    
});




