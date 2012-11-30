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
            id:'Text2',
            type:'text',
            rect:['310','153','604','253','undefined','undefined'],
            text:"For Christians, the Jews' careful keeping of the Sabbath can seem like much ado about a day of rest. For American Christians, Sabbath-keeping is counter-cultural already. We value our productivity, our complete to-do lists, our bragging rights over how much we've accomplished. So purposely ceasing that level of over-activity feels difficult, uncomfortable, sometimes guilt-inducing, anything but an elevated spiritual state.",
            align:"auto",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","normal"],
            transform:[]
         },
         {
            id:'Text4',
            display:'none',
            type:'text',
            rect:['33','80','661','351','undefined','undefined'],
            text:"... But it hasn't always been that way. In the New York Times article \"Bring Back the Sabbath,\" author Judith Shulevitz writes, \"It can be startling to realize just how integral the Sabbath once was to American time. When we tell our children stories about the first pilgrims landing on our shores, we talk rather vaguely about their quest for religious freedom. We leave out that this freedom was needed in large part so that the Puritans could obey the Fourth Commandment &mdash; 'Remember the Sabbath day, to keep it holy' &mdash; with a zealotry that had deeply alienated their countrymen back home.\"",
            align:"auto",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[]
         },
         {
            id:'puritans25',
            display:'none',
            type:'image',
            rect:['135','270','400','290','undefined','undefined'],
            fill:["rgba(0,0,0,0)",im+"puritans25.jpg"],
            transform:[]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'buttons_sans',
            display:'none',
            type:'image',
            rect:['0','630','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'sb10',
            display:'none',
            type:'ellipse',
            rect:['80px','496px','55px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'buttons',
            type:'image',
            rect:['0px','460','670px','100px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'Next',
            type:'rect',
            rect:['241','467','66px','50','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'sb11',
            display:'none',
            type:'ellipse',
            rect:['81px','498px','51px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text5',
            type:'text',
            rect:['41','459','583','35','undefined','undefined'],
            cursor:['pointer'],
            text:"Click here to read the entire article on the Times' website (opens new window)",
            align:"auto",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',16,"rgba(255,255,255,1)","normal","none","normal"]
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
         "${_buttons}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_sb10}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["style", "top", '153px'],
            ["style", "height", '253px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '310px'],
            ["style", "display", 'block']
         ],
         "${_restart}": [
            ["style", "display", 'none']
         ],
         "${_Text5}": [
            ["style", "top", '512px'],
            ["style", "width", '583px'],
            ["style", "left", '43px'],
            ["style", "display", 'block'],
            ["style", "height", '19px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '16px']
         ],
         "${_puritans25}": [
            ["style", "top", '255px'],
            ["transform", "scaleY", '0.39'],
            ["style", "left", '135px'],
            ["transform", "scaleX", '0.39'],
            ["style", "opacity", '0'],
            ["style", "clip", [26,400,197,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "display", 'none']
         ],
         "${_sabbath_bar}": [
            ["style", "top", '460px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_Next}": [
            ["color", "background-color", 'rgba(150,118,194,1.00)'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '687px'],
            ["style", "width", '66px'],
            ["style", "top", '445px'],
            ["transform", "scaleY", '0.8'],
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_buttons_sans}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_sb11}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text4}": [
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '-21.59px'],
            ["style", "font-size", '21px'],
            ["style", "top", '460.7px'],
            ["transform", "scaleY", '0.8'],
            ["style", "height", '468px'],
            ["style", "display", 'none'],
            ["style", "width", '661px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11000,
         autoPlay: true,
         timeline: [
            { id: "eid9", tween: [ "style", "${_sabbath_bar}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 },
            { id: "eid110", tween: [ "style", "${_sabbath_bar}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750 },
            { id: "eid41", tween: [ "style", "${_sb11}", "display", 'block', { fromValue: 'none'}], position: 6999, duration: 0 },
            { id: "eid42", tween: [ "style", "${_sb11}", "display", 'none', { fromValue: 'block'}], position: 7500, duration: 0 },
            { id: "eid18", tween: [ "transform", "${_Next}", "scaleY", '1', { fromValue: '0.8'}], position: 3000, duration: 1000, easing: "easeInQuad" },
            { id: "eid24", tween: [ "transform", "${_Next}", "scaleY", '0.8', { fromValue: '1'}], position: 4000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "transform", "${_Next}", "scaleY", '0.74', { fromValue: '0.8'}], position: 6750, duration: 500 },
            { id: "eid59", tween: [ "transform", "${_Next}", "scaleY", '0.6', { fromValue: '0.74'}], position: 7440, duration: 810, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "transform", "${_puritans25}", "scaleX", '1', { fromValue: '0.39'}], position: 6192, duration: 807, easing: "easeOutQuad" },
            { id: "eid101", tween: [ "transform", "${_puritans25}", "scaleX", '0.51', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid37", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid38", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "style", "${_Next}", "top", '496px', { fromValue: '445px'}], position: 3000, duration: 1000 },
            { id: "eid114", tween: [ "style", "${_Next}", "top", '496px', { fromValue: '496px'}], position: 6250, duration: 0 },
            { id: "eid120", tween: [ "style", "${_Next}", "top", '496px', { fromValue: '490px'}], position: 6750, duration: 690 },
            { id: "eid119", tween: [ "style", "${_Next}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Next}", "display", 'none', { fromValue: 'none'}], position: 5250, duration: 0, easing: "easeOutQuad" },
            { id: "eid49", tween: [ "style", "${_Next}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeOutQuad" },
            { id: "eid1", tween: [ "style", "${_sabbath_bar}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid111", tween: [ "style", "${_sabbath_bar}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid34", tween: [ "transform", "${_Text4}", "scaleY", '1', { fromValue: '0.8'}], position: 5650, duration: 750, easing: "easeOutQuad" },
            { id: "eid64", tween: [ "transform", "${_Text4}", "scaleY", '0.8', { fromValue: '1'}], position: 8000, duration: 750, easing: "easeOutQuad" },
            { id: "eid97", tween: [ "style", "${_puritans25}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid5", tween: [ "style", "${_buttons_sans}", "top", '537.67px', { fromValue: '460px'}], position: 0, duration: 1000 },
            { id: "eid10", tween: [ "style", "${_buttons_sans}", "top", '630px', { fromValue: '537.67px'}], position: 1000, duration: 2000 },
            { id: "eid115", tween: [ "style", "${_buttons_sans}", "top", '460px', { fromValue: '630px'}], position: 3000, duration: 750 },
            { id: "eid8", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid27", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeOutQuad" },
            { id: "eid13", tween: [ "style", "${_buttons}", "top", '544px', { fromValue: '460px'}], position: 0, duration: 1000 },
            { id: "eid45", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '544px'}], position: 7440, duration: 0 },
            { id: "eid94", tween: [ "transform", "${_puritans25}", "scaleY", '1', { fromValue: '0.39'}], position: 6192, duration: 807, easing: "easeOutQuad" },
            { id: "eid102", tween: [ "transform", "${_puritans25}", "scaleY", '0.51', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid44", tween: [ "style", "${_Text5}", "left", '41px', { fromValue: '43px'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid43", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'none'}], position: 3934, duration: 0 },
            { id: "eid96", tween: [ "style", "${_puritans25}", "opacity", '1', { fromValue: '0'}], position: 6192, duration: 807, easing: "easeOutQuad" },
            { id: "eid103", tween: [ "style", "${_puritans25}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeOutQuad" },
            { id: "eid32", tween: [ "transform", "${_Text4}", "scaleX", '1', { fromValue: '0.8'}], position: 5650, duration: 750, easing: "easeOutQuad" },
            { id: "eid63", tween: [ "transform", "${_Text4}", "scaleX", '0.8', { fromValue: '1'}], position: 8000, duration: 750, easing: "easeOutQuad" },
            { id: "eid15", tween: [ "style", "${_buttons_sans}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_buttons_sans}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid118", tween: [ "style", "${_buttons_sans}", "display", 'block', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Text5}", "top", '459px', { fromValue: '512px'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "style", "${_puritans25}", "clip", [26,400,197,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [26,400,197,0]}], position: 6820, duration: 0, easing: "easeOutQuad" },
            { id: "eid7", tween: [ "style", "${_Text2}", "left", '33px', { fromValue: '310px'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "style", "${_Text4}", "top", '14px', { fromValue: '460.7px'}], position: 5650, duration: 750, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "style", "${_Text4}", "top", '-217px', { fromValue: '14px'}], position: 8000, duration: 750, easing: "easeInQuad" },
            { id: "eid66", tween: [ "style", "${_Text4}", "top", '-217px', { fromValue: '-217px'}], position: 10500, duration: 0, easing: "easeOutQuad" },
            { id: "eid48", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 6712, duration: 288, easing: "easeOutQuad" },
            { id: "eid60", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 500, easing: "easeOutQuad" },
            { id: "eid28", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 6040, duration: 0, easing: "easeOutQuad" },
            { id: "eid14", tween: [ "style", "${_Next}", "left", '528px', { fromValue: '687px'}], position: 3000, duration: 1000, easing: "easeInQuad" },
            { id: "eid21", tween: [ "style", "${_Next}", "left", '17px', { fromValue: '528px'}], position: 4000, duration: 1000, easing: "easeInQuad" },
            { id: "eid50", tween: [ "style", "${_Next}", "left", '677px', { fromValue: '17px'}], position: 6250, duration: 0, easing: "easeOutQuad" },
            { id: "eid52", tween: [ "style", "${_Next}", "left", '532px', { fromValue: '677px'}], position: 6750, duration: 690, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "style", "${_Next}", "left", '-76px', { fromValue: '532px'}], position: 7440, duration: 810, easing: "easeInQuad" },
            { id: "eid4", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0.25'}], position: 0, duration: 0 },
            { id: "eid117", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 3250, duration: 500 },
            { id: "eid121", tween: [ "style", "${_buttons_sans}", "opacity", '0.2', { fromValue: '1'}], position: 4000, duration: 500 },
            { id: "eid122", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.20000000298023224'}], position: 6750, duration: 500 },
            { id: "eid123", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 7440, duration: 626 },
            { id: "eid55", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '0.25'}], position: 10250, duration: 750 },
            { id: "eid16", tween: [ "transform", "${_Next}", "scaleX", '1', { fromValue: '0.8'}], position: 3000, duration: 1000, easing: "easeInQuad" },
            { id: "eid23", tween: [ "transform", "${_Next}", "scaleX", '0.8', { fromValue: '1'}], position: 4000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "transform", "${_Next}", "scaleX", '0.74', { fromValue: '0.8'}], position: 6750, duration: 500 },
            { id: "eid58", tween: [ "transform", "${_Next}", "scaleX", '0.6', { fromValue: '0.74'}], position: 7440, duration: 810, easing: "easeOutQuad" },
            { id: "eid17", tween: [ "style", "${_sb10}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid19", tween: [ "style", "${_sb10}", "display", 'none', { fromValue: 'block'}], position: 4090, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Text5}", "height", '19px', { fromValue: '19px'}], position: 7041, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Text2}", "top", '-121px', { fromValue: '153px'}], position: 5500, duration: 500, easing: "easeInQuad" },
            { id: "eid36", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 5650, duration: 750, easing: "easeOutQuad" },
            { id: "eid62", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 750, easing: "easeOutQuad" },
            { id: "eid6", tween: [ "style", "${_sabbath_bar}", "top", '544px', { fromValue: '460px'}], position: 0, duration: 1000 },
            { id: "eid108", tween: [ "style", "${_sabbath_bar}", "top", '460px', { fromValue: '544px'}], position: 1000, duration: 750 },
            { id: "eid47", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0'}], position: 7440, duration: 0 },
            { id: "eid51", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0'}], position: 10250, duration: 750 },
            { id: "eid84", tween: [ "style", "${_puritans25}", "top", '255px', { fromValue: '255px'}], position: 6820, duration: 0, easing: "easeOutQuad" },
            { id: "eid98", tween: [ "style", "${_puritans25}", "top", '178px', { fromValue: '255px'}], position: 8000, duration: 750, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "style", "${_puritans25}", "top", '-59px', { fromValue: '178px'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid77", tween: [ "style", "${_Text4}", "left", '8.34px', { fromValue: '-21.59px'}], position: 5650, duration: 750, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_Next}", "opacity", '0', { fromValue: '0'}], position: 3000, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Next}", "opacity", '0', { fromValue: '0'}], position: 4000, duration: 0 },
            { id: "eid33", tween: [ "style", "${_Next}", "opacity", '0', { fromValue: '0'}], position: 5000, duration: 0 },
            { id: "eid35", tween: [ "style", "${_Next}", "opacity", '0', { fromValue: '0'}], position: 6750, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Next}", "opacity", '0', { fromValue: '0'}], position: 7440, duration: 0 },
            { id: "eid40", tween: [ "style", "${_Next}", "opacity", '0', { fromValue: '0'}], position: 8250, duration: 0 }         ]
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
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.14'],
            ["style", "height", '292px'],
            ["transform", "scaleX", '0.14'],
            ["style", "opacity", '0'],
            ["style", "left", '-253px'],
            ["style", "top", '-132.44px']
         ],
         "${_restart_no_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_escape}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '530px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '29px']
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
         "${_restart_yes_button}": [
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
         "${_no_continue}": [
            ["style", "top", '205px'],
            ["style", "opacity", '1'],
            ["style", "left", '18px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
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
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '37px']
         ],
         "${_Text5}": [
            ["style", "height", '65px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "top", '26px']
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
})(jQuery, AdobeEdge, "EDGE-32161239");
