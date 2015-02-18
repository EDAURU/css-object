var MenuBar = function () {

    var MenuBarProto = Object.create(HTMLDivElement.prototype);

    Object.defineProperties(MenuBarProto,{
       "tableBar":{
           get: function(){
               return this.shadowRoot.getElementById("tableBar");
           }
       }
    });
    /*var getNumber = function (element) {
            return (element.replace("px", "") * 1);
    };*/
    //************************************* Metodos Publicos ******************************//
    MenuBarProto.setBackgroundColor = function (color){
        if(typeof color === 'string') this.shadowRoot.getElementsByTagName('table')[0].style.backgroundColor = color;
    };
    MenuBarProto.setSpacing = function(right,top,bottom,left){
        for(var i = 0; i<this.tableBar.rows[0].cells.length-1;i++) {
                right = typeof right === 'string'? parseInt(right):right;
                top = typeof top === 'string'? parseInt(top):top;
                bottom = typeof bottom === 'string'? parseInt(bottom):bottom;
                left = typeof left === 'string'? parseInt(left):left;
                this.tableBar.rows[0].cells[i].style.paddingRight = right;
                this.tableBar.rows[0].cells[i].style.paddingLeft = left;
                this.tableBar.rows[0].cells[i].style.paddingBottom = bottom;
                this.tableBar.rows[0].cells[i].style.paddingTop = top;
        }
    };
    MenuBarProto.appendTop = function(){
        this.tableBar.style.top=0;
        this.tableBar.style.left=0;
        this.tableBar.style.paddingRight='100%';

    }
    MenuBarProto.addItem = function (name) {
        var cell = this.tableBar.rows[0].insertCell();
        cell.innerHTML = name;

        cell.onmouseover = function (e) {
            cell.style.cursor = "default";
            cell.style.backgroundColor = "darkgray";
        };

        cell.onmouseout = function (e) {
            cell.style.backgroundColor = "initial";
        };
    };
    MenuBarProto.setFontFamily = function(font){
        this.tableBar.style.fontFamily = font;
    };

/*    MenuBarProto.addSubMenuToItem = function (idName) {
        var subMenu = document.createElement("div");
        subMenu.style.backgroundColor = "rgba(247,247,247,0.7)";
        subMenu.style.position = "absolute";
        subMenu.style.display = "none";
        var self = this;
        for (var i = 0; i < this.shadowRoot.getElementById("tableBar").rows[0].cells.length; i++) {
            if (this.tableBar.rows[0].cells[i].innerHTML == idName) {
                this.tableBar.rows[0].cells[i].appendChild(subMenu);
                this.tableBar.rows[0].cells[i].onmouseover = function (e) {
                    if (e.target.innerHTML == idName)
                        e.target.style.backgroundColor = "darkgrey";
                    for (var i = 0; i <this.tableBar.rows[0].cells.length; i++) {
                        this.tableBar.rows[0].cells[i].style.cursor = "default";
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
    };*/
    MenuBarProto.addSubMenuToBar = function (target,items){
        var a = new PopMenu();
        var table = this.tableBar;
        a.top = table.style.height;
        var cell= findCell(target,table);
        a.addItems(items);
        table.rows[0].cells[cell].appendChild(a);
        a.setBackgroundColor(table.style.backgroundColor);
        a.hide();
        a.setFontSize('13px');
        a.setFontSizeHotKey('10px');
        table.rows[0].cells[cell].onclick = function(){
            a.hidden ? a.show() : a.hide();
        };
        a.onmouseleave = function(){
            a.hide();
        };
        a.MouseOverEvent('rgba(249,120,40,0.3)');
        //console.log(this.tableBar.rows[0].cells[0].getElementsByTagName('div')[0].shadowRoot.getElementsByTagName('div')[0].getEle);
        //console.log(this.tableBar.rows[0].cells[0].getElementsByTagName('div')[0].shadowRoot.getElementById('PopMenuBar'));
    };
    MenuBarProto.addSubMenuToSubMenu = function(targets,items){
        //var sb= new PopMenu();
        //console.log(this.tableBar.rows[0].cells[findCell(bartarget)].getElementsByTagName('div')[0].shadowRoot.getElementById('PopMenuBar')[0]);
    };

    function findCell(cell,table){
        for (var i = 0; i < table.rows[0].cells.length; i++)
            if (table.rows[0].cells[i].innerHTML == cell) return i;
    }
    /*MenuBarProto.addItemToSubMenu = function (idName, itemName, imgCell) {
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
    };*/
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
var PopMenu = function(){
    var PopMenuProto = Object.create(HTMLDivElement.prototype);

    Object.defineProperties(PopMenuProto,
        {
            "top":  {
                set: function(newVal){
                    this.shadowRoot.getElementsByTagName('div')[0].style.top=newVal;
                     },
                get: function(){
                    return this.shadowRoot.getElementsByTagName('div')[0].style.top;
                    }
            },
            "hidden": {
                set: function (newVal) {
                    if (typeof newVal === 'boolean')
                        this.hidden = newVal;
                    },
                get: function () {
                    if (this.hidden)
                        return this.hidden;
                    }
            },
            "table":  {
                get: function(){
                    return this.shadowRoot.getElementsByTagName('div')[0].getElementsByTagName('table')[0];
                }
            },
            "rowcolor":{
                set: function (newVal){
                    this.rowcolor=newVal;
                    },
                get: function(){
                    if(this.rowcolor)
                    return this.rowcolor;
                }
            }
        });
    PopMenuProto.createdCallback = function (){
        var shadow = this.createShadowRoot();
        var di = document.createElement('div');
        di.style.position = 'absolute';
        var tb = document.createElement('table');
        tb.id='PopMenuBar';
        tb.cellSpacing=0;
        di.appendChild(tb);
        shadow.appendChild(di);
    };
    PopMenuProto.addItem = function(item){
        this.table.insertRow(this.table.rows.length);
        var img = new Image();
        img.style.width = '10px';
        img.style.height = '10px';
        img.src = item.image;
        if(img.src) this.table.rows[this.table.rows.length-1].insertCell(0).appendChild(img);
        if(item.description)  this.table.rows[this.table.rows.length-1].insertCell(1).innerHTML = item.description;
        if(item.hotkey) this.table.rows[this.table.rows.length-1].insertCell(2).innerHTML= item.hotkey;
        this.table.rows[this.table.rows.length-1].cells[0].style.border='none';
        this.table.rows[this.table.rows.length-1].cells[1].style.border='none';
        this.table.rows[this.table.rows.length-1].cells[2].style.border='none';
    };
    PopMenuProto.addItems = function(items){
        for(var i = 0;i<items.count;i++){
            var demoitem = new Object();
            demoitem.image = items.image[i];
            demoitem.description = items.description[i];
            demoitem.hotkey = items.hotkey[i];
            this.addItem(demoitem);
        }
    };
    PopMenuProto.MouseOverEvent = function(color){
        var normal_color= this.row_color;
        for(var i = 0; i<this.table.rows.length;i++){
            this.table.rows[i].onmouseover = function(e){
                this.style.cursor = "default";
                this.style.backgroundColor= color;
            };
            this.table.rows[i].onmouseout = function(e){
                this.style.backgroundColor = normal_color;
            };
        }
    }
    PopMenuProto.setBackgroundColor= function(color){
         if(typeof color === 'string')  this.shadowRoot.getElementsByTagName('div')[0].style.backgroundColor=color;
            this.row_color=color;
    };
    PopMenuProto.hide = function(){
        this.style.display = 'none';
        this.hidden=true;
    };
    PopMenuProto.show = function(){
        this.style.display = 'block';
        this.hidden = false;
    };
    PopMenuProto.setFontSize = function(size){
        this.table.style.fontSize = size;
    };
    PopMenuProto.setFontSizeHotKey = function (size){
        for(var i = 0; i<this.table.rows.length;i++){
            this.table.rows[i].cells[2].style.fontSize = size;
        }
    };

    var PopMenu = document.registerElement("x-popmenu", {prototype: PopMenuProto, extends: "div"});
    return new PopMenu();
};