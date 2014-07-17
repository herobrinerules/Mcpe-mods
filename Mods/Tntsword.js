/* TNT sword script mod by FeeTheAwesomest
Thank to Darth377 for helping me about the explode code
Thank to Xtremegamer653 for making a tutorial on custom textures */
 
ModPe.addCraftRecipe(405, 1, 0, [46, 2, 0, 280, 1, 0]);
ModPe.setItem(405, "fireball", 0, "TNT Sword");
Item.setItemCategory(405,ItemCategory.TOOL);
var items_opaque = "http://i.imgur.com/w5AHbXE.png";
ModPE.overrideTexture("images/items-opaque.png", items_opaque);
 
 
function attackHook(a,v) {
{
    if(Player.getCarriedItem() == 405)
        x = Entity.getX(v);
        y = Entity.getY(v);
        z = Entity.getZ(v);
        r = 3
        Level.explode(x,y,z,r);
        clientMessage("BOOOOOOOM!!");
    }
 
}
 
 
 
function ModPE.leaveGame() {
 
print("Reseting Textures");
ModPE.resetImages();
print("Reset Textures Completed");
}