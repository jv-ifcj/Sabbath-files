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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_next_play}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q28_submit_button}", "click", function(sym, e) {
         sym.play('q28_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q28_skip_check_button}", "click", function(sym, e) {
         sym.play('q28_skip_check');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q28_skip_go_button}", "click", function(sym, e) {
         sym.play('q28_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q29_submit_button}", "click", function(sym, e) {
         sym.play('q29_go');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q29_skip_check_button}", "click", function(sym, e) {
         sym.play('q29_skip_check');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q29_skip_go_button}", "click", function(sym, e) {
         sym.play('q29_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q30_submit_button}", "click", function(sym, e) {
         sym.play('q30_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q30_skip_check_button}", "click", function(sym, e) {
         sym.play('q30_skip_check');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q30_skip_go_button}", "click", function(sym, e) {
         sym.play('q30_go');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("25.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb1}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("23.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb2}", "click", function(sym, e) {
         sym.play('q28_begin');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb3}", "click", function(sym, e) {
         sym.play('q29_begin');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var origin=self.location.search;
         
         if (origin == '?back') {
         sym.getComposition().getStage().play('q30_begin');
         }
         else {
         sym.getComposition().getStage().play();
         }
         
         

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
         window.open("14.html", "_self");

      });
      //Edge binding end

   })("restart");
   //Edge symbol end:'restart'

})(jQuery, AdobeEdge, "EDGE-4723648");