var environment = 0;

var Style = function () {

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

var Edit = function (w, h, title) {

	//***************************** Declaracion de propiedades ********************

	var EditProto = Object.create(HTMLDivElement.prototype);
	var s = new Style();
	var hidval;


	Object.defineProperties(EditProto, {
		"value": {
			set: function (newVal) {
				this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value = newVal;
			},
			get: function () {
				return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value;
			}
		}, "caption": {
			set: function (newVal) {
				this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].innerHTML = newVal;
			},
			get: function () {
				return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].innerHTML;
			}
		}, "width": {
			set: function (newVal) {
				this.shadowRoot.getElementsByTagName('table')[0].style.width = newVal;
			},
			get: function () {
				return this.shadowRoot.getElementsByTagName('table')[0].style.width;
			}
		}, "height": {
			set: function (newVal) {
				this.shadowRoot.getElementsByTagName('table')[0].style.height = newVal;
			},
			get: function () {
				return this.shadowRoot.getElementsByTagName('table')[0].style.height;
			}
		}, "hiddenval": {
			set: function (newVal) {
				this.hidval = newVal;
			},
			get: function () {
				return this.hidval;
			}
		}, "enabled": {
			set: function (newVal) {
				if (!newVal)
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled = true;
				else if (newVal)
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled = false;
			},
			get: function () {
				return this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].disabled;
			}
		}, "placeholder": {
			set: function (newVal) {
				this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].placeholder = newVal;
			}
		}
	});

	//*****************************Metodos Publicos******************************

	EditProto.show = function () {
		this.style.display = 'initial';
	};

	EditProto.hide = function () {
		this.style.display = 'none';
	};

	EditProto.setDimension = function (w, h) {
		this.width = w;
		this.height = h;
	};

	EditProto.setPosition = function (x, y) {
		this.style.position = 'absolute';
		this.style.left = x;
		this.style.top = y;
	};

	EditProto.setGap = function (gap) {
		this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[1].style.width = gap;
	};

	EditProto.clear = function () {
		this.value = "";
	};

	EditProto.clearHiddenValue = function () {
		this.hidval = null;
	};

	EditProto.setPassType = function () {
		this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].removeAttribute('type');
		this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].setAttribute('type', 'password');
	};

	EditProto.setFocus = function (f) {
		if (f) {
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].focus();
		} else {
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].blur();
		}
	};

	EditProto.setFontFamilyEdit = function (font) {
		typeof font == "number" ? this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontFamily = s.Font.font_family[font] :
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontFamily = font;
	};

	EditProto.setFontFamilyCaption = function (font) {
		typeof font == "number" ? this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.fontFamily = s.Font.font_family[font] :
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.fontFamily = font;
	};

	EditProto.setFontColorEdit = function (color) {
		typeof color == "number" ? this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.color = s.Text.color[color] :
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.color = color;
	};

	EditProto.setFontColorCaption = function (color) {
		typeof color == "number" ? this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.color = s.Text.color[color] :
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.color = color;
	};

	EditProto.setFontSizeEdit = function (size) {
		typeof size == "number" ? this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontSize = s.Font.font_size[size] :
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.fontSize = size;
	};

	EditProto.setFontSizeCaption = function (size) {
		typeof size == "number" ? this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.fontSize = s.Font.font_size[size] :
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[0].getElementsByTagName('label')[0].style.fontSize = size;
	};

	EditProto.setFontEdit = function (family, color, size) {
		this.setFontFamilyEdit(family);
		this.setFontColorEdit(color);
		this.setFontSizeEdit(size);
	};

	EditProto.setFontCaption = function (family, color, size) {
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

			if (right != null) {
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

	EditProto.setBorderColor = function (top, bottom, left, right) {
		if (arguments.length === 1) {
			if (typeof top == "number")
				this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderColor = s.Border.border_color[top];
			else
				this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderColor = top;
		}

		if (arguments.length === 2) {
			if (top != null) {
				if (typeof top == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopColor = s.Border.border_top_color[top];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopColor = top;
			}

			if (bottom != null) {
				if (typeof bottom == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomColor = s.Border.border_bottom_color[bottom];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomColor = bottom;
			}
		}

		if (arguments.length === 3) {
			if (top != null) {
				if (typeof top == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopColor = s.Border.border_top_color[top];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopColor = top;
			}

			if (bottom != null) {
				if (typeof bottom == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomColor = s.Border.border_bottom_color[bottom];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomColor = bottom;
			}

			if (left != null) {
				if (typeof left == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftColor = s.Border.border_left_color[left];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftColor = left;
			}
		}

		if (arguments.length === 4) {
			if (top != null) {
				if (typeof top == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopColor = s.Border.border_top_color[top];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopColor = top;
			}

			if (bottom != null) {
				if (typeof bottom == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomColor = s.Border.border_bottom_color[bottom];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomColor = bottom;
			}

			if (left != null) {
				if (typeof left == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftColor = s.Border.border_left_color[left];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftColor = left;
			}

			if (right != null) {
				if (typeof right == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderRightColor = s.Border.border_right_color[right];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderRightColor = right;
			}
		}
	};

	EditProto.setBorderSize = function (top, bottom, left, right) {
		if (arguments.length === 1) {
			if (typeof top == "number")
				this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderWidth = s.Border.border_width[top];
			else
				this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderWidth = top;
		}

		if (arguments.length === 2) {
			if (top != null) {
				if (typeof top == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopWidth = s.Border.border_top_width[top];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopWidth = top;
			}

			if (bottom != null) {
				if (typeof bottom == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomWidth = s.Border.border_bottom_width[bottom];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomWidth = bottom;
			}
		}

		if (arguments.length === 3) {
			if (top != null) {
				if (typeof top == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopWidth = s.Border.border_top_width[top];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopWidth = top;
			}

			if (bottom != null) {
				if (typeof bottom == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomWidth = s.Border.border_bottom_width[bottom];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomWidth = bottom;
			}

			if (left != null) {
				if (typeof left == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftWidth = s.Border.border_left_width[left];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftWidth = left;
			}
		}

		if (arguments.length === 4) {
			if (top != null) {
				if (typeof top == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopWidth = s.Border.border_top_width[top];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderTopWidth = top;
			}

			if (bottom != null) {
				if (typeof bottom == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomWidth = s.Border.border_bottom_width[bottom];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderBottomWidth = bottom;
			}

			if (left != null) {
				if (typeof left == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftWidth = s.Border.border_left_width[left];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderLeftWidth = left;
			}

			if (right != null) {
				if (typeof right == "number")
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderRightWidth = s.Border.border_left_width[right];
				else
					this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.borderRightWidth = right;
			}
		}
	};

	EditProto.setBackgroundColor = function (color) {
		typeof color == "number" ? this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.backgroundColor = s.Background.background_color[color] :
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.backgroundColor = color;
	};

	EditProto.setBackgroundImage = function (image) {
		if (typeof image == "number") {
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.backgroundImage = s.Background.background_image[image];
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.backgroundSize = "contain";
		} else {
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.backgroundImage = image;
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].style.backgroundSize = "contain";
		}
	};

	EditProto.showGrid = function () {
		for (var i = 0; i <= 2; i++) {
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[i].style.border = "2px solid black";
		}

		this.style.border = "2px solid black";
	};

	EditProto.hideGrid = function () {
		for (var i = 0; i <= 2; i++) {
			this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[i].style.border = "none";
		}

		this.style.border = "none";
	};
    
    EditProto.setMaxLength = function (length) {
        this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].maxLength = length;
    };
    
    EditProto.isEmpty = function () {
        return (this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value == ""); 
    };
    
    EditProto.isEmail = function () {
        var editText = this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value;
        var exp1 = /(\s|\u002e{2}|[\u005b\u005d\u005e]|(_|\u002e|-)(?=@)|(?=_)|(?=-))/.test(editText);
        var exp2 = editText.match(/[@]/g);
        var exp3 = /^[A-z0-9\u002e@]+$/g.test(editText);
        if (editText.indexOf("@") < 1 || editText.indexOf(".") < 1 || editText.lastIndexOf(".") < editText.indexOf("@") + 2 || editText.lastIndexOf(".") + 3 >= editText.length || exp1 || (exp2 !== null && exp2.length > 1) || !exp3)
                return false
        else
                return true
    };
    
    EditProto.isDigit = function () {
        return (/^[\d]+$/g.test(this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value));
    };
    
    EditProto.isLetter = function () {
        return (/^[A-z]+$/g.test(this.shadowRoot.getElementsByTagName('table')[0].rows[0].cells[2].getElementsByTagName('input')[0].value));
    }; 

	//***************************** Metodos Callback ******************************

	EditProto.createdCallback = function () {

		var shadow = this.createShadowRoot();
		var t = document.createElement("table");

		for (var i = 0; i < 1; i++) {
			var row = t.insertRow();
			for (var j = 0; j <= 2; j++) {
				var cell = row.insertCell();
			}
		}
		shadow.appendChild(t);

		var l = document.createElement("label");
		var tx = document.createTextNode("Valor: ");
		title === undefined ? tx.textContent = 'Titulo Opcional: ' : tx.textContent = title;
		l.appendChild(tx);
		t.rows[0].cells[0].appendChild(l);

		var i = document.createElement("input");
		i.setAttribute("type", "text");
		i.style.width = w;
		i.style.height = h;
		t.rows[0].cells[2].appendChild(i);
	};

	//***************************** Registro de la clase ************************

	var Edit = document.registerElement('x-edit', {prototype: EditProto, extends: "div"});
	return new Edit();


};

var ObjectGroup = function (w, h, title) {

	//***************************** Declaracion de propiedades ********************
	var ObjectGroupProto = Object.create(HTMLDivElement.prototype);
	var s = new Style();

	Object.defineProperties(ObjectGroupProto, {
		"width": {
			set: function (newVal) {
				this.style.width = newVal;
				this.shadowRoot.getElementsByTagName('canvas')[0].width = newVal;
				setTimeout(function () {
					this.shadowRoot.getElementsByTagName('div')[0].style.left = calculateLeft(this.shadowRoot.getElementsByTagName('div')[0], this.shadowRoot.getElementsByTagName('canvas')[0]);
				}, 10);
			},
			get: function () {
				return this.style.width;
			}
		}, "height": {
			set: function (newVal) {
				this.style.height = newVal;
				this.shadowRoot.getElementsByTagName('canvas')[0].height = newVal;
				this.shadowRoot.getElementsByTagName('div')[0]=parseInt(this.shadowRoot.getElementsByTagName('canvas')[0].style.top)+20+'px';
			},
			get: function () {
				return this.style.height;
			}
		}, "header": {
			set: function (newVal) {
				this.shadowRoot.getElementsByTagName('div')[0].innerHTML = newVal;
			},
			get: function () {
				return this.shadowRoot.getElementsByTagName('div')[0].innerHTML;
			}
		}, "left" :{
			set: function(newVal){
				this.style.left=newVal;
			},
			get: function(){
				return this.style.left;
			}
		}, "top" :{
				set: function(newVal){
					this.style.top=newVal;
				},
				get: function(){
					return this.style.top;
			}
		}
	});

	//***************************** Metodos Callback ******************************
	ObjectGroupProto.createdCallback = function () {
		// all properties of the object must be set here, this is just a test.
		this.style.position= 'absolute';
		var shadow = this.createShadowRoot();
		if(ObjectGroup.width === undefined || ObjectGroup.width === null)  ObjectGroup.width = 500;
		if(ObjectGroup.height === undefined || ObjectGroup.height === null)  ObjectGroup.height = 500;
		//canvas setting
		var t = document.createElement("canvas");
		t.style.position = 'absolute';
		ObjectGroup.width === undefined || ObjectGroup.width === null ? t.width = 500 : t.width = ObjectGroup.width;
		ObjectGroup.height === undefined || ObjectGroup.height === null ? t.height = 500 : t.height = ObjectGroup.height;
		//margen y borde del canvas
		t.style.margin = 20;
		t.style.borderStyle = 'solid';
		t.style.borderColor = 'black';
		t.style.borderWidth = 'thin';
		shadow.appendChild(t);
		//creando div de titulo
		var titlediv = document.createElement('div');
		titlediv.style.position = 'absolute';
		shadow.appendChild(titlediv);
		//atributos del titulo
		titlediv.style.top = 10;
		titlediv.style.fontFamily = 'Arial';
		titlediv.style.fontSize = 'medium';
		titlediv.style.color = 'red';
		title === undefined ? titlediv.innerHTML = 'Titulo Opcional' : titlediv.innerHTML = title;
		titlediv.style.backgroundColor = '#000000';
		//para centrar el titulo se debe calcular cuanto debe ser el left
		setTimeout(function () {
			titlediv.style.left = calculateLeft(titlediv, t);
		}, 10);
	};
	//*****************************Metodos Privados******************************
	function calculateLeft(div, can) {
		var divsize = parseInt(div.offsetWidth);
		var canvsize = parseInt(can.width);
		return String(((canvsize - divsize) / 2) + 29) + 'px';

	}

	//*****************************Metodos Publicos******************************

	ObjectGroupProto.setDimension = function (w, h) {
		this.width = w;
		this.height = h;
	};
	ObjectGroupProto.setPosition = function(x,y){
	 this.left=x;
	 this.top=y;
	 };
	ObjectGroupProto.addObject = function(object,x,y){
		object.style.position = 'absolute';
		//for it not to overshadow the title
		var titleh=parseInt(this.shadowRoot.getElementsByTagName('div')[0].style.top);
		typeof x ==='string'? object.style.left=x:object.style.left=x+'px';
		typeof y ==='string'? object.style.top=parseInt(y)+titleh+'px':object.style.top=y+titleh+'px';
		this.shadowRoot.appendChild(object);
		console.log(object.style.left);
	};
	ObjectGroupProto.show = function (){
		this.style.display='block';
	};
	ObjectGroupProto.hide = function(){
		this.style.display='none';
	};
	ObjectGroupProto.setColorTitle = function(color) {
		if (typeof color === 'string') {
			this.shadowRoot.getElementsByTagName('div')[0].style.color = color;
		}
	};
	ObjectGroupProto.setFontFamilyTitle = function(fontfam){
		if(typeof fontfam === 'string'){
			this.shadowRoot.getElementsByTagName('div')[0].style.fontFamily = fontfam;
		}
	};
	ObjectGroupProto.setFontSizeTitle = function(size){
		if(typeof size === 'string'){
			this.shadowRoot.getElementsByTagName('div')[0].style.fontSize = size;
		}
	};
	ObjectGroupProto.setBgColorTitle = function(bg){
		if(typeof bg === 'string'){
			this.shadowRoot.getElementsByTagName('div')[0].style.backgroundColor = bg;
		}
	};
	ObjectGroupProto.setBorderStyle = function(style){
		if(typeof style === 'string'){
			this.shadowRoot.getElementsByTagName('canvas')[0].style.borderStyle = style;
		}
	};
	ObjectGroupProto.setBorderColor = function(bordercol){
		if(typeof bordercol === 'string'){
			this.shadowRoot.getElementsByTagName('canvas')[0].style.borderColor = bordercol;
		}else if (typeof width === 'number'){
			this.shadowRoot.getElementsByTagName('canvas')[0].style.borderColor = bordercol+'px';
		}
	};
	ObjectGroupProto.setBorderWidth = function(width){
		if(typeof width === 'string'){
			this.shadowRoot.getElementsByTagName('canvas')[0].style.borderWidth = width;
		} else if (typeof width === 'number'){
			this.shadowRoot.getElementsByTagName('canvas')[0].style.borderWidth = width+'px';
		}
	};
	//***************************** Registro de la clase ************************

	var ObjectGroup = document.registerElement('x-objectgroup', {prototype: ObjectGroupProto, extends: "div"});
	return new ObjectGroup();


};