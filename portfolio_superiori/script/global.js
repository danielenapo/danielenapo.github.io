$(document).ready(function(){
    $( "#listdx" ).hide();

    //SLIDERS
    //terza

      $(".terzaDropdown").mouseenter(function(){
          $(".terzaDropdownContent").slideDown("fast");
          $(".contenuto, #listdx, .contenutoHome, .bottom").css("filter","blur(6px)");
      });

    $(".terzaDropdown").mouseleave(function(){
        $(".terzaDropdownContent").slideUp("fast");
        $(".contenuto, #listdx, .contenutoHome, .bottom").css("filter","blur(0px)");
    });
    //quarta
      $(".quartaDropdown").mouseenter(function(){
          $(".quartaDropdownContent").slideDown("fast");
          $(".contenuto, #listdx, .contenutoHome, .bottom").css("filter","blur(6px)");
      });

    $(".quartaDropdown").mouseleave(function(){
        $(".quartaDropdownContent").slideUp("fast");
        $(".contenuto, #listdx, .contenutoHome, .bottom").css("filter","blur(0px)");
    });

    //quarta
      $(".quintaDropdown").mouseenter(function(){
          $(".quintaDropdownContent").slideDown("fast");
          $(".contenuto, #listdx, .contenutoHome, .bottom").css("filter","blur(6px)");
      });

    $(".quintaDropdown").mouseleave(function(){
        $(".quintaDropdownContent").slideUp("fast");
        $(".contenuto, #listdx, .contenutoHome, .bottom").css("filter","blur(0px)");
    });



    //ACCESSO RAPIDO
    $( window ).scroll(function() {
      $( "#listdx" ).fadeIn( "slow" );
    });

});
