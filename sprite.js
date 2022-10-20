function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var bg = new Sprite(0, 0, 600, 600),
spriteBoneco = new Sprite(240, 788, 87, 87),
spriteErrou = new Sprite(1220 , 176 , 524, 365),
spriteJogar = new Sprite(757 , 96 , 300, 250),
spriteChao = new Sprite(0, 600, 600, 10);