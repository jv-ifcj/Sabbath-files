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
   gpuAccelerate: true,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'learnmorehighlight',
            display:'none',
            type:'rect',
            rect:['245px','270px','170px','34px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(0,51,102,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['65','152','539','88','undefined','undefined'],
            text:"Judah Halevi",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',65,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[]
         },
         {
            id:'Text2',
            type:'text',
            rect:['90','120','490','46','undefined','undefined'],
            text:"To learn more about",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[]
         },
         {
            id:'Text3',
            type:'text',
            rect:['77','229','515','46','undefined','undefined'],
            text:"and his writings,",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[]
         },
         {
            id:'Text4',
            type:'text',
            rect:['239','267','191','46','undefined','undefined'],
            cursor:['pointer'],
            text:"click here.",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',32,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[]
         },
         {
            id:'halevi',
            type:'image',
            rect:['9','313','200','253','undefined','undefined'],
            fill:["rgba(0,0,0,0)",im+"halevi.jpg"],
            transform:[[],['-10'],[],['0.735','0.735']]
         },
         {
            id:'kuzari',
            type:'image',
            rect:['424','217','300','440','undefined','undefined'],
            fill:["rgba(0,0,0,0)",im+"kuzari.jpg"],
            transform:[[],['15'],[],['0.422','0.422']]
         },
         {
            id:'buttons_sans',
            type:'image',
            rect:['0','460px','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'Text6',
            type:'text',
            rect:['190px','372px','298px','124px','auto','auto'],
            text:"Click the right arrow to continue with the Sabbath lesson.",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',26,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'Continue',
            type:'rect',
            rect:['528px','394','52px','46px','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1.00)"],
            stroke:[6,"rgba(0,0,0,1)","solid"],
            transform:[]
         },
         {
            id:'Text5',
            type:'text',
            rect:['186','325','298','74','undefined','undefined'],
            text:"(Opens link in a new tab or window.)",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',18,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[]
         },
         {
            id:'sb16',
            display:'none',
            type:'ellipse',
            rect:['83px','494px','49px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'restart',
            display:'none',
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
         "${_Continue}": [
            ["color", "background-color", 'rgba(150,118,194,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '6px'],
            ["style", "width", '52px'],
            ["style", "top", '494px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "height", '46px'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0'],
            ["style", "left", '528px']
         ],
         "${_Text5}": [
            ["style", "top", '325px'],
            ["style", "opacity", '0'],
            ["style", "left", '502px'],
            ["style", "font-size", '18px']
         ],
         "${_sabbath_bar}": [
            ["style", "top", '494px'],
            ["style", "opacity", '0']
         ],
         "${_Text3}": [
            ["style", "height", '46px'],
            ["style", "opacity", '0'],
            ["style", "left", '393px'],
            ["style", "top", '229px']
         ],
         "${_sb16}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["style", "top", '120px'],
            ["style", "height", '46px'],
            ["style", "opacity", '0'],
            ["style", "left", '406px'],
            ["style", "font-size", '32px']
         ],
         "${_restart}": [
            ["style", "display", 'none']
         ],
         "${_Text6}": [
            ["style", "top", '372px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '190px'],
            ["style", "width", '298px']
         ],
         "${_halevi}": [
            ["style", "top", '231px'],
            ["transform", "scaleY", '0.73517'],
            ["transform", "rotateZ", '-10deg'],
            ["transform", "scaleX", '0.73517'],
            ["style", "opacity", '0'],
            ["style", "left", '-69.47px']
         ],
         "${_Text}": [
            ["style", "top", '152px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "text-align", 'center'],
            ["style", "opacity", '0'],
            ["style", "height", '88px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '65px'],
            ["style", "font-size", '65px']
         ],
         "${_learnmorehighlight}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '270px'],
            ["style", "display", 'none'],
            ["style", "height", '34px'],
            ["style", "opacity", '0'],
            ["style", "left", '245px'],
            ["style", "width", '170px']
         ],
         "${_Stage}": [
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '670px']
         ],
         "${_buttons_sans}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0.25']
         ],
         "${_kuzari}": [
            ["style", "top", '141px'],
            ["transform", "scaleY", '0.42272'],
            ["transform", "rotateZ", '15deg'],
            ["transform", "scaleX", '0.42272'],
            ["style", "opacity", '0'],
            ["style", "left", '507.42px']
         ],
         "${_Text4}": [
            ["style", "top", '267px'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '46px'],
            ["style", "opacity", '0'],
            ["style", "left", '555px'],
            ["style", "width", '191px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10500,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_sabbath_bar}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_sabbath_bar}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 750 },
            { id: "eid19", tween: [ "style", "${_halevi}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750, easing: "easeInQuad" },
            { id: "eid42", tween: [ "style", "${_halevi}", "opacity", '0', { fromValue: '1'}], position: 6105, duration: 1000, easing: "easeOutQuad" },
            { id: "eid21", tween: [ "style", "${_sabbath_bar}", "top", '460px', { fromValue: '494px'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_sabbath_bar}", "top", '543px', { fromValue: '460px'}], position: 7000, duration: 750 },
            { id: "eid3", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 750, easing: "easeOutQuad" },
            { id: "eid46", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,190,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_halevi}", "top", '222.64px', { fromValue: '231px'}], position: 6105, duration: 1000, easing: "easeInQuad" },
            { id: "eid22", tween: [ "style", "${_sb16}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid50", tween: [ "transform", "${_Continue}", "scaleX", '0.4', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid53", tween: [ "style", "${_Continue}", "display", 'none', { fromValue: 'block'}], position: 9899, duration: 0, easing: "easeOutQuad" },
            { id: "eid10", tween: [ "style", "${_Text4}", "left", '239px', { fromValue: '555px'}], position: 2750, duration: 750, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "style", "${_Text4}", "left", '-401.97px', { fromValue: '239px'}], position: 6500, duration: 1000, easing: "easeInQuad" },
            { id: "eid35", tween: [ "style", "${_Text3}", "top", '222px', { fromValue: '229px'}], position: 6250, duration: 1000, easing: "easeInQuad" },
            { id: "eid36", tween: [ "style", "${_Text}", "left", '-575.97px', { fromValue: '65px'}], position: 6250, duration: 1000, easing: "easeInQuad" },
            { id: "eid4", tween: [ "style", "${_Continue}", "opacity", '0', { fromValue: '0'}], position: 4750, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Continue}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_Continue}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0 },
            { id: "eid13", tween: [ "style", "${_Continue}", "opacity", '0', { fromValue: '0'}], position: 9750, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 750, easing: "easeOutQuad" },
            { id: "eid47", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid8", tween: [ "style", "${_Text5}", "left", '186px', { fromValue: '502px'}], position: 3000, duration: 750, easing: "easeOutQuad" },
            { id: "eid32", tween: [ "style", "${_Text5}", "left", '-454.97px', { fromValue: '186px'}], position: 7000, duration: 1000, easing: "easeInQuad" },
            { id: "eid67", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'none'}], position: 5425, duration: 0 },
            { id: "eid66", tween: [ "style", "${_restart}", "display", 'none', { fromValue: 'block'}], position: 6710, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Text2}", "top", '113px', { fromValue: '120px'}], position: 6000, duration: 1000, easing: "easeInQuad" },
            { id: "eid17", tween: [ "style", "${_halevi}", "left", '8.52px', { fromValue: '-69.47px'}], position: 3420, duration: 0, easing: "easeOutQuad" },
            { id: "eid28", tween: [ "style", "${_halevi}", "left", '-474.45px', { fromValue: '8.52px'}], position: 6105, duration: 1000, easing: "easeInQuad" },
            { id: "eid65", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 6710, duration: 0 },
            { id: "eid51", tween: [ "transform", "${_Continue}", "scaleY", '0.4', { fromValue: '1'}], position: 9000, duration: 750, easing: "easeInQuad" },
            { id: "eid33", tween: [ "style", "${_Text5}", "top", '318px', { fromValue: '325px'}], position: 7000, duration: 1000, easing: "easeInQuad" },
            { id: "eid37", tween: [ "style", "${_Text}", "top", '145px', { fromValue: '152px'}], position: 6250, duration: 1000, easing: "easeInQuad" },
            { id: "eid14", tween: [ "style", "${_Text2}", "left", '90px', { fromValue: '406px'}], position: 2250, duration: 750, easing: "easeOutQuad" },
            { id: "eid38", tween: [ "style", "${_Text2}", "left", '-550.97px', { fromValue: '90px'}], position: 6000, duration: 1000, easing: "easeInQuad" },
            { id: "eid26", tween: [ "style", "${_buttons_sans}", "top", '543px', { fromValue: '460px'}], position: 7000, duration: 750 },
            { id: "eid5", tween: [ "style", "${_Text3}", "left", '77px', { fromValue: '393px'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "style", "${_Text3}", "left", '-563.97px', { fromValue: '77px'}], position: 6250, duration: 1000, easing: "easeInQuad" },
            { id: "eid59", tween: [ "style", "${_learnmorehighlight}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "style", "${_learnmorehighlight}", "display", 'none', { fromValue: 'block'}], position: 6590, duration: 0, easing: "easeOutQuad" },
            { id: "eid49", tween: [ "style", "${_Continue}", "top", '209px', { fromValue: '494px'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "style", "${_kuzari}", "top", '127.24px', { fromValue: '141px'}], position: 7250, duration: 1000, easing: "easeInQuad" },
            { id: "eid63", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 750 },
            { id: "eid64", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 710 },
            { id: "eid68", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 5250, duration: 750 },
            { id: "eid24", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 6000, duration: 750 },
            { id: "eid56", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '0.25'}], position: 7000, duration: 750 },
            { id: "eid7", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid45", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid31", tween: [ "style", "${_Text4}", "top", '260px', { fromValue: '267px'}], position: 6500, duration: 1000, easing: "easeInQuad" },
            { id: "eid25", tween: [ "style", "${_kuzari}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750, easing: "easeInQuad" },
            { id: "eid48", tween: [ "style", "${_kuzari}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid11", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 750, easing: "easeOutQuad" },
            { id: "eid43", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 750, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "style", "${_learnmorehighlight}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 500, easing: "easeOutQuad" },
            { id: "eid60", tween: [ "style", "${_learnmorehighlight}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 590, easing: "easeOutQuad" },
            { id: "eid23", tween: [ "style", "${_kuzari}", "left", '423.41px', { fromValue: '507.42px'}], position: 3420, duration: 0, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "style", "${_kuzari}", "left", '-59.57px', { fromValue: '423.41px'}], position: 7250, duration: 1000, easing: "easeInQuad" }         ]
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
      opacity: 0.5,
      stroke: [0,'rgb(0, 0, 0)','none'],
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
         rect: ['18px','26px','512px','65px','auto','auto'],
         id: 'Text5',
         text: 'Are you sure you want to return to the beginning of Lesson One?',
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
            text: 'Yes, I want to return to the beginning of Lesson One',
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
})(jQuery, AdobeEdge, "EDGE-35099416");
