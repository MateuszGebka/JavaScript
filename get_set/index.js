
class Rectangle{
    
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width;
    }
    
    get height(){
        return this._height;
    }

    get area(){
        return this._height*this._width;
    }
}

const rectangle = new Rectangle(23, 43);

console.log(rectangle.width);

console.log(rectangle.height);

rectangle.width = 12;
rectangle.height = 10;

console.log(rectangle.width);

console.log(rectangle.height);


console.log(rectangle.area);

