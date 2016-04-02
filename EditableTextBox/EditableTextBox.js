define(["jquery", "./menu", "text!./Layout01.css"], 
function($, properties, cssContent) {
	'use strict';
	$("<style>").html(cssContent).appendTo("head");
	return {
		initialProperties : {
			version: 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 50,
					qHeight : 50
				}]
			}
		},
		definition : properties,
		snapshot : {
			canTakeSnapshot : true
		},
		paint : function($element, layout) {
			var self = this, html = "", measures = layout.qHyperCube.qMeasureInfo, w = $element.width() - 130, qData = layout.qHyperCube.qDataPages[0], vmax = (measures && measures[0]) ? measures[0].qMax * 1.5 : 1;
			if(qData && qData.qMatrix) {
				
				//Generates HTML
				
				//Get the number of measures 
				var lenMatriz = parseInt(layout.qHyperCube.qDataPages[0].qMatrix[0].length);

				
				//Generate the lines considering the value of the measure
				var i;
				var qTexto;
				var BackgroundColor;
				var fontColorHC
									
				// Set the colors to be selected
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
				
				for (i=0;i<lenMatriz;i++){	

					//Gets the value of the added measures (from the hypercube) converting to integer
					qTexto = parseInt(layout.qHyperCube.qDataPages[0].qMatrix[0][i].qText);					
					if (isNaN(qTexto) || qTexto == null || qTexto.length < 1){
						
						// Configures the colors for alfanumeric values
						
						
						// Set background color
						BackgroundColor = palette[layout.colorBA];
						
						// Set font color
						fontColorHC = palette[layout.colorFA];
						
						// Set alfanumeric values
						qTexto = layout.qHyperCube.qDataPages[0].qMatrix[0][i].qText;
						
						// Configures the colors for alfanumeric values - end
						
					} else
					{
					
						if (qTexto==0)
						{					
							// Configures the colors for values equal zeroes


							// Set background color
							BackgroundColor = palette[layout.color03];

							// Set font color
							fontColorHC = palette[layout.color06];


							// Configures the colors for values equal zeroes - end

						} 
						else
							{
								if (qTexto>0)
								{
									// Configures the colors for values greater than zeroes


									// Set background color
									BackgroundColor = palette[layout.color01];

									// Set font color
									fontColorHC = palette[layout.color04];


									// Configures the colors for values greater than zeroes - end	
								}
								else
									{							
									// Configures the colors for values lesser than zeroes


									// Set background color
									BackgroundColor = palette[layout.color02];

									// Set font color
									fontColorHC = palette[layout.color05];


									// Configures the colors for values lesser than zeroes - end								}

									}
							}
					}
					var CSSAdicional = layout.CSSAdicional;					
					var CSSParagrafo = layout.CSSParagrafo;	
					html += "<p style='" + CSSParagrafo + "'><div style='background-color:"+ BackgroundColor + ";color:" + fontColorHC + ";" + CSSAdicional + ";'>" + qTexto + "</div></p>";
					

				}
				//Generates HTML - end 
				
				$element.html(html);
				$element.find('.selectable').on('qv-activate', function() {
					if(this.hasAttribute("data-value")) {
						var value = parseInt(this.getAttribute("data-value"), 10), dim = 0;
						self.selectValues(dim, [value], true);
						$(this).toggleClass("selected");
					}
				});
			}

		}
	};
});


