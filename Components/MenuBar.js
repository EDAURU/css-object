var MenuBar = function () {

    var MenuBarProto = Object.create(HTMLDivElement.prototype);
    
    /*var getNumber = function (element) {
            return (element.replace("px", "") * 1);
    };*/
    //************************************* Metodos Publicos ******************************//
    MenuBarProto.setBackgroundColor = function (color){
        if(typeof color === 'string') this.shadowRoot.getElementsByTagName('table')[0].style.backgroundColor = color;
    };
    MenuBarProto.setSpacing = function(right,top,bottom,left){
        var table= this.shadowRoot.getElementsByTagName('table')[0];
        for(var i = 0; i<table.rows[0].cells.length-1;i++) {
                right = typeof right === 'string'? parseInt(right):right;
                top = typeof top === 'string'? parseInt(top):top;
                bottom = typeof bottom === 'string'? parseInt(bottom):bottom;
                left = typeof left === 'string'? parseInt(left):left;
                table.rows[0].cells[i].style.paddingRight = right;
                table.rows[0].cells[i].style.paddingLeft = left;
                table.rows[0].cells[i].style.paddingBottom = bottom;
                table.rows[0].cells[i].style.paddingTop = top;
        }
    };
    MenuBarProto.appendTop = function(){
        this.shadowRoot.getElementsByTagName('table')[0].style.top=0;
        this.shadowRoot.getElementsByTagName('table')[0].style.left=0;
        this.shadowRoot.getElementsByTagName('table')[0].style.paddingRight='100%';

    }
    MenuBarProto.addItem = function (name) {
        var cell = this.shadowRoot.getElementsByTagName("table")[0].rows[0].insertCell();
        cell.innerHTML = name;
    };
    MenuBarProto.setFontFamily = function(font){
        this.shadowRoot.getElementsByTagName('table')[0].style.fontFamily = font;
    };

    MenuBarProto.addSubMenuToItem = function (idName) {
        var subMenu = document.createElement("div");
        subMenu.style.backgroundColor = "rgba(247,247,247,0.7)";
        subMenu.style.position = "absolute";
        subMenu.style.display = "none";
        var self = this;
        for (var i = 0; i < this.shadowRoot.getElementById("tableBar").rows[0].cells.length; i++) {
            if (this.shadowRoot.getElementById("tableBar").rows[0].cells[i].innerHTML == idName) {
                this.shadowRoot.getElementById("tableBar").rows[0].cells[i].appendChild(subMenu);
                this.shadowRoot.getElementById("tableBar").rows[0].cells[i].onmouseover = function (e) {
                    if (e.target.innerHTML == idName)
                        e.target.style.backgroundColor = "darkgrey";
                    for (var i = 0; i < self.shadowRoot.getElementById("tableBar").rows[0].cells.length; i++) {
                        self.shadowRoot.getElementById("tableBar").rows[0].cells[i].style.cursor = "default";
                    }
                    if (subMenu.style.display == "none")
                        subMenu.style.display = "block";
                    else
                        subMenu.style.display = "none";


                }

                this.shadowRoot.getElementsByTagName("table")[0].rows[0].cells[i].onmouseout = function (e) {
                    if (e.target.innerHTML == idName)
                        e.target.style.backgroundColor = "initial";
                    if (subMenu.style.display == "none")
                        subMenu.style.display = "block";
                    else
                        subMenu.style.display = "none";


                }
            };
        };
    };
    
    MenuBarProto.addItemToSubMenu = function (idName, itemName, imgCell) {
        var self = this;
        var tableContainer = document.createElement("div");
        var itemTable = document.createElement("table");
        tableContainer.appendChild(itemTable);
        var itemRow = itemTable.insertRow();
        var matches;
        var imageCell = itemRow.insertCell(0);
        var img = document.createElement("img");
        img.style.width = "20px";
        img.style.height = "20px";
        if (imgCell !== null) {
            img.src = imgCell;
            imageCell.appendChild(img);
        }
        
        var itemCell = itemRow.insertCell(1);
        itemCell.innerHTML = itemName;
        var hkCell = itemRow.insertCell(2);
        var smCell = itemRow.insertCell(3);
        
        tableContainer.onmouseover = function (e) {
            tableContainer.style.backgroundColor = "RGBA(192, 235, 235, 0.3)";
            tableContainer.style.border = "1px solid #3BBEC1";
            tableContainer.style.cursor = "default"
            
        };
        
        tableContainer.onmouseout = function (e) {
            tableContainer.style.backgroundColor = "initial";
            tableContainer.style.border = "initial";
            
        };
        
        for (var i = 0; i < this.shadowRoot.getElementsByTagName("table")[0].rows[0].cells.length; i++) {
            
            matches = this.shadowRoot.getElementsByTagName("table")[0].rows[0].cells[i].innerHTML.match(idName);
            if (matches == idName) {
                this.shadowRoot.getElementsByTagName("table")[0].rows[0].cells[i].getElementsByTagName("div")[0].appendChild(tableContainer);
            };
        
        }
    };
    //********************* funcion CallBack **********************//
    
    MenuBarProto.createdCallback = function () {
        var shadow = this.createShadowRoot();
        var t = document.createElement("table");
        t.style.backgroundColor = "grey";
        t.style.position = "absolute";
        t.style.borderSpacing = "0px";
        t.id = "tableBar";
        var row = t.insertRow();
        shadow.appendChild(t);
        
    };
    //********************************* Registro del Elemento**********************//
    
    var MenuBar = document.registerElement("x-menubar", {prototype: MenuBarProto, extends: "div"});
    
    return new MenuBar();
};
