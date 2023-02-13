class Rodinhas //prototipo
{ 
  constructor(x,y,width,height)
  {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    var options = 
    {
        isStatic: true
    }
 
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    
    World.add(world, this.body);

  }

    display() 
    {
        var pos = this.body.position; //transformar a posição
        push(); //abrir uma caixa
        translate(pos.x, pos.y); //posição dentro da tela
        
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop(); //fechar a caixa organizadora :)
    }

}