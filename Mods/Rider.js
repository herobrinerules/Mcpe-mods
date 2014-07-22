/*Ride Anything Mod By FeeTheAwesomest*/

var item=Player.getCarriedItem();

//Crafting for saddles
ModPe.addCraftRecipe(329, 1, 0, [334, 3, 0, 287, 2, 0]); //3 leather 2 string
Item.setItemCategory(329,ItemCategory.TOOL);

//Hit a mob with a saddle to ride it
function attackHook(a, v) {
    if (a == Player.getEntity()) {
        if (item=329) {
          function rideAnimal(a,v);
        }
    }
}

//Hit a mob with any type of shovel to make it ride you
function attackHook(a, v) {
    if (a == Player.getEntity()) {
      if(item==269||item==274||item==256||item==284||item==277) {
        function rideAnimal(v,a);
        }
    }
}