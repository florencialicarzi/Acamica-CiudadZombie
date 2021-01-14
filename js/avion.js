/* 
CUIDADO CON LOS AVIONES BOMBARDEROS TE MATAN AL INSTANTE!!!!!!!!!!!!
Nacio de un error con el Zombie Conductor, no me lo discriminen jaja.
*/


var Avion = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {

   Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
   this.direccion= direccion;
}

Avion.prototype = Object.create(Enemigo.prototype);
Avion.prototype.constructor = Avion;


Avion.prototype.mover = function(){

	if (this.direccion= "v") {
		console.log(this);

		this.y -= this.velocidad;

		if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY) ){
    			this.velocidad *= -1;
    	}
	}

	if (this.direccion= "h") {

		this.x -= this.velocidad;

		if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    		this.velocidad *= -1;
    	}
	}
}

Avion.prototype.atacar = function(jugador) {
   Jugador.perderVidas(5);

   
}