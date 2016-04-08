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
				
				//Hierarchy console generation
				console.log('Layout',layout);	
				
				
				//Get the number of items 
				var lenItems = layout.lineList.length;

				
				//Generate the lines considering the value of the items
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
				
				for (i=0;i<lenItems;i++){	

					//Gets the value of the added item  converting to integer
					qTexto = parseInt(layout.lineList[i].lineValue);					
					if (isNaN(qTexto) || qTexto == null || qTexto.length < 1){
						
						// Configures the colors for alfanumeric values
						
						
						// Set background color
						BackgroundColor = palette[layout.lineList[i].colorBA];
						
						// Set font color
						fontColorHC = palette[layout.lineList[i].colorFA];
						
						// Set alfanumeric values
						//qTexto = layout.lineList[i].lineValue;
						
						// Configures the colors for alfanumeric values - end
						
					} else
					{
					
						if (qTexto==0)
						{					
							// Configures the colors for values equal zeroes


							// Set background color
							BackgroundColor = palette[layout.lineList[i].color03];

							// Set font color
							fontColorHC = palette[layout.lineList[i].color06];


							// Configures the colors for values equal zeroes - end

						} 
						else
							{
								if (qTexto>0)
								{
									// Configures the colors for values greater than zeroes


									// Set background color
									BackgroundColor = palette[layout.lineList[i].color01];

									// Set font color
									fontColorHC = palette[layout.lineList[i].color04];


									// Configures the colors for values greater than zeroes - end	
								}
								else
									{							
									// Configures the colors for values lesser than zeroes


									// Set background color
									BackgroundColor = palette[layout.lineList[i].color02];

									// Set font color
									fontColorHC = palette[layout.lineList[i].color05];


									// Configures the colors for values lesser than zeroes - end								}

									}
							}
					}
					var vLineCSSDiv = layout.lineList[i].lineCSSDiv;					
					var vLineCSSP = layout.lineList[i].lineCSSP;	
					
					//Gets the value of the added measures
					if (layout.lineList[i].lineValue.length > 0) {
						var vOriginalText = layout.lineList[i].lineValue;
					}
					else
					{
						var vOriginalText = "-";
					}
					
					//Generates the html code
					html += "<p style='" + vLineCSSP + "'><div style='background-color:"+ BackgroundColor + ";color:" + fontColorHC + ";" + vLineCSSDiv + ";'>" + vOriginalText + "</div></p>";
					

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


