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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_chart1_skip_go_button}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_biblebox1}", "click", function(sym, e) {

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3Copy}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text5}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8Copy}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8Copy2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text}", "click", function(sym, e) {
         sym.play('verse1_open');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy}", "click", function(sym, e) {
         sym.play('verse2_open');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy2}", "click", function(sym, e) {
         sym.play('verse3_open');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TextCopy3}", "click", function(sym, e) {
         sym.play('verse4_open');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8Copy3}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.play('chart2_home');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         sym.play('chart2_home');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8Copy4}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text8Copy5}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chart1_skip_check_button}", "click", function(sym, e) {
         sym.play('chart1_skip_check');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chart2_skip_check_button}", "click", function(sym, e) {
         sym.play('chart2_skip_check');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chart2_skip_go_button}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text9}", "click", function(sym, e) {
         sym.play('verse5_open');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text10}", "click", function(sym, e) {
         sym.play('verse6_open');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text11}", "click", function(sym, e) {
         sym.play('verse7_open');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chart2_submit_button}", "click", function(sym, e) {
         sym.play('chart2_submit');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chart1_submit_button}", "click", function(sym, e) {
         sym.play('chart1_submit');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34500, function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("31.html", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q35_submit_button}", "click", function(sym, e) {
         sym.play('q35_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q35_skip_check_button}", "click", function(sym, e) {
         sym.play('q35_skip_check');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q35_skip_go_button}", "click", function(sym, e) {
         sym.play('q35_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q36_submit_button}", "click", function(sym, e) {
         sym.play('q36_go');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q36_skip_check_button}", "click", function(sym, e) {
         sym.play('q36_skip_check');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_q36_skip_go_button}", "click", function(sym, e) {
         sym.play('q36_go');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         sym.play('chart2_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chart1_ex1}", "click", function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chart1_ex4}", "click", function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chart1_ex2}", "click", function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_chart1_ex3}", "click", function(sym, e) {
         sym.play('chart1_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_escape1}", "click", function(sym, e) {
         sym.play('chart2_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_escape2}", "click", function(sym, e) {
         sym.play('chart2_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_escape3}", "click", function(sym, e) {
         sym.play('chart2_home');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb1}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("29.html?back", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb2}", "click", function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb3}", "click", function(sym, e) {
         sym.play('chart2_begin');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bb4}", "click", function(sym, e) {
         sym.play('q35_begin');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var origin=self.location.search;
         
         if (origin == '?back') {
         sym.getComposition().getStage().play('q36_begin');
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