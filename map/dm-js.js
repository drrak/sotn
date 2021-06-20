function getUrlVars(){return location.search.substring(1).split(',');}

function LoadCoordinates(l,x,y){
var r=document.getElementById('map');
var href='<a href=?';
var li='LEVEL ('+href+l+','+x+','+y+'>'+l+','+x+','+y+'</a>)<span style="float:right;">'+href+(l-1)+','+x+','+y+'>LEVEL UP</a>'+' | '+href+(l+1)+','+x+','+y+'>LEVEL DOWN</a></span>';
var lu=li+href+(l-1)+','+x+','+y+'><br><br>';
var ld=li+href+(l+1)+','+x+','+y+'><br><br>';
var su='. Stairs Up</a>';
var sd='. Stairs Down</a>';
var c=li+'<br><br>';
var n='';

document.getElementById('cel').style.top=((y-lvy)*14)+'px'; 
document.getElementById('cel').style.left=((x-lvx)*14)+'px';

if(l==0){
li='LEVEL ('+href+l+','+x+','+y+'>'+l+','+x+','+y+'</a>)<span style="float:right;">'+href+(l+1)+','+x+','+y+'>LEVEL DOWN</a></span>';
ld=li+href+(l+1)+','+x+','+y+'><br><br>';
c=li+'<br><br>';
var pp='<span id="champ"></span><br>';
var pe=0;

if(x==3&&y==15){n=ld+'01'+sd;}
else if(x==1&&y==4){n=c+'A. You can use the spell "See Through Walls" in front of the door to see Lord Order. If you come back here with the Firestaff (not completed with the power gem), the door opens, then you are teleported in front of Lord Order where you can see an alternate game end.';}
else if(x==9&&y==4){n=c+'B. Choose four <a href="http://dmweb.free.fr/?q=node/199">Dungeon Master Champions</a>.';}
else if(x==18&&y==32){n=c+'R01 Cube of Zoe<br>Effect: Causes pick-up items, such as Hearts, to drop from candles';}
else if(x==24&&y==27){n=c+'R02 Spitit Orb';}
else if(x==58&&y==14){n=c+'R03 Faerie Scroll';}
else if(x==48&&y==16){n=c+'R04 Jewel of Open (Shop)';}
else if(x==60&&y==14){n=c+'R05 Soul of Wolf';}
else if(x==30&&y==7){n=c+'R06 Leap Stone (Double jump)';}
else if(x==20&&y==18){n=c+'R07 Form of Mist';}
else if(x==47&&y==17){n=c+'R08 Soul of Bat';}
else if(x==51&&y==14){n=c+'R09 Faerie Card';}
else if(x==58&&y==7){n=c+'R10 Fire of Bat';}
else if(x==38&&y==3){n=c+'R11 Ghost Card';}
else if(x==30&&y==5){n=c+'R12 Power of Mist';}
else if(x==14&&y==29){n=c+'R13 Skill of Wolf';}
else if(x==12&&y==23){n=c+'R14 Bat Card';}
else if(x==33&&y==19){n=c+'R15 Gravity Boots (D,U+Jump)';}
else if(x==15&&y==12){n=c+'R16 Echo of Bat';}
else if(x==1&&y==34){n=c+'R17 Power of Wolf';}
else if(x==7&&y==38){n=c+'R18 Merman Statue';}
else if(x==28&&y==40){n=c+'R19 Demon Card';}
else if(x==54&&y==37){n=c+'R20 Holy Symbol';}
else if(x==19&&y==14){n=c+'R21 Sword Card';}
else if(x==8&&y==4){n=c+'I01. "Hall Of Champions"';}
else if(x==10&&y==4){n=c+pp+'C01. Iaido Ruyito Chiburi<br>Equipment: Ghi, Ghi Trousers, Samurai Sword';pe=0;}
else if(x==10&&y==5){n=c+pp+'C02. Zed Duke Of Banville<br>Equipment: Mail Aketon, Blue Pants, Hosen, Torch';pe=58;}
else if(x==14&&y==3){n=c+pp+'C03. Chani Sayyadina Sihaya<br>Equipment: Silk Shirt, Gunna, Sandals, Moonstone';pe=116;}
else if(x==15&&y==4){n=c+pp+'C04. Hawk The Fearless<br>Equipment: Leather Jerkin, Leather Pants, Suede Boots, Arrow (2)';pe=174;}
else if(x==14&&y==6){n=c+pp+'C05. Boris Wizard Of Baldor<br>Equipment: Tunic, Leather Pants, Leather Boots, Rabbit\'s Foot #1';pe=232;}
else if(x==16&&y==8){n=c+pp+'C06. Alex Ander<br>Equipment: Leather Jerkin, Leather Pants, Suede Boots, Sling';pe=290;}
else if(x==17&&y==9){n=c+pp+'C07. Nabi The Prophet<br>Equipment: Tunic, Blue Pants, Sandals, Staff';pe=348;}
else if(x==16&&y==14){n=c+pp+'C08. Hissssa Lizar Of Makan<br>Equipment: None';pe=406;}
else if(x==16&&y==17){n=c+pp+'C09. Gothmog<br>Equipment: Cloak of Night';pe=464;}
else if(x==14&&y==12){n=c+pp+'C10. Sonja She Devil<br>Equipment: Halter, Gunna, Sandals, Choker, Sword';pe=522;}
else if(x==13&&y==12){n=c+pp+'C11. Leyla Shadowseek<br>Equipment: Silk Shirt, Leather Pants, Leather Boots, Rope';pe=580;}
else if(x==13&&y==14){n=c+pp+'C12. Mophus The Healer<br>Equipment:  Robe (Body), Robe (Legs), Sandals, Bread, Cheese, Apple';pe=638;}
else if(x==12&&y==13){n=c+pp+'C13. Wuuf The Bika<br>Equipment: Leather Jerkin, Empty Flask';pe=696;}
else if(x==11&&y==15){n=c+pp+'C14. Stamm Bladecaster<br>Equipment: Tunic, Leather Pants, Suede Boots, Axe';pe=754;}
else if(x==7&&y==16){n=c+pp+'C15. Azizi Johari<br>Equipment: Halter, Barbarian Hide, Hide Shield, Dagger (2)';pe=812;}
else if(x==8&&y==15){n=c+pp+'C16. Leif The Valiant<br>Equipment: Leather Jerkin, Leather Pants, Leather Boots';pe=870;}
else if(x==9&&y==13){n=c+pp+'C17. Tiggy Tamal<br>Equipment: Kirtle, Gunna, Sandals, Wand';pe=928;}
else if(x==7&&y==13){n=c+pp+'C18. Wu Tse Son Of Heaven<br>Equipment: Silk Shirt, Tabard, Sandals, Throwing Star (3)';pe=986;}
else if(x==6&&y==13){n=c+pp+'C19. Daroou<br>Equipment: None';pe=1044;}
else if(x==7&&y==9){n=c+pp+'C20. Halk The Barbarian<br>Equipment: Bezerker Helm, Barbarian Hide, Sandals, Club';pe=1102;}
else if(x==9&&y==9){n=c+pp+'C21. Syra Child Of Nature<br>Equipment: Elven Doublet, Tabard, Apple';pe=1160;}
else if(x==11&&y==10){n=c+pp+'C22. Gando Thurfoot<br>Equipment: Leather Jerkin, Blue Pants, Leather Boots, Poison Dart (2)';pe=1218;}
else if(x==12&&y==9){n=c+pp+'C23. Linflas<br>Equipment: Elven Doublet, Elven Huke, Elven Boots, Bow';pe=1276;}
else if(x==9&&y==7){n=c+pp+'C24. Elija Lion Of Yaitopya<br>Equipment: Robe (Body), Robe (Legs), Sandals, Magical Box (Blue)';pe=1334;}
else{n=li;}
r.innerHTML=n;
var cp=document.getElementById('champ');
if(cp!==null){cp.style.backgroundPosition='0px -'+pe+'px';}
}
if(l==1){
if(x==3&&y==15){n=lu+'01'+su;}
else if(x==6&&y==40){n=ld+'02'+sd;}
else if(x==7&&y==22 || x==24&&y==19 || x==13&&y==29){n=ld+'Pit</a>';}
else if(x==22&&y==42){n=c+'R01 Ring of Vlad';}
else if(x==5&&y==29){n=c+'R02 Tooth of Vlad';}
else if(x==42&&y==36){n=c+'R03 Rib of Vlad';}
else if(x==38&&y==39){n=c+'R04 Heart of Vlad';}
else if(x==32&&y==12){n=c+'R05 Eye of Vlad';}
else if(x==45&&y==2){n=c+'R06 Gas Cloud';}
else if(x==7&&y==11){n=c+'R07 Force of Echo';}
else if(x==6&&y==14){n=c+'01. Club';}
else if(x==6&&y==17){n=c+'02. Corn, Apple, Dagger, Falchion, Scroll ("Small details can hide great rewards")';}
else if(x==0&&y==16){n=c+'03. Gold Key<br>L01. Gold Key';}
else if(x==1&&y==23){n=c+'04. Topaz Key';}
else if(x==7&&y==23){n=c+'05. Leather Boots, Gold Key';}
else if(x==8&&y==19){n=c+'06. Elven Doublet, Dagger, Arrow, Torch, Emerald Key';}
else if(x==4&&y==30){n=c+'07. Rock';}
else if(x==15&&y==24){n=c+'08. Iron Key, Ghi Trousers';}
else if(x==14&&y==21){n=c+'09. Solid Key';}
else if(x==13&&y==22){n=c+'10. Falchion';}
else if(x==14&&y==22){n=c+'11. Torch, Leather Boots';}
else if(x==8&&y==17){n=c+'12. Gold Key';}
else if(x==13&&y==19){n=c+'13. Gold Key';}
else if(x==25&&y==14){n=c+'14. Boulder';}
else if(x==30&&y==15){n=c+'15. Gold Key, Apple';}
else if(x==17&&y==25){n=c+'16. Apple';}
else if(x==29&&y==25){n=c+'17. Rock';}
else if(x==31&&y==20){n=c+'18. Iron Key';}
else if(x==31&&y==24){n=c+'19. Key of B';}
else if(x==19&&y==25){n=c+'20. Drumstick, Empty flask (3), Leather pants, Scroll ("Casting Vi Bro into a flask creates a serum for curing poison"), Scroll ("Casting Vi into a flask creates a serum that heals wounds")';}
else if(x==16&&y==27){n=c+'21. Apple, Cheese (2), Torch';}
else if(x==13&&y==28){n=c+'22. Gold Key, Throwing Star';}
else if(x==30&&y==33){n=c+'23. Copper Coin';}
else if(x==30&&y==39){n=c+'24. Torch';}
else if(x==27&&y==43){n=c+'25. Chest [Ya potion (2), Scroll ("Drink these to gain magical defense")]';}
else if(x==12&&y==44){n=c+'26. Throwing Star';}
else if(x==13&&y==43){n=c+'27. Water';}
else if(x==14&&y==42){n=c+'28. Apple';}
else if(x==16&&y==42){n=c+'29. Falchion';}
else if(x==15&&y==45){n=c+'30. Magical Box (Blue)';}
else if(x==5&&y==32){n=c+'31. Buckler';}
else if(x==2&&y==45){n=c+'32. Chest [Drumstick, Empty Flask, Corn, Cheese, Bread (2), Magical Box (Blue), Scroll ("Des Ven will conjure a poison spell")]';}
else if(x==6&&y==43){n=c+'33. Torch';}
else if(x==29&&y==16){n=c+'I01. "Step inside take a ride"';}
else if(x==22&&y==22){n=c+'I02. "This wall says nothing"';}
else if(x==13&&y==30){n=c+'I03. "To close pit leave a valuable on floor"';}
else if(x==28&&y==41){n=c+'I04. "None shall pass"';}
else if(x==18&&y==40){n=c+'I05. "This fountain accepts one wish"<br>L13. Copper Coin';}
else if(x==3&&y==19){n=c+'L02. Topaz Key';}
else if(x==5&&y==19){n=c+'L03. Gold Key';}
else if(x==11&&y==27){n=c+'L04. Emerald Key';}
else if(x==2&&y==27){n=c+'L05. Iron Key';}
else if(x==5&&y==27){n=c+'L06. Solid Key';}
else if(x==10&&y==14){n=c+'L07. Gold Key';}
else if(x==22&&y==19){n=c+'L08. Gold Key<br>05. Screamer (2)';}
else if(x==28&&y==18){n=c+'L09. Gold Key';}
else if(x==30&&y==21){n=c+'L10. Iron Key';}
else if(x==24&&y==24){n=c+'L11. Key of B';}
else if(x==21&&y==35){n=c+'L12. Gold Key';}
else if(x==6&&y==16){n=c+'01. Mummy';}
else if(x==4&&y==27){n=c+'02. Screamer';}
else if(x==11&&y==19){n=c+'03. Screamer';}
else if(x==13&&y==18){n=c+'04. Screamer (4)';}
else if(x==27&&y==16){n=c+'06. Mummy';}
else if(x==31&&y==23){n=c+'07. Screamer';}
else if(x==24&&y==27){n=c+'08. Mummy';}
else if(x==16&&y==30){n=c+'09. Screamer (2)';}
else if(x==27&&y==34){n=c+'10. Mummy (3)';}
else if(x==20&&y==43){n=c+'11. Screamer (4)';}
else if(x==8&&y==38){n=c+'12. Screamer (4) [Torch, Empty Flask]';}
else if(x==5&&y==38){n=c+'13. Screamer [Throwing Star]';}
else if(x==3&&y==32){n=c+'14. Mummy (4)';}
else if(x==1&&y==33){n=c+'15. Mummy (2)';}
else{n=li;}
r.innerHTML=n;
}
}

function GetCoordinates(l,x,y){
var rx=(Math.floor(x/14))*1;
var ry=(Math.floor(y/14))*1;
var px=rx+lvx;
var py=ry+lvy;
var mapw=lvw-lvx-1;
var maph=lvh-lvy-1;

if(rx<=mapw&&rx>0&&ry<=maph&&ry>0){
document.getElementById('cel').style.top=(ry*14)+'px'; 
document.getElementById('cel').style.left=(rx*14)+'px'; 
LoadCoordinates(l,px,py);
}
}