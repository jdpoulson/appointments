$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    var NameInput = $("input#Name").val();
    var DescriptionInput = $("input#Description").val();
    var DateInput = $("input#Date").val();
    var TimeInput = $("input#Time").val();

    $(".Name").text(NameInput);
    $(".Description").text(DescriptionInput);
    $(".Date").text(DateInput);
    $(".Time").text(TimeInput);

    $("#confirmation").show();
    $("#appointment").hide();
    event.preventDefault();
  });
});
