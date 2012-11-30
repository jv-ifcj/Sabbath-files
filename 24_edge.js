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
            id:'question28box',
            display:'none',
            type:'rect',
            rect:['116px','53px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
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
            },
            {
               id:'questionbody',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"According to Rabbi Eckstein, what are some of the ways Jews prepare physically for the Sabbath?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            }]
         },
         {
            id:'question29box',
            display:'none',
            type:'rect',
            rect:['116px','53px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"How do you think these physical preparations impact people's spiritual posture and readiness for the day?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbarCopy',
               type:'rect',
               rect:['0px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 47px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'questionheaderCopy',
               type:'text',
               rect:['11px','10px','406px','30px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'question30box',
            display:'none',
            type:'rect',
            rect:['116px','53px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy2',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"In what ways do you physically prepare for Sunday worship?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbarCopy2',
               type:'rect',
               rect:['0px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 47px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'questionheaderCopy2',
               type:'text',
               rect:['11px','10px','406px','30px','auto','auto'],
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0px','auto','670px','100px','auto','0px'],
            clip:['rect(19px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
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
            opacity:1,
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q28_submit_button',
            display:'none',
            type:'rect',
            rect:['222px','504px','226px','43px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q28_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['540px','493px','50px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q28_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','494px','50px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q29_submit_button',
            display:'none',
            type:'rect',
            rect:['227px','510px','218px','38px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q29_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['540px','495px','47px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q29_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','493px','51px','55px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q30_submit_button',
            display:'none',
            type:'rect',
            rect:['219px','502px','230px','49px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q30_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['540px','495px','51px','49px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q30_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','497px','49px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skip_text',
            display:'none',
            type:'text',
            rect:['6px','418px','656px','66px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['121px','264px','427px','17px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'restart',
            type:'rect',
            rect:['17','510','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'bb1',
            display:'none',
            type:'ellipse',
            rect:['83px','496px','50px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'bb2',
            display:'none',
            type:'ellipse',
            rect:['82px','494px','50px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb3',
            display:'none',
            type:'ellipse',
            rect:['79px','493px','55px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
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
            ["style", "top", '418px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "height", '66px'],
            ["style", "font-size", '18px']
         ],
         "${_q29_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q28_submit_button}": [
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
         "${_questionbody}": [
            ["style", "top", '56px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '1'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_topbar}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_question28box}": [
            ["style", "top", '53px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '544px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-94px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_q28_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question29box}": [
            ["style", "top", '53px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '536px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_questionbodyCopy}": [
            ["style", "top", '56px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_question29_div}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '420px'],
            ["transform", "translateY", '35px']
         ],
         "${_q28_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question30_div}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '375px'],
            ["transform", "translateY", '32px']
         ],
         "${_q30_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_topbarCopy2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_question28_div}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '428px'],
            ["transform", "translateY", '18px']
         ],
         "${_topbarCopy}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_bb3}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question30box}": [
            ["style", "top", '53px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '491px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_q30_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q29_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_next_play}": [
            ["style", "top", '589px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "height", '51px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_type_text}": [
            ["style", "top", '265px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '586px'],
            ["style", "font-size", '17px']
         ],
         "${_bb2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionheaderCopy2}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_questionbodyCopy2}": [
            ["style", "top", '56px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_q30_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '560px'],
            ["style", "width", '670px']
         ],
         "${_questionheaderCopy}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_q29_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_buttons}": [
            ["style", "top", '554px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 21000,
         autoPlay: false,
         labels: {
            "q28_begin": 3000,
            "q28_skip_check": 4750,
            "q28_submit": 5000,
            "q28_go": 7000,
            "q28_end": 8000,
            "q29_begin": 9500,
            "q29_skip_check": 11250,
            "q29_submit": 11500,
            "q29_go": 13500,
            "q29_end": 14500,
            "q30_begin": 16000,
            "q30_skip_check": 17750,
            "q30_submit": 18000,
            "q30_go": 20000,
            "q30_end": 21000
         },
         timeline: [
            { id: "eid85", tween: [ "style", "${_q28_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 4705, duration: 0 },
            { id: "eid86", tween: [ "style", "${_q28_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 4835, duration: 0 },
            { id: "eid71", tween: [ "style", "${_sabbath_bar}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 750, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "style", "${_q29_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 11217, duration: 0 },
            { id: "eid93", tween: [ "style", "${_q29_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 11302, duration: 0 },
            { id: "eid49", tween: [ "transform", "${_question30_div}", "translateX", '0px', { fromValue: '375px'}], position: 16500, duration: 750, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "transform", "${_question30_div}", "translateX", '-293px', { fromValue: '0px'}], position: 20000, duration: 750, easing: "easeInQuad" },
            { id: "eid156", tween: [ "style", "${_bb1}", "display", 'block', { fromValue: 'none'}], position: 4248, duration: 0 },
            { id: "eid159", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
            { id: "eid39", tween: [ "style", "${_question29_div}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 750, easing: "easeOutQuad" },
            { id: "eid42", tween: [ "style", "${_question29_div}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 750, easing: "easeInQuad" },
            { id: "eid165", tween: [ "style", "${_bb3}", "display", 'block', { fromValue: 'none'}], position: 16794, duration: 0 },
            { id: "eid166", tween: [ "style", "${_bb3}", "display", 'none', { fromValue: 'block'}], position: 18259, duration: 0 },
            { id: "eid33", tween: [ "style", "${_question29box}", "left", '116px', { fromValue: '536px'}], position: 9750, duration: 750, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "style", "${_question29box}", "left", '-164px', { fromValue: '116px'}], position: 13750, duration: 750, easing: "easeInQuad" },
            { id: "eid127", tween: [ "color", "${_question29box}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 12629, duration: 0, easing: "easeOutQuad" },
            { id: "eid73", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,179,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 500, duration: 1000 },
            { id: "eid51", tween: [ "style", "${_question30box}", "left", '116px', { fromValue: '491px'}], position: 16250, duration: 750, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "style", "${_question30box}", "left", '-177px', { fromValue: '116px'}], position: 20250, duration: 750, easing: "easeInQuad" },
            { id: "eid3", tween: [ "style", "${_question28box}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_question28box}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid24", tween: [ "style", "${_question28box}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0, easing: "easeInQuad" },
            { id: "eid157", tween: [ "style", "${_bb1}", "opacity", '0', { fromValue: '0'}], position: 4248, duration: 0 },
            { id: "eid69", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0'}], position: 1750, duration: 750, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 4000, duration: 500 },
            { id: "eid75", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 7000, duration: 500 },
            { id: "eid76", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 10500, duration: 500 },
            { id: "eid77", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 13500, duration: 500 },
            { id: "eid78", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 17000, duration: 500 },
            { id: "eid79", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 20000, duration: 500 },
            { id: "eid12", tween: [ "style", "${_question28box}", "left", '116px', { fromValue: '544px'}], position: 3250, duration: 750, easing: "easeOutQuad" },
            { id: "eid19", tween: [ "style", "${_question28box}", "left", '-142px', { fromValue: '116px'}], position: 7250, duration: 750, easing: "easeInQuad" },
            { id: "eid96", tween: [ "style", "${_q30_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 17464, duration: 0 },
            { id: "eid97", tween: [ "style", "${_q30_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 17579, duration: 0 },
            { id: "eid162", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 9575, duration: 0 },
            { id: "eid164", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 12375, duration: 0 },
            { id: "eid27", tween: [ "style", "${_question29_div}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0, easing: "easeInQuad" },
            { id: "eid44", tween: [ "style", "${_question29_div}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0, easing: "easeInQuad" },
            { id: "eid63", tween: [ "style", "${_next_play}", "top", '495px', { fromValue: '589px'}], position: 1750, duration: 750, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '554px'}], position: 1750, duration: 750, easing: "easeOutQuad" },
            { id: "eid18", tween: [ "style", "${_question28_div}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750, easing: "easeOutQuad" },
            { id: "eid22", tween: [ "style", "${_question28_div}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 750, easing: "easeInQuad" },
            { id: "eid94", tween: [ "style", "${_q30_submit_button}", "display", 'block', { fromValue: 'none'}], position: 17464, duration: 0 },
            { id: "eid95", tween: [ "style", "${_q30_submit_button}", "display", 'none', { fromValue: 'block'}], position: 17544, duration: 0 },
            { id: "eid14", tween: [ "transform", "${_question28_div}", "translateX", '0px', { fromValue: '428px'}], position: 3500, duration: 750, easing: "easeOutQuad" },
            { id: "eid20", tween: [ "transform", "${_question28_div}", "translateX", '-258px', { fromValue: '0px'}], position: 7000, duration: 750, easing: "easeInQuad" },
            { id: "eid53", tween: [ "style", "${_question30_div}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 750, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "style", "${_question30_div}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 750, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${_sabbath_bar}", "bottom", '0px', { fromValue: '-94px'}], position: 1750, duration: 750, easing: "easeOutQuad" },
            { id: "eid35", tween: [ "transform", "${_question29_div}", "translateX", '0px', { fromValue: '420px'}], position: 10000, duration: 750, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "transform", "${_question29_div}", "translateX", '-280px', { fromValue: '0px'}], position: 13500, duration: 750, easing: "easeInQuad" },
            { id: "eid112", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
            { id: "eid118", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0, easing: "easeInQuad" },
            { id: "eid119", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0, easing: "easeOutQuad" },
            { id: "eid134", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0, easing: "easeInQuad" },
            { id: "eid135", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0, easing: "easeInQuad" },
            { id: "eid149", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 20750, duration: 0, easing: "easeInQuad" },
            { id: "eid109", tween: [ "style", "${_type_text}", "left", '121px', { fromValue: '586px'}], position: 3500, duration: 750, easing: "easeOutQuad" },
            { id: "eid115", tween: [ "style", "${_type_text}", "left", '-162px', { fromValue: '121px'}], position: 7000, duration: 750, easing: "easeInQuad" },
            { id: "eid124", tween: [ "style", "${_type_text}", "left", '119px', { fromValue: '498px'}], position: 10000, duration: 750, easing: "easeOutQuad" },
            { id: "eid132", tween: [ "style", "${_type_text}", "left", '-157px', { fromValue: '119px'}], position: 13500, duration: 750, easing: "easeInQuad" },
            { id: "eid138", tween: [ "style", "${_type_text}", "left", '120px', { fromValue: '476px'}], position: 16500, duration: 750, easing: "easeOutQuad" },
            { id: "eid147", tween: [ "style", "${_type_text}", "left", '-160px', { fromValue: '120px'}], position: 20000, duration: 750, easing: "easeInQuad" },
            { id: "eid80", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid83", tween: [ "style", "${_q28_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 4445, duration: 0 },
            { id: "eid84", tween: [ "style", "${_q28_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 4565, duration: 0 },
            { id: "eid55", tween: [ "style", "${_question30box}", "opacity", '1', { fromValue: '0'}], position: 16250, duration: 750, easing: "easeOutQuad" },
            { id: "eid59", tween: [ "style", "${_question30box}", "opacity", '0', { fromValue: '1'}], position: 20250, duration: 750, easing: "easeInQuad" },
            { id: "eid81", tween: [ "style", "${_q28_submit_button}", "display", 'block', { fromValue: 'none'}], position: 4445, duration: 0 },
            { id: "eid82", tween: [ "style", "${_q28_submit_button}", "display", 'none', { fromValue: 'block'}], position: 4835, duration: 0 },
            { id: "eid37", tween: [ "style", "${_question29box}", "opacity", '1', { fromValue: '0'}], position: 9750, duration: 750, easing: "easeOutQuad" },
            { id: "eid43", tween: [ "style", "${_question29box}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 750, easing: "easeInQuad" },
            { id: "eid111", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750, easing: "easeOutQuad" },
            { id: "eid117", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 750, easing: "easeInQuad" },
            { id: "eid126", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 750, easing: "easeOutQuad" },
            { id: "eid133", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 13500, duration: 750, easing: "easeInQuad" },
            { id: "eid140", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 750, easing: "easeOutQuad" },
            { id: "eid148", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 20000, duration: 750, easing: "easeInQuad" },
            { id: "eid163", tween: [ "style", "${_bb2}", "opacity", '0', { fromValue: '0'}], position: 9575, duration: 0 },
            { id: "eid5", tween: [ "style", "${_question28_div}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_question28_div}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0, easing: "easeInQuad" },
            { id: "eid16", tween: [ "style", "${_question28box}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 750, easing: "easeOutQuad" },
            { id: "eid21", tween: [ "style", "${_question28box}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 750, easing: "easeInQuad" },
            { id: "eid150", tween: [ "style", "${_type_text}", "top", '265px', { fromValue: '265px'}], position: 3500, duration: 0, easing: "easeInQuad" },
            { id: "eid123", tween: [ "style", "${_type_text}", "top", '283px', { fromValue: '265px'}], position: 10000, duration: 0, easing: "easeOutQuad" },
            { id: "eid136", tween: [ "style", "${_type_text}", "top", '274px', { fromValue: '283px'}], position: 16500, duration: 0, easing: "easeInQuad" },
            { id: "eid142", tween: [ "style", "${_type_text}", "top", '274px', { fromValue: '274px'}], position: 20000, duration: 0, easing: "easeInQuad" },
            { id: "eid47", tween: [ "style", "${_question30_div}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_question30_div}", "display", 'none', { fromValue: 'block'}], position: 20750, duration: 0, easing: "easeInQuad" },
            { id: "eid98", tween: [ "style", "${_q30_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 17709, duration: 0 },
            { id: "eid99", tween: [ "style", "${_q30_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 17804, duration: 0 },
            { id: "eid2", tween: [ "style", "${_question29box}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid26", tween: [ "style", "${_question29box}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0, easing: "easeInQuad" },
            { id: "eid45", tween: [ "style", "${_question29box}", "display", 'none', { fromValue: 'block'}], position: 14500, duration: 0, easing: "easeInQuad" },
            { id: "eid89", tween: [ "style", "${_q29_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 10947, duration: 0 },
            { id: "eid91", tween: [ "style", "${_q29_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 11052, duration: 0 },
            { id: "eid87", tween: [ "style", "${_q29_submit_button}", "display", 'block', { fromValue: 'none'}], position: 10947, duration: 0 },
            { id: "eid88", tween: [ "style", "${_q29_submit_button}", "display", 'none', { fromValue: 'block'}], position: 11052, duration: 0 },
            { id: "eid100", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid101", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 4715, duration: 0 },
            { id: "eid102", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 4780, duration: 0 },
            { id: "eid103", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 11203, duration: 0 },
            { id: "eid104", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 11303, duration: 0 },
            { id: "eid105", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 17719, duration: 0 },
            { id: "eid106", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 17789, duration: 0 },
            { id: "eid1", tween: [ "style", "${_question30box}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_question30box}", "display", 'block', { fromValue: 'none'}], position: 16250, duration: 0, easing: "easeInQuad" },
            { id: "eid61", tween: [ "style", "${_question30box}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0, easing: "easeInQuad" }         ]
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
      rect: ['-27px','-521px','690px','581px','auto','auto'],
      type: 'rect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle',
      opacity: 0.5,
      display: 'none',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['0px','0px','37px','34px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['42px','-385px','559px','292px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      type: 'rect',
      id: 'restart_prompt',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(158,174,224,1.00)'],
      c: [
      {
         font: ['Trebuchet MS, Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         id: 'Text5',
         text: 'Are you sure you want to return to the beginning of Lesson Two?',
         type: 'text',
         rect: ['18px','26px','512px','65px','auto','auto']
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
            font: ['Trebuchet MS, Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal'],
            type: 'text',
            id: 'Text9',
            text: 'Yes, I want to return to the beginning of Lesson Two',
            align: 'left',
            rect: ['6px','11px','498px','34px','auto','auto']
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
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','normal','none','normal'],
            type: 'text',
            id: 'Text10',
            text: 'No, I want to continue working on the page I\'m on',
            align: 'left',
            rect: ['6px','11px','498px','34px','auto','auto']
         }]
      },
      {
         rect: ['-87px','-144px','745px','625px','auto','auto'],
         type: 'rect',
         id: 'curtain',
         stroke: [0,'rgb(0, 0, 0)','none'],
         display: 'none',
         fill: ['rgba(11,0,52,1)']
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',29,'rgba(0,0,0,1.00)','normal','none','normal'],
         rect: ['530px','0px','25px','34px','auto','auto'],
         align: 'left',
         display: 'none',
         id: 'escape',
         text: 'X',
         cursor: ['pointer'],
         type: 'text'
      }]
   },
   {
      rect: ['60px','-257px','512px','49px','auto','auto'],
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      display: 'none',
      id: 'restart_yes_button',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(150,118,194,1)']
   },
   {
      rect: ['60px','-180px','512px','49px','auto','auto'],
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      display: 'none',
      id: 'restart_no_button',
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
            ["style", "top", '-132.44px'],
            ["transform", "scaleY", '0.14'],
            ["transform", "scaleX", '0.14'],
            ["style", "height", '292px'],
            ["style", "opacity", '0'],
            ["style", "left", '-253px'],
            ["style", "display", 'none']
         ],
         "${_Text5}": [
            ["style", "height", '65px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "top", '26px']
         ],
         "${_escape}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '530px'],
            ["style", "font-size", '29px']
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
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '37px']
         ],
         "${_restart_yes_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_no_continue}": [
            ["style", "top", '205px'],
            ["style", "opacity", '1'],
            ["style", "left", '18px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
         ],
         "${_Text9}": [
            ["style", "top", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '6px'],
            ["style", "font-size", '19px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_curtain}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
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
            { id: "eid248", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
            { id: "eid252", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "easeInQuad" },
            { id: "eid253", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 3945, duration: 0, easing: "easeInQuad" },
            { id: "eid256", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeInQuad" },
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
            { id: "eid148", tween: [ "style", "${_restart_prompt}", "opacity", '1', { fromValue: '0'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid237", tween: [ "style", "${_restart_prompt}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid243", tween: [ "style", "${_restart_prompt}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
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
