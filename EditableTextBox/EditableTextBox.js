define(["jquery", "./menu", "text!./css/Layout01.css", "./src/nformatter.htable","text!./css/jquery-ui.css","./src/jquery-ui"],  
function($, properties, cssContent, nformater, cssJqueryUI, jqueryui) {
	'use strict';
	$("<style>").html(cssJqueryUI).appendTo("head");
	//$("<style>").html(cssJqueryUIstr).appendTo("head");
	//$("<style>").html(cssJqueryUItheme).appendTo("head");
	$("<style>").html(cssContent).appendTo("head");
	$(document).ready();
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
				
				//Hierarchy console generation (debug only)
				//console.log('Layout',layout);	
				
				
				//Get the number of items 
				var lenItems = layout.lineList.length;

				
				//Generate the lines considering the value of the items
				var i;
				var qTexto;
				var BackgroundColor;
				var fontColorHC;
				var theDialogArray = [];
				var ObjectID = layout.qInfo.qId;
				var iFrames = [];

									
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

					//Gets the value of the added item
					qTexto = layout.lineList[i].lineValue;	
					
					//replaces comma by dot
					qTexto = qTexto.replace(",",".");
					if (isNaN(qTexto) || qTexto == null || qTexto.length < 1){
						
						// Configures the colors for alfanumeric values
						
						// Set background color
						BackgroundColor = palette[layout.lineList[i].colorBA];
						
						// Set font color
						fontColorHC = palette[layout.lineList[i].colorFA];
						
						
						// Configures the colors for alfanumeric values - end
						
					} else
					{
						qTexto = parseFloat(qTexto);
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
					
					//Set CSS (div and paragraph)
					var vLineCSSDiv = layout.lineList[i].lineCSSDiv;					
					var vLineCSSP = layout.lineList[i].lineCSSP;					
					
					
					//Set hyperlink
					if (layout.lineList[i].linkHref.length>0) {
						
						vlinkHrefClose = "</div>";
						if (layout.lineList[i].linkHrefCSS.length>0) {											
							
							
							//Generates link with CSS
							vlinkHref = "<div class='clickdiv' id='divid"+ i +"' style='cursor:pointer;color:" + fontColorHC + ";" + layout.lineList[i].linkHrefCSS + "'>";
							
							
							//Generates iFrame to be appended in the end of document
							iFrames[i] = "<div class='iFramediv' id='dialog" + ObjectID + i + "' style='display:none;' title='Dialog Title'><iframe frameborder='0' scrolling='no' style='position:absolute;width:100%;height:100%;border:none' src='" + layout.lineList[i].linkHref + "'></iframe></div>";

							
						} 
						else
						{
							//vlinkHref = "<a href='" + layout.lineList[i].linkHref + "'>";
							

							//Generates link without CSS
							vlinkHref = "<div class='clickdiv' id='divid"+ i +"' style='cursor:pointer;color:" + fontColorHC + ";'>";
							
							//Generates iFrame to be appended in the end of document
							iFrames[i] = "<div class='iFramediv' id='dialog" + ObjectID + i + "' style='display:none;' title='Dialog Title'><iframe frameborder='0' scrolling='no' style='position:absolute;width:100%;height:100%;border:none' src='" + layout.lineList[i].linkHref + "'></iframe></div>";
							
							
						}
					}
					else
					{
						var vlinkHref = "";
						var vlinkHrefClose = "";
					}
					
					
					var vOriginalText;										
					
					//Gets the value of the added items
					if (layout.lineList[i].lineValue.length > 0) {
						if (isNaN(qTexto)){
							vOriginalText = layout.lineList[i].lineValue;
						}
						else
						{							
							//Set decimal separator
							if (layout.lineList[i].DecSep == "DotSep"){
								var locale = "us";
							} 
							else 
							{
								var locale = "de";
							}
							
							var format = layout.lineList[i].textFormat;
							var number = $.formatNumber(qTexto, {format:format, locale:locale});
							vOriginalText = number;							
						}
					}
					else
					{
						vOriginalText = " ";
					}
					
					
					//Generates the html code
					html += "<p style='" + vLineCSSP + "'>" + vlinkHref + "<div style='background-color:"+ BackgroundColor + ";color:" + fontColorHC + ";" + vLineCSSDiv + ";'>" + vOriginalText + "</div>" + vlinkHrefClose + "</p>";	
					
					
	

				}
				//Generates HTML - end 
				
				
				$element.html(html);
				
				
				// pop up - generates the dialog UI settings

				// pop up - generates the dialog UI settings - end
				
				$element.find('.selectable').on('qv-activate', function() {
					if(this.hasAttribute("data-value")) {
						var value = parseInt(this.getAttribute("data-value"), 10), dim = 0;
						self.selectValues(dim, [value], true);
						$(this).toggleClass("selected");
					}
				});
									
		
				//Sets the onclick behavior, opening the respective dialog
				$( ".clickdiv" ).click(function() {
	
					var vWidth = $(window).width() * 0.8;
					var vHeight = $(window).height() * 0.8;
					var opt2 = {
						autoOpen: false,
						closeOnEscape: true,
						height : vHeight,
						position: {my:'left',at: 'left',of: '#targetElement',collision: 'flip'} ,
						title: 'Dialog',
						draggable: true,
						width : vWidth,
						//maxWidth : width,
						//minWidth : width,
						//maxHeigth : height,
						//minHeigth : height,
						fluid: true,
						resizable : true,
						modal : true,
						close: function() {
							$('#dialog' + ObjectID + clickedID).dialog("destroy");
						}
					};	
					var clickedID = "";
					clickedID = this.id;						
					clickedID = clickedID.replace("divid","");
					theDialogArray[clickedID] = $(iFrames[clickedID]).dialog(opt2);
					theDialogArray[clickedID].dialog("open");
				
				});
																		
			}

		}
	};
});
