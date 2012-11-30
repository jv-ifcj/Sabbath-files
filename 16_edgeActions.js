
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_next1}", "click", function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym,e){window.open("17.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2210, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb01}", "click", function(sym,e){window.open("15.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb02}", "click", function(sym,e){sym.play(1000);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb03}", "click", function(sym,e){sym.play(6250);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb04}", "click", function(sym,e){sym.play(10750);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_step4_next_button}", "click", function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_step_4_back}", "click", function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym,e){sym.stop()});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_skip_check_button}", "click", function(sym,e){sym.play("skipcheck");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_skip_go_button}", "click", function(sym,e){sym.play("herewego");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym,e){window.open("17.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_RoundRect3}", "click", function(sym,e){sym.play('herewego');});
//Edge binding end
      Symbol.bindElementAction(compId, symbolName, "${_bb_01}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("15.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb_02}", "click", function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb_03}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb_04}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb_05}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb_06}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb_07}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb_08}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb_09}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var origin=self.location.search;
         
         if (origin == '?back') {
         sym.getComposition().getStage().play('origin_back');
         }
         else {
         sym.getComposition().getStage().play();
         }
         

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================
(function(symbolName){Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3245, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2205, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_trigger}", "mouseenter", function(sym,e){sym.play("grow");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_trigger}", "mouseleave", function(sym,e){sym.play("shrink");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2733, function(sym,e){sym.stop();});
//Edge binding end
})("music_box");
   //Edge symbol end:'music_box'

//=========================================================
(function(symbolName){})("woman_sabbath");
   //Edge symbol end:'woman_sabbath'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
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
         window.open("14.html", "_self");

      });
      //Edge binding end

   })("restart");
   //Edge symbol end:'restart'

})(jQuery, AdobeEdge, "EDGE-11976501");