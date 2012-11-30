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
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_NextButtonCopy}", "click", function(sym, e) {
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20750, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_NextButton}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("nextslide");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1250);
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play_button_13}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q17_submit_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q17_next_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q17_skip_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q17_skip_check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q17_skip_go_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q17_next_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q18_submit_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q18_next_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q18_skip_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q18_skip_check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q18_skip_go_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q18_next_go");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb33}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("12c.html?back", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb34}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(7250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb35}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q17_home");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse4}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(17500);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.play(6000);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

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

})(jQuery, AdobeEdge, "EDGE-1999079");