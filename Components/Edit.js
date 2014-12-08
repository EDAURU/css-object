var environment = 0;
var Edit = function () {
    
    //***************************** Declaracion de propiedades ********************
    var EditProto = Object.create(HTMLDivElement.prototype);
    var s = new Style();
    EditProto.hidden = null;
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
    }
    EditProto.hide = function(){
        this.style.display = 'none';
    }
    EditProto.setText = function(text){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value=text;
    }
    EditProto.getText = function(){
        return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value;
    }
    EditProto.setCaption = function(text){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].innerHTML=text;
    }
    EditProto.setWidth = function(size){
        this.shadowRoot.getElementsByTagName('table')[0].style.width = size;
    }
    EditProto.setHeight = function(size){
        this.shadowRoot.getElementsByTagName('table')[0].style.height = size;
    }
    EditProto.setDimension = function(w, h){
        this.setWidth(w);
        this.setHeight(h);
    }
    EditProto.setPosition = function (x, y){
        this.style.position ='absolute'
        this.style.left = x;
        this.style.top = y;
    }
    EditProto.setGap = function (gap){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[1].style.width=gap;
    }
    EditProto.clear = function(){
        this.setText("");
    }
    EditProto.getHiddenValue = function(){
        return EditProto.hidden;
    }
    EditProto.setHiddenValue = function(value){
        EditProto.hidden = value;
    } 
    EditProto.clearHiddenValue = function(){
        EditProto.hidden = null;
    }
    EditProto.disable = function(){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled=true;
    }
    EditProto.enable = function(){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled=false;
    }
    EditProto.setPlaceHolder = function(text){
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].placeholder=text;
    }
    //***************************** Registro de la clase ************************
    
    var Edit = document.registerElement('x-edit', {prototype: EditProto, extends: "div"});
    return new Edit();


};
