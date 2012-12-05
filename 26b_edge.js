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
            id:'shepherd',
            display:'none',
            type:'image',
            rect:['214px','102px','259px','388px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shepherd.png",'0px','0px']
         },
         {
            id:'sabbath_barCopy',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'buttons_sansCopy',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'TextCopy',
            display:'none',
            type:'text',
            rect:['28px','115px','609px','272px','auto','auto'],
            text:"Rabbi Eckstein mentioned that during the <i>Shabbat</i>, special prayers based on the psalms are said, including a psalm very familiar to Christians and Jews alike, Psalm 23.",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Text2Copy',
            display:'none',
            type:'text',
            rect:['39px','276px','572px','112px','auto','auto'],
            text:"For more on why Psalm 23, in particular, is recited during the Sabbath meals, link to this page from Rabbi Eckstein's book, <i>Holy Songs of Israel</i>",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[],[],[],['0.68','0.68']]
         },
         {
            id:'RoundRectCopy',
            display:'none',
            type:'rect',
            rect:['142px','398px','377px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(0,51,102,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],[],['0.68','0.68']],
            c:[
            {
               id:'Text3Copy',
               display:'none',
               type:'text',
               rect:['17px','15px','345px','31px','auto','auto'],
               opacity:1,
               text:"Click Here for More Information",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'RectangleCopy',
            display:'none',
            type:'rect',
            rect:['0px','0px','670px','560px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'next_play',
            type:'ellipse',
            rect:['540px','496px','51px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb1',
            type:'ellipse',
            rect:['81px','496px','51px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'bb2',
            display:'none',
            type:'ellipse',
            rect:['81px','496px','51px','51px','auto','auto'],
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
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy}": [
            ["style", "top", '276px'],
            ["style", "text-align", 'center'],
            ["style", "height", '112px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.68'],
            ["transform", "scaleX", '0.68']
         ],
         "${_Text3}": [
            ["style", "top", '15px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '17px'],
            ["style", "width", '345px']
         ],
         "${_next_play}": [
            ["style", "top", '496px'],
            ["style", "opacity", '0'],
            ["style", "left", '540px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["style", "top", '276px'],
            ["transform", "scaleY", '0.68'],
            ["style", "height", '112px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.68']
         ],
         "${_bb2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '0px'],
            ["style", "height", '560px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '670px']
         ],
         "${_sabbath_barCopy}": [
            ["style", "display", 'block'],
            ["style", "opacity", '1']
         ],
         "${_Stage} > iframe:nth-child(2)": [
            ["transform", "scaleY", '0.33'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '7px'],
            ["transform", "scaleX", '0.33']
         ],
         "${_visit}": [
            ["transform", "translateX", '33px'],
            ["transform", "scaleX", '0.33'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.33'],
            ["style", "display", 'none']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["transform", "scaleX", '0.68'],
            ["style", "opacity", '0'],
            ["style", "left", '142px'],
            ["style", "width", '377px'],
            ["style", "top", '398px'],
            ["transform", "scaleY", '0.68'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_shepherd}": [
            ["style", "top", '137.08px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.82'],
            ["transform", "scaleX", '0.82'],
            ["style", "height", '388px'],
            ["style", "opacity", '0'],
            ["style", "left", '214.02px'],
            ["style", "width", '258.95645026441px']
         ],
         "${_Text}": [
            ["style", "top", '253px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleY", '0.67'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["transform", "scaleX", '0.67'],
            ["style", "opacity", '0'],
            ["style", "left", '28px'],
            ["style", "display", 'none']
         ],
         "${_buttons_sansCopy}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0.25']
         ],
         "${_Text3Copy}": [
            ["style", "top", '15px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '17px'],
            ["style", "width", '345px']
         ],
         "${_TextCopy}": [
            ["style", "top", '253px'],
            ["transform", "scaleX", '0.67'],
            ["transform", "scaleY", '0.67'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '28px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '560px'],
            ["style", "width", '670px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10500,
         autoPlay: false,
         labels: {
            "origin_back": 6000
         },
         timeline: [
            { id: "eid101", tween: [ "transform", "${_TextCopy}", "scaleY", '1', { fromValue: '0.67'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid102", tween: [ "transform", "${_TextCopy}", "scaleY", '0.44', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid119", tween: [ "transform", "${_Stage} > iframe:nth-child(2)", "scaleX", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid120", tween: [ "transform", "${_Stage} > iframe:nth-child(2)", "scaleX", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid137", tween: [ "style", "${_bb1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid143", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'block'}], position: 2680, duration: 0 },
            { id: "eid139", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'none'}], position: 5500, duration: 0 },
            { id: "eid131", tween: [ "transform", "${_visit}", "scaleY", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid132", tween: [ "transform", "${_visit}", "scaleY", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid96", tween: [ "style", "${_Text2Copy}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid97", tween: [ "style", "${_Text2Copy}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 750, easing: "easeInQuad" },
            { id: "eid98", tween: [ "transform", "${_Text2Copy}", "scaleX", '1', { fromValue: '0.68'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid145", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid141", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'block'}], position: 7190, duration: 0 },
            { id: "eid142", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
            { id: "eid129", tween: [ "style", "${_visit}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid130", tween: [ "style", "${_visit}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid84", tween: [ "transform", "${_RoundRectCopy}", "scaleY", '1', { fromValue: '0.68'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid166", tween: [ "style", "${_shepherd}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid171", tween: [ "style", "${_shepherd}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 680 },
            { id: "eid127", tween: [ "transform", "${_visit}", "scaleX", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid128", tween: [ "transform", "${_visit}", "scaleX", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid79", tween: [ "style", "${_RectangleCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid80", tween: [ "style", "${_RectangleCopy}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0, easing: "easeInQuad" },
            { id: "eid110", tween: [ "style", "${_buttons_sansCopy}", "opacity", '1', { fromValue: '0.25'}], position: 1500, duration: 500 },
            { id: "eid111", tween: [ "style", "${_buttons_sansCopy}", "opacity", '0.25', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid112", tween: [ "style", "${_buttons_sansCopy}", "opacity", '1', { fromValue: '0.25'}], position: 4000, duration: 500 },
            { id: "eid113", tween: [ "style", "${_buttons_sansCopy}", "opacity", '0.25', { fromValue: '1'}], position: 4500, duration: 500 },
            { id: "eid114", tween: [ "style", "${_buttons_sansCopy}", "opacity", '1', { fromValue: '0.25'}], position: 6750, duration: 500 },
            { id: "eid115", tween: [ "style", "${_buttons_sansCopy}", "opacity", '0.25', { fromValue: '1'}], position: 7250, duration: 1250 },
            { id: "eid116", tween: [ "style", "${_buttons_sansCopy}", "opacity", '0', { fromValue: '0.25'}], position: 8500, duration: 750, easing: "easeInQuad" },
            { id: "eid118", tween: [ "style", "${_sabbath_barCopy}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 750, easing: "easeInQuad" },
            { id: "eid123", tween: [ "transform", "${_Stage} > iframe:nth-child(2)", "scaleY", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid124", tween: [ "transform", "${_Stage} > iframe:nth-child(2)", "scaleY", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid99", tween: [ "style", "${_TextCopy}", "top", '115px', { fromValue: '253px'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "style", "${_TextCopy}", "top", '39px', { fromValue: '115px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid167", tween: [ "style", "${_shepherd}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid172", tween: [ "style", "${_shepherd}", "display", 'none', { fromValue: 'block'}], position: 2680, duration: 0 },
            { id: "eid105", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid106", tween: [ "style", "${_TextCopy}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid94", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid95", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid109", tween: [ "style", "${_buttons_sansCopy}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0, easing: "easeInQuad" },
            { id: "eid164", tween: [ "style", "${_shepherd}", "top", '102px', { fromValue: '137.08px'}], position: 1500, duration: 500 },
            { id: "eid170", tween: [ "style", "${_shepherd}", "top", '56px', { fromValue: '102px'}], position: 2000, duration: 680 },
            { id: "eid91", tween: [ "style", "${_Text2Copy}", "top", '179px', { fromValue: '276px'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "style", "${_Text2Copy}", "top", '88px', { fromValue: '179px'}], position: 7250, duration: 750, easing: "easeInQuad" },
            { id: "eid162", tween: [ "transform", "${_shepherd}", "scaleY", '1', { fromValue: '0.82'}], position: 1500, duration: 500 },
            { id: "eid169", tween: [ "transform", "${_shepherd}", "scaleY", '0.71', { fromValue: '1'}], position: 2000, duration: 680 },
            { id: "eid103", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutQuad" },
            { id: "eid104", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid121", tween: [ "style", "${_Stage} > iframe:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid122", tween: [ "style", "${_Stage} > iframe:nth-child(2)", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid107", tween: [ "transform", "${_TextCopy}", "scaleX", '1', { fromValue: '0.67'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid108", tween: [ "transform", "${_TextCopy}", "scaleX", '0.44', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid87", tween: [ "style", "${_RoundRectCopy}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "style", "${_RoundRectCopy}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeInQuad" },
            { id: "eid157", tween: [ "transform", "${_shepherd}", "scaleX", '1', { fromValue: '0.82'}], position: 1500, duration: 500 },
            { id: "eid168", tween: [ "transform", "${_shepherd}", "scaleX", '0.71', { fromValue: '1'}], position: 2000, duration: 680 },
            { id: "eid125", tween: [ "style", "${_Stage} > iframe:nth-child(2)", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeInQuad" },
            { id: "eid126", tween: [ "style", "${_Stage} > iframe:nth-child(2)", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeInQuad" },
            { id: "eid93", tween: [ "transform", "${_Text2Copy}", "scaleY", '1', { fromValue: '0.68'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid133", tween: [ "style", "${_visit}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeInQuad" },
            { id: "eid134", tween: [ "style", "${_visit}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeInQuad" },
            { id: "eid90", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid117", tween: [ "style", "${_sabbath_barCopy}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0, easing: "easeInQuad" },
            { id: "eid82", tween: [ "style", "${_RoundRectCopy}", "top", '301px', { fromValue: '398px'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "style", "${_RoundRectCopy}", "top", '210px', { fromValue: '301px'}], position: 7500, duration: 750, easing: "easeInQuad" },
            { id: "eid85", tween: [ "style", "${_RoundRectCopy}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid86", tween: [ "style", "${_RoundRectCopy}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0, easing: "easeOutQuad" },
            { id: "eid81", tween: [ "style", "${_RectangleCopy}", "opacity", '1', { fromValue: '0'}], position: 9250, duration: 750, easing: "easeInQuad" },
            { id: "eid89", tween: [ "transform", "${_RoundRectCopy}", "scaleX", '1', { fromValue: '0.68'}], position: 6500, duration: 750, easing: "easeOutQuad" }         ]
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
      opacity: 0.5,
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
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
         rect: ['18px','26px','512px','65px','auto','auto'],
         id: 'Text5',
         text: 'Are you sure you want to return to the beginning of Lesson Two?',
         font: ['Trebuchet MS, Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
         type: 'text'
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
            rect: ['6px','11px','498px','34px','auto','auto'],
            font: ['Trebuchet MS, Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal'],
            id: 'Text9',
            text: 'Yes, I want to return to the beginning of Lesson Two',
            align: 'left',
            type: 'text'
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
            rect: ['6px','11px','498px','34px','auto','auto'],
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','normal','none','normal'],
            id: 'Text10',
            text: 'No, I want to continue working on the page I\'m on',
            align: 'left',
            type: 'text'
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
         "${_escape}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '530px'],
            ["style", "font-size", '29px']
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
         "${_curtain}": [
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
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '37px']
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
         "${_restart_yes_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_restart_no_button}": [
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
