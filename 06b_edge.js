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
            id:'sabbath_bar',
            type:'image',
            rect:['0px','auto','670px','100px','0px','auto'],
            clip:['rect(19px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'buttons',
            display:'none',
            type:'group',
            rect:['0','460','670','100','auto','auto'],
            c:[
            {
               id:'Ellipse',
               display:'none',
               type:'ellipse',
               rect:['531px','27px','69px','69px','auto','auto'],
               borderRadius:["50%","50%","50%","50%"],
               fill:["rgba(243,255,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"]
            },
            {
               id:'buttons_right',
               type:'image',
               rect:['0px','0px','670px','100px','auto','auto'],
               clip:['rect(27px 670px 100px 459px)'],
               fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
            },
            {
               id:'buttons_left',
               type:'image',
               rect:['0px','0px','670px','100px','auto','auto'],
               clip:['rect(27px 208px 100px 0px)'],
               fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
            }]
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
            id:'judah1',
            display:'none',
            type:'rect',
            rect:['24px','13px','623px','441px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(2,217,222,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Text1',
               display:'none',
               type:'text',
               rect:['14px','10px','599px','421px','auto','auto'],
               text:"Judah Halevi was a medieval Spanish Jewish physician, poet and philosopher during the Hebrew Golden Age. He was born in 1076 or 1086, near Toledo, Spain, and according to legend, died while kneeling at the Wailing Wall. Halevi is considered one of the greatest Hebrew poets, and his seminal work was <i>The Kuzari,</i> a dialogue between the fictional pagan king of the Khazars and a Jewish rabbi who explained the tenets of Judaism to the king. After talking with a Christian theologian, a Muslim scholar, and a Greek philsopher, the king converts to Judaism.<br><br>(continued...)",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
            }]
         },
         {
            id:'judah2',
            display:'none',
            type:'rect',
            rect:['50px','23px','570px','423px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(2,217,222,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            c:[
            {
               id:'Text',
               type:'text',
               rect:['12px','10px','549px','72px','auto','auto'],
               text:"His Sabbath hymn encompasses the beauty and reverence that the Jewish faith has for the <i>Shabbat</i>:",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1)","normal","none","normal"]
            },
            {
               id:'Text2',
               type:'text',
               rect:['44px','77px','549px','153px','auto','auto'],
               text:"On Friday doth my cup o'erflow,<br>What blissful rest the night shall know,<br>When, in thine arms, my toil and woe<br>Are all forgot, Sabbath my love!<br><br>'Tis dusk, with sudden light, distilled<br>From one sweet face, the world is filled;<br>The tumult of my heart is stilled —<br>For thou art come, Sabbath my love!<br><br>Bring fruits and wine and sing a gladsome lay,<br>Cry, 'Come in peace, O restful Seventh day!'",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1)","normal","none","italic"]
            }]
         },
         {
            id:'judah',
            display:'none',
            type:'text',
            rect:['101px','190px','464px','90px','auto','auto'],
            text:"Judah Halevi",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',56,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'sb14',
            display:'none',
            type:'ellipse',
            rect:['84px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'sb15',
            display:'none',
            type:'ellipse',
            rect:['80px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
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
         "${_Ellipse}": [
            ["style", "top", '27px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '531px'],
            ["color", "background-color", 'rgba(243,255,0,1.00)']
         ],
         "${_Text1}": [
            ["style", "top", '9.87px'],
            ["style", "height", '421px'],
            ["transform", "scaleY", '0.75'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["style", "left", '56.11px'],
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["style", "top", '10.02px'],
            ["style", "height", '72.216735839844px'],
            ["style", "width", '548.88336181641px'],
            ["style", "left", '11.65px'],
            ["style", "font-size", '22px']
         ],
         "${_judah2}": [
            ["style", "top", '23px'],
            ["transform", "scaleX", '0.6'],
            ["transform", "scaleY", '0.6'],
            ["style", "height", '423.21667480469px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '236.67px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_buttons}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "top", '520px']
         ],
         "${_next_play}": [
            ["style", "top", '495px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '51px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_Text2}": [
            ["style", "top", '76.9px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '44px'],
            ["style", "font-size", '20px']
         ],
         "${_restart}": [
            ["style", "display", 'none']
         ],
         "${_judah1}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
            ["style", "opacity", '0'],
            ["style", "left", '419.44px'],
            ["style", "display", 'none']
         ],
         "${_sb14}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "bottom", '-60px'],
            ["style", "opacity", '0'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_buttons_left}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [27,208,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '560px'],
            ["style", "width", '670px']
         ],
         "${_sb15}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_buttons_right}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [27,670,100,459], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_judah}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '205.55px'],
            ["style", "font-size", '56px'],
            ["style", "top", '190px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '90.000076293946px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
            ["style", "width", '464.45001220703px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6500,
         autoPlay: true,
         timeline: [
            { id: "eid55", tween: [ "style", "${_judah2}", "left", '50px', { fromValue: '236.67px'}], position: 4000, duration: 750 },
            { id: "eid76", tween: [ "style", "${_judah2}", "left", '-248.89px', { fromValue: '50px'}], position: 5250, duration: 1000 },
            { id: "eid3", tween: [ "style", "${_sb14}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid5", tween: [ "style", "${_sb14}", "display", 'none', { fromValue: 'block'}], position: 3545, duration: 0 },
            { id: "eid8", tween: [ "style", "${_sabbath_bar}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750 },
            { id: "eid21", tween: [ "transform", "${_judah1}", "scaleX", '1', { fromValue: '0.75'}], position: 2750, duration: 750 },
            { id: "eid46", tween: [ "transform", "${_judah1}", "scaleX", '0.43', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "eid51", tween: [ "transform", "${_judah2}", "scaleX", '1', { fromValue: '0.6'}], position: 4000, duration: 750 },
            { id: "eid77", tween: [ "transform", "${_judah2}", "scaleX", '0.53', { fromValue: '1'}], position: 5250, duration: 1000 },
            { id: "eid35", tween: [ "transform", "${_judah}", "scaleY", '1', { fromValue: '0.75'}], position: 575, duration: 620, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "transform", "${_judah}", "scaleY", '0.55', { fromValue: '1'}], position: 2655, duration: 345, easing: "easeInQuad" },
            { id: "eid13", tween: [ "style", "${_Text1}", "left", '14.43px', { fromValue: '56.11px'}], position: 2750, duration: 750 },
            { id: "eid9", tween: [ "style", "${_next_play}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid71", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'block'}], position: 5070, duration: 0 },
            { id: "eid11", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,179,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 500 },
            { id: "eid38", tween: [ "style", "${_judah}", "display", 'block', { fromValue: 'none'}], position: 575, duration: 0 },
            { id: "eid43", tween: [ "style", "${_judah}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid81", tween: [ "color", "${_judah1}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 3810, duration: 0 },
            { id: "eid2", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 750 },
            { id: "eid67", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 2500, duration: 500 },
            { id: "eid68", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 3000, duration: 500 },
            { id: "eid59", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid60", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 4500, duration: 500 },
            { id: "eid18", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 5000, duration: 750 },
            { id: "eid33", tween: [ "transform", "${_judah}", "scaleX", '1', { fromValue: '0.75'}], position: 575, duration: 620, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "transform", "${_judah}", "scaleX", '0.55', { fromValue: '1'}], position: 2655, duration: 345, easing: "easeInQuad" },
            { id: "eid25", tween: [ "style", "${_Text1}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 750 },
            { id: "eid27", tween: [ "style", "${_judah1}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 750 },
            { id: "eid48", tween: [ "style", "${_judah1}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "eid4", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '520px'}], position: 1000, duration: 750 },
            { id: "eid19", tween: [ "transform", "${_Text1}", "scaleY", '1', { fromValue: '0.75'}], position: 2750, duration: 750 },
            { id: "eid80", tween: [ "color", "${_judah2}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 5500, duration: 0 },
            { id: "eid31", tween: [ "style", "${_judah}", "left", '100.55px', { fromValue: '205.55px'}], position: 575, duration: 620, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_judah}", "left", '-82.78px', { fromValue: '100.55px'}], position: 2655, duration: 345, easing: "easeInQuad" },
            { id: "eid57", tween: [ "style", "${_judah2}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 750 },
            { id: "eid79", tween: [ "style", "${_judah2}", "opacity", '0', { fromValue: '1'}], position: 5250, duration: 1000 },
            { id: "eid70", tween: [ "style", "${_Text1}", "top", '9.87px', { fromValue: '9.87px'}], position: 2750, duration: 0 },
            { id: "eid15", tween: [ "style", "${_judah1}", "left", '23.89px', { fromValue: '419.44px'}], position: 2750, duration: 750 },
            { id: "eid45", tween: [ "style", "${_judah1}", "left", '-182.78px', { fromValue: '23.89px'}], position: 3500, duration: 750 },
            { id: "eid17", tween: [ "transform", "${_Text1}", "scaleX", '1', { fromValue: '0.75'}], position: 2750, duration: 750 },
            { id: "eid12", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'none'}], position: 2425, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 250 },
            { id: "eid64", tween: [ "style", "${_Ellipse}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250 },
            { id: "eid65", tween: [ "style", "${_Ellipse}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 250 },
            { id: "eid58", tween: [ "style", "${_judah2}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid37", tween: [ "style", "${_judah}", "opacity", '1', { fromValue: '0'}], position: 575, duration: 620, easing: "easeOutQuad" },
            { id: "eid42", tween: [ "style", "${_judah}", "opacity", '0', { fromValue: '1'}], position: 2655, duration: 345, easing: "easeInQuad" },
            { id: "eid53", tween: [ "transform", "${_judah2}", "scaleY", '1', { fromValue: '0.6'}], position: 4000, duration: 750 },
            { id: "eid78", tween: [ "transform", "${_judah2}", "scaleY", '0.53', { fromValue: '1'}], position: 5250, duration: 1000 },
            { id: "eid63", tween: [ "style", "${_Ellipse}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid66", tween: [ "style", "${_Ellipse}", "display", 'none', { fromValue: 'block'}], position: 2545, duration: 0 },
            { id: "eid6", tween: [ "style", "${_sabbath_bar}", "bottom", '0px', { fromValue: '-60px'}], position: 1000, duration: 750 },
            { id: "eid1", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid23", tween: [ "transform", "${_judah1}", "scaleY", '1', { fromValue: '0.75'}], position: 2750, duration: 750 },
            { id: "eid47", tween: [ "transform", "${_judah1}", "scaleY", '0.43', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "eid7", tween: [ "style", "${_sb15}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
            { id: "eid10", tween: [ "style", "${_sb15}", "display", 'none', { fromValue: 'block'}], position: 5150, duration: 0 },
            { id: "eid29", tween: [ "style", "${_judah1}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid49", tween: [ "style", "${_judah1}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Text1}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 }         ]
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
         text: 'Are you sure you want to return to the beginning of Lesson One?',
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
            text: 'Yes, I want to return to the beginning of Lesson One',
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
         "${_restart_no_button}": [
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
