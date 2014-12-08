var environment = 0;
var Edit = function () {
    
    //***************************** Declaracion de propiedades ********************
    var EditProto = Object.create(HTMLDivElement.prototype);
    var s = new Style();
    
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
    //***************************** Registro de la clase ************************
    
    var Edit = document.registerElement('x-edit', {prototype: EditProto, extends: "div"});
    return new Edit();


};
