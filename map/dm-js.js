function getUrlVars(){return location.search.substring(1).split(',');}

function LoadCoordinates(l,x,y){
var r=document.getElementById('map');
var href='<a href=?';
var li='LEVEL ('+href+l+','+x+','+y+'>'+l+','+x+','+y+'</a>)<span style="float:right;">'+href+'0,30,4>INVERTED MAP</a></span>';
var c=li+'<br><br>';
var n='';

document.getElementById('cel').style.top=((y-lvy)*14)+'px'; 
document.getElementById('cel').style.left=((x-lvx)*14)+'px';

if(l==0){
li='LEVEL ('+href+l+','+x+','+y+'>'+l+','+x+','+y+'</a>)<span style="float:right;">'+href+'1,31,45>NORMAL MAP</a></span>';
c=li+'<br><br>';

if(x==30&&y==4){n=c+'<a href=?1,31,45>Teleport to Inverted Castle</a>';}
else if(x==18&&y==32){n=c+'R01 Cube of Zoe: Causes pick-up items, such as Hearts, to drop from candles.';}
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
else if(x==44&&y==29){n=c+'01 Gold Ring';}
else if(x==40&&y==47){n=c+'02 Spike Breaker';}
else if(x==7&&y==11){n=c+'03 Silver Ring';}
else if(x==31&&y==27){n=c+'04 Holy Glases';}
else if(x==32&&y==21){n=c+'05 Heart Max Up<br>05 Alucart Shield';}
else if(x==33&&y==21){n=c+'03 Alucart Sword<br>04 Alucart Mail';}
else if(x==18&&y==35){n=c+'01 Heart Max Up';}
else if(x==16&&y==34){n=c+'02 Heart Max Up';}
else if(x==10&&y==30){n=c+'03 Heart Max Up';}
else if(x==32&&y==23){n=c+'04 Heart Max Up<br>05 HP Max Up';}
else if(x==35&&y==23){n=c+'06 Heart Max Up';}
else if(x==59&&y==11){n=c+'07 Heart Max Up';}
else if(x==51&&y==5){n=c+'08 Heart Max Up';}
else if(x==37&&y==3){n=c+'09 Heart Max Up';}
else if(x==38&&y==2){n=c+'10 Heart Max Up';}
else if(x==34&&y==4){n=c+'11 Heart Max Up';}
else if(x==25&&y==20){n=c+'12 Heart Max Up';}
else if(x==20&&y==15){n=c+'13 Heart Max Up';}
else if(x==28&&y==33){n=c+'14 Heart Max Up';}
else if(x==31&&y==47){n=c+'15 Heart Max Up<br>17 HP Max Up';}
else if(x==25&&y==46){n=c+'16 Heart Max Up';}
else if(x==2&&y==34){n=c+'01 HP Max Up';}
else if(x==13&&y==37){n=c+'02 HP Max Up';}
else if(x==19&&y==33){n=c+'03 HP Max Up';}
else if(x==11&&y==32){n=c+'04 HP Max Up';}
else if(x==30&&y==21){n=c+'06 HP Max Up';}
else if(x==60&&y==19){n=c+'07 HP Max Up';}
else if(x==49&&y==5){n=c+'08 HP Max Up';}
else if(x==37&&y==2){n=c+'09 HP Max Up';}
else if(x==38&&y==3){n=c+'10 HP Max Up';}
else if(x==13&&y==9){n=c+'11 HP Max Up';}
else if(x==36&&y==28){n=c+'12 HP Max Up';}
else if(x==41&&y==38){n=c+'13 HP Max Up';}
else if(x==29&&y==34){n=c+'14 HP Max Up';}
else if(x==28&&y==33){n=c+'15 HP Max Up';}
else if(x==24&&y==38){n=c+'16 HP Max Up';}
else{n=li;}
r.innerHTML=n;
}
if(l==1){
if(x==31&&y==45){n=c+'<a href=?0,30,4>Teleport to Normal Castle</a>';}
else if(x==22&&y==42){n=c+'R01 Ring of Vlad';}
else if(x==5&&y==29){n=c+'R02 Tooth of Vlad';}
else if(x==42&&y==36){n=c+'R03 Rib of Vlad';}
else if(x==38&&y==39){n=c+'R04 Heart of Vlad';}
else if(x==32&&y==12){n=c+'R05 Eye of Vlad';}
else if(x==45&&y==2){n=c+'R06 Gas Cloud';}
else if(x==7&&y==11){n=c+'R07 Force of Echo';}
else if(x==3&&y==41){n=c+'01 Dragon Helm';}
else if(x==29&&y==34){n=c+'02 Alucard Mail';}
else if(x==54&&y==37){n=c+'03 Twilight Cloak';}
else if(x==54&&y==10){n=c+'04 Alucard Shield';}
else if(x==33&&y==8){n=c+'05 Alucrad Sword';}
else if(x==29&&y==46){n=c+'01 Heart Max Up<br>01 HP Max Up';}
else if(x==28&&y==46){n=c+'02 Heart Max Up<br>02 HP Max Up';}
else if(x==27&&y==46){n=c+'03 Heart Max Up<br>03 HP Max Up';}
else if(x==12&&y==43){n=c+'04 Heart Max Up';}
else if(x==2&&y==24){n=c+'05 Heart Max Up';}
else if(x==28&&y==29){n=c+'06 Heart Max Up';}
else if(x==39&&y==29){n=c+'07 Heart Max Up<br>08 HP Max Up';}
else if(x==46&&y==36){n=c+'08 Heart Max Up';}
else if(x==58&&y==26){n=c+'09 Heart Max Up';}
else if(x==59&&y==24){n=c+'10 Heart Max Up';}
else if(x==51&&y==18){n=c+'11 Heart Max Up';}
else if(x==43&&y==16){n=c+'12 Heart Max Up';}
else if(x==24&&y==14){n=c+'13 Heart Max Up';}
else if(x==19&&y==23){n=c+'14 Heart Max Up';}
else if(x==30&&y==1){n=c+'15 Heart Max Up<br>14 HP Max Up';}
else if(x==45&&y==1){n=c+'16 Heart Max Up<br>15 HP Max Up';}
else if(x==10&&y==43){n=c+'04 HP Max Up';}
else if(x==1&&y==27){n=c+'05 HP Max Up';}
else if(x==26&&y==25){n=c+'06 HP Max Up';}
else if(x==32&&y==29){n=c+'07 HP Max Up';}
else if(x==41&&y==33){n=c+'09 HP Max Up';}
else if(x==48&&y==39){n=c+'10 HP Max Up';}
else if(x==52&&y==23){n=c+'11 HP Max Up';}
else if(x==43&&y==13){n=c+'12 HP Max Up';}
else if(x==32&&y==14){n=c+'13 HP Max Up';}
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