/*Ride Everything Mod By FeeTheAwesomest*/

ModPe.addCraftRecipe(464, 1, 0, [334, 3, 0, 287, 2, 0]);
ModPe.setItem(464, "record_cat", 0, "Make Ride On You tool");
Item.setItemCategory(464,ItemCategory.TOOL);
ModPe.addCraftRecipe(463, 1, 0, [334, 3, 0, 287, 2, 0]);
ModPe.setItem(463, "record_blocks", 0, "Ride On tool");
Item.setItemCategory(463,ItemCategory.TOOL);
var items_opaque = "http://i.imgur.com/w5AHbXE.png";
ModPE.overrideTexture("images/items-opaque.png", items_opaque);