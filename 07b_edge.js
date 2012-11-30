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
            id:'sabbath_bar',
            type:'image',
            rect:['0px','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'buttons',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            clip:['rect(28px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['34px','448px','601px','36px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',21,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'NextButton',
            display:'none',
            type:'rect',
            rect:['711','473','197','61','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'q9b_skip_arrow',
            display:'none',
            type:'ellipse',
            rect:['542px','497px','51px','45px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q9b_submit_button',
            display:'none',
            type:'rect',
            rect:['226px','499px','209px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Question2',
            type:'rect',
            rect:['-395','337','512','201px','undefined','undefined'],
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
                  text:"Reflection Question",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'TextCopy',
               type:'text',
               rect:['15','85','481','102px','undefined','undefined'],
               text:"From your knowledge of Jewish history, how do you think the Sabbath has preserved the Jewish people?",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Text7',
            type:'text',
            rect:['34','190','601','70','undefined','undefined'],
            text:"Reflection Question",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',53,"rgba(255,255,255,1)","normal","none","italic"],
            transform:[]
         },
         {
            id:'Text8',
            type:'text',
            rect:['108','285','454','79','undefined','undefined'],
            text:"Please take a moment to reflect and answer the following question based on the material we've covered so far...",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","italic"],
            transform:[]
         },
         {
            id:'NextButtonCopy',
            type:'rect',
            rect:['262','391','197','61','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[],
            c:[
            {
               id:'Text5Copy2',
               type:'text',
               rect:['9','10','131','38','undefined','undefined'],
               text:"Continue",
               align:"auto",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',32,"rgba(0,0,0,1.00)","normal","none","italic"],
               transform:[]
            }]
         },
         {
            id:'NextButtonCopy2',
            type:'rect',
            rect:['-187','564','300','48','undefined','undefined'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(150,118,194,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[]
         },
         {
            id:'sb17',
            display:'none',
            type:'ellipse',
            rect:['81px','497px','51px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['121px','292px','458px','23px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none",""]
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
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["transform", "scaleY", '1'],
            ["transform", "translateX", '-185px'],
            ["transform", "translateY", '96px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '145px']
         ],
         "${_Text7}": [
            ["style", "top", '64px'],
            ["style", "text-align", 'center'],
            ["style", "height", '70px'],
            ["style", "opacity", '0'],
            ["style", "left", '34px'],
            ["style", "font-size", '53px']
         ],
         "${_Text5Copy2}": [
            ["style", "top", '10px'],
            ["style", "width", '131px'],
            ["style", "height", '38px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '9px'],
            ["style", "font-size", '32px']
         ],
         "${_NextButtonCopy2}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '300px'],
            ["style", "top", '565px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '48px'],
            ["style", "left", '-176px']
         ],
         "${_NextButtonCopy}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '145px'],
            ["style", "top", '391px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "left", '262px']
         ],
         "${_question07}": [
            ["transform", "translateX", '419px'],
            ["style", "height", '258px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '239px'],
            ["style", "display", 'none']
         ],
         "${_NextButton}": [
            ["color", "background-color", 'rgba(150,118,194,1)'],
            ["transform", "scaleX", '0.74'],
            ["style", "opacity", '0'],
            ["style", "left", '711px'],
            ["style", "width", '74.572094066723px'],
            ["style", "top", '473px'],
            ["transform", "scaleY", '0.74'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_sb17}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question07} > form:nth-child(1) > input:nth-child(2)": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '163px'],
            ["transform", "translateX", '-160px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_question07} > form:nth-child(1) > textarea:nth-child(1)": [
            ["style", "opacity", '1'],
            ["transform", "translateY", '74px'],
            ["transform", "translateX", '119px']
         ],
         "${_q9b_skip_arrow}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Question2}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.4'],
            ["style", "top", '92.18px'],
            ["style", "height", '201px'],
            ["style", "opacity", '0'],
            ["style", "left", '559.4px'],
            ["transform", "scaleX", '0.4']
         ],
         "${_Text5Copy}": [
            ["style", "font-style", 'italic'],
            ["transform", "translateX", '-413px'],
            ["style", "height", '58px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["transform", "translateY", '-472px'],
            ["style", "width", '114px']
         ],
         "${_type_text}": [
            ["style", "top", '292px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "height", '23px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '511px'],
            ["style", "font-size", '17px']
         ],
         "${_restart}": [
            ["style", "display", 'none']
         ],
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_q9b_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '440px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_buttons}": [
            ["style", "top", '532px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '0px'],
            ["style", "clip", [28,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '560px'],
            ["style", "width", '670px']
         ],
         "${_sabbath_bar}": [
            ["style", "top", '532px'],
            ["style", "opacity", '1']
         ],
         "${_TextCopy}": [
            ["style", "top", '85px'],
            ["style", "height", '102px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '26px']
         ],
         "${_Text8}": [
            ["style", "top", '285px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '79px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '108px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 19999,
         autoPlay: true,
         labels: {
            "7bq2": 15750,
            "q9b_skip_check": 17637,
            "q9b_go": 17750
         },
         timeline: [
            { id: "eid290", tween: [ "style", "${_NextButtonCopy}", "display", 'none', { fromValue: 'block'}], position: 10288, duration: 0, easing: "easeInQuad" },
            { id: "eid94", tween: [ "style", "${_Question2}", "left", '81.4px', { fromValue: '559.4px'}], position: 15250, duration: 1500, easing: "easeOutQuad" },
            { id: "eid109", tween: [ "style", "${_Question2}", "left", '-297.6px', { fromValue: '81.4px'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid3", tween: [ "style", "${_Question2}", "left", '-395.6px', { fromValue: '-297.6px'}], position: 19000, duration: 500 },
            { id: "eid7", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 602, easing: "easeOutQuad" },
            { id: "eid11", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 18244, duration: 506, easing: "easeInQuad" },
            { id: "eid309", tween: [ "transform", "${_NextButton}", "scaleY", '0.74', { fromValue: '0.74'}], position: 17500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_NextButtonCopy}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1250, easing: "easeOutQuad" },
            { id: "eid46", tween: [ "style", "${_NextButtonCopy}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 750, easing: "easeOutQuad" },
            { id: "eid347", tween: [ "style", "${_question07} > form:nth-child(1) > textarea:nth-child(1)", "opacity", '0', { fromValue: '1'}], position: 18244, duration: 756, easing: "easeInQuad" },
            { id: "eid333", tween: [ "style", "${_q9b_skip_arrow}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid336", tween: [ "style", "${_q9b_skip_arrow}", "display", 'none', { fromValue: 'block'}], position: 17587, duration: 0 },
            { id: "eid307", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(45,105,179,1.00)'}], position: 19169, duration: 830 },
            { id: "eid93", tween: [ "style", "${_Question2}", "opacity", '1', { fromValue: '0'}], position: 15750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid113", tween: [ "style", "${_Question2}", "opacity", '0', { fromValue: '1'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid296", tween: [ "style", "${_NextButton}", "left", '450.85px', { fromValue: '711px'}], position: 16500, duration: 1000, easing: "easeInQuad" },
            { id: "eid297", tween: [ "style", "${_NextButton}", "left", '528.12px', { fromValue: '450.85px'}], position: 17500, duration: 137, easing: "easeInQuad" },
            { id: "eid328", tween: [ "style", "${_NextButton}", "left", '45px', { fromValue: '528.12px'}], position: 17637, duration: 1113 },
            { id: "eid314", tween: [ "style", "${_question07}", "display", 'block', { fromValue: 'none'}], position: 15750, duration: 0 },
            { id: "eid348", tween: [ "style", "${_question07}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0 },
            { id: "eid352", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 16750, duration: 750 },
            { id: "eid353", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 17750, duration: 250 },
            { id: "eid337", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0.25'}], position: 18000, duration: 750 },
            { id: "eid316", tween: [ "style", "${_question07} > form:nth-child(1) > input:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 500 },
            { id: "eid44", tween: [ "transform", "${_NextButtonCopy}", "scaleX", '0.75', { fromValue: '1'}], position: 7250, duration: 750, easing: "easeOutQuad" },
            { id: "eid97", tween: [ "transform", "${_Question2}", "scaleY", '0.87', { fromValue: '0.4'}], position: 15750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "transform", "${_Question2}", "scaleY", '0.4', { fromValue: '0.87'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid13", tween: [ "style", "${_Text}", "font-size", '18px', { fromValue: '18px'}], position: 17637, duration: 0, easing: "easeInQuad" },
            { id: "eid341", tween: [ "transform", "${_question07} > form:nth-child(1) > input:nth-child(2)", "translateY", '233px', { fromValue: '163px'}], position: 18500, duration: 500 },
            { id: "eid47", tween: [ "style", "${_Text8}", "top", '338px', { fromValue: '285px'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid217", tween: [ "style", "${_Text8}", "top", '338px', { fromValue: '338px'}], position: 10066, duration: 0, easing: "easeInQuad" },
            { id: "eid219", tween: [ "style", "${_Text8}", "top", '613.99px', { fromValue: '338px'}], position: 10156, duration: 0, easing: "easeInQuad" },
            { id: "eid325", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 17637, duration: 0 },
            { id: "eid326", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 17687, duration: 0 },
            { id: "eid49", tween: [ "transform", "${_Text8}", "scaleY", '0.8', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid346", tween: [ "transform", "${_question07} > form:nth-child(1) > textarea:nth-child(1)", "translateY", '156px', { fromValue: '74px'}], position: 18244, duration: 756, easing: "easeInQuad" },
            { id: "eid350", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '532px'}], position: 95, duration: 905 },
            { id: "eid8", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 16500, duration: 0, easing: "easeOutQuad" },
            { id: "eid12", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 18750, duration: 0, easing: "easeInQuad" },
            { id: "eid5", tween: [ "style", "${_type_text}", "left", '121px', { fromValue: '511px'}], position: 16500, duration: 602, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "style", "${_type_text}", "left", '-56px', { fromValue: '121px'}], position: 18244, duration: 506, easing: "easeInQuad" },
            { id: "eid15", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'none'}], position: 940, duration: 0 },
            { id: "eid16", tween: [ "style", "${_restart}", "display", 'none', { fromValue: 'block'}], position: 18244, duration: 0 },
            { id: "eid95", tween: [ "style", "${_Question2}", "top", '70.15px', { fromValue: '92.18px'}], position: 15250, duration: 1500, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "style", "${_Question2}", "top", '154.18px', { fromValue: '70.15px'}], position: 18000, duration: 1500, easing: "easeInQuad" },
            { id: "eid31", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid340", tween: [ "style", "${_sabbath_bar}", "opacity", '0.61206896551724', { fromValue: '1'}], position: 18500, duration: 500 },
            { id: "eid330", tween: [ "style", "${_NextButton}", "width", '74.572094066723px', { fromValue: '74.572094066723px'}], position: 17637, duration: 0 },
            { id: "eid10", tween: [ "style", "${_type_text}", "top", '326px', { fromValue: '292px'}], position: 18244, duration: 506, easing: "easeInQuad" },
            { id: "eid351", tween: [ "style", "${_sabbath_bar}", "top", '460px', { fromValue: '532px'}], position: 95, duration: 905 },
            { id: "eid339", tween: [ "style", "${_sabbath_bar}", "top", '539px', { fromValue: '460px'}], position: 18500, duration: 500 },
            { id: "eid311", tween: [ "style", "${_NextButton}", "opacity", '0', { fromValue: '0'}], position: 17000, duration: 0 },
            { id: "eid312", tween: [ "style", "${_NextButton}", "opacity", '0', { fromValue: '0'}], position: 17500, duration: 0 },
            { id: "eid313", tween: [ "style", "${_NextButton}", "opacity", '0', { fromValue: '0'}], position: 18244, duration: 0 },
            { id: "eid310", tween: [ "style", "${_NextButton}", "opacity", '0', { fromValue: '0'}], position: 18750, duration: 0 },
            { id: "eid334", tween: [ "style", "${_q9b_submit_button}", "display", 'block', { fromValue: 'none'}], position: 17500, duration: 0 },
            { id: "eid335", tween: [ "style", "${_q9b_submit_button}", "display", 'none', { fromValue: 'block'}], position: 17687, duration: 0 },
            { id: "eid216", tween: [ "style", "${_Text8}", "left", '108px', { fromValue: '108px'}], position: 10066, duration: 0, easing: "easeInQuad" },
            { id: "eid218", tween: [ "style", "${_Text8}", "left", '108px', { fromValue: '108px'}], position: 10156, duration: 0, easing: "easeInQuad" },
            { id: "eid14", tween: [ "style", "${_Text}", "top", '440px', { fromValue: '440px'}], position: 17637, duration: 0, easing: "easeInQuad" },
            { id: "eid345", tween: [ "transform", "${_question07} > form:nth-child(1) > textarea:nth-child(1)", "translateX", '-276px', { fromValue: '119px'}], position: 18244, duration: 756, easing: "easeInQuad" },
            { id: "eid327", tween: [ "style", "${_NextButton}", "display", 'block', { fromValue: 'none'}], position: 17637, duration: 0 },
            { id: "eid322", tween: [ "transform", "${_question07}", "translateY", '245px', { fromValue: '239px'}], position: 16500, duration: 602, easing: "easeOutQuad" },
            { id: "eid43", tween: [ "style", "${_NextButtonCopy}", "top", '420px', { fromValue: '391px'}], position: 7250, duration: 750, easing: "easeOutQuad" },
            { id: "eid320", tween: [ "transform", "${_question07}", "translateX", '0px', { fromValue: '419px'}], position: 16500, duration: 602, easing: "easeOutQuad" },
            { id: "eid308", tween: [ "transform", "${_NextButton}", "scaleX", '0.74', { fromValue: '0.74'}], position: 17500, duration: 0 },
            { id: "eid48", tween: [ "transform", "${_Text8}", "scaleX", '0.8', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid27", tween: [ "style", "${_Text7}", "top", '190px', { fromValue: '64px'}], position: 2000, duration: 1540, easing: "easeOutQuad" },
            { id: "eid52", tween: [ "style", "${_Text7}", "top", '245px', { fromValue: '190px'}], position: 7750, duration: 750, easing: "easeOutQuad" },
            { id: "eid214", tween: [ "style", "${_Text7}", "top", '245px', { fromValue: '245px'}], position: 10066, duration: 0, easing: "easeInQuad" },
            { id: "eid215", tween: [ "style", "${_Text7}", "top", '-63px', { fromValue: '245px'}], position: 10156, duration: 0, easing: "easeInQuad" },
            { id: "eid96", tween: [ "transform", "${_Question2}", "scaleX", '0.87', { fromValue: '0.4'}], position: 15750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid111", tween: [ "transform", "${_Question2}", "scaleX", '0.4', { fromValue: '0.87'}], position: 18000, duration: 1000, easing: "easeInQuad" },
            { id: "eid1", tween: [ "style", "${_sb17}", "display", 'block', { fromValue: 'none'}], position: 17391, duration: 0 },
            { id: "eid2", tween: [ "style", "${_sb17}", "display", 'none', { fromValue: 'block'}], position: 17750, duration: 0 },
            { id: "eid45", tween: [ "transform", "${_NextButtonCopy}", "scaleY", '0.75', { fromValue: '1'}], position: 7250, duration: 750, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1540, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '1'}], position: 8500, duration: 0, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 750, easing: "easeInQuad" },
            { id: "eid298", tween: [ "style", "${_NextButton}", "top", '491.07px', { fromValue: '473px'}], position: 16500, duration: 1000, easing: "easeInQuad" },
            { id: "eid329", tween: [ "style", "${_NextButton}", "top", '491.07px', { fromValue: '491.07px'}], position: 17637, duration: 0 },
            { id: "eid324", tween: [ "style", "${_question07}", "opacity", '1', { fromValue: '0'}], position: 16500, duration: 602, easing: "easeOutQuad" }         ]
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
