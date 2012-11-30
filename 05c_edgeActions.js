
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q6_submit_button}", "click", function(sym,e){sym.play("q6_next");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q6_skip_arrow}", "click", function(sym,e){sym.play("q6_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q6_skip_go_button}", "click", function(sym,e){sym.play("q6_next");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q7_submit_button}", "click", function(sym,e){sym.play("q7_skip_go2");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q7_skip_arrow}", "click", function(sym,e){sym.play("q7_skip_check");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q8_skip_arrow}", "click", function(sym,e){sym.play("q8_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q9_submit_button}", "click", function(sym,e){sym.play("q8_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q8_skip_go_button}", "click", function(sym,e){sym.play("q8_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q7_skip_go_button_2}", "click", function(sym,e){sym.play("q7_skip_go2");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q9_skip_arrow}", "click", function(sym,e){sym.play("q9_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_RoundRect2}", "click", function(sym,e){sym.play("q9_next_go");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q9_skip_go_button}", "click", function(sym,e){sym.play("q9_next_go");});
//Edge binding end
Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym,e){window.open("06.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb12}", "click", function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb13}", "click", function(sym,e){sym.play(3000);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb14}", "click", function(sym,e){sym.play(5000);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb15}", "click", function(sym,e){sym.play(7000);});
//Edge binding end
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var origin=self.location.search;
         
         if (origin == '?back') {
         sym.getComposition().getStage().play('q9_begin');
         }
         else {
         sym.getComposition().getStage().play();
         }

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'restart'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_escape}", "click", function(sym, e) {
         sym.play('base_state');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3945, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3895, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3850, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3795, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("00.html", "_self");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
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

   })("restart");
   //Edge symbol end:'restart'

})(jQuery, AdobeEdge, "EDGE-899741");