document.getElementById("subForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var subName = document.getElementById("subName").value;
    var ingredients = document.getElementById("ingredients").value;
    var toppings = document.querySelectorAll('input[name="toppings"]:checked');
    var sauce = document.getElementById("sauce").value;
    
 
    var sub = {
      name: subName,
      ingredients: ingredients,
      toppings: [],
      sauce: sauce
    };
  
    toppings.forEach(function(checkbox) {
     sub.toppings.push(checkbox.value);
    });

    console.log(Sub);
    
  
    document.getElementById("subForm").reset();
  });
