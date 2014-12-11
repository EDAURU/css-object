var environment = 0;
var Edit = function () {
    
    //***************************** Declaracion de propiedades ********************
    var EditProto = Object.create(HTMLDivElement.prototype);
    var s = new Style();
    Object.defineProperty(EditProto,'value', {
    set: function(newVal){this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value=newVal;},
    get: function(){return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value;}
    });
    Object.defineProperty(EditProto,'caption', {
    set: function(newVal){this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].innerHTML=newVal;},
    get: function() {return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].innerHTML;}
    });
    Object.defineProperty(EditProto,'width',{
    set: function(newVal){this.shadowRoot.getElementsByTagName('table')[0].style.width = newVal;},
    get: function() {return this.shadowRoot.getElementsByTagName('table')[0].style.width;}
    });
    Object.defineProperty(EditProto,'height',{
    set: function(newVal){this.shadowRoot.getElementsByTagName('table')[0].style.height = newVal;},
    get: function() {return this.shadowRoot.getElementsByTagName('table')[0].style.height;}
    });
    Object.defineProperty(EditProto,'hiddenval', {
    set: function(newVal){ this.hidval = newVal;},
    get: function(){return this.hidval;}
    });
    Object.defineProperty(EditProto,'enabled',{
    set: function(newVal){
        if(!newVal)
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled=true;
        else if(newVal)
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled=false;},
    get: function() {return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled;}
    });
    Object.defineProperty(EditProto,'placeholder',{
    set: function(newVal){this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].placeholder=newVal;},
    });
    var hidval;
    //***************************** Metodos Callback ******************************
    EditProto.createdCallback = function () {
        
        var shadow = this.createShadowRoot();
        var t = document.createElement("table");
        
        for ( var i = 0; i < 1; i++ ) {
            var row = t.insertRow();
            for ( var j = 0; j <= 2; j++ ) {
                var cell = row.insertCell();
            }
        }
        shadow.appendChild(t);
        
        var l = document.createElement("label");
        var tx = document.createTextNode("Valor: ");
        l.appendChild(tx);
        t.rows[0].cells[0].appendChild(l);
        
        var i = document.createElement("input");
        i.setAttribute("type", "text");
        t.rows[0].cells[2].appendChild(i);
        
    };
    //*****************************Metodos Publicos******************************
    
    EditProto.show = function (){
        this.style.display = 'initial';
    };
    EditProto.hide = function(){
        this.style.display = 'none';
    };

    EditProto.setDimension = function(w, h){
        this.width=w;
        this.height=h;
    };
    EditProto.setPosition = function (x, y){
        this.style.position ='absolute';
        this.style.left = x;
        this.style.top = y;
    };
    EditProto.setGap = function (gap){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[1].style.width=gap;
    };
    EditProto.clear = function(){
        this.value="";
    };
    EditProto.clearHiddenValue = function(){
        this.hidval = null;
    };
    EditProto.setPassType = function(){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].removeAttribute('type');
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].setAttribute('type', 'password');
    };
    EditProto.setFocus = function(f){        
        if(f){
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].focus();
        }else{
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].blur();
        }
    };
    EditProto.setFontFamilyEdit = function(font){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontFamily=font;
    };
    EditProto.setFontFamilyCaption = function(font){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.fontFamily=font;
    };
    EditProto.setFontColorEdit = function(color){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.color = color;
    };
    EditProto.setFontColorCaption = function(color){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.color = color;
    };
    EditProto.setFontSizeEdit = function(size){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontSize = size;
    };
    EditProto.setFontSizeCaption = function(size){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.fontSize = size;
    };
    EditProto.setFontEdit = function(family, color, size){
        this.setFontFamilyEdit(family);
        this.setFontColorEdit(color);
        this.setFontSizeEdit(size);
    };
    EditProto.setFontCaption = function(family, color, size){
        this.setFontFamilyCaption(family);
        this.setFontColorCaption(color);
        this.setFontSizeCaption(size);
    };
    //***************************** Registro de la clase ************************
    
    var Edit = document.registerElement('x-edit', {prototype: EditProto, extends: "div"});
    return new Edit();


};
