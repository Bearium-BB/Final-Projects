const subclass = ["Circle Of The Shepherd", "Circle Of The Land", "Circle Of The Moon","Circle Of Dreams","Circle Of Spores","Circle Of The Shepherd","Circle of the Land"];
const Races = ["Dwarf","Hill Dwarf","Mountain Dwarf","Deep Dward","Grey Dwarf","Elf","High Elf","Sylvan Elf","Halfling","Lightfoot","Human","Gnome","Rock Gnome","Half-Elf","Half Orc","Tiedling"];
function Stats() {

    var num1 = Math.floor((Math.random() * 19) + 1);
    var num2 = Math.floor((Math.random() * 19) + 1);
    var num3 = Math.floor((Math.random() * 19) + 1);
    var num4 = Math.floor((Math.random() * 19) + 1);
    var num5 = Math.floor((Math.random() * 19) + 1);
    var num6 = Math.floor((Math.random() * 19) + 1);
    var hp = Math.floor((Math.random() * 7) + 1);
    onclick=document.getElementById("rolls").innerHTML = "Rolled "+num1+",Rolled "+num2+",Rolled "+num3+",Rolled "+num4+",Rolled "+num5+",Rolled "+num6+",Basehealth dice "+hp;
    onclick=document.getElementById("SigningStats").innerHTML = "Str "+num1+"\n"+"Dex "+num2+"\n"+"Con "+num3+"\n"+"Int "+num4+"\n"+"Wis "+num5+"\n"+"Cha "+num6+"\n";
    subclassPicker()
    RacePicker()
    onclick=document.getElementById("Warning").innerHTML ="Warning:These are just the base stats they have no proficiencies added"
}  
function subclassPicker() {

    var SubclassPick = subclass[Math.floor(Math.random() * subclass.length)];
    onclick=document.getElementById("Subclass").innerHTML = "Your Subclass is "+SubclassPick;
}
function RacePicker() {
    var RacePick = Races[Math.floor(Math.random() * Races.length)];
    onclick=document.getElementById("Races").innerHTML = "Your Races is "+RacePick;
}
