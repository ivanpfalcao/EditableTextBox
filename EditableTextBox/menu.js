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
			//inicio
			MyList: {                              
				type: "array",                       
				ref: "lineList",                     
				label: "Line Settings",    
				itemTitleRef: "label",               
				allowAdd: true,                      
				allowRemove: true,                   
				addTranslation: "Add Item",          
				items: {                                                             
					label: {                           
						type: "string",                  
						ref: "label",                    
						label: "Label",                  
						expression: "always",          
						defaultValue: "Linha"            
					},   
					lineValue: {                        
						type: "string",                  
						ref: "lineValue",                 
						label: "Line Value",				     
						expression: "always"    
					},
					MyColorPicker01: {
						label:"Background Color (>0)",
						component: "color-picker",
						ref: "color01",
						type: "integer",
						defaultValue: 10
					},
					MyColorPicker02: {
						label:"Background Color (<0)",
						component: "color-picker",
						ref: "color02",
						type: "integer",
						defaultValue: 10
					},
					MyColorPicker03: {
						label:"Background Color (=0)",
						component: "color-picker",
						ref: "color03",
						type: "integer",
						defaultValue: 10
					},
					MyColorPickerBA: {
						label:"Background Color (Alfanumeric)",
						component: "color-picker",
						ref: "colorBA",
						type: "integer",
						defaultValue: 10
					},
					MyColorPicker04: {
						label:"Font Color (>0)",
						component: "color-picker",
						ref: "color04",
						type: "integer",
						defaultValue: 11
					},
					MyColorPicker05: {
						label:"Font Color (<0)",
						component: "color-picker",
						ref: "color05",
						type: "integer",
						defaultValue: 11
					},
					MyColorPicker06: {
						label:"Font Color (=0)",
						component: "color-picker",
						ref: "color06",
						type: "integer",
						defaultValue: 11
					},
					MyColorPickerFA: {
						label:"Font Color (Alfanumeric)",
						component: "color-picker",
						ref: "colorFA",
						type: "integer",
						defaultValue: 11
					}, 
					lineCSSDiv: {                        
						type: "string",                  
						ref: "lineCSSDiv",                 
						label: "Line CSS <div>",  
						expression: "always"    
					},
					lineCSSP: {                        
						type: "string",                  
						ref: "lineCSSP",                 
						label: "Line CSS <p>",  
						expression: "always"    
					},
					linkHref: {                        
						type: "string",                  
						ref: "linkHref",                 
						label: "href Link",				     
						expression: "always"    
					},
					linkHrefCSS: {                        
						type: "string",                  
						ref: "linkHrefCSS",                 
						label: "href CSS <a href>",				     
						expression: "always"    
					}
				}                                    
			}                                      
			
			
			
			
			
			//final
			
		}
	};
 
});

