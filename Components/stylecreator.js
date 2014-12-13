var environment = 0;
var Style = function () {
    
    //this.setEnvironment = function (newEnvironment) { environment = newEnvironment; };
    
    this.Background = { 
        background_attachment: [], 
        background_color: [], 
        background_image: [], 
        background_position: [], 
        background_repeat: [] 
    };
    
    this.Font = {
        font_family: [], 
        font_size: [], 
        font_style: [], 
        font_variant: [], 
        font_weight: [] 
    };
    
    this.Border = {
        border_bottom_color: [],
        border_bottom_style: [],
        border_bottom_width: [],
        border_left_color: [],
        border_left_style: [],
        border_left_width: [],
        border_right_color: [],
        border_right_style: [],
        border_right_width: [],
        border_top_color: [],
        border_top_style: [],
        border_top_width: [],
        border_style: [],
        border_color: [],
        border_width: [],
        border_radius: [],
        border_bottomLeft_radius: [],
        border_bottomRight_radius: [],
        border_topLeft_radius: [],
        border_topRight_radius: []
    };
    
    this.Margin = {
        margin_botom: [],
        margin_left: [],
        margin_right: [],
        margin_top: []
    };
    
    this.Padding = {
        padding_bottom: [],
        padding_left: [],
        padding_right: [],
        padding_top: []
    };
    
    this.Dimension = {
        height: [],
        max_height: [],
        max_width: [],
        min_height: [],
        min_width: [],
        width: []
    };
    
    this.Position = {
        bottom: [],
        clip: [],
        cursor: [],
        left: [],
        overflow: [],
        position: [],
        right: [],
        top: [],
        z_index: []
    };
    
    this.Text = {
        color: [],
        direction: [],
        letter_spacing: [],
        line_height: [],
        text_align: [],
        text_decoration: [],
        text_indent: [],
        text_shadow: [],
        text_transform: [],
        vertical_align: [],
        white_space: [],
        word_spacing: []
    };
};

var Edit = function () {
    
    //***************************** Declaracion de propiedades ********************
    
    var EditProto = Object.create(HTMLDivElement.prototype);
    var s = new Style();
    var hidval;
    
    Object.defineProperties(EditProto,{"value":{
    set: function (newVal) {this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value=newVal;},
    get: function () {return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value;}
    },"caption": {
    set: function (newVal) {this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].innerHTML=newVal;},
    get: function () {return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].innerHTML;}
    },"width":{
    set: function (newVal) {this.shadowRoot.getElementsByTagName('table')[0].style.width = newVal;},
    get: function () {return this.shadowRoot.getElementsByTagName('table')[0].style.width;}
    },"height":{
    set: function (newVal) {this.shadowRoot.getElementsByTagName('table')[0].style.height = newVal;},
    get: function () {return this.shadowRoot.getElementsByTagName('table')[0].style.height;}
    },"hiddenval": {
    set: function (newVal) { this.hidval = newVal;},
    get: function () {return this.hidval;}
    },"enabled":{
    set: function (newVal) {
        if (!newVal)
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled=true;
        else if (newVal)
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled=false;},
    get: function () {return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled;}
    },"placeholder":{
    set: function (newVal) {this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].placeholder=newVal;},
    }});
    
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
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[1].style.width = gap;
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
        if (f) {
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].focus();
        }else{
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].blur();
        }
    };
    
    EditProto.setFontFamilyEdit = function(font){
        if (typeof font == "number")
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontFamily = s.Font.font_family[font];
        else
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontFamily = font
    };
    
    EditProto.setFontFamilyCaption = function(font){
        if (typeof font == "number")
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.fontFamily = s.Font.font_family[font];
        else
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.fontFamily = font;
    };
    
    EditProto.setFontColorEdit = function(color){
        if (typeof color == "number")
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.color = s.Text.color[color];
        else
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.color = color;
    };
    
    EditProto.setFontColorCaption = function(color){
        if (typeof color == "number")
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.color = s.Text.color[color];
        else
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.color = color;
    };
    
    EditProto.setFontSizeEdit = function(size){
        if (typeof size == "number")
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontSize = s.Font.font_size[size];
        else
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontSize = size;
    };
    
    EditProto.setFontSizeCaption = function(size){
        if (typeof size == "number")
            this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.fontSize = s.Font.font_size[size];
        else
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
    
    EditProto.setBorderStyle = function (top, bottom, left, right) {
        if (arguments.length === 1) {
            if (typeof top == "number")
                this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderStyle = s.Border.border_style[top];
            else
                this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderStyle = top;
        }
        
        if (arguments.length === 2) {
            if (top != null) {
                if (typeof top == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopStyle = s.Border.border_top_style[top];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopStyle = top;
            }
            
            if (bottom != null) {
                if (typeof bottom == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomStyle = s.Border.border_bottom_style[bottom];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomStyle = bottom;
            }
        }
        
        if (arguments.length === 3) {
            if (top != null) {
                if (typeof top == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopStyle = s.Border.border_top_style[top];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopStyle = top;
            }
            
            if (bottom != null) {
                if (typeof bottom == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomStyle = s.Border.border_bottom_style[bottom];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomStyle = bottom;
            }
            
            if (left != null) {
                if (typeof left == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftStyle = s.Border.border_left_style[left];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftStyle = left;
            }
        }
        
        if (arguments.length === 4) {
            if (top != null) {
                if (typeof top == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopStyle = s.Border.border_top_style[top];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopStyle = top;
            }
            
            if (bottom != null) {
                if (typeof bottom == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomStyle = s.Border.border_bottom_style[bottom];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomStyle = bottom;
            }
            
            if (left != null) {
                if (typeof left == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftStyle = s.Border.border_left_style[left];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftStyle = left;
            }
            
            if(right != null) {
                if (typeof right == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderRightStyle = s.Border.border_right_style[right];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderRightStyle = right;
            }
        }
        
        
    };
    
    EditProto.setBorderRadius = function (v1, v2, v3, v4) {
        if (arguments.length === 1) {
            if (typeof v1 == "number")
                this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderRadius = s.Border.border_radius[v1];
            else
                this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderRadius = v1;
        }
        
        if (arguments.length === 2) {
            if (v1 != null) {
                if (typeof v1 == "number") 
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopLeftRadius = s.Border.border_topLeft_radius[v1];
                else 
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopLeftRadius = v1;
            }
            
            if (v2 != null) {
                if (typeof v2 == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopRightRadius = s.Border.border_topRight_radius[v2];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopRightRadius = v2;
            }
        }
        
        if (arguments.length === 3) {
            if (v1 != null) {
                if (typeof v1 == "number") 
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopLeftRadius = s.Border.border_topLeft_radius[v1];
                else 
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopLeftRadius = v1;
            }
            
            if (v2 != null) {
                if (typeof v2 == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopRightRadius = s.Border.border_topRight_radius[v2];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopRightRadius = v2;
            }
            
            if (v3 != null) {
                if (typeof v3 == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomLeftRadius = s.Border.border_bottomLeft_radius[v3];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomLeftRadius = v3;
            }
        }
        
        if (arguments.length === 4) {
            if (v1 != null) {
                if (typeof v1 == "number") 
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopLeftRadius = s.Border.border_topLeft_radius[v1];
                else 
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopLeftRadius = v1;
            }
            
            if (v2 != null) {
                if (typeof v2 == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopRightRadius = s.Border.border_topRight_radius[v2];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopRightRadius = v2;
            }
            
            if (v3 != null) {
                if (typeof v3 == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomLeftRadius = s.Border.border_bottomLeft_radius[v3];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomLeftRadius = v3;
            }
            
            if (v4 != null) {
                if (typeof v4 == "number")
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomRightRadius = s.Border.border_bottomRight_radius[v4];
                else
                    this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomRightRadius = v4;
            }
        }
    };
    
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
    
    //***************************** Registro de la clase ************************
    
    var Edit = document.registerElement('x-edit', {prototype: EditProto, extends: "div"});
    return new Edit();


};

