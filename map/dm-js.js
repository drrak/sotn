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