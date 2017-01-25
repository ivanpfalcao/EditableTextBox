# EditableTextBox

QlikSense Project. Editable Text Box. It also habilitates the text and applies different colors depending on the condition. Habilitates CSS for the layout of each line.

Version of 2.0:
  - We substituted measures by arrays, which has granted the full control of each line. However, Version 2.0 of this application will only be compatible with qlik sense 2.2 and above. For older versions, please consider using Editable TextBox version 1.2;
  - Now each line can be configured separately, including the integer and alphanumerical evaluation;
  - Now each line has its own CSS configuration box;
  


# Instructions

  - To add a new line, click on the Add Item Button. It will Open an interface where you can add a label to the field (Label) and the value to be shown (Line Value); 
  - You may configure the decimal separator using the Decimal Separator field;
  - You may format the numbers (right zeroes, money symbol, etc.) using the Text Formating field, the same way as Format pattern field on Qliksense;
  - Background Color changes the background color of the field depending of the condition (Greater, Lesser or Equal Zeroes);
  - Font Color works the same way as Background Color, but only for the font. The only difference is that it has an option when its an alfanumeric field;
  - Line CSS div works as an CSS configuration for the div that surrounds each line; you must add only the css instruction, separated by comma. For example: 
  
        margin-top:100px;margin-bottom: 100px;margin-right: 150px;margin-left: 80px;

  You may need to use single quotes between the instruction;
  
  - Line CSS p works the same way as Line CSS div, but it was created to allow more control over the paragraph (that surrounds the div of the Line CSS div field). For Example:
        
        margin-top: 1em;margin-bottom: 1em;margin-left: 0;margin-right: 0;
  
  - href Link shows a pop up box when the field is clicked. It works only with internal qlik pages (most of the browsers block external links);
  
  - href CSS works the same way as Line CSS div, also for the hyperlink.
  
  
        
  

