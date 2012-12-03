
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_NextButtonCopy}", "click", function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14350, function(sym,e){//stop the timeline
sym.stop();

//Attribute tabindex values to items on current slide
$("[name='sabbathq01']")
	.focus()
	.attr("tabindex", "1");
$("#Stage_q1_submit_button").attr("tabindex", "2");
$("#Stage_q1_skip_button").attr("tabindex", "3");

//Begin code for highlight around submit button when it obtains focus.  Comment sections can probably be deleted now
//if (!$("#Stage_q1_submit_button").focus) {
//if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").css("display") != "none") {
if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").css("display") != "none") {
	$("#Stage_q1_submit_button")
		.unbind("focus")
		.focus(function() {
		$("#Stage_submit_focus").show();
			//Un-comment line 11 ONLY
	});
	//}


}

if ($("#Stage_q1_submit_button").blur) {
	$("#Stage_q1_submit_button")
		.unbind("blur")
		.blur(function() {
			$("#Stage_submit_focus").hide();
	});
}
//End of Submit button focus highlight code for question 1

/*This next section creates the yellow highlight around the next arrow when tabbed over to*/
if ($("#Stage_q1_skip_button") && $("#Stage_q1_skip_button").css("display") != "none") {
	$("#Stage_q1_skip_button")
		.unbind("focus")
		.focus(function() {
		$("#Stage_next_focus_highlight").show();
			//Un-comment line 11 ONLY
	});
}

if ($("#Stage_q1_skip_button").blur) {
	$("#Stage_q1_skip_button")
		.unbind("blur")
		.blur(function() {
			$("#Stage_next_focus_highlight").hide();
	});
}
/* End of of next arrow focus highlight code */

});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym,e){sym.stop();
$("#Stage_submit_focus").hide();
$("#Stage_q2_skip_button")
	//.focus()
	//.attr("tabindex", "1");
//$("#Stage_q1_submit_button").attr("tabindex", "2");

//if (!$("#Stage_q1_submit_button").focus) {
//if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").css("display") != "none") {
//if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").css("display") != "none") {
//	$("#Stage_q1_submit_button")
//		.unbind("focus")
		//.focus(function() {
		//$("#Stage_submit_focus").show();
			//Un-comment line 11 ONLY
			;
	//});
	//}
//}

//if (!$("#Stage_q1_submit_button").blur) {
//	$("#Stage_q1_submit_button")
//		.unbind("blur")
//		.blur(function() {
//			$("#Stage_submit_focus").hide();
//	});
//}


});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30725, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_NextButton}", "click", function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_A_timeline_button}", "click", function(sym,e){sym.play("a_select");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym,e){sym.stop();
$("#Stage_a_submit_button")
		.unbind("focus")
		.focus(function() {
		$("#Stage_submit_focus").show();
				});

});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21250, function(sym,e){sym.play("wrong_submit");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym,e){sym.play("wrong_submit");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18948, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_B_timeline_button}", "click", function(sym,e){sym.play("b_select");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_C_timeline_button}", "click", function(sym,e){sym.play("c_select");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_a_select_button}", "click", function(sym,e){sym.play("true_select");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_b_select_button}", "click", function(sym,e){sym.play("false_select");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym,e){sym.play(28500);});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q2_skip_go_button}", "click", function(sym,e){sym.play("q2_skip_go");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19657, function(sym,e){sym.play(28500);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_a_submit_button}", "click", function(sym,e){sym.play("a_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q2_b_submit_button}", "click", function(sym,e){sym.play("b_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q2_c_submit_button}", "click", function(sym,e){sym.play("c_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_a_submit_button}", "click", function(sym,e){sym.play("true_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_false_submit_button}", "click", function(sym,e){sym.play("false_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q2_skip_button}", "click", function(sym,e){sym.play("q2_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_skip_button}", "click", function(sym,e){sym.play("q4_skip_check");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43250, function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb05}", "click", function(sym,e){window.open("03.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14439, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q1_skip_button}", "click", function(sym,e){sym.play("q1_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q1_skip_go_button}", "click", function(sym,e){sym.play("q1_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q1_submit_button}", "click", function(sym,e){sym.play("q1_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb06}", "click", function(sym,e){sym.play(7250);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb07}", "click", function(sym,e){sym.play(14350);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb08}", "click", function(sym,e){sym.play("q2_home");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30638, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q3_submit_button}", "click", function(sym,e){sym.play("q3_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q3_skip_button}", "click", function(sym,e){sym.play("q3_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q3_skip_go_button}", "click", function(sym,e){sym.play("q3_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb09}", "click", function(sym,e){sym.play("q3_home");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_skip_go_button}", "click", function(sym,e){sym.play("q4_skip_go");});
//Edge binding end
      

      

      Symbol.bindElementAction(compId, symbolName, "${_q1_submit_button}", "focus", function(sym, e) {
         //$("#Stage_submit_focus").show(); // Show an Element.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         //sym.$("submit_focus").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         $("#Stage_q1_submit_button")
         		.unbind("focus");
         $("#Stage_q1_skip_button").unbind("focus");
         $("#Stage_q1_skip_go_button").unbind("focus");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
         if (e.which == 13) {
         	if ($("[name='sabbathq01']").is(":focus")) {
         		return;
         	}
         	else if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").is(":focus") && $("#Stage_q1_submit_button").css("display") != "none") {
         		sym.play("q1_next_go");
         		//Copy object's onclick script here for submitting answer
         	}
         
         	//Uncomment one section at a time below as you need more enter key keydown functions
         	else if ($("#Stage_a_submit_button") && $("#Stage_a_submit_button").css("display") != "none") {
         		sym.play("a_submit");
         		//Copy object's onclick script here for submitting answer #answersubmit a_submit_button
         	}
         
         	else if ($("#Stage_q2_b_submit_button") && $("#Stage_q2_b_submit_button").css("display") != "none") {
         		sym.play("b_submit");
         		//Copy object's onclick script here for submitting answer #answersubmit q2_b_submit_button
         	}
         
         	else if ($("#Stage_q2_c_submit_button") && $("#Stage_q2_c_submit_button").css("display") != "none") {
         		sym.play("c_submit");
         		//Copy object's onclick script here for submitting answer #answersubmit q2_c_submit_button
         	}
         	/*else if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").is(":focus") && $("#Stage_q1_submit_button").css("display") != "none") {
         		sym.play("q1_next_go");
         		//Copy object's onclick script here for submitting answer
         	}*/
         	/*else if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").is(":focus") && $("#Stage_q1_submit_button").css("display") != "none") {
         		sym.play("q1_next_go");
         		//Copy object's onclick script here for submitting answer
         	}*/
         	/*else if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").is(":focus") && $("#Stage_q1_submit_button").css("display") != "none") {
         		sym.play("q1_next_go");
         		//Copy object's onclick script here for submitting answer
         	}*/
         	/*else if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").is(":focus") && $("#Stage_q1_submit_button").css("display") != "none") {
         		sym.play("q1_next_go");
         		//Copy object's onclick script here for submitting answer
         	}*/
         	/*else if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").is(":focus") && $("#Stage_q1_submit_button").css("display") != "none") {
         		sym.play("q1_next_go");
         		//Copy object's onclick script here for submitting answer
         	}*/
         	else if ($("#Stage_NextButton") && $("#Stage_NextButton").css("display") != "none") {
         		sym.play();
         		//Insert onclick script from object NextButton here.
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
         
         //Section for down arrow
         if (e.which == 40) {
         	if($("#Stage_select_a_highlight") && $("#Stage_select_a_highlight").css("display") != "none") {
         		sym.play('b_select');
         	}
         
         	else if ($("#Stage_select_b_highlight") && $("#Stage_select_b_highlight").css("display") != "none")
         		{
         		sym.play('c_select');
         		}
         
         	else if ($("#Stage_select_c_highlight") && $("#Stage_select_c_highlight").css("display") != "none")
         		{
         		sym.play('a_select');
         		}	
         
         	else if ($("#Stage_Question2") && $("#Stage_Question2").css("display") != "none")
         		{
         		sym.play('a_select');
         		}	
         }
         
         //Section for up arrow
         if (e.which == 38) {
         	if($("#Stage_select_a_highlight") && $("#Stage_select_a_highlight").css("display") != "none") {
         		sym.play('c_select');
         	}
         
         	else if ($("#Stage_select_b_highlight") && $("#Stage_select_b_highlight").css("display") != "none")
         		{
         		sym.play('a_select');
         		}
         
         	else if ($("#Stage_select_c_highlight") && $("#Stage_select_c_highlight").css("display") != "none")
         		{
         		sym.play('b_select');
         		}	
         
         	else if ($("#Stage_Question2") && $("#Stage_Question2").css("display") != "none")
         		{
         		sym.play('c_select');
         		}	
         }
         
         //Section for tab key
         if (e.which == 9) {
         	if($("#Stage_select_a_highlight") && $("#Stage_select_a_highlight").css("display") != "none") {
         		sym.play('b_select');
         	}
         
         	else if ($("#Stage_select_b_highlight") && $("#Stage_select_b_highlight").css("display") != "none")
         		{
         		sym.play('c_select');
         		}
         
         	else if ($("#Stage_select_c_highlight") && $("#Stage_select_c_highlight").css("display") != "none")
         		{
         		sym.play('q2_skip_check');
         		}	
         
         	else if ($("#Stage_q2_skip_go_button") && $("#Stage_q2_skip_go_button").css("display") != "none")
         		{
         		sym.play('a_select');
         		}	
         
         	else if ($("#Stage_Question2") && $("#Stage_Question2").css("display") != "none")
         		{
         		sym.play('a_select');
         		}	
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var origin=self.location.search;
         
         if (origin == '?back') {
         sym.getComposition().getStage().play('q4_begin');
         }
         else {
         sym.getComposition().getStage().play();
         }

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'preloader'
(function(symbolName){})("preloader");
   //Edge symbol end:'preloader'

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