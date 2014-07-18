/*Ride Everything Mod By FeeTheAwesomest*/

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