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
            id:'Text_item15a',
            display:'none',
            type:'text',
            rect:['34px','145px','601px','209px','auto','auto'],
            text:"Rabbi Eckstein refers to the Sabbath Queen in talking about the reverence Jews have for this day.<br><br>In his book, <i>How Firm a Foundation</i>, he writes, \"The <i>Shabbat</i> is personified in rabbinic literature as a majestic queen, a radiant bride, and a heavenly jewel.\"",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Text_item15b',
            display:'none',
            type:'text',
            rect:['34px','145px','601px','209px','auto','auto'],
            opacity:1,
            text:"In fact, during Friday night prayer services, the doors are opened to welcome the Sabbath Queen.<br>What does the Sabbath Queen represent in Judaism? According to the <i>Talmud</i>, the <i>Shabbat</i> is compared to a bride given to us by God, whom we long to see. (<i>Talmud Shabbat</i> 119a)",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[]
         },
         {
            id:'Text3',
            display:'none',
            type:'text',
            rect:['33px','229px','586px','159px','auto','auto'],
            text:"L'Chai Dodi",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',36,"rgba(255,255,255,1)","normal","none","italic"]
         },
         {
            id:'lchai_text',
            display:'none',
            type:'text',
            rect:['25px','159px','594px','252px','auto','auto'],
            text:"<i>L'Chai Dodi</i> is the traditional Jewish liturgical song recited Friday at dusk in the synagogue to welcome <i>Shabbat</i>. <i>L'Chai Dodi</i> means \"come my beloved.\" During the singing of the last verse, the entire congregation rises and turns to the open door, greeting \"<i>Queen Shabbat</i>\" as she arrives.",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(255,255,255,1)","normal","none","normal"]
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
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
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
            id:'sb26',
            display:'none',
            type:'ellipse',
            rect:['80px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb27',
            display:'none',
            type:'ellipse',
            rect:['81px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
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
         "${_sb26}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '80px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3}": [
            ["transform", "scaleX", '0.86'],
            ["style", "opacity", '0'],
            ["style", "left", '33px'],
            ["style", "font-size", '36px'],
            ["style", "top", '301px'],
            ["transform", "scaleY", '0.86'],
            ["style", "display", 'none'],
            ["style", "font-style", 'italic'],
            ["style", "text-align", 'center']
         ],
         "${_next_play}": [
            ["style", "top", '495px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "height", '51px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_restart}": [
            ["style", "display", 'none']
         ],
         "${_sb27}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text_item15a}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '34px'],
            ["style", "top", '327px'],
            ["transform", "scaleY", '0.68'],
            ["style", "height", '209px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.68']
         ],
         "${_buttons}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '560px'],
            ["style", "width", '670px']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-86px'],
            ["style", "opacity", '0'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_Text_item15b}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '34px'],
            ["style", "top", '346px'],
            ["transform", "scaleY", '0.74'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "height", '209px'],
            ["transform", "scaleX", '0.74']
         ],
         "${_lchai_text}": [
            ["style", "top", '318px'],
            ["transform", "scaleY", '0.83'],
            ["style", "text-align", 'left'],
            ["transform", "scaleX", '0.83'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "font-size", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11750,
         autoPlay: false,
         labels: {
            "lchai_begin": 4250
         },
         timeline: [
            { id: "eid68", tween: [ "style", "${_buttons}", "top", '546px', { fromValue: '460px'}], position: 10000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid12", tween: [ "style", "${_sabbath_bar}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 750 },
            { id: "eid44", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'none'}], position: 1875, duration: 0 },
            { id: "eid48", tween: [ "style", "${_restart}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
            { id: "eid17", tween: [ "style", "${_sb27}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid18", tween: [ "style", "${_sb27}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Text3}", "left", '33px', { fromValue: '33px'}], position: 9500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid10", tween: [ "style", "${_sabbath_bar}", "bottom", '0px', { fromValue: '-86px'}], position: 500, duration: 750 },
            { id: "eid69", tween: [ "style", "${_sabbath_bar}", "bottom", '-86px', { fromValue: '0px'}], position: 10000, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid43", tween: [ "transform", "${_Text3}", "scaleY", '1', { fromValue: '0.86'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "transform", "${_Text3}", "scaleY", '0.47', { fromValue: '1'}], position: 9500, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid56", tween: [ "style", "${_lchai_text}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid61", tween: [ "style", "${_lchai_text}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid51", tween: [ "transform", "${_lchai_text}", "scaleY", '1', { fromValue: '0.83'}], position: 6250, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid59", tween: [ "transform", "${_lchai_text}", "scaleY", '0.82', { fromValue: '1'}], position: 7250, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid20", tween: [ "style", "${_Text_item15b}", "top", '145px', { fromValue: '346px'}], position: 2250, duration: 750 },
            { id: "eid33", tween: [ "style", "${_Text_item15b}", "top", '-44px', { fromValue: '145px'}], position: 3000, duration: 1000 },
            { id: "eid53", tween: [ "style", "${_lchai_text}", "top", '159px', { fromValue: '318px'}], position: 6250, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid57", tween: [ "style", "${_lchai_text}", "top", '349px', { fromValue: '159px'}], position: 7250, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid13", tween: [ "style", "${_next_play}", "display", 'block', { fromValue: 'none'}], position: 1960, duration: 0 },
            { id: "eid70", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid3", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,179,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 750 },
            { id: "eid22", tween: [ "transform", "${_Text_item15b}", "scaleX", '1', { fromValue: '0.74'}], position: 2250, duration: 750 },
            { id: "eid34", tween: [ "transform", "${_Text_item15b}", "scaleX", '0.43', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid27", tween: [ "style", "${_Text_item15b}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid37", tween: [ "style", "${_Text_item15b}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Text_item15a}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid32", tween: [ "style", "${_Text_item15a}", "display", 'none', { fromValue: 'block'}], position: 2670, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Text_item15b}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 750 },
            { id: "eid36", tween: [ "style", "${_Text_item15b}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid46", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid67", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid45", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid66", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid7", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 750 },
            { id: "eid23", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid25", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 2500, duration: 500 },
            { id: "eid38", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 3001, duration: 499 },
            { id: "eid40", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 6750, duration: 500, easing: "easeOutQuad" },
            { id: "eid42", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 7250, duration: 500, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "transform", "${_Text3}", "scaleX", '1', { fromValue: '0.86'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid64", tween: [ "transform", "${_Text3}", "scaleX", '0.47', { fromValue: '1'}], position: 9500, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid24", tween: [ "transform", "${_Text_item15b}", "scaleY", '1', { fromValue: '0.74'}], position: 2250, duration: 750 },
            { id: "eid35", tween: [ "transform", "${_Text_item15b}", "scaleY", '0.43', { fromValue: '1'}], position: 3000, duration: 1000 },
            { id: "eid2", tween: [ "style", "${_Text_item15a}", "top", '145px', { fromValue: '327px'}], position: 1000, duration: 1000 },
            { id: "eid28", tween: [ "style", "${_Text_item15a}", "top", '0px', { fromValue: '145px'}], position: 2000, duration: 670 },
            { id: "eid8", tween: [ "style", "${_Text_item15a}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
            { id: "eid31", tween: [ "style", "${_Text_item15a}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 670 },
            { id: "eid55", tween: [ "style", "${_lchai_text}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid60", tween: [ "style", "${_lchai_text}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid49", tween: [ "transform", "${_lchai_text}", "scaleX", '1', { fromValue: '0.83'}], position: 6250, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid58", tween: [ "transform", "${_lchai_text}", "scaleX", '0.82', { fromValue: '1'}], position: 7250, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid39", tween: [ "style", "${_Text3}", "top", '229px', { fromValue: '301px'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid47", tween: [ "style", "${_Text3}", "top", '21px', { fromValue: '229px'}], position: 6000, duration: 750, easing: "easeInOutQuad" },
            { id: "eid62", tween: [ "style", "${_Text3}", "top", '191px', { fromValue: '21px'}], position: 7500, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid6", tween: [ "transform", "${_Text_item15a}", "scaleY", '1', { fromValue: '0.68'}], position: 1000, duration: 1000 },
            { id: "eid30", tween: [ "transform", "${_Text_item15a}", "scaleY", '0.59', { fromValue: '1'}], position: 2000, duration: 670 },
            { id: "eid14", tween: [ "style", "${_sb26}", "display", 'block', { fromValue: 'none'}], position: 1960, duration: 0 },
            { id: "eid16", tween: [ "style", "${_sb26}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_Text_item15a}", "scaleX", '1', { fromValue: '0.68'}], position: 1000, duration: 1000 },
            { id: "eid29", tween: [ "transform", "${_Text_item15a}", "scaleX", '0.59', { fromValue: '1'}], position: 2000, duration: 670 }         ]
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
      fill: ['rgba(150,118,194,1.00)'],
      c: [
      {
         type: 'text',
         id: 'Text5',
         text: 'Are you sure you want to return to the beginning of Lesson One?',
         rect: ['18px','26px','512px','65px','auto','auto'],
         font: ['Trebuchet MS, Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none','']
      },
      {
         rect: ['18px','128px','512px','49px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'yes_restart',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(11,0,52,1.00)'],
         c: [
         {
            type: 'text',
            rect: ['6px','11px','498px','34px','auto','auto'],
            id: 'Text9',
            text: 'Yes, I want to return to the beginning of Lesson One',
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
         fill: ['rgba(11,0,52,1.00)'],
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
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
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
            ["style", "cursor", 'pointer'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
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
            { id: "eid54", tween: [ "color", "${_restart_no_button}", "background-color", 'rgba(0,51,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,51,102,1.00)'}], position: 750, duration: 0 },
            { id: "eid150", tween: [ "style", "${_restart_no_button}", "display", 'block', { fromValue: 'none'}], position: 710, duration: 0, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_restart_no_button}", "display", 'none', { fromValue: 'block'}], position: 795, duration: 0, easing: "easeOutQuad" },
            { id: "eid155", tween: [ "style", "${_curtain}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
            { id: "eid144", tween: [ "style", "${_restart_prompt}", "left", '42px', { fromValue: '-253px'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid233", tween: [ "style", "${_restart_prompt}", "left", '-268px', { fromValue: '42px'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid239", tween: [ "style", "${_restart_prompt}", "left", '42px', { fromValue: '42px'}], position: 3945, duration: 0 },
            { id: "eid52", tween: [ "color", "${_restart_yes_button}", "background-color", 'rgba(0,51,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,51,102,1.00)'}], position: 750, duration: 0 },
            { id: "eid140", tween: [ "transform", "${_restart_prompt}", "scaleY", '1', { fromValue: '0.14'}], position: 45, duration: 705, easing: "easeOutQuad" },
            { id: "eid231", tween: [ "transform", "${_restart_prompt}", "scaleY", '0.21', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid242", tween: [ "transform", "${_restart_prompt}", "scaleY", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid248", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInQuad" },
            { id: "eid252", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "easeInQuad" },
            { id: "eid253", tween: [ "style", "${_escape}", "display", 'block', { fromValue: 'none'}], position: 3945, duration: 0, easing: "easeInQuad" },
            { id: "eid256", tween: [ "style", "${_escape}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0, easing: "easeInQuad" },
            { id: "eid220", tween: [ "style", "${_yes_restart}", "opacity", '0', { fromValue: '1'}], position: 1250, duration: 750 },
            { id: "eid228", tween: [ "style", "${_yes_restart}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid185", tween: [ "style", "${_no_continue}", "opacity", '1', { fromValue: '1'}], position: 3945, duration: 0 },
            { id: "eid154", tween: [ "style", "${_no_continue}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 750 },
            { id: "eid151", tween: [ "style", "${_restart_yes_button}", "display", 'block', { fromValue: 'none'}], position: 710, duration: 0, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "style", "${_restart_yes_button}", "display", 'none', { fromValue: 'block'}], position: 795, duration: 0, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "color", "${_restart_prompt}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 750, duration: 0 },
            { id: "eid72", tween: [ "color", "${_yes_restart}", "background-color", 'rgba(0,51,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,51,102,1.00)'}], position: 750, duration: 0 },
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
            { id: "eid71", tween: [ "color", "${_no_continue}", "background-color", 'rgba(0,51,102,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,51,102,1.00)'}], position: 750, duration: 0 },
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
