// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Get 'X' to Delete Todos
$("ul").on("click", "li span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// Add New Todo
$("input[type='text'").on("keypress", function(event) {
  if (event.which === 13) {
    // grab new todo text from input
    var todoText = $(this).val();
    // clear input text
    $(this).val("");
    // create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
})

// Add form toggle button effects
$(".fa-plus").on("click", function() {
  $("input[type='text']").fadeToggle();
});