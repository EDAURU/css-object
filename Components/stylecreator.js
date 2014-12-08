var Style = function () {
    
    this.setEnvironment = function (newEnvironment) { environment = newEnvironment; };
    
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
        border_top_width: []
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
