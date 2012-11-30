/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Next}", "click", function(sym, e) {
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text5}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.nytimes.com/2003/03/02/magazine/bring-back-the-sabbath.html");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7440, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("05c.html", "_self");
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb10}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("04.html?back", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb11}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
         if (e.which == 13) {
         	/*if ($("[name='sabbathq01']").is(":focus")) {
         		return;
         	}
         	else */if ($("#Stage_Next") && $("#Stage_Next").css("display") != "none") {
         		sym.play();
         	}
         	else if ($("#Stage_NextButton") && $("#Stage_NextButton").css("display") != "none") {
         		sym.play();
         	}
         }
         else if (e.which == 39) {
         	/*if ($("[name='sabbathq01']").is(":focus")) {
         		return;
         	}
         	else */if ($("#Stage_Next") && $("#Stage_Next").css("display") != "none") {
         		sym.play();
         	}
         	else if ($("#Stage_NextButton") && $("#Stage_NextButton").css("display") != "none") {
         		sym.play();
         	}
         }
         
         else if (e.which == 37) {
         	/*if ($("[name='sabbathq01']").is(":focus")) {
         		return;
         	}
         	else */if ($("#Stage_sb11") && $("#Stage_sb11").css("display") != "none") {
         		sym.playReverse();
         	}
         	else if ($("#Stage_sb10") && $("#Stage_sb10").css("display") != "none") {
         		window.open("04.html?back", "_self");
         	}
         }
         /*
         else if (e.which == 9) {
         	if ($("[name='sabbathq01']").is(":focus")) {
         		//window.alert("Tab pressed");
         		$("#Stage_q1_submit_button").focus();
         	}
         }
         */

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'restart'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_escape}", "click", function(sym, e) {
         sym.play('base_state');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_restart_yes_button}", "click", function(sym, e) {
         sym.play('yes_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_restart_no_button}", "click", function(sym, e) {
         sym.play('no_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.play('base_state');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3795, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3850, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3895, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3945, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("00.html", "_self");

      });
      //Edge binding end

   })("restart");
   //Edge symbol end:'restart'

})(jQuery, AdobeEdge, "EDGE-32161239");