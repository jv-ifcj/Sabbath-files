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
      
      
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("10.html", "_self");
         // insert code to be run at timeline end here

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

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24250, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24750, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text15}", "click", function(sym, e) {
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text11}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("readtext");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_NextButton}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("fin");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text17}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("readmatthewclick");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text20}", "click", function(sym, e) {
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text23}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("minimize");
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32201, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33750, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q10_begin");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q10_begin");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11497, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q9c_true_select_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q9c_true_select");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q9c_false_select_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q9c_false_select");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q9c_skip_go_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q9c_skip_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q9c_skip_arrow_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q9c_skip_check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q9c_false_submit_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q9c_false_submit");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q9c_true_submit_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q9c_true_submit");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q9c_false_next_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q9c_false_next");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q9c_true_next_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q9c_true_next");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q10_submit_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q10_next_go");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q10_skip_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q10_skip_check");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q10_skip_go_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q10_next_go");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23626, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_exodus_submit_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("nextslide");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_exodus_skip_go_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("nextslide");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_exodus_skip_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("exodus_skip_check");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("exodus_begin");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_hebrews}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q12_begin");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q12_skip_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q12_skip_check");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27618, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q12_skip_go_button}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q12_next_go");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26150, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("commentary_begin");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb18}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("08.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb19}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("q9c_begin");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb20}", "click", function(sym, e) {
         sym.play("q10_begin");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb21}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("exodus_begin");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb22}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb23}", "click", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q12_submit_button}", "click", function(sym, e) {
         sym.play('q12_next_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var origin=self.location.search;
         
         if (origin == '?back') {
         sym.getComposition().getStage().play('q12_begin');
         }
         else {
         sym.getComposition().getStage().play();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_exodus_escape_x}", "click", function(sym, e) {
         sym.play('exodus_home');

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