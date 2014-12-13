var environment = 0;
var ObjectGroup = function (w,h,titl) {
    
    //***************************** Declaracion de propiedades ********************
    var ObjectGroupProto = Object.create(HTMLDivElement.prototype);
    var s = new Style();
    Object.defineProperties(ObjectGroupProto,{"width": {
    set: function(newVal){this.shadowRoot.getElementsByTagName('canvas')[0].width = newVal;},
    get: function() {return this.shadowRoot.getElementsByTagName('canvas')[0].width;}
    },"height" : { 
    set: function(newVal){this.shadowRoot.getElementsByTagName('canvas')[0].height = newVal;},
    get: function() {return this.shadowRoot.getElementsByTagName('canvas')[0].height;}
    },"header": {
    set: function(newVal){this.shadowRoot.getElementsByTagName('div')[0].innerHTML = newVal;},
    get: function(){return this.shadowRoot.getElementsByTagName('div')[0].innerHTML;}        
    }});
   
    //***************************** Metodos Callback ******************************
    ObjectGroupProto.createdCallback = function () {
        // all properties of the object must be set here, this is just a test.
        var shadow = this.createShadowRoot();
        //canvas setting
        var t = document.createElement("canvas"); 
        var width = parseInt(w);
        var height= parseInt(h);
        t.style.position='absolute';
        w===undefined || w===null? t.width=500 : t.width=width;
        h===undefined || h===null? t.height=500 : t.height=height;
        //margen y borde del canvas
        t.style.margin=20;
        t.style.borderStyle='solid';
        t.style.borderColor='black';
        t.style.borderWidth='thin';
        shadow.appendChild(t);
        //creando div de titulo
        var titlediv= document.createElement('div');
        titlediv.style.position='absolute';
        shadow.appendChild(titlediv);
        //atributos del titulo
        titlediv.style.top=20;
        titlediv.style.fontFamily='Arial';
        titlediv.style.fontSize='medium';
        titlediv.style.color='red';
        titl===undefined? titlediv.innerHTML='Titulo Opcional' : titlediv.innerHTML=titl;
        titlediv.style.backgroundColor='#000000';
        //para centrar el titulo se debe calcular cuanto debe ser el left
        setTimeout(function(){ titlediv.style.left=calculateLeft(titlediv,t);}, 10);
    };
    //*****************************Metodos Privados******************************
    function calculateLeft(div,can){
        var divsize= parseInt(div.offsetWidth);
        var canvsize= parseInt(can.width);
        return String(((canvsize-divsize)/2)+29)+'px';   

    }
    //*****************************Metodos Publicos******************************
    
    ObjectGroupProto.setDimension = function(w,h){
        this.width=w;
        this.height=h;
    };
    /*ObjectGroupProto.setPosition = function(x,y){
        this.shadowRoot.getElementsByTagName('canvas')[0].style.left=x;
        this.shadowRoot.getElementsByTagName('canvas')[0].style.top=y;
        for(var i = 1; i< this.shadowRoot.children.length;i++){
            if(i==1){
            var opvarx = calculateLeft(this.shadowRoot.children[1],this.shadowRoot.getElementsByTagName('canvas')[0]);
            var opvary= y+20;
            opvarx=parseInt(opvarx)+x;
            console.log(opvarx);
            this.shadowRoot.children[i].style.left='386px';
            this.shadowRoot.children[i].style.top=opvary;
            }
        }
    };*/
    
    //***************************** Registro de la clase ************************
    
    var ObjectGroup = document.registerElement('x-objectgroup', {prototype: ObjectGroupProto, extends: "div"});
    return new ObjectGroup();


};