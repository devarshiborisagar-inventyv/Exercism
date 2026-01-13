// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size{
   constructor(_width=80,_height=60){
      this.width=_width;
      this.height=_height;
     
   }

  resize=function (_width=80,_height=60){
      this.width=_width;
       this.height=_height;
     
   }
    
}

export class Position {
  constructor(_x=0,_y= 0){
      this.x=_x;
      this.y=_y;
  }

  move=function (_x,_y) {
    this.x=_x;
    this.y=_y;
  }
}

export class ProgramWindow {
  
 
  constructor(){
    this.screenSize=new Size(800,600);
    this.size = new Size();
    this.position = new Position();

  }
  move=function (_position) {
    let newX=Math.max(0,_position.x);
    let newY=Math.max(0,_position.y);

      let maxX=this.screenSize.width - this.size.width;
      let maxY=this.screenSize.height - this.size.height;

    newX=Math.min(newX,maxX);
    newY=Math.min(newY,maxY);

    this.position.x=newX;
    this.position.y=newY;
  }
  resize=function (_size) {

    let newWidth = Math.max(1, _size.width);
    let newHeight = Math.max(1, _size.height);

    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    newWidth = Math.min(newWidth, maxWidth);
    newHeight = Math.min(newHeight, maxHeight);

    this.size.width = newWidth;
    this.size.height = newHeight;

        
      }

} 

export function changeWindow(programWindow) {

    console.log(programWindow.size);
    programWindow.resize(new Size(400,300));
    programWindow.move(new Position(100,150));

  return programWindow;
}