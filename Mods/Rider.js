/*Ride Everything Mod By FeeTheAwesomest*/

var item=Player.getCarriedItem();

//Crafting for saddles
ModPe.addCraftRecipe(329, 1, 0, [334, 3, 0, 287, 2, 0]);
Item.setItemCategory(329,ItemCategory.TOOL);

//Hit a mob with a saddle to ride it
function attackHook(a, v) {
    if (a == Player.getEntity()) {
        if (329 == getCarriedItem()) {
          function rideAnimal(a,v);
        }
    }
}

//Hit a mob with any type of shovel
function attackHook(a, v) {
    if (a == Player.getEntity()) {
      if(item()==269||item()==274||item()==256||item()==284||item()==277) {
        function rideAnimal(v,a);
        }
    }
}