$(document).ready(function(){
    $( "#listdx" ).hide();

    //SLIDERS
    //terza
    if($(".terzaDropdownContent").css("display")=="none"){
      $(".terzaDropdown").mouseenter(function(){
          $(".terzaDropdownContent").slideDown();
          $(".contenuto, #listdx, .contenutoHome").css("filter","blur(6px)");
      });
    }
    $(".terzaDropdown").mouseleave(function(){
        $(".terzaDropdownContent").slideUp();
        $(".contenuto, #listdx, .contenutoHome").css("filter","blur(0px)");
    });
    //quarta
    if($(".quartaDropdownContent").css("display")=="none"){
      $(".quartaDropdown").mouseenter(function(){
          $(".quartaDropdownContent").slideDown();
          $(".contenuto, #listdx, .contenutoHome").css("filter","blur(6px)");
      });
    }
    $(".quartaDropdown").mouseleave(function(){
        $(".quartaDropdownContent").slideUp();
        $(".contenuto, #listdx, .contenutoHome").css("filter","blur(0px)");
    });


    //ACCESSO RAPIDO
    $( window ).scroll(function() {
      $( "#listdx" ).fadeIn( "slow" );
    });

});
