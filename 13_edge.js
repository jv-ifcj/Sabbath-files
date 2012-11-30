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
            id:'NextButton',
            type:'rect',
            rect:['711','473','197','61','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[],
            c:[
            {
               id:'Text5',
               type:'text',
               rect:['18','-5','114','58','undefined','undefined'],
               text:"Next",
               align:"auto",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',52,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            }]
         },
         {
            id:'Question1',
            type:'rect',
            rect:['-216','234','512','266','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[],
            c:[
            {
               id:'RoundRectCopy',
               type:'rect',
               rect:['0','0','512','266','undefined','undefined'],
               clip:['rect(0px 512px 62px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text2',
                  type:'text',
                  rect:['17','12','481','45','undefined','undefined'],
                  text:"Think About It",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'Text',
               type:'text',
               rect:['17','101','481','151','undefined','undefined'],
               text:"Rabbi Eckstein says the Sabbath has hidden spiritual treasures and keys to our search for meaning in life.  How has that proven true in your life?",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Question2',
            type:'rect',
            rect:['-395','337','512','266','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['0.4','0.4']],
            c:[
            {
               id:'RoundRectCopy3',
               type:'rect',
               rect:['0','0','512','266','undefined','undefined'],
               clip:['rect(0px 512px 62px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text2Copy',
                  type:'text',
                  rect:['17','12','481','45','undefined','undefined'],
                  text:"Think About It",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'TextCopy',
               type:'text',
               rect:['15','85','481','151','undefined','undefined'],
               text:"If you don't currently observe the Sabbath or would like to change your approach to this sacred day, what one thing could you start doing &mdash; or not doing &mdash; to honor the Sabbath and keep it holy?",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',23,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Question3',
            type:'rect',
            rect:['534','244','481','266','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],[],[],['0.4','0.4']],
            c:[
            {
               id:'RoundRect3Copy',
               type:'rect',
               rect:['0','0','481','266','undefined','undefined'],
               clip:['rect(0px 481px 62px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text2Copy2',
                  type:'text',
                  rect:['32','12','249','45','undefined','undefined'],
                  text:"Apply It",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'Text3',
               type:'text',
               rect:['18','83','445','160','undefined','undefined'],
               text:"For the next month or so, keep a Sunday journal.  At the end of each Sunday, record your activities, how you felt at the end of the day, how you felt in approaching the new week, and what you felt God was teaching you.",
               align:"auto",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            }]
         },
         {
            id:'Text7',
            type:'text',
            rect:['34','190','601','70','undefined','undefined'],
            text:"Think About It",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',53,"rgba(255,255,255,1)","normal","none","italic"],
            transform:[]
         },
         {
            id:'Text8',
            type:'text',
            rect:['108','285','454','79','undefined','undefined'],
            text:"Please take a moment to reflect and answer the following questions...",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","italic"],
            transform:[]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'Text6',
            display:'none',
            type:'text',
            rect:['79px','146px','512px','192px','auto','auto'],
            text:"Thank you for joining us for this lesson about the Sabbath.<br><br>This concludes Lesson One.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',37,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'buttons_sans',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'NextButtonCopy',
            display:'none',
            type:'rect',
            rect:['535px','391','64px','61','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'buttons',
            display:'none',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'q17_submit_button',
            display:'none',
            type:'rect',
            rect:['229px','510px','205px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skip_text',
            display:'none',
            type:'text',
            rect:['79px','440px','520px','40px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question, or type an answer and click Submit",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'q18_submit_button',
            display:'none',
            type:'rect',
            rect:['231px','510px','205px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q18_skip_button',
            display:'none',
            type:'ellipse',
            rect:['538px','494px','53px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q18_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','494px','51px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Ellipse4',
            display:'none',
            type:'ellipse',
            rect:['83px','495px','47px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q17_skip_button',
            display:'none',
            type:'ellipse',
            rect:['542px','494px','47px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q17_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['542px','494px','49px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb35',
            display:'none',
            type:'ellipse',
            rect:['79px','494px','50px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'play_button_13',
            display:'none',
            type:'ellipse',
            rect:['538px','494px','53px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb33',
            display:'none',
            type:'ellipse',
            rect:['81px','501px','51px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'sb34',
            display:'none',
            type:'ellipse',
            rect:['79px','494px','54px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['114px','336px','427px','21px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none",""]
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
         "${_Continue}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["transform", "scaleY", '1'],
            ["transform", "translateX", '-185px'],
            ["transform", "translateY", '96px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '145px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_question17}": [
            ["transform", "translateX", '515px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '358px'],
            ["style", "height", '202px']
         ],
         "${_NextButton}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["style", "top", '470px'],
            ["transform", "scaleY", '1'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '687px'],
            ["style", "width", '145px']
         ],
         "${_question18}": [
            ["transform", "translateX", '677px'],
            ["style", "height", '249px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '335px'],
            ["style", "display", 'none']
         ],
         "${_Text5Copy}": [
            ["style", "height", '58px'],
            ["transform", "translateX", '-413px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["transform", "translateY", '-472px'],
            ["style", "width", '114px']
         ],
         "${_q18_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sabbath_bar}": [
            ["style", "top", '460px'],
            ["style", "opacity", '1']
         ],
         "${_TextCopy}": [
            ["style", "top", '85px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '23px']
         ],
         "${_q18_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Question1}": [
            ["style", "top", '79.2px'],
            ["transform", "scaleY", '0.4'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0'],
            ["style", "left", '557.5px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_q17_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text7}": [
            ["style", "top", '64px'],
            ["style", "text-align", 'center'],
            ["style", "height", '70px'],
            ["style", "opacity", '0'],
            ["style", "left", '34px'],
            ["style", "font-size", '53px']
         ],
         "${_q17_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3}": [
            ["style", "top", '83px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '18px'],
            ["style", "font-size", '20px']
         ],
         "${_Text5}": [
            ["style", "top", '-5px'],
            ["style", "height", '58px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '18px'],
            ["style", "width", '114px']
         ],
         "${_NextButtonCopy}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '64px'],
            ["style", "top", '492px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "left", '535px']
         ],
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '12px'],
            ["style", "font-size", '27px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '32px'],
            ["style", "width", '249px']
         ],
         "${_sb34}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sb33}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Ellipse4}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text8}": [
            ["style", "top", '285px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '79px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '108px'],
            ["style", "font-size", '20px']
         ],
         "${_buttons_sans}": [
            ["style", "opacity", '0.25']
         ],
         "${_skip_text}": [
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_Text6}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '79px'],
            ["style", "font-size", '37px'],
            ["style", "top", '225px'],
            ["transform", "scaleY", '0.89'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["transform", "scaleX", '0.89']
         ],
         "${_question17} > form:nth-child(1) > input:nth-child(2)": [
            ["transform", "translateX", '-298px'],
            ["transform", "translateY", '134px']
         ],
         "${_RoundRect3Copy}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,481,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_buttons}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_Question3}": [
            ["style", "top", '244.8px'],
            ["transform", "scaleY", '0.4'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0'],
            ["style", "left", '534.7px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_Question2}": [
            ["style", "top", '31.18px'],
            ["transform", "scaleY", '0.4'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0'],
            ["style", "left", '625.4px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_question18} > form:nth-child(1) > input:nth-child(2)": [
            ["transform", "translateX", '-310px'],
            ["transform", "translateY", '151px']
         ],
         "${_Text2}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_restart}": [
            ["style", "display", 'block']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_q17_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '101px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '26px']
         ],
         "${_play_button_13}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '560px'],
            ["style", "width", '670px']
         ],
         "${_sb35}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_type_text}": [
            ["style", "top", '331px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '517px'],
            ["style", "font-size", '17px']
         ],
         "${_q18_skip_go_button}": [
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
         duration: 23500,
         autoPlay: true,
         labels: {
            "q17_home": 13250,
            "q17_skip_check": 14000,
            "q17_next_go": 14500,
            "q18_skip_check": 17750,
            "q18_next_go": 18000
         },
         timeline: [
            { id: "eid295", tween: [ "style", "${_NextButtonCopy}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid296", tween: [ "style", "${_NextButtonCopy}", "display", 'none', { fromValue: 'block'}], position: 7370, duration: 0, easing: "easeOutQuad" },
            { id: "eid300", tween: [ "transform", "${_question17}", "translateY", '358px', { fromValue: '358px'}], position: 12250, duration: 0 },
            { id: "eid94", tween: [ "style", "${_Question2}", "left", '79px', { fromValue: '625.4px'}], position: 15250, duration: 1500, easing: "easeOutQuad" },
            { id: "eid109", tween: [ "style", "${_Question2}", "left", '-298.03px', { fromValue: '79px'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid25", tween: [ "style", "${_Question2}", "left", '-411.6px', { fromValue: '-298.03px'}], position: 19000, duration: 500, easing: "easeInQuad" },
            { id: "eid343", tween: [ "style", "${_sabbath_bar}", "opacity", '0', { fromValue: '1'}], position: 21500, duration: 1000 },
            { id: "eid329", tween: [ "style", "${_q18_submit_button}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid336", tween: [ "style", "${_q18_submit_button}", "display", 'none', { fromValue: 'block'}], position: 17888, duration: 0 },
            { id: "eid49", tween: [ "transform", "${_Text8}", "scaleY", '0.8', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid321", tween: [ "style", "${_q17_submit_button}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
            { id: "eid326", tween: [ "style", "${_q17_submit_button}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
            { id: "eid7", tween: [ "style", "${_NextButtonCopy}", "opacity", '0', { fromValue: '0'}], position: 6000, duration: 0 },
            { id: "eid8", tween: [ "style", "${_NextButtonCopy}", "opacity", '0', { fromValue: '0'}], position: 7250, duration: 0 },
            { id: "eid345", tween: [ "style", "${_Text6}", "top", '146px', { fromValue: '225px'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid312", tween: [ "style", "${_question18}", "opacity", '1', { fromValue: '0'}], position: 16463, duration: 787 },
            { id: "eid315", tween: [ "style", "${_question18}", "opacity", '0', { fromValue: '1'}], position: 18093, duration: 907 },
            { id: "eid11", tween: [ "style", "${_sb35}", "display", 'block', { fromValue: 'none'}], position: 17445, duration: 0 },
            { id: "eid12", tween: [ "style", "${_sb35}", "display", 'none', { fromValue: 'block'}], position: 17888, duration: 0 },
            { id: "eid342", tween: [ "style", "${_sabbath_bar}", "top", '511px', { fromValue: '460px'}], position: 21500, duration: 1000 },
            { id: "eid118", tween: [ "transform", "${_Question3}", "scaleX", '1', { fromValue: '0.4'}], position: 18750, duration: 1250, easing: "easeInQuad" },
            { id: "eid207", tween: [ "transform", "${_Question3}", "scaleX", '0.75', { fromValue: '1'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid26", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
            { id: "eid36", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 15376, duration: 0 },
            { id: "eid37", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0, easing: "easeOutQuad" },
            { id: "eid55", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 18929, duration: 0 },
            { id: "eid93", tween: [ "style", "${_Question2}", "opacity", '1', { fromValue: '0'}], position: 15750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid113", tween: [ "style", "${_Question2}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid327", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid328", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 14108, duration: 0 },
            { id: "eid333", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 17750, duration: 0 },
            { id: "eid334", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 17888, duration: 0 },
            { id: "eid57", tween: [ "style", "${_type_text}", "top", '331px', { fromValue: '331px'}], position: 12250, duration: 0, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "style", "${_type_text}", "top", '300px', { fromValue: '317px'}], position: 16500, duration: 750, easing: "easeOutQuad" },
            { id: "eid51", tween: [ "style", "${_type_text}", "top", '360px', { fromValue: '300px'}], position: 18093, duration: 836 },
            { id: "eid62", tween: [ "style", "${_Question1}", "opacity", '1', { fromValue: '0'}], position: 11700, duration: 1050, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "style", "${_Question1}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 1050, easing: "easeInQuad" },
            { id: "eid48", tween: [ "transform", "${_Text8}", "scaleX", '0.8', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid324", tween: [ "style", "${_q17_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid325", tween: [ "style", "${_q17_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
            { id: "eid320", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 1000 },
            { id: "eid15", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 14504, duration: 496 },
            { id: "eid17", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 17000, duration: 500 },
            { id: "eid20", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 500 },
            { id: "eid22", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0.25'}], position: 19000, duration: 0 },
            { id: "eid310", tween: [ "transform", "${_question18}", "translateY", '325px', { fromValue: '335px'}], position: 16463, duration: 787 },
            { id: "eid314", tween: [ "transform", "${_question18}", "translateY", '397px', { fromValue: '325px'}], position: 18093, duration: 907 },
            { id: "eid44", tween: [ "transform", "${_NextButtonCopy}", "scaleX", '1', { fromValue: '1'}], position: 7250, duration: 0, easing: "easeOutQuad" },
            { id: "eid298", tween: [ "style", "${_question17}", "height", '202px', { fromValue: '202px'}], position: 12250, duration: 0 },
            { id: "eid97", tween: [ "transform", "${_Question2}", "scaleY", '0.87', { fromValue: '0.4'}], position: 15750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "transform", "${_Question2}", "scaleY", '0.4', { fromValue: '0.87'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid308", tween: [ "style", "${_question18}", "display", 'block', { fromValue: 'none'}], position: 16463, duration: 0 },
            { id: "eid316", tween: [ "style", "${_question18}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
            { id: "eid330", tween: [ "style", "${_q18_skip_button}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid331", tween: [ "style", "${_q18_skip_button}", "display", 'none', { fromValue: 'block'}], position: 17588, duration: 0 },
            { id: "eid47", tween: [ "style", "${_Text8}", "top", '338px', { fromValue: '285px'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid217", tween: [ "style", "${_Text8}", "top", '338px', { fromValue: '338px'}], position: 10066, duration: 0, easing: "easeInQuad" },
            { id: "eid219", tween: [ "style", "${_Text8}", "top", '613.99px', { fromValue: '338px'}], position: 10156, duration: 0, easing: "easeInQuad" },
            { id: "eid45", tween: [ "transform", "${_NextButtonCopy}", "scaleY", '1', { fromValue: '1'}], position: 7250, duration: 0, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_sb34}", "display", 'block', { fromValue: 'none'}], position: 13171, duration: 0 },
            { id: "eid10", tween: [ "style", "${_sb34}", "display", 'none', { fromValue: 'block'}], position: 14108, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Question3}", "left", '101.7px', { fromValue: '534.7px'}], position: 18500, duration: 1500, easing: "easeInQuad" },
            { id: "eid209", tween: [ "style", "${_Question3}", "left", '-437.3px', { fromValue: '101.7px'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid61", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_restart}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid96", tween: [ "transform", "${_Question2}", "scaleX", '0.87', { fromValue: '0.4'}], position: 15750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid111", tween: [ "transform", "${_Question2}", "scaleX", '0.4', { fromValue: '0.87'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid95", tween: [ "style", "${_Question2}", "top", '31px', { fromValue: '31.18px'}], position: 15250, duration: 1500, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "style", "${_Question2}", "top", '61.18px', { fromValue: '31px'}], position: 18000, duration: 1500, easing: "easeInQuad" },
            { id: "eid58", tween: [ "style", "${_Question1}", "left", '79px', { fromValue: '557.5px'}], position: 11000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "style", "${_Question1}", "left", '-402.58px', { fromValue: '79px'}], position: 15000, duration: 1750, easing: "easeInQuad" },
            { id: "eid349", tween: [ "transform", "${_Text6}", "scaleX", '1', { fromValue: '0.89'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "style", "${_type_text}", "left", '114px', { fromValue: '517px'}], position: 12250, duration: 750, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "style", "${_type_text}", "left", '-231px', { fromValue: '114px'}], position: 14750, duration: 626 },
            { id: "eid40", tween: [ "style", "${_type_text}", "left", '129px', { fromValue: '629px'}], position: 16500, duration: 750, easing: "easeOutQuad" },
            { id: "eid46", tween: [ "style", "${_type_text}", "left", '-180px', { fromValue: '129px'}], position: 18093, duration: 836 },
            { id: "eid31", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 22500, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Text7}", "top", '190px', { fromValue: '64px'}], position: 2000, duration: 1540, easing: "easeOutQuad" },
            { id: "eid52", tween: [ "style", "${_Text7}", "top", '245px', { fromValue: '190px'}], position: 7750, duration: 750, easing: "easeOutQuad" },
            { id: "eid214", tween: [ "style", "${_Text7}", "top", '245px', { fromValue: '245px'}], position: 10066, duration: 0, easing: "easeInQuad" },
            { id: "eid215", tween: [ "style", "${_Text7}", "top", '-63px', { fromValue: '245px'}], position: 10156, duration: 0, easing: "easeInQuad" },
            { id: "eid216", tween: [ "style", "${_Text8}", "left", '108px', { fromValue: '108px'}], position: 10066, duration: 0, easing: "easeInQuad" },
            { id: "eid218", tween: [ "style", "${_Text8}", "left", '108px', { fromValue: '108px'}], position: 10156, duration: 0, easing: "easeInQuad" },
            { id: "eid59", tween: [ "style", "${_Question1}", "top", '25.18px', { fromValue: '79.2px'}], position: 11000, duration: 1750, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "style", "${_Question1}", "top", '79.2px', { fromValue: '25.18px'}], position: 15000, duration: 1750, easing: "easeInQuad" },
            { id: "eid24", tween: [ "transform", "${_question18}", "translateX", '127px', { fromValue: '677px'}], position: 16463, duration: 787, easing: "easeOutQuad" },
            { id: "eid313", tween: [ "transform", "${_question18}", "translateX", '-210px', { fromValue: '127px'}], position: 18093, duration: 907 },
            { id: "eid297", tween: [ "style", "${_question17}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
            { id: "eid307", tween: [ "style", "${_question17}", "display", 'none', { fromValue: 'block'}], position: 15500, duration: 0 },
            { id: "eid302", tween: [ "transform", "${_question17}", "translateX", '113px', { fromValue: '515px'}], position: 12250, duration: 750, easing: "easeOutQuad" },
            { id: "eid305", tween: [ "transform", "${_question17}", "translateX", '-301px', { fromValue: '113px'}], position: 14750, duration: 750 },
            { id: "eid13", tween: [ "style", "${_Ellipse4}", "display", 'block', { fromValue: 'none'}], position: 20685, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Ellipse4}", "display", 'none', { fromValue: 'block'}], position: 20841, duration: 0 },
            { id: "eid304", tween: [ "style", "${_question17}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 750, easing: "easeOutQuad" },
            { id: "eid306", tween: [ "style", "${_question17}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 750 },
            { id: "eid117", tween: [ "style", "${_Question3}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 1000, easing: "easeInQuad" },
            { id: "eid211", tween: [ "style", "${_Question3}", "opacity", '0', { fromValue: '1'}], position: 21335, duration: 785, easing: "easeInQuad" },
            { id: "eid29", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1540, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 750, easing: "easeInQuad" },
            { id: "eid119", tween: [ "transform", "${_Question3}", "scaleY", '1', { fromValue: '0.4'}], position: 18750, duration: 1250, easing: "easeInQuad" },
            { id: "eid208", tween: [ "transform", "${_Question3}", "scaleY", '0.75', { fromValue: '1'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid317", tween: [ "style", "${_play_button_13}", "display", 'block', { fromValue: 'none'}], position: 20750, duration: 0 },
            { id: "eid337", tween: [ "style", "${_play_button_13}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid63", tween: [ "transform", "${_Question1}", "scaleX", '0.87', { fromValue: '0.4'}], position: 11350, duration: 1400, easing: "easeOutQuad" },
            { id: "eid91", tween: [ "transform", "${_Question1}", "scaleX", '0.4', { fromValue: '0.87'}], position: 15000, duration: 1400, easing: "easeInQuad" },
            { id: "eid43", tween: [ "style", "${_NextButtonCopy}", "top", '492px', { fromValue: '492px'}], position: 7250, duration: 0, easing: "easeOutQuad" },
            { id: "eid33", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 750, easing: "easeOutQuad" },
            { id: "eid35", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 626 },
            { id: "eid42", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 750, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 18093, duration: 836 },
            { id: "eid347", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid322", tween: [ "style", "${_q17_skip_button}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0 },
            { id: "eid323", tween: [ "style", "${_q17_skip_button}", "display", 'none', { fromValue: 'block'}], position: 13500, duration: 0 },
            { id: "eid1", tween: [ "style", "${_sb33}", "display", 'block', { fromValue: 'none'}], position: 7130, duration: 0 },
            { id: "eid2", tween: [ "style", "${_sb33}", "display", 'none', { fromValue: 'block'}], position: 7405, duration: 0 },
            { id: "eid3", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.250000'}], position: 6750, duration: 500 },
            { id: "eid5", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0.970588'}], position: 7250, duration: 500 },
            { id: "eid340", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 20000, duration: 750 },
            { id: "eid341", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '1'}], position: 20750, duration: 750 },
            { id: "eid318", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'none'}], position: 12250, duration: 0 },
            { id: "eid339", tween: [ "style", "${_buttons}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Question3}", "top", '132.2px', { fromValue: '244.8px'}], position: 18500, duration: 1500, easing: "easeInQuad" },
            { id: "eid210", tween: [ "style", "${_Question3}", "top", '120.73px', { fromValue: '132.2px'}], position: 21335, duration: 915, easing: "easeInQuad" },
            { id: "eid332", tween: [ "style", "${_q18_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 17750, duration: 0 },
            { id: "eid335", tween: [ "style", "${_q18_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 17888, duration: 0 },
            { id: "eid351", tween: [ "transform", "${_Text6}", "scaleY", '1', { fromValue: '0.89'}], position: 22750, duration: 750, easing: "easeOutQuad" },
            { id: "eid64", tween: [ "transform", "${_Question1}", "scaleY", '0.87', { fromValue: '0.4'}], position: 11350, duration: 1400, easing: "easeOutQuad" },
            { id: "eid90", tween: [ "transform", "${_Question1}", "scaleY", '0.4', { fromValue: '0.87'}], position: 15000, duration: 1400, easing: "easeInQuad" }         ]
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
         fill: ['rgba(0,51,102,1.00)'],
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
})(jQuery, AdobeEdge, "EDGE-1999079");
