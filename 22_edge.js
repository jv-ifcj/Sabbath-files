/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'question',
            display:'none',
            type:'rect',
            rect:['116px','34px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbody',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"Why do you think it's the woman's role to usher in the Sabbath?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbar',
               type:'rect',
               rect:['0px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 47px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'questionheader',
               type:'text',
               rect:['11px','10px','406px','30px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['91px','194px','523px','147px','auto','auto'],
            text:"Let us join Yael Eckstein, as she demonstrates for us how she ushers in the Sabbath.<br><br>Please click the right arrow.",
            align:"left",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0px','auto','670px','100px','auto','0px'],
            clip:['rect(19px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'next_highlight',
            display:'none',
            type:'ellipse',
            rect:['532px','489px','66px','66px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(200,180,12,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'buttons_sans',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'buttons',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            clip:['rect(27px 670px 100px 0px)'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'next_play',
            display:'none',
            type:'ellipse',
            rect:['540px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q27_submit_button',
            display:'none',
            type:'rect',
            rect:['221px','505px','231px','46px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q27_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['540px','496px','49px','46px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q27_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','496px','49px','46px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skip_text',
            display:'none',
            type:'text',
            rect:['9px','425px','649px','46px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['121px','243px','427px','20px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'bb1',
            display:'none',
            type:'ellipse',
            rect:['81px','494px','51px','57px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'bb2',
            display:'none',
            type:'ellipse',
            rect:['79px','494px','54px','57px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'restart',
            type:'rect',
            rect:['17','510','auto','auto','auto','auto'],
            opacity:1
         }],
         symbolInstances: [
         {
            id:'restart',
            symbolName:'restart'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bb1}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_skip_text}": [
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'none'],
            ["style", "font-size", '18px']
         ],
         "${_question}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.97'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.97'],
            ["style", "opacity", '0'],
            ["style", "left", '551px'],
            ["style", "top", '34px']
         ],
         "${_next_play}": [
            ["style", "top", '495px'],
            ["style", "height", '51px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_bb2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionheader}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_buttons_sans}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0.25']
         ],
         "${_questionbody}": [
            ["style", "top", '56px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_buttons}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '0px'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_next_highlight}": [
            ["style", "top", '489px'],
            ["style", "display", 'none'],
            ["color", "background-color", 'rgba(200,180,12,1.00)'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["style", "left", '532px'],
            ["style", "width", '66px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '523px'],
            ["style", "top", '303px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["transform", "scaleY", '0.73'],
            ["transform", "scaleX", '0.73']
         ],
         "${_topbar}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_q27_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_q27_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question27_div}": [
            ["transform", "translateX", '435px'],
            ["transform", "scaleX", '0.97'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.97'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_type_text}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '586px'],
            ["style", "font-size", '17px'],
            ["style", "top", '243px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["style", "height", '20px']
         ],
         "${_q27_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9835,
         autoPlay: false,
         labels: {
            "q27_begin": 500,
            "q27_skip_check": 2250,
            "q27_submit": 2500,
            "q27_go": 4500,
            "q27_end": 5500
         },
         timeline: [
            { id: "eid45", tween: [ "style", "${_sabbath_bar}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 910, easing: "easeInQuad" },
            { id: "eid5", tween: [ "style", "${_question}", "left", '116px', { fromValue: '551px'}], position: 750, duration: 750, easing: "easeOutQuad" },
            { id: "eid19", tween: [ "style", "${_question}", "left", '-210px', { fromValue: '116px'}], position: 4750, duration: 750, easing: "easeInQuad" },
            { id: "eid86", tween: [ "style", "${_bb1}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid87", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'block'}], position: 3360, duration: 0 },
            { id: "eid56", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_next_play}", "display", 'block', { fromValue: 'none'}], position: 6950, duration: 0 },
            { id: "eid58", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'block'}], position: 7105, duration: 0 },
            { id: "eid47", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(45,105,179,1.00)'}], position: 8250, duration: 1000, easing: "easeInQuad" },
            { id: "eid61", tween: [ "style", "${_q27_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 1954, duration: 0 },
            { id: "eid64", tween: [ "style", "${_q27_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 2054, duration: 0 },
            { id: "eid62", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 2214, duration: 0 },
            { id: "eid63", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 2309, duration: 0 },
            { id: "eid1", tween: [ "style", "${_question27_div}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid24", tween: [ "style", "${_question27_div}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0, easing: "easeInQuad" },
            { id: "eid15", tween: [ "transform", "${_question}", "scaleX", '1', { fromValue: '0.97'}], position: 750, duration: 750, easing: "easeOutQuad" },
            { id: "eid13", tween: [ "transform", "${_question27_div}", "scaleY", '1', { fromValue: '0.97'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid48", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 1500, duration: 500 },
            { id: "eid50", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500 },
            { id: "eid53", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0 },
            { id: "eid54", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0'}], position: 8910, duration: 0 },
            { id: "eid90", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 6857, duration: 0 },
            { id: "eid91", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 7097, duration: 0 },
            { id: "eid43", tween: [ "style", "${_buttons_sans}", "top", '582px', { fromValue: '460px'}], position: 8000, duration: 910, easing: "easeInQuad" },
            { id: "eid39", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${_next_play}", "opacity", '0', { fromValue: '0'}], position: 8000, duration: 0 },
            { id: "eid68", tween: [ "style", "${_next_play}", "opacity", '0', { fromValue: '0'}], position: 8910, duration: 0 },
            { id: "eid65", tween: [ "style", "${_q27_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 2214, duration: 0 },
            { id: "eid66", tween: [ "style", "${_q27_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 2344, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_question27_div}", "translateX", '0px', { fromValue: '435px'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid20", tween: [ "transform", "${_question27_div}", "translateX", '-326px', { fromValue: '0px'}], position: 4500, duration: 750, easing: "easeInQuad" },
            { id: "eid77", tween: [ "style", "${_type_text}", "left", '121px', { fromValue: '586px'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "style", "${_type_text}", "left", '-180px', { fromValue: '121px'}], position: 4500, duration: 750, easing: "easeInQuad" },
            { id: "eid59", tween: [ "style", "${_q27_submit_button}", "display", 'block', { fromValue: 'none'}], position: 1954, duration: 0 },
            { id: "eid60", tween: [ "style", "${_q27_submit_button}", "display", 'none', { fromValue: 'block'}], position: 2314, duration: 0 },
            { id: "eid41", tween: [ "style", "${_sabbath_bar}", "bottom", '-122px', { fromValue: '0px'}], position: 8000, duration: 910, easing: "easeInQuad" },
            { id: "eid26", tween: [ "style", "${_Text}", "top", '176px', { fromValue: '303px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid35", tween: [ "style", "${_Text}", "top", '116px', { fromValue: '176px'}], position: 7000, duration: 750, easing: "easeInQuad" },
            { id: "eid9", tween: [ "style", "${_question}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 750, easing: "easeOutQuad" },
            { id: "eid21", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '1'}], position: 4750, duration: 750, easing: "easeInQuad" },
            { id: "eid94", tween: [ "style", "${_next_highlight}", "display", 'block', { fromValue: 'none'}], position: 6750, duration: 0 },
            { id: "eid96", tween: [ "style", "${_next_highlight}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0 },
            { id: "eid17", tween: [ "transform", "${_question}", "scaleY", '1', { fromValue: '0.97'}], position: 750, duration: 750, easing: "easeOutQuad" },
            { id: "eid93", tween: [ "style", "${_next_highlight}", "opacity", '1', { fromValue: '0'}], position: 6750, duration: 250 },
            { id: "eid95", tween: [ "style", "${_next_highlight}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 250 },
            { id: "eid11", tween: [ "transform", "${_question27_div}", "scaleX", '1', { fromValue: '0.97'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid7", tween: [ "style", "${_question27_div}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid22", tween: [ "style", "${_question27_div}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 750, easing: "easeInQuad" },
            { id: "eid30", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0.73'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid37", tween: [ "transform", "${_Text}", "scaleX", '0.8', { fromValue: '1'}], position: 7000, duration: 750, easing: "easeInQuad" },
            { id: "eid32", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0.73'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid38", tween: [ "transform", "${_Text}", "scaleY", '0.8', { fromValue: '1'}], position: 7000, duration: 750, easing: "easeInQuad" },
            { id: "eid18", tween: [ "style", "${_question}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
            { id: "eid23", tween: [ "style", "${_question}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeInQuad" },
            { id: "eid52", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0.25'}], position: 2500, duration: 0 },
            { id: "eid33", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0'}], position: 6435, duration: 565, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 500, easing: "easeOutQuad" },
            { id: "eid69", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0, easing: "easeInQuad" },
            { id: "eid40", tween: [ "style", "${_buttons}", "top", '582px', { fromValue: '460px'}], position: 8000, duration: 910, easing: "easeInQuad" },
            { id: "eid79", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid84", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 750, easing: "easeInQuad" },
            { id: "eid28", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 750, easing: "easeInQuad" },
            { id: "eid42", tween: [ "style", "${_next_play}", "top", '617px', { fromValue: '495px'}], position: 8000, duration: 910, easing: "easeInQuad" }         ]
      }
   }
},
"restart": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      rect: ['-27px','-521px','690px','581px','auto','auto'],
      display: 'none',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 0.5,
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      rect: ['0px','0px','37px','34px','auto','auto'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['42px','-385px','559px','292px','auto','auto'],
      id: 'restart_prompt',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(158,174,224,1.00)'],
      c: [
      {
         type: 'text',
         id: 'Text5',
         text: 'Are you sure you want to return to the beginning of Lesson Two?',
         rect: ['18px','26px','512px','65px','auto','auto'],
         font: ['Trebuchet MS, Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none','']
      },
      {
         rect: ['18px','128px','512px','49px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'yes_restart',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(0,51,102,1.00)'],
         c: [
         {
            type: 'text',
            rect: ['6px','11px','498px','34px','auto','auto'],
            id: 'Text9',
            text: 'Yes, I want to return to the beginning of Lesson Two',
            align: 'left',
            font: ['Trebuchet MS, Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal']
         }]
      },
      {
         rect: ['18px','205px','512px','49px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'no_continue',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(0,51,102,1.00)'],
         c: [
         {
            type: 'text',
            rect: ['6px','11px','498px','34px','auto','auto'],
            id: 'Text10',
            text: 'No, I want to continue working on the page I\'m on',
            align: 'left',
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','normal','none','normal']
         }]
      },
      {
         type: 'rect',
         rect: ['-87px','-144px','745px','625px','auto','auto'],
         id: 'curtain',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(11,0,52,1)']
      },
      {
         type: 'text',
         rect: ['530px','0px','25px','34px','auto','auto'],
         align: 'left',
         id: 'escape',
         display: 'none',
         text: 'X',
         cursor: ['pointer'],
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',29,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      rect: ['60px','-257px','512px','49px','auto','auto'],
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      id: 'restart_yes_button',
      display: 'none',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(150,118,194,1)']
   },
   {
      rect: ['60px','-180px','512px','49px','auto','auto'],
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      id: 'restart_no_button',
      display: 'none',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(150,118,194,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_yes_restart}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '18px'],
            ["style", "top", '128px']
         ],
         "${_restart_prompt}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.14'],
            ["style", "height", '292px'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-253px'],
            ["style", "top", '-132.44px']
         ],
         "${_curtain}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_Text5}": [
            ["style", "height", '65px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "top", '26px']
         ],
         "${_Text10}": [
            ["style", "top", '11px'],
            ["style", "left", '6px']
         ],
         "${_restart_no_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_restart_yes_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '37px']
         ],
         "${_Text9}": [
            ["style", "top", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '6px'],
            ["style", "font-size", '19px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_no_continue}": [
            ["style", "top", '205px'],
            ["style", "opacity", '1'],
            ["style", "left", '18px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_escape}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '530px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '29px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9000,
         autoPlay: true,
         labels: {
            "base_state": 0,
            "moment_of_truth": 750,
            "no_go": 1250,
            "yes_go": 4000
         },
         timeline: [
            { id: "eid250", tween: [ "style", "${_escape}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeInQuad" },
            { id: "eid251", tween: [ "style", "${_escape}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250, easing: "easeInQuad" },
            { id: "eid254", tween: [ "style", "${_escape}", "opacity", '1', { fromValue: '0'}], position: 3945, duration: 0, easing: "easeInQuad" },
            { id: "eid255", tween: [ "style", "${_escape}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250, easing: "easeInQuad" },
            { id: "eid149", tween: [ "style", "${_restart_prompt}", "display", 'block', { fromValue: 'none'}], position: 45, duration: 0, easing: "easeOutQuad" },
            { id: "eid244", tween: [ "style", "${_restart_prompt}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid161", tween: [ "style", "${_restart_prompt}", "display", 'block', { fromValue: 'none'}], position: 3945, duration: 0 },
            { id: "eid160", tween: [ "style", "${_curtain}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 1000 },
            { id: "eid148", tween: [ "style", "${_restart_prompt}", "opacity", '1', { fromValue: '0'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid237", tween: [ "style", "${_restart_prompt}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid243", tween: [ "style", "${_restart_prompt}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid150", tween: [ "style", "${_restart_no_button}", "display", 'block', { fromValue: 'none'}], position: 710, duration: 0, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_restart_no_button}", "display", 'none', { fromValue: 'block'}], position: 795, duration: 0, easing: "easeOutQuad" },
            { id: "eid155", tween: [ "style", "${_curtain}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
            { id: "eid144", tween: [ "style", "${_restart_prompt}", "left", '42px', { fromValue: '-253px'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid233", tween: [ "style", "${_restart_prompt}", "left", '-268px', { fromValue: '42px'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid239", tween: [ "style", "${_restart_prompt}", "left", '42px', { fromValue: '42px'}], position: 3945, duration: 0 },
            { id: "eid140", tween: [ "transform", "${_restart_prompt}", "scaleY", '1', { fromValue: '0.14'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid231", tween: [ "transform", "${_restart_prompt}", "scaleY", '0.21', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid242", tween: [ "transform", "${_restart_prompt}", "scaleY", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid220", tween: [ "style", "${_yes_restart}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 750 },
            { id: "eid228", tween: [ "style", "${_yes_restart}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid151", tween: [ "style", "${_restart_yes_button}", "display", 'block', { fromValue: 'none'}], position: 710, duration: 0, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "style", "${_restart_yes_button}", "display", 'none', { fromValue: 'block'}], position: 795, duration: 0, easing: "easeOutQuad" },
            { id: "eid248", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
            { id: "eid252", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "easeInQuad" },
            { id: "eid253", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 3945, duration: 0, easing: "easeInQuad" },
            { id: "eid256", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeInQuad" },
            { id: "eid136", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 85, duration: 0 },
            { id: "eid200", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'none'}], position: 3945, duration: 0 },
            { id: "eid127", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 85, duration: 0 },
            { id: "eid247", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid216", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 3945, duration: 0 },
            { id: "eid138", tween: [ "transform", "${_restart_prompt}", "scaleX", '1', { fromValue: '0.14'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid229", tween: [ "transform", "${_restart_prompt}", "scaleX", '0.21', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid241", tween: [ "transform", "${_restart_prompt}", "scaleX", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid185", tween: [ "style", "${_no_continue}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid154", tween: [ "style", "${_no_continue}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid146", tween: [ "style", "${_restart_prompt}", "top", '-385px', { fromValue: '-132.44px'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid235", tween: [ "style", "${_restart_prompt}", "top", '-134px', { fromValue: '-385px'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid240", tween: [ "style", "${_restart_prompt}", "top", '-385px', { fromValue: '-385px'}], position: 3945, duration: 0 },
            { id: "eid158", tween: [ "color", "${_curtain}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 6250, duration: 0 },
            { id: "eid134", tween: [ "style", "${_Rectangle}", "opacity", '0.5', { fromValue: '0'}], position: 85, duration: 415 },
            { id: "eid245", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '0.5'}], position: 2500, duration: 500, easing: "easeInQuad" },
            { id: "eid246", tween: [ "style", "${_Rectangle}", "opacity", '0.5', { fromValue: '0'}], position: 3000, duration: 945, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4723648");
