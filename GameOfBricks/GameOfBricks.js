var canvas = document.getElementById("canvas");
var processing = new Processing(canvas, function(processing) {
    processing.size(400, 400);
    processing.background(0xFFF);

    var mouseIsPressed = false;
    processing.mousePressed = function () { mouseIsPressed = true; };
    processing.mouseReleased = function () { mouseIsPressed = false; };

    var keyIsPressed = false;
    processing.keyPressed = function () { keyIsPressed = true; };
    processing.keyReleased = function () { keyIsPressed = false; };

    function getImage(s) {
        var url = "https://www.kasandbox.org/programming-images/" + s + ".png";
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    function getLocalImage(url) {
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }

    // use degrees rather than radians in rotate function
    var rotateFn = processing.rotate;
    processing.rotate = function (angle) {
        rotateFn(processing.radians(angle));
    };

    with (processing) {
      
var stHealth = 1.5;
var health = stHealth;
var scene = 1;
var level = 1;
var ln = level;
//var passedLevel = 1;
var win = false;
var coins = 5;
var times2Coins = false;
var speedCost = 10;
var speedAddValue = 0.5;
var healthCost = 10;
var healthAddValue = 0.5;

//var X2CoinsAddValue = 0.5;
var n = 100;
var n2 = false;
var t = false;
var keys = [];
var keyPressed = function()
{
    keys[keyCode] = true;
};
var keyReleased=function(){
    keys[keyCode] = false;
};
var starAmount = 80;
//et the speeds for each layer of stars
var Speed = 7;
var Speed2 = 3.5;
//Create a function for creating stars.
var Stars = function(x,y,starSize,speed,starsGridSize,Fill) {
    this.x = x;
    this.y = y;
    this.starSize = starSize;
    this.speed = speed;
    this.Fill = color(random(0,255),random(0,255),random(0,255));
    this.starsGridSize = starsGridSize;
};
//Draw the stars using the stars function.
Stars.prototype.draw = function() {
    fill(this.Fill);
    ellipse(this.x,this.y,this.starSize,this.starSize);
};
//Create arrays to create stars in.
var stars = [];
var stars2 = [];
//Make the stars in the arrays.
for(var i = 0; i < starAmount; i++)
{
    stars[i] = new Stars(random(0, 400), random(0, 450), 4 , Speed, 400);
    stars2[i] = new Stars(random(0, 400), random(0, 450), 3 , Speed2, 400);
}


var sprite1 = {
    
    Move : function(keysCode,XPos,YPos)
    {  
       
             switch(keysCode)
            {
                case UP:
                    this.YPos -= this.velocity;
                    this.shootY -= this.velocity;
                    this.shootUP = true;
                    this.shootDOWN = false;
                    this.shootRIGHT = false;
                    this.shootLEFT = false;
                    break;
            
                case DOWN:
                    this.YPos += this.velocity;
                    this.shootY += this.velocity;
                    this.shootDOWN = true;
                    this.shootUP = false;
                    this.shootRIGHT = false;
                    this.shootLEFT = false;
                    break;
                case LEFT :
                    this.XPos -= this.velocity;
                    this.shootX -= this.velocity;
                    this.shootLEFT = true;
                    this.shootRIGHT = false;
                    this.shootDOWN = false;
                    this.shootUP = false;
                    break;
                    
                case RIGHT:
                    this.XPos += this.velocity; 
                    this.shootX += this.velocity;
                    this.shootRIGHT = true;
                    this.shootLEFT = false;
                    this.shootDOWN = false;
                    this.shootUP = false;
                    break;

            
           }
        
        this.Draw();
        this.LastkeysCode = keysCode;
    },
    
    Restart : function(XPos,YPos,startingXPos,startingYPos)
    {
        if(health <= 0 || win === true)
        { 
            this.XPos = this.startingXPos;
            this.YPos = this.startingYPos;
            this.shootX = this.startingXPos;
            this.shootY = this.startingYPos;
            health = stHealth;
            win = false;
            
        }
    },
   
    Wrap : function(XPos,YPos)
    {
       if(this.XPos > 400)
       {
          this.XPos = 0;
          this.shootX = 0;
       }
       if(this.XPos < 0)
       {
          this.XPos = 400;
          this.shootX = 400;
       }
       if(this.YPos > 400)
       {
          this.YPos = 0;
          this.shootY = 0;
       }
       if(this.YPos < 0)
       {
          this.YPos = 400;
          this.shootY = 400;
       }
    },
    
    Stop : function()
    {
        switch(this.LastkeysCode)
        {
            case UP:
                this.Move(DOWN);
                break;
            
            case DOWN:
                this.Move(UP);
                break;
            
            case LEFT:
                this.Move(RIGHT);
                break;
            
            case RIGHT:
                this.Move(LEFT);
                break;
        } 
    },
    
    Draw : function(move)
    {
        
           
           fill(0, 255, 13);
           //rect(this.shootX, this.shootY, this.shootW, this.shootH);
           rect(this.shootX, this.shootY, this.shootW, this.shootH);
           fill(255, 0, 0);
           rect(this.XPos, this.YPos, this.Width, this.Height);
            if( keys.toString() === 's')
           {
               this.startShoot = true;
           }else 
           {
               this.startShoot = true;
           }
           if(mousePressed && this.startShoot === true)
           {
           if(this.shootUP && keys.toString() === 's')
           {
                this.shootY -= this.shootSpeed;
           }
           if(this.shootDOWN && keys.toString() === 's')
           {
                this.shootY += this.shootSpeed;
           } 
           if(this.shootLEFT && keys.toString() === 's')
           {
                this.shootX -= this.shootSpeed;
           } 
           if(this.shootRIGHT && keys.toString() === 's')
           {
                this.shootX += this.shootSpeed;
           }
           }
           if(mouseReleased)
           {
           if(this.shootUP)
           {
                this.shootY -= this.shootSpeed;
           }
           if(this.shootDOWN)
           {
                this.shootY += this.shootSpeed;
           }
           if(this.shootLEFT)
           {
                this.shootX -= this.shootSpeed;
           } 
           if(this.shootRIGHT)
           {
                this.shootX += this.shootSpeed;
           }
           }
    },
    
    i : getImage("avatars/leafers-tree"),
    startingXPos : 350,
    startingYPos : 355,
    shootX :  350,
    shootY :  355,
    shootW :  30,
    shootH :  30,
    shootUP : false,
    shootDOWN : false,
    shootLEFT : false,
    shootRIGHT : false,
    startShoot : false,
    Width : 20,
    Height : 20,
    XPos : 350,
    YPos : 355,
    shootSpeed : 2,
    velocity : 1.3,
    LastkeysCode : 0
    
};
var block = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
        fill(0, 0, 255);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
        }
        
    },
    
    Width : [68,60,60,400,120,10,10],
    Height : [87,20,20,20,10,100,200],
    XPos : [52,-5,-5,0,130,390,390],
    YPos : [91,168,80,380,300,0,180],
    
};
var teliporterBlock = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
        fill(14, 138, 99);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
        fill(135, 245, 0);
ellipse(this.XPos[i]+this.Width[i]/2,this.YPos[i]+this.Height[i]/2,this.Width[i]/2,this.Height[i]/2);
        fill(14, 138, 99);
        rect(this.XPos2[i], this.YPos2[i], this.Width2[i], this.Height2[i]);
        fill(245,5, 0);
ellipse(this.XPos2[i]+this.Width2[i]/2,this.YPos2[i]+this.Height2[i]/2,this.Width2[i]/2,this.Height2
[i]/2);
        }
        
    },
    
    Width : [35],
    Height : [35],
    XPos : [230],
    YPos : [170],
    Width2 : [35],
    Height2 : [35],
    XPos2 : [30],
    YPos2 : [245],
};
var movableBlock = {
    
    Move : function(keysCode,XPos,YPos)
    {  
        for(var i = 0; i < this.Width.length; i++) 
        {
                switch(keysCode)
                {
                    case UP:
                         this.YPos[i] -= this.velocity;
                         break;
            
                    case DOWN:
                         this.YPos[i] += this.velocity;
                         break;
            
                    case LEFT:
                         this.XPos[i] -= this.velocity;
                         break;
            
                    case RIGHT:
                        this.XPos[i] += this.velocity; 
                        break;
                
                }
        }
        
        this.Draw();
        this.LastkeysCode = keysCode;
    },
    
    Restart : function(XPos,YPos,startingXPos,startingYPos)
    {
         for(var i = 0; i < this.Width.length; i++) 
        {
           if(health <= 0 || win === true)
           { 
            this.XPos[i] = this.startingXPos[i];
            this.YPos[i] = this.startingYPos[i];
            }
        }
    },
   
    Wrap : function(XPos,YPos)
    {
        
         for(var i = 0; i < this.Width.length; i++) 
        {
            if(this.XPos[i] > 400)
           {
               this.XPos[i] = 0;
           }
           if(this.XPos[i] < 0)
           {
             this.XPos[i] = 400;
           }
         
           if(this.YPos[i] > 400)
           {
               this.YPos[i] = 0;
           }
           if(this.YPos[i] < 0)
           {
               this.YPos[i] = 400;
           }
        }
    },
    
    Stop : function()
    {
        switch(this.LastkeysCode)
        {
            case UP:
                this.Move(DOWN);
                break;
            
            case DOWN:
                this.Move(UP);
                break;
            
            case LEFT:
                this.Move(RIGHT);
                break;
            
            case RIGHT:
                this.Move(LEFT);
                break;
        } 
    },
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
        fill(0, 150, 255);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
        }
        
    },
    
    Width : [40],
    Height : [40],
    XPos : [130],
    YPos : [192],
    velocity : sprite1.velocity,
};
var goalBlock = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
        fill(255, 34, 0);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
        fill(0, 0, 0);
        text("Goal",this.XPos[i] + this.Width[i] / 6, this.YPos[i] + this.Height[i] / 3.5);
        }
      
    },
    
    Width : [30],
    Height : [30],
    XPos : [64],
    YPos : [20],
    
};
var infoBlock = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
            
        fill(82, 105, 22);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
        fill(255, 255, 255);
        line(this.XPos[i], this.YPos[i] + 10, this.XPos[i] + this.Width[i] ,  this.YPos[i] + 10);
        line(this.XPos[i] + 5,this.YPos[i] + 15,this.XPos[i] + this.Width[i] - 5,this.YPos[i] + 15);
        line(this.XPos[i], this.YPos[i] + 20, this.XPos[i] + this.Width[i] ,  this.YPos[i] + 20);
        }
        
    },
    Width : [30],
    Height : [30],
    XPos : [220],
    YPos : [270],
   
};
var deathBlock = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
        fill(255, 115, 0);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
        }
        
    },
    
    Width : [30],
    Height : [25],
    XPos : [290],
    YPos : [260],
    
};
{
var bntMovingDeathBlock = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
          if(this.switched === false)
          {
           fill(255, 0, 0);
           this.tggled = 0;
          }else if(this.switched === true){
              fill(0, 255, 180);
              this.tggled = this.Width[i] / 3.5;
          }
        rect(this.XPos[i] + this.tggled, this.YPos[i] - this.Height[i], 
        this.Width[i] / 2, this.Height[i] * 1.5);  
        fill(221, 255, 0);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
       
            
        }
    },
    
    Width : [10],
    Height : [10],
    XPos : [165],
    YPos : [370],
    tggled : 0,
    switched : false,
  
};
var movingDeathBlock = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
        fill(255, 115, 0);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
        
        if(bntMovingDeathBlock.switched === false)
        {
         if(this.XorYRange[i] === 0)
            { 
                rect(this.RangeStartPos[i], this.YPos[i], this.Width[i] + 3, this.Height[i] + 10);
                this.XPos[i] += this.RangeSpeed[i];
                if(this.XPos[i] > this.RangeEndPos[i])
                {
                    this.XPos[i] = this.RangeStartPos[i];
                }
            }else if(this.XorYRange[i] === 1) 
            {
                rect(this.XPos[i], this.RangeStartPos[i], this.Width[i] + 10, this.Height[i] + 3);
                this.YPos[i] += this.RangeSpeed[i];
                if(this.YPos[i] > this.RangeEndPos[i])
                {
                    this.YPos[i] = this.RangeStartPos[i];
                }
                
            }
        }  
        }
    },
    
    Width : [10],
    Height : [2],
    XPos : [120],
    YPos : [160],
    
    XorYRange : [0],
    RangeStartPos: [120],
    RangeEndPos: [410],
    RangeSpeed : [4],
  
};
var movingDeathBlock2 = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
        fill(255, 115, 0);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
        
         if(this.XorYRange[i] === 0)
            { 
                rect(this.RangeStartPos[i], this.YPos[i], this.Width[i] + 3, this.Height[i] + 10);
                this.XPos[i] += this.RangeSpeed[i];
                if(this.XPos[i] > this.RangeEndPos[i])
                {
                    this.XPos[i] = this.RangeStartPos[i];
                }
            }else if(this.XorYRange[i] === 1) 
            {
                rect(this.XPos[i], this.RangeStartPos[i], this.Width[i] + 10, this.Height[i] + 3);
                this.YPos[i] += this.RangeSpeed[i];
                if(this.YPos[i] > this.RangeEndPos[i])
                {
                    this.YPos[i] = this.RangeStartPos[i];
                }
                
            }
            
        }
    },
    
    Width : [10,9,3],
    Height : [2,6,5],
    XPos : [120,120,125],
    YPos : [160,110,320],
    
    XorYRange : [0,0,1],
    RangeStartPos: [120,120,10],
    RangeEndPos: [410,410,410],
    RangeSpeed : [4,3,5],
  
};
var movingDeathBlock3 = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
        fill(255, 115, 0);
        rect(this.XPos[i], this.YPos[i], this.Width[i], this.Height[i]);
        
         if(this.XorYRange[i] === 0)
            { 
                rect(this.RangeStartPos[i], this.YPos[i], this.Width[i] + 3, this.Height[i] + 10);
                this.XPos[i] += this.RangeSpeed[i];
                if(this.XPos[i] > this.RangeEndPos[i])
                {
                    this.XPos[i] = this.RangeStartPos[i];
                }
            }else if(this.XorYRange[i] === 1) 
            {
                rect(this.XPos[i], this.RangeStartPos[i], this.Width[i] + 10, this.Height[i] + 3);
                this.YPos[i] += this.RangeSpeed[i];
                if(this.YPos[i] > this.RangeEndPos[i])
                {
                    this.YPos[i] = this.RangeStartPos[i];
                }
                
            }
            
        }
    },
    
    Width : [1,9,3,3,3],
    Height : [5,6,5,3,3],
    XPos : [180,120,125,190,150],
    YPos : [160,10,320,150,100],
    
    XorYRange : [1,0,1,0,0],
    RangeStartPos: [160,120,10,190,150],
    RangeEndPos: [410,410,410,410,410],
    RangeSpeed : [4,5,7,3,4],
  
};
var coin = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
            if(this.shone[i] === true)
            {
              fill(255, 255, 0);
        
rect(this.XPos[i] + this.Width[i] / 4, this.YPos[i] + this.Height[i] / 4, this.Width[i] / 2, this.Height[i] / 2);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, this.Width[i], this.Width[i]);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, 
this.Width[i] - 10, this.Width[i] - 10);
 fill(0, 0, 0);
 textSize(this.Width[i] / 4);
text(this.value,this.XPos[i] + this.Width / 4,this.YPos[i] + this.Height / 3);
                   }
        }
        if(this.shone[i] === false)
        {
            this.value[i] = 0;
        }
        
    },
    value : [1],
    Width : [5],
    Height : [5],
    XPos : [135],
    YPos : [90],
    shone : [true],
};   
var coin2 = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
            if(this.shone[i] === true)
            {
              fill(255, 255, 0);
        
rect(this.XPos[i] + this.Width[i] / 4, this.YPos[i] + this.Height[i] / 4, this.Width[i] / 2, this.Height[i] / 2);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, this.Width[i], this.Width[i]);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, 
this.Width[i] - 10, this.Width[i] - 10);
 fill(0, 0, 0);
 textSize(this.Width[i] / 4);
text(this.value,this.XPos[i] + this.Width / 4,this.YPos[i] + this.Height / 3);
                   }
        }
        if(this.shone[i] === false)
        {
            this.value[i] = 0;
        }
        
    },
    value : [5],
    Width : [10],
    Height : [10],
    XPos : [205],
    YPos : [95],
    shone : [true],
};    
var coin3 = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
            if(this.shone[i] === true)
            {
              fill(255, 255, 0);
        
rect(this.XPos[i] + this.Width[i] / 4, this.YPos[i] + this.Height[i] / 4, this.Width[i] / 2, this.Height[i] / 2);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, this.Width[i], this.Width[i]);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, 
this.Width[i] - 10, this.Width[i] - 10);
 fill(0, 0, 0);
 textSize(this.Width[i] / 4);
text(this.value,this.XPos[i] + this.Width / 4,this.YPos[i] + this.Height / 3);
                   }
        }
        if(this.shone[i] === false)
        {
            this.value[i] = 0;
        }
        
    },
    value : [5],
    Width : [10],
    Height : [10],
    XPos : [205],
    YPos : [95],
    shone : [true],
};    
var coin4 = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
            if(this.shone[i] === true)
            {
              fill(255, 255, 0);
        
rect(this.XPos[i] + this.Width[i] / 4, this.YPos[i] + this.Height[i] / 4, this.Width[i] / 2, this.Height[i] / 2);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, this.Width[i], this.Width[i]);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, 
this.Width[i] - 10, this.Width[i] - 10);
 fill(0, 0, 0);
 textSize(this.Width[i] / 4);
text(this.value,this.XPos[i] + this.Width / 4,this.YPos[i] + this.Height / 3);
                   }
        }
        if(this.shone[i] === false)
        {
            this.value[i] = 0;
        }
        
    },
    value : [12],
    Width : [25],
    Height : [25],
    XPos : [30],
    YPos : [125],
    shone : [true],
};   
var masterCoin = {
    
    Draw : function()
    {
        for(var i = 0; i < this.Width.length; i++) 
        {
            if(this.shone[i] === true)
            {
                //+ this.Width / 2,this.YPos); //+ this.Height / 2);
               fill(255, 255, 0);
        
rect(this.XPos[i] + this.Width[i] / 4, this.YPos[i] + this.Height[i] / 4, this.Width[i] / 2, this.Height[i] / 2);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, this.Width[i], this.Width[i]);
ellipse(this.XPos[i] + this.Width[i] / 2, this.YPos[i] + this.Height[i] / 2, 
this.Width[i] - 10, this.Width[i] - 10);
 fill(0, 0, 0);
 textSize(this.Width[i] / 4);
text(this.value,this.XPos[i] + this.Width / 4,this.YPos[i] + this.Height / 3);
                   }
        }
        if(this.shone[i] === false)
        {
            this.value[i] = 0;
        }
        
    },
    value : [1000], 
    Height : [140],
    Width : [140],
    XPos : [100],
    YPos : [100],
    shone : [true],
};  
var Observer = {
    
  ObjectsColliding : function(obj1, obj2)
    {
        var colliding = false;
        for(var n = 0; n < obj1.XPos.length; n++) 
       {
            if (obj2.XPos + obj2.Width >= obj1.XPos[n] &&
               obj2.XPos <= obj1.XPos[n] + obj1.Width[n])
            {
                if (obj2.YPos + obj2.Height >= obj1.YPos[n] &&
                    obj2.YPos <= obj1.YPos[n] + obj1.Height[n])
                {
                colliding = true;
                }
            }
        } 
        return colliding;
    }
  
};
}
{
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color1 = config.color1 || 0;
    this.color2 = config.color2 || 234;
    this.color3 = config.color3 || 255;
};

Button.prototype.draw = function() {
    fill(this.color1, this.color2, this.color3);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};
}
{
var start = new Button({
    x: 145,
    y: 110,
     width :100,
    height :40, 
    color1 : 4,
    color2 : 145,
    color3 : 60,
    label: "    Level"
});
var secret = new Button({
    x: 335,
    y: 365,
     width :65,
    height :40, 
    color1 : 4,
    color2 : 45,
    color3 : 40,
    label: "secret"
});


var secret2 = new Button({
    x: 155,
    y: 145,
     width :65,
    height :40, 
    color1 : 4,
    color2 : 45,
    color3 : 40,
    label: "click"
});
var HowTo = new Button({
    x: 145,
    y: 230,
     width :100,
    height :40, 
    color1 : 4,
    color2 : 145,
    color3 : 60,
    label: "  How To"
});
var shop = new Button({
    x: 145,
    y: 170,
     width :100,
    height :40, 
    color1 : 4,
    color2 : 145,
    color3 : 60,
    label: "    Shop"
});
var home = new Button({
    x: -5,
    y: 365,
     width :60,
    height :40, 
    color1 : 4,
    color2 : 145,
    color3 : 60,
    label: "home"
});
var Level1 = new Button({
    x: 150,
    y: 170,
    width :100,
    height :40, 
    color1 : 4,
    color2 : 145,
    color3 : 60,
    label: "    Level " //: " //+ ln
});
var Level2 = new Button({
    x: 150,
    y: 170,
    width :100,
    height :40, 
    color1 : 4,
    color2 : 145,
    color3 : 60,
    label: "    Level2 " //: " //+ ln
});
var Level3 = new Button({
    x: 150,
    y: 170,
    width :100,
    height :40, 
    color1 : 4,
    color2 : 145,
    color3 : 60,
    label: "    Level3 " //: " //+ ln
});
var speed = new Button({
    x: 145,
    y: 110,
     width :100,
    height :40, 
    color1 : 4,
    color2 : 145,
    color3 : 60,
    label: "Speed : " + speedCost
});
var health1 = new Button({
    x: 35,
    y: 230,
     width :100,
    height :40, 
    color1 : 4,
    color2 : 145,
    color3 : 60,
    label: "Health : " + healthCost
});
}

var levelClear = function()
{
     for(var i = 0; i < block.Width.length; i++)
        {
            block.Width[i] = 0;
            block.Height[i] = 0;
            block.XPos[i] = -1000;
            block.YPos[i] = -1000;
        }
        for(var i = 0; i < infoBlock.Width.length; i++)
        {
            infoBlock.Width[i] = 0;
            infoBlock.Height[i] = 0; 
            infoBlock.XPos[i] = -1000;
            infoBlock.YPos[i] = -1000;
        }
       
        for(var i = 0; i < deathBlock.Width.length; i++)
        {
            deathBlock.Width[i] = 0;
            deathBlock.Height[i] = 0;
            deathBlock.XPos[i] = -10000;
            deathBlock.YPos[i] = -10000;
        }
        for(var i = 0; i < goalBlock.Width.length; i++)
        {
            goalBlock.Width[i] = 0;
            goalBlock.Height[i] = 0;
            goalBlock.XPos[i] = -10000;
            goalBlock.YPos[i] = -10000;
        }
};

draw = function() {
    if(coins < 0)
    {
     coins = 0;   
    }
    
    if(scene === 1)
    {
       background(35, 155, 40);
       start.draw();
       shop.draw();
       HowTo.draw();
       textSize(45);
      text("Game of Bricks",50,45);
       if(mouseIsPressed)
       {
           if(start.isMouseInside())
           {
               scene = 4;
           }
            if(shop.isMouseInside())
           {
               scene = 5;
           }
           if(HowTo.isMouseInside())
           {
               scene = 6;
           }
       }
    }

    if(scene === 2)
    {
        textSize(12);
        if(mouseIsPressed)
       {
           if(home.isMouseInside())
           {
               scene = 1;
           }
       }
       
    {
    background(0, 0, 0);
    for(var i = 0; i < starAmount; i++)
    { 
    stars2[i].draw();
    stars[i].draw();
    }
    block.Draw();
    goalBlock.Draw();
    infoBlock.Draw();
    deathBlock.Draw();
    
    sprite1.Wrap();
    sprite1.Draw();
    }
    fill(0, 0, 0);
     
    {
if(Observer.ObjectsColliding(deathBlock,sprite1)||Observer.ObjectsColliding(movingDeathBlock,sprite1))
    {
     health -= 0.5;
     //movableBlock.Restart();
    }
    
    
    if(Observer.ObjectsColliding(infoBlock, sprite1))
    {
        
        for(var i = 0; i < infoBlock.XPos.length; i++) 
        {
            if(level === 1)
            {
        fill(255, 255, 255);
     text("Watch out for these orange blocks! \n Hit that switch it will turn off the shooter.",infoBlock.XPos[i] - 40,infoBlock.YPos[i] - 40 );
            }
            if(level === 2)
            {
        fill(255, 255, 255);
     text("Welcome to level 2.",infoBlock.XPos[i] - 20,infoBlock.YPos[i] - 40 ,105,50);
            }
            if(level === 3)
            {
        fill(255, 255, 255);
     text("Welcome to level 3. Use the teliportors!",infoBlock.XPos[i] - 20,infoBlock.YPos[i] - 40 ,105,50);
            }
        }
    }
    
    if(Observer.ObjectsColliding(coin, sprite1) && level === 1)
    {
       coin.shone = false;
         
        var c = coins;
        for(var i = 0; i < coin.value.length; i++)
        {
            coins = coins + coin.value[i];
           if(times2Coins === true)
          {
            coin.value[i] = coin.value[i] * 2;
          }
               coin.value[i] = 0;
               coin.shone[i] = false;
          
              
           
        }
    }
    
    if(Observer.ObjectsColliding(masterCoin, sprite1) && level === 4)
    {
       masterCoin.shone = false;
         
        var c = coins;
        for(var i = 0; i < masterCoin.value.length; i++)
        {
            //coins = coins + masterCoin.value[i];
            fill(255, 255, 255);
            textSize(40);
            text("Just Kidding!",masterCoin.XPos[i],masterCoin.YPos[i]);
               masterCoin.value[i] = 0;
               masterCoin.shone[i] = false;
          
              
           
        }
    }
     textSize(15);
    
    if(Observer.ObjectsColliding(coin4, sprite1) && level === 1)
    {
       coin4.shone = false;
        
        var c = coins;
        for(var i = 0; i < coin4.value.length; i++)
        {
            coins = coins + coin4.value[i];
          
               coin4.value[i] = 0;
               coin4.shone[i] = false;
         
              
           
        }
    }
    if(Observer.ObjectsColliding(coin2, sprite1) && level === 2 || level === 2)
    {
       coin2.shone = false;
        
        var c = coins;
        for(var i = 0; i < coin2.value.length; i++)
        {
            coins = coins + coin2.value[i];
          
               coin2.value[i] = 0;
               coin2.shone[i] = false;
          
        }
    }
     if(Observer.ObjectsColliding(coin3, sprite1) && level === 3)
    {
       coin3.shone = false;
        
        var c = coins;
        for(var i = 0; i < coin3.value.length; i++)
        {
            coins = coins + coin3.value[i];
          
               coin3.value[i] = 0;
               coin3.shone[i] = false;
 
        }
    }
    
    if (Observer.ObjectsColliding(block, sprite1) || Observer.ObjectsColliding(deathBlock, sprite1))
    {   
        sprite1.Draw();
        sprite1.Stop();
    } 
    if (Observer.ObjectsColliding(bntMovingDeathBlock, sprite1))
    {   
        sprite1.Draw();
        sprite1.Stop();
        
        if(bntMovingDeathBlock.switched === false)
        {
        bntMovingDeathBlock.switched = true;
        }else
        if(bntMovingDeathBlock.switched === true)
        {
        bntMovingDeathBlock.switched = false;
        }
        
    } 
    //
    
    if (Observer.ObjectsColliding(movableBlock, sprite1) && level === 1)
    {   
        sprite1.Draw();
        movableBlock.Draw();
        sprite1.Stop();
      
        if(keyIsPressed)
        {
            movableBlock.Move(keyCode);
        }
    } 
    
    if (Observer.ObjectsColliding(movableBlock, block)  && level === 1)
    {   
        sprite1.Draw();
        movableBlock.Draw();
        sprite1.Stop();
       
            movableBlock.Stop();
        
    }
    if(Observer.ObjectsColliding(goalBlock, sprite1))
    {
        for(var i = 0; i < starAmount; i++)
        {
      stars[i] = new Stars(random(0, 400), random(0, 450), 4 , Speed, 400);
       stars2[i] = new Stars(random(0, 400), random(0, 450), 3 , Speed2, 400);
        }
        for(var i = 0; i < goalBlock.XPos.length; i++) 
        {
            
        fill(0, 0, 0);
        text("You Win!!",goalBlock.XPos[i] + 20,goalBlock.YPos[i] + 40 ,105,50);
        win = true;
        level = level + 1;
        coins = coins;
       
        }
    }
     
    if (keyIsPressed)
    { 
        
       
       sprite1.Move(keyCode);
        
    //movableBlock.Move(keyCode);
    }
    
    sprite1.Restart();
   }
   
    fill(255, 255, 255);
    text("health : " + health,320,20);
    text("Coins : " + coins,250,20);
    text("Level : " + level,190,20);
        if(level === 1)
        {
        movingDeathBlock.Draw();
        coin.Draw();
        coin4.Draw();
        movableBlock.Draw();
        sprite1.Draw();
        bntMovingDeathBlock.Draw();
        fill(255, 255, 255);
        textSize(12);
         for(var i = 0; i < infoBlock.XPos.length; i++)
        {
text("This is an info block\n    touch it for info!",infoBlock.XPos[i] - infoBlock.Width[i] - 75,
infoBlock.YPos[i]);
        }
        }
    home.draw();
        if(level === 2)
        {
       levelClear();
        movingDeathBlock2.Draw();
        coin2.Draw();
        
if(Observer.ObjectsColliding(movingDeathBlock2, sprite1))
        {
          health -= 0.5;
         //movableBlock.Restart();
        }
        
        block.XPos[0] = 200; 
        block.YPos[0] = 275; 
        block.Width[0] = 120; 
        block.Height[0] = 12;
        
        goalBlock.XPos[0] = 50;
        goalBlock.YPos[0] = 25; 
        goalBlock.Width[0] = 30; 
        goalBlock.Height[0] = 30;
        
        
        infoBlock.XPos[0] = 220;
        infoBlock.YPos[0] = 250; 
        infoBlock.Width[0] = 25; 
        infoBlock.Height[0] = 25;
        
        block.XPos[1] = 218;
        block.YPos[1] = 275; 
        block.Width[1] = 120; 
        block.Height[1] = 12;
        
         block.XPos[2] = 150;
        block.YPos[2] = 160; 
        block.Width[2] = 15; 
        block.Height[2] = 280;
        
         block.XPos[3] = 380;
        block.YPos[3] = 0;
        block.Width[3] = 20; 
        block.Height[3] = 400;
        
         block.XPos[4] = 0;
        block.YPos[4] = 380; 
        block.Width[4] = 400; 
        block.Height[4] = 20;
        
        infoBlock.XPos[1] = 220;
        infoBlock.YPos[1] = 250; 
        infoBlock.Width[1] = 25; 
        infoBlock.Height[1] = 25;
        
  
        }
        if(level === 3)
        {
        levelClear();
        coin3.Draw();
            if (Observer.ObjectsColliding(teliporterBlock, sprite1))
            {   
        sprite1.Draw();
        sprite1.Stop();
        sprite1.XPos = teliporterBlock.XPos2 - sprite1.Width;// + teliporterBlock.Width2 + 5;
        sprite1.YPos = teliporterBlock.YPos2 - sprite1.Height;// + teliporterBlock.Height2 + 5;
        //return teliporterBlock.XPos2 && teliporterBlock.YPos2;
            }
        movingDeathBlock3.Draw();
        
            if(Observer.ObjectsColliding(movingDeathBlock3, sprite1))
            {
          health -= 0.5;
         //movableBlock.Restart();
         
           }
        block.XPos[0] = 200; 
        block.YPos[0] = 275; 
        block.Width[0] = 120; 
        block.Height[0] = 12;
        
        goalBlock.XPos[0] = 50;
        goalBlock.YPos[0] = 25; 
        goalBlock.Width[0] = 30; 
        goalBlock.Height[0] = 30;
        
        
        infoBlock.XPos[0] = 220;
        infoBlock.YPos[0] = 250; 
        infoBlock.Width[0] = 25; 
        infoBlock.Height[0] = 25;
        
        block.XPos[1] = 218;
        block.YPos[1] = 275; 
        block.Width[1] = 120; 
        block.Height[1] = 12;
        
         block.XPos[2] = 150;
        block.YPos[2] = 160; 
        block.Width[2] = 15; 
        block.Height[2] = 280;
        
         block.XPos[3] = 380;
        block.YPos[3] = 0; 
        block.Width[3] = 20; 
        block.Height[3] = 400;
        
         block.XPos[4] = 0;
        block.YPos[4] = 380; 
        block.Width[4] = 400; 
        block.Height[4] = 20;
        
        infoBlock.XPos[1] = 220;
        infoBlock.YPos[1] = 250; 
        infoBlock.Width[1] = 25; 
        infoBlock.Height[1] = 25;
        teliporterBlock.Draw();
        }
        if(level === 4)
        {
       levelClear(); 
       masterCoin.Draw();
        block.XPos[0] = 200; 
        block.YPos[0] = 275; 
        block.Width[0] = 120; 
        block.Height[0] = 12;
        
        goalBlock.XPos[0] = 50;
        goalBlock.YPos[0] = 25; 
        goalBlock.Width[0] = 30; 
        goalBlock.Height[0] = 30;
        
       }
       if(level === 5)
       {
           levelClear(); 
            goalBlock.XPos[0] = 50;
             goalBlock.YPos[0] = 25; 
            goalBlock.Width[0] = 30; 
            goalBlock.Height[0] = 30;
           coin2.Draw();
           if(Observer.ObjectsColliding(coin2, sprite1))
          {
          
         //movableBlock.Restart();
          }
          println("You won! Game of Bricks created by prolight. I made a sequel called Game of bricks 2 which you might want to check out.");  
          noLoop();
       }
       if(level === 6)
        {
       levelClear(); 
       //masterCoin.Draw();
        block.XPos[0] = 210; 
        block.YPos[0] = 275; 
        block.Width[0] = 120; 
        block.Height[0] = 12;
        
        goalBlock.XPos[0] = 50;
        goalBlock.YPos[0] = 25; 
        goalBlock.Width[0] = 30; 
        goalBlock.Height[0] = 30;
        
          
       }
    }

    if(scene === 3)
    {
        background(70, 165, 75);
        textSize(50);
        text("You Win",100,50);
        if(mouseIsPressed)
        {
            win = false;
           if(Level1.isMouseInside())
           {
               scene = 2;
               
           }
        }
        
        Level1.draw();
        home.draw();
    }
    
    
    if(scene === 4)
    {
        background(70, 165, 75);
        textSize(50);
        text("Level Select",80,30);
        if(mouseIsPressed)
        {
            win = false;
           if(Level1.isMouseInside())
           {
               scene = 2;
               sprite1.Restart();
               movableBlock.Restart();
           }
           
           if(home.isMouseInside())
           {
               scene = 1;
           }
        }
        Level1.draw();
        home.draw();
    }
    
    if(scene === 5)
    {
        background(70, 165, 75);
        textSize(50);
        text("Shop",80,30);
        if(mouseIsPressed)
        {
            win = false;
           
           if(home.isMouseInside())
           {
               scene = 1;
           }
          if(speed.isMouseInside() && coins >= speedCost)
          {
              sprite1.velocity += speedAddValue;
              coins -= speedCost;
              speedCost += 1;
          }
          if(health1.isMouseInside() && coins >= healthCost)
          {
              stHealth += healthAddValue;
              coins -= healthCost;
             //health = stHealth;
          }
          
        }
        textSize(22.5);
        text("Health : " + stHealth,280,20);
        text("Speed : " + sprite1.velocity,40,20);
        text("Coins : " + coins,175,20);

        home.draw();
        speed.draw();
        health1.draw();
    }
    
    if(scene === 6)
    {
        background(0, 0, 0);
        fill(55, 90, 215);
        textSize(45);
        text("How To Play",75,10);
        textSize(25);
        text("  Use the arrow keyss to move\naround. Collect the the small\nyellow coins. There is a shop.\nYou may buy things there.\n But the object of the game \nis to get to red brick that says \n'goal', with out dying, you are \n a RED block and there are\n three levels.\n \n            Good Luck!",60,75);
        if(mouseIsPressed)
        {
           if(home.isMouseInside())
           {
               scene = 1;
           }
           if(secret.isMouseInside())
           {
               scene = 7;
           }
        }
        home.draw();
        secret.draw();
    }
    
    if(scene === 7)
    {
         background(0, 0, 0);
         fill(50, 70, 145);
         textSize(25);
         text("Click : " + n + " Times for secret!",55,80);
          if(mouseIsPressed)
        {
           if(home.isMouseInside())
           {
               scene = 1;
           }
           if(secret2.isMouseInside())
           {
               scene = 7;
               n2 = true;
           }
          
           
        }
        if(n < 1)
        {
            text("If you go off the screen, you\nwill wind up on the opposing\nside, if there isn't a block there.",55,230);
        }
         secret2.draw();
         home.draw();
         home.color2 = 60;
    }else{
        home.color2 = 140;
    }
    if(scene === 8)
    {
        background(35, 155, 40);
        textSize(30);
        fill(0, 0, 0);
        text("My birthDay is less than\n        20 days away!",50,190);
        ellipse(120,100,20,20);
           fill(179, 179, 20);
           arc(347,68,40,41,-88,197);
           fill(52, 125, 71);
           line(120,110,120,170);
           fill(255, 0, 0);
           ellipse(310,240,20,20);
           line(310,290,310,250);
           fill(0, 0, 0);
          
        if(mouseIsPressed)
       {
           if(home.isMouseInside())
           {
               scene = 1;
           }
       }
       home.draw();
    }
    
};
var lastMousePressed = mousePressed;
mousePressed = function()
{
    lastMousePressed();
    if(n2 === true)
    {
       n--;
    }
    
};
var lastKeyPressed = keyPressed;
keyPressed = function()
{
    lastKeyPressed();
    if(keys.toString() === null)
    {
       // throw keys.toString(keys); 
       Program.restart();
    }else{
        
    }
   
};

    }
    if (typeof draw !== 'undefined') processing.draw = draw;
});