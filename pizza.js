  // Neglum hér í eitt gott pizza object
  function Pizza(name, price, size, topping) {
    this.name = name;
    this.price = price;
    this.size = size;
    this.topping = topping;
  }
  //Neglum í array af pizzum
  var Pizzas = [new Pizza('Magherita',195, 'Large', ['ostur', 'orgeano']),
  new Pizza('Combo', 1000, 'Medium', ['Pepperoni', 'Rjomaostur', 'Ananas']),
  new Pizza('Pepp og Svepp', 1430, 'Medium', ['Pepperoni', 'Sveppir']),
  new Pizza('Combo2', 1000, 'Medium', ['Pepperoni', 'Rjomaostur', 'Beikon'])];

  //Sækjum donald Elementið úr HTMLinu með því að nota getElementById
  //köllum það donald
  var donald = document.getElementById("trump"); //náum í trump

  //loopum í gegnum pizzu arrayinn okkar
  for(var i = 0; i < Pizzas.length; i++) {
    //donald.innerHTML til þess að skrifa inní donald elementið sem er trump divið í HTMLinu
    //síðan neglum við data inní div'ið og notum alltaf += til þess að yfirskirfa ekki það sem við vorum búin að setja inn
    donald.innerHTML += '<ul>'; // hérna hendum við í lista til að groupa hverja pizzu sér
    donald.innerHTML += '<li>Name: ' + Pizzas[i].name + '</li>'; //síðan sækjum við allt úr pizzuni og birtum inní listanum
    donald.innerHTML += '<li>Price: ' + Pizzas[i].price + '</li>'; // ...
    donald.innerHTML += '<li>Size: ' + Pizzas[i].size + '</li>'; // ...
    donald.innerHTML += '<li>Topping: ' + Pizzas[i].topping + '</li>'; //...
    donald.innerHTML += '</ul>'; //lokum síðan listanum
  }
