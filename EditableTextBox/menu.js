define( [], function ( ) {
	var palette = [
        "#b0afae",
        "#7b7a78",
        "#545352",
        "#4477aa",
        "#7db8da",
        "#b6d7ea",
        "#46c646",
        "#f93f17",
        "#ffcf02",
        "#276e27",
        "#ffffff",
        "#000000"
    ];	
	return {
		type: "items",
		component: "accordion",
		items: {
			measures: {
				uses: "measures",
				min: 1,
				max: 50
			},
			settings: {
				uses: "settings",
				items: 	{
							MyColorPicker01: {
								label:"Background Color (>0)",
								component: "color-picker",
								ref: "color01",
								type: "integer",
								defaultValue: 3
							},
							MyColorPicker02: {
								label:"Background Color (<0)",
								component: "color-picker",
								ref: "color02",
								type: "integer",
								defaultValue: 3
							},
							MyColorPicker03: {
								label:"Background Color (=0)",
								component: "color-picker",
								ref: "color03",
								type: "integer",
								defaultValue: 3
							},
							MyColorPickerBA: {
								label:"Background Color (Alfanumeric)",
								component: "color-picker",
								ref: "colorBA",
								type: "integer",
								defaultValue: 3
							},
							MyColorPicker04: {
								label:"Font Color (>0)",
								component: "color-picker",
								ref: "color04",
								type: "integer",
								defaultValue: 10
							},
							MyColorPicker05: {
								label:"Font Color (<0)",
								component: "color-picker",
								ref: "color05",
								type: "integer",
								defaultValue: 10
							},
							MyColorPicker06: {
								label:"Font Color (=0)",
								component: "color-picker",
								ref: "color06",
								type: "integer",
								defaultValue: 10
							},
							MyColorPickerFA: {
								label:"Font Color (Alfanumeric)",
								component: "color-picker",
								ref: "colorFA",
								type: "integer",
								defaultValue: 10
							}
						}	
			},
			CSSAdicional: {
            		type: "string",
					ref: "CSSAdicional",
            		label: "Aditional CSS <div>",				
					expression: "always",
					expressionType: "dimension"					
        	},
			CSSParagrafo: {
            		type: "string",
					ref: "CSSParagrafo",
            		label: "Aditional CSS <p>",				
					expression: "always",
					expressionType: "dimension"					
        	}
		}
	};
 
});

