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
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play_button}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q14_submit_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q14_next_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q14_skip_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q14_skip_check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q14_skip_go_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q14_next_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q15_submit_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q15_next_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q15_skip_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q15_skip_check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q15_skip_go_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q15_next_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q16_submit_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q16_next_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q16_skip_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q16_skip_check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q16_skip_go_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q16_next_go");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("13.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb29}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("12a.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb30}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(3250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb31}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(5750);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb32}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q15_begin");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var origin=self.location.search;
         
         if (origin == '?back') {
         sym.getComposition().getStage().play('q16_begin');
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
         window.open("00.html", "_self");

      });
      //Edge binding end

   })("restart");
   //Edge symbol end:'restart'

})(jQuery, AdobeEdge, "EDGE-4723648");