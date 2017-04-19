function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var iPhone6S = new Telefon("Apple", 2250, "verysilver");
var SamsungGalaxyS8 = new Telefon("Samsung", 4000, "prettyblack");
var GooglePixel = new Telefon("Google", 3500, "reallyblue");

SamsungGalaxyS8.printInfo();



