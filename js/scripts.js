$(document).ready(function() {
  var animal = prompt("Choose an animal");

 // animals calling out value with in variable
  animals(animal);

function animals(selection) {
  if (animal === "Elephant") {
    $("#eleShow").show();
    $("#seaOtterShow").hide();
    $("#snowLeoShow").hide();
    $("#lionKingShow").hide();
    }

    else if (animal === "Lion") {
    $("#lionKingShow").show();
    $("#eleShow").hide();
    $("#seaOtterShow").hide();
    $("#snowLeoShow").hide();
    }

    else if (animal === "Sea Otter") {
    $("#seaOtterShow").show();
    $("#eleShow").hide();
    $("#lionKingShow").hide();
    $("#snowLeoShow").hide();
    }

   else if (animal === "Snow Leopard") {
    $("#snowLeoShow").show();
    $("#eleShow").hide();
    $("#seaOtterShow").hide();
    $("#lionKingShow").hide();
    }

    else {
      (animal ==="")
      $("#snowLeoShow").hide();
      $("#eleShow").hide();
      $("#seaOtterShow").hide();
      $("#lionKingShow").hide();
    }
  }
});
