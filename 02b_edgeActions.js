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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next1}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10750, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("03.html", "_self");
         // insert code to be run at timeline end here

      });
      //Edge binding end

            Symbol.bindElementAction(compId, symbolName, "${_music_box_a}", "click", function(sym, e) {
         sundaysonga.pause();
         sundaysongb.pause();
         sundaysongc.pause();
         sundaysongd.pause();
         sundaysonga.playclip();

      });
         //Edge binding end



      Symbol.bindElementAction(compId, symbolName, "${_music_box_b}", "click", function(sym, e) {
         sundaysonga.pause();
         sundaysongb.pause();
         sundaysongc.pause();
         sundaysongd.pause();
         sundaysongb.playclip();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_music_box_c}", "click", function(sym, e) {
         sundaysonga.pause();
         sundaysongb.pause();
         sundaysongc.pause();
         sundaysongd.pause();
         sundaysongc.playclip();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_music_box_d}", "click", function(sym, e) {
         sundaysonga.pause();
         sundaysongb.pause();
         sundaysongc.pause();
         sundaysongd.pause();
         sundaysongd.playclip();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next2}", "click", function(sym, e) {
         sundaysonga.pause();
         sundaysongb.pause();
         sundaysongc.pause();
         sundaysongd.pause();
         sym.play(20500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2210, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_sb01}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("01.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb02}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb03}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(6000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sb04}", "click", function(sym, e) {
         sundaysonga.pause();
         sundaysongb.pause();
         sundaysongc.pause();
         sundaysongd.pause();
         sym.play(10750);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
         if (e.which == 13) {
         	if ($("#Stage_next1") && $("#Stage_next1").css("display") != "none") {
         		sym.play();// do something
         	}
         	else if ($("#Stage_next2") && $("#Stage_next2").css("display") != "none") {
         		sym.play(20500);
         	}
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18952, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var origin=self.location.search;
         
         if (origin == '?back') {
         sym.getComposition().getStage().play('songs_begin');
         }
         else {
         sym.getComposition().getStage().play();
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3245, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2205, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_trigger}", "mouseenter", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("grow");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_trigger}", "mouseleave", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2733, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("music_box");
   //Edge symbol end:'music_box'

//=========================================================
   (function(symbolName) {

   })("woman_sabbath");
   //Edge symbol end:'woman_sabbath'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

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
         sundaysonga.pause();
         sundaysongb.pause();
         sundaysongc.pause();
         sundaysongd.pause();
         sym.play();

      });
      //Edge binding end

   })("restart");
   //Edge symbol end:'restart'

})(jQuery, AdobeEdge, "EDGE-11976501");