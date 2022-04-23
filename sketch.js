
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//2. crea una nueva variable llamada ball

//6. crea las variables para el suelo y el bote de basura 
//lee la pista 6 fijate cuantas variables se estan mandando a llamar y cuales son los nombres
//pista extra (son tres variables)

function preload()
{
	
}

function setup() {
	//1. cambia el tamaño del lienzo, hazlo mas grande
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//3. crea las opciones para que la pelota tenga rebote (paso 3)

	//4. crea un cuerpo circular usando la libreria de matter y agregalo a un mundo
	//usa la variable que cabas de crear ball 

	//7. crea los objetos para la clase Ground, te ayudare con uno de los objetos
	//recuerda crear la variable 
	rightSide = new ground(1350,600,20,120);

	//copia el codigo que viene en el paso 6. de esta manera tendras formados todos los objetos
	//que se te piden

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //5. dibuja el cuerpo ball, recuerda que como es un circulo debes de usar ellipse 

  //8. manda a llamar el metodo display de la clase Ground para los tres objetos que creaste

  
  drawSprites();
 
}

//ADICIONAL: crea una funcion llamada keyPressed (Pista 2 al final del pdf)
//el codigo que te pide en esa pista es usando la funcion Matter.Body.applyForce
//este codigo se vio en la actividad de la clase



/*NOTA: TIENES QUE CREAR UNA CLASE LLAMADA Ground (TAL Y COMO LO VIMOS EN CLASE,
	BASICAMENTE ES IGUAL), ESTA CLASE LA LLAMARAS EN EL INDEX COMO ground.js,*/