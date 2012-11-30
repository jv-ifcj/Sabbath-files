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
            rect:['76px','86px','518px','194px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbody',
               type:'text',
               rect:['8px','33px','495px','72px','auto','auto'],
               text:"Read Exodus 16:1-30, then answer the following questions.",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbar',
               type:'rect',
               rect:['45px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 30px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['1.207']]
            }]
         },
         {
            id:'question31',
            display:'none',
            type:'rect',
            rect:['76px','63px','518px','194px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy',
               type:'text',
               rect:['8px','48px','495px','72px','auto','auto'],
               text:"How did God provide for the Israelites, assuring them a Sabbath rest even as they wandered in the desert?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbarCopy',
               type:'rect',
               rect:['45px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 36px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['1.207']]
            },
            {
               id:'header',
               type:'text',
               rect:['16px','6px','433px','31px','auto','auto'],
               text:"Reflection Question",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'question32',
            display:'none',
            type:'rect',
            rect:['76px','102px','518px','161px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy2',
               type:'text',
               rect:['8px','48px','495px','72px','auto','auto'],
               text:"What did this provision require of the Israelites—both physically and spiritually?",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(0,0,0,1.00)","normal","none","normal"]
            },
            {
               id:'topbarCopy2',
               type:'rect',
               rect:['45px','0px','429px','183px','auto','auto'],
               clip:['rect(0px 429px 36px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"],
               transform:[[],[],[],['1.207']]
            },
            {
               id:'headerCopy',
               type:'text',
               rect:['16px','6px','433px','31px','auto','auto'],
               text:"Reflection Question",
               align:"left",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',22,"rgba(255,255,255,1.00)","normal","none","italic"]
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
            id:'buttons_sans',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'next_play',
            type:'ellipse',
            rect:['540px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q32_submit_button',
            display:'none',
            type:'rect',
            rect:['221px','503px','228px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q31_submit_button',
            display:'none',
            type:'rect',
            rect:['222px','503px','226px','44px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q31_skip_button',
            display:'none',
            type:'ellipse',
            rect:['538px','494px','51px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q31_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['538px','494px','51px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q32_skip_button',
            display:'none',
            type:'ellipse',
            rect:['538px','494px','51px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q32_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['538px','494px','51px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skiptext',
            display:'none',
            type:'text',
            rect:['7px','446px','653px','31px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['531px','298px','427px','23px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'bb1',
            display:'none',
            type:'ellipse',
            rect:['84px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'bb2',
            display:'none',
            type:'ellipse',
            rect:['82px','496px','48px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'biblebox',
            display:'none',
            type:'rect',
            rect:['30','33px','auto','auto','auto','auto']
         },
         {
            id:'restart',
            type:'rect',
            rect:['17','510','auto','auto','auto','auto'],
            opacity:1
         }],
         symbolInstances: [
         {
            id:'biblebox',
            symbolName:'biblebox'
         },
         {
            id:'restart',
            symbolName:'restart'
         }
         ]
      },
   states: {
      "Base State": {
         "${_question31}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '578px'],
            ["style", "width", '518px'],
            ["style", "top", '63px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '194px'],
            ["style", "display", 'none']
         ],
         "${_headerCopy}": [
            ["style", "top", '6px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px']
         ],
         "${_q31_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '578px'],
            ["style", "width", '518px'],
            ["style", "top", '86px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '194px'],
            ["style", "display", 'none']
         ],
         "${_topbarCopy}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1.20746'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,429,36,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '44.5px']
         ],
         "${_next_play}": [
            ["style", "top", '495px'],
            ["style", "height", '51px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_bb2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_type_text}": [
            ["style", "top", '298px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '23px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '539px'],
            ["style", "font-size", '17px']
         ],
         "${_questionbodyCopy}": [
            ["style", "top", '48px'],
            ["style", "width", '495px'],
            ["style", "height", '72px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '8px'],
            ["style", "font-size", '20px']
         ],
         "${_skiptext}": [
            ["style", "top", '446px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_buttons_sans}": [
            ["style", "opacity", '0.25']
         ],
         "${_bb1}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionbody}": [
            ["style", "top", '33px'],
            ["style", "font-size", '20px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '495px']
         ],
         "${_question32}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '578px'],
            ["style", "width", '518px'],
            ["style", "top", '102px'],
            ["transform", "scaleY", '0.72'],
            ["style", "height", '161px'],
            ["style", "display", 'none']
         ],
         "${_q31_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q32_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionbodyCopy2}": [
            ["style", "top", '48px'],
            ["style", "font-size", '20px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '72px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '8px'],
            ["style", "width", '495px']
         ],
         "${_buttons}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_q32_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q32_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q31_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_topbar}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1.20746'],
            ["style", "clip", [0,429,30,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '44.5px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_header}": [
            ["style", "top", '6px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "left", '16px'],
            ["style", "font-size", '22px']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "bottom", '0px']
         ],
         "${_biblebox}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_question32_div}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '460px'],
            ["transform", "translateY", '0px']
         ],
         "${_question31_div}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '443px']
         ],
         "${_topbarCopy2}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1.20746'],
            ["style", "left", '44.5px'],
            ["style", "clip", [0,429,36,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11000,
         autoPlay: false,
         labels: {
            "q31_begin": 3500,
            "q31_skip_check": 5125,
            "q31_go": 5250,
            "q32_begin": 7500,
            "q32_skip_check": 9141,
            "q32_go": 9250
         },
         timeline: [
            { id: "eid185", tween: [ "style", "${_question31_div}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid187", tween: [ "style", "${_question31_div}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeInQuad" },
            { id: "eid191", tween: [ "style", "${_question32_div}", "opacity", '1', { fromValue: '0'}], position: 8250, duration: 750, easing: "easeOutQuad" },
            { id: "eid243", tween: [ "style", "${_question32_div}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid221", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid226", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeInQuad" },
            { id: "eid234", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 8250, duration: 750, easing: "easeOutQuad" },
            { id: "eid239", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid23", tween: [ "style", "${_question}", "left", '76px', { fromValue: '578px'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid104", tween: [ "style", "${_question}", "left", '-394px', { fromValue: '76px'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid183", tween: [ "transform", "${_question31_div}", "translateX", '0px', { fromValue: '443px'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid186", tween: [ "transform", "${_question31_div}", "translateX", '-437px', { fromValue: '0px'}], position: 5500, duration: 500, easing: "easeInQuad" },
            { id: "eid111", tween: [ "transform", "${_question31}", "scaleX", '1', { fromValue: '0.72'}], position: 3500, duration: 750, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "transform", "${_question31}", "scaleX", '0.7', { fromValue: '1'}], position: 5750, duration: 750, easing: "easeInQuad" },
            { id: "eid181", tween: [ "style", "${_question31_div}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid188", tween: [ "style", "${_question31_div}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid166", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "eid21", tween: [ "style", "${_biblebox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid31", tween: [ "style", "${_biblebox}", "display", 'block', { fromValue: 'none'}], position: 955, duration: 0, easing: "easeOutQuad" },
            { id: "eid103", tween: [ "style", "${_biblebox}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "easeInQuad" },
            { id: "eid119", tween: [ "style", "${_biblebox}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0, easing: "easeInQuad" },
            { id: "eid136", tween: [ "style", "${_biblebox}", "display", 'none', { fromValue: 'block'}], position: 5750, duration: 0, easing: "easeInQuad" },
            { id: "eid153", tween: [ "style", "${_biblebox}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0, easing: "easeInQuad" },
            { id: "eid154", tween: [ "style", "${_biblebox}", "display", 'none', { fromValue: 'block'}], position: 9750, duration: 0, easing: "easeInQuad" },
            { id: "eid244", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid203", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
            { id: "eid204", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 5250, duration: 500 },
            { id: "eid205", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.250000'}], position: 8500, duration: 500 },
            { id: "eid206", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 500 },
            { id: "eid319", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
            { id: "eid209", tween: [ "style", "${_q31_submit_button}", "display", 'block', { fromValue: 'none'}], position: 4945, duration: 0 },
            { id: "eid210", tween: [ "style", "${_q31_submit_button}", "display", 'none', { fromValue: 'block'}], position: 5170, duration: 0 },
            { id: "eid109", tween: [ "transform", "${_question31}", "scaleY", '1', { fromValue: '0.72'}], position: 3500, duration: 750, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "transform", "${_question31}", "scaleY", '0.7', { fromValue: '1'}], position: 5750, duration: 750, easing: "easeInQuad" },
            { id: "eid220", tween: [ "style", "${_type_text}", "left", '119px', { fromValue: '539px'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid225", tween: [ "style", "${_type_text}", "left", '-271px', { fromValue: '119px'}], position: 5500, duration: 500, easing: "easeInQuad" },
            { id: "eid233", tween: [ "style", "${_type_text}", "left", '119px', { fromValue: '552px'}], position: 8250, duration: 750, easing: "easeOutQuad" },
            { id: "eid238", tween: [ "style", "${_type_text}", "left", '-325px', { fromValue: '119px'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid172", tween: [ "style", "${_q31_skip_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid173", tween: [ "style", "${_q31_skip_button}", "display", 'block', { fromValue: 'none'}], position: 4945, duration: 0 },
            { id: "eid174", tween: [ "style", "${_q31_skip_button}", "display", 'none', { fromValue: 'block'}], position: 5035, duration: 0 },
            { id: "eid193", tween: [ "transform", "${_question32_div}", "translateX", '0px', { fromValue: '460px'}], position: 8250, duration: 750, easing: "easeOutQuad" },
            { id: "eid197", tween: [ "transform", "${_question32_div}", "translateX", '-460px', { fromValue: '0px'}], position: 9500, duration: 750, easing: "easeInQuad" },
            { id: "eid170", tween: [ "style", "${_q32_skip_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_q32_skip_button}", "display", 'block', { fromValue: 'none'}], position: 8951, duration: 0 },
            { id: "eid178", tween: [ "style", "${_q32_skip_button}", "display", 'none', { fromValue: 'block'}], position: 9053, duration: 0 },
            { id: "eid29", tween: [ "style", "${_question}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid107", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid25", tween: [ "transform", "${_question}", "scaleX", '1', { fromValue: '0.72'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid105", tween: [ "transform", "${_question}", "scaleX", '0.7', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid213", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid227", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "easeInQuad" },
            { id: "eid228", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 8250, duration: 0, easing: "easeInQuad" },
            { id: "eid240", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 10250, duration: 0, easing: "easeInQuad" },
            { id: "eid200", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0.25'}], position: 0, duration: 0 },
            { id: "eid201", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 1000, duration: 500 },
            { id: "eid202", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 1500, duration: 500 },
            { id: "eid245", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '0.25'}], position: 5000, duration: 0 },
            { id: "eid207", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0'}], position: 9088, duration: 0 },
            { id: "eid208", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 9203, duration: 0 },
            { id: "eid211", tween: [ "style", "${_q32_submit_button}", "display", 'block', { fromValue: 'none'}], position: 8951, duration: 0 },
            { id: "eid212", tween: [ "style", "${_q32_submit_button}", "display", 'none', { fromValue: 'block'}], position: 9203, duration: 0 },
            { id: "eid222", tween: [ "style", "${_type_text}", "top", '298px', { fromValue: '298px'}], position: 4250, duration: 0, easing: "easeOutQuad" },
            { id: "eid230", tween: [ "style", "${_type_text}", "top", '298px', { fromValue: '298px'}], position: 8250, duration: 0, easing: "easeInQuad" },
            { id: "eid236", tween: [ "style", "${_type_text}", "top", '298px', { fromValue: '298px'}], position: 9500, duration: 0, easing: "easeInQuad" },
            { id: "eid171", tween: [ "style", "${_q31_skip_go_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid175", tween: [ "style", "${_q31_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 5085, duration: 0 },
            { id: "eid176", tween: [ "style", "${_q31_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 5170, duration: 0 },
            { id: "eid30", tween: [ "style", "${_question}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutQuad" },
            { id: "eid108", tween: [ "style", "${_question}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid102", tween: [ "style", "${_biblebox}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 750, easing: "easeInQuad" },
            { id: "eid134", tween: [ "style", "${_biblebox}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 0, easing: "easeOutQuad" },
            { id: "eid135", tween: [ "style", "${_biblebox}", "opacity", '0', { fromValue: '1'}], position: 5250, duration: 500, easing: "easeInQuad" },
            { id: "eid155", tween: [ "style", "${_biblebox}", "opacity", '1', { fromValue: '0'}], position: 8250, duration: 0, easing: "easeOutQuad" },
            { id: "eid156", tween: [ "style", "${_biblebox}", "opacity", '0', { fromValue: '1'}], position: 9250, duration: 500, easing: "easeInQuad" },
            { id: "eid317", tween: [ "style", "${_bb1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid318", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
            { id: "eid27", tween: [ "transform", "${_question}", "scaleY", '1', { fromValue: '0.72'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid106", tween: [ "transform", "${_question}", "scaleY", '0.7', { fromValue: '1'}], position: 2250, duration: 750, easing: "easeInQuad" },
            { id: "eid159", tween: [ "style", "${_skiptext}", "display", 'block', { fromValue: 'none'}], position: 5125, duration: 0, easing: "easeInQuad" },
            { id: "eid161", tween: [ "style", "${_skiptext}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
            { id: "eid162", tween: [ "style", "${_skiptext}", "display", 'block', { fromValue: 'none'}], position: 9088, duration: 0 },
            { id: "eid165", tween: [ "style", "${_skiptext}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0 },
            { id: "eid160", tween: [ "style", "${_skiptext}", "opacity", '0', { fromValue: '1'}], position: 5125, duration: 125 },
            { id: "eid163", tween: [ "style", "${_skiptext}", "opacity", '1', { fromValue: '0'}], position: 9088, duration: 0 },
            { id: "eid164", tween: [ "style", "${_skiptext}", "opacity", '0', { fromValue: '1'}], position: 9141, duration: 109 },
            { id: "eid115", tween: [ "style", "${_question31}", "left", '76px', { fromValue: '578px'}], position: 3500, duration: 750, easing: "easeOutQuad" },
            { id: "eid116", tween: [ "style", "${_question31}", "left", '-394px', { fromValue: '76px'}], position: 5750, duration: 750, easing: "easeInQuad" },
            { id: "eid145", tween: [ "style", "${_question32}", "left", '76px', { fromValue: '578px'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid146", tween: [ "style", "${_question32}", "left", '-394px', { fromValue: '76px'}], position: 9750, duration: 750, easing: "easeInQuad" },
            { id: "eid143", tween: [ "style", "${_question32}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid144", tween: [ "style", "${_question32}", "opacity", '0', { fromValue: '1'}], position: 9750, duration: 750, easing: "easeInQuad" },
            { id: "eid117", tween: [ "style", "${_question31}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeOutQuad" },
            { id: "eid118", tween: [ "style", "${_question31}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0, easing: "easeInQuad" },
            { id: "eid139", tween: [ "transform", "${_question32}", "scaleY", '1', { fromValue: '0.72'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid140", tween: [ "transform", "${_question32}", "scaleY", '0.7', { fromValue: '1'}], position: 9750, duration: 750, easing: "easeInQuad" },
            { id: "eid113", tween: [ "style", "${_question31}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750, easing: "easeOutQuad" },
            { id: "eid114", tween: [ "style", "${_question31}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750, easing: "easeInQuad" },
            { id: "eid169", tween: [ "style", "${_q32_skip_go_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_q32_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 9088, duration: 0 },
            { id: "eid180", tween: [ "style", "${_q32_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 9203, duration: 0 },
            { id: "eid189", tween: [ "style", "${_question32_div}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid199", tween: [ "style", "${_question32_div}", "display", 'none', { fromValue: 'block'}], position: 10250, duration: 0, easing: "easeInQuad" },
            { id: "eid141", tween: [ "transform", "${_question32}", "scaleX", '1', { fromValue: '0.72'}], position: 7500, duration: 750, easing: "easeOutQuad" },
            { id: "eid142", tween: [ "transform", "${_question32}", "scaleX", '0.7', { fromValue: '1'}], position: 9750, duration: 750, easing: "easeInQuad" },
            { id: "eid147", tween: [ "style", "${_question32}", "display", 'block', { fromValue: 'none'}], position: 7500, duration: 0, easing: "easeOutQuad" },
            { id: "eid148", tween: [ "style", "${_question32}", "display", 'none', { fromValue: 'block'}], position: 10500, duration: 0, easing: "easeInQuad" },
            { id: "eid32", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_biblebox}', ['bible_zero'] ], ""], position: 1000 },
            { id: "eid101", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_biblebox}', [] ], ""], position: 1500 },
            { id: "eid137", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_biblebox}', ['bible_zero'] ], ""], position: 4250 },
            { id: "eid138", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_biblebox}', [] ], ""], position: 5125 },
            { id: "eid167", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_biblebox}', [] ], ""], position: 5170 },
            { id: "eid168", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_biblebox}', [] ], ""], position: 5250 },
            { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_biblebox}', ['bible_zero'] ], ""], position: 8250 },
            { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_biblebox}', [] ], ""], position: 9250 }         ]
      }
   }
},
"biblebox": {
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
      font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      align: 'center',
      id: 'read_button',
      text: '(Click here to read the verses)',
      cursor: ['pointer'],
      rect: ['124px','178px','345px','38px','auto','auto']
   },
   {
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','603px','487px','auto','auto'],
      display: 'none',
      boxShadow: ['',10,10,32,10,'rgba(0,0,0,0.65)'],
      fill: ['rgba(150,118,194,1)'],
      c: [
      {
         type: 'rect',
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRectCopy',
         opacity: 1,
         rect: ['0px','0px','603px','487px','auto','auto'],
         boxShadow: ['',10,10,32,10,'rgba(0,0,0,0.65)'],
         transform: {},
         display: 'none',
         stroke: [0,'rgb(0, 0, 0)','none'],
         clip: ['rect(0px 603px 32px 0px)'],
         fill: ['rgba(150,118,194,1)'],
         c: [
         {
            font: ['Trebuchet MS, Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
            type: 'text',
            id: 'Exodus_header',
            text: 'Exodus 16:1-30',
            align: 'center',
            rect: ['108px','4px','388px','28px','auto','auto']
         },
         {
            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none','normal'],
            type: 'text',
            align: 'center',
            id: 'close',
            text: 'X',
            cursor: ['pointer'],
            rect: ['566px','1px','34px','28px','auto','auto']
         }]
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         align: 'right',
         id: 'next',
         text: 'Next &gt;&gt;',
         cursor: ['pointer'],
         rect: ['431px','444px','153px','28px','auto','auto']
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         rect: ['281px','444px','310px','36px','auto','auto'],
         align: 'right',
         display: 'none',
         id: 'done_button',
         text: 'Click here when finished reading.',
         cursor: ['pointer'],
         type: 'text'
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         rect: ['21px','444px','153px','28px','auto','auto'],
         align: 'left',
         display: 'none',
         id: 'previous',
         text: '&lt;&lt;Previous',
         cursor: ['pointer'],
         type: 'text'
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Exodus_part1',
         text: 'The whole Israelite community set out from Elim and came to the Desert of Sin, which is between Elim and Sinai, on the fifteenth day of the second month after they had come out of Egypt. <sup>2</sup>In the desert the whole community grumbled against Moses and Aaron. <sup>3</sup>The Israelites said to them, “If only we had died by the L<small>ORD</small>’s hand in Egypt! There we sat around pots of meat and ate all the food we wanted, but you have brought us out into this desert to starve this entire assembly to death.”<br><sup>4</sup>Then the L<small>ORD</small> said to Moses, “I will rain down bread from heaven for you. The people are to go out each day and gather enough for that day. In this way I will test them and see whether they will follow my instructions. <sup>5</sup>On the sixth day they are to prepare what they bring in, and that is to be twice as much as they gather on the other days.”',
         align: 'left',
         rect: ['17px','47px','573px','366px','auto','auto']
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         align: 'left',
         id: 'Exodus_part2',
         text: '<sup>6</sup>So Moses and Aaron said to all the Israelites, “In the evening you will know that it was the L<small>ORD</small> who brought you out of Egypt, <sup>7</sup>and in the morning you will see the glory of the L<small>ORD</small>, because he has heard your grumbling against him. Who are we, that you should grumble against us?” <sup>8</sup>Moses also said, “You will know that it was the L<small>ORD</small> when he gives you meat to eat in the evening and all the bread you want in the morning, because he has heard your grumbling against him. Who are we? You are not grumbling against us, but against the L<small>ORD</small>.”<br><sup>9</sup>Then Moses told Aaron, “Say to the entire Israelite community, ‘Come before the L<small>ORD</small>, for he has heard your grumbling.’”<br><sup>10</sup>While Aaron was speaking to the whole Israelite community, they looked toward the desert, and there was the glory of the L<small>ORD</small> appearing in the cloud.',
         display: 'none',
         rect: ['17px','31px','573px','366px','auto','auto']
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         align: 'left',
         id: 'Exodus_part3',
         text: '<sup>11</sup>The L<small>ORD</small> said to Moses, <sup>12</sup>“I have heard the grumbling of the Israelites. Tell them, ‘At twilight you will eat meat, and in the morning you will be filled with bread. Then you will know that I am the L<small>ORD</small> your God.’”<br><sup>13</sup>That evening quail came and covered the camp, and in the morning there was a layer of dew around the camp. <sup>14</sup>When the dew was gone, thin flakes like frost on the ground appeared on the desert floor. <sup>15</sup>When the Israelites saw it, they said to each other, “What is it?” For they did not know what it was.<br>Moses said to them, “It is the bread the L<small>ORD</small> has given you to eat. <sup>16</sup>This is what the L<small>ORD</small> has commanded: ‘Everyone is to gather as much as they need. Take an omer for each person you have in your tent.’”',
         display: 'none',
         rect: ['17px','47px','573px','366px','auto','auto']
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         align: 'left',
         id: 'Exodus_part4',
         text: '<sup>17</sup>The Israelites did as they were told; some gathered much, some little. <sup>18</sup>And when they measured it by the omer, the one who gathered much did not have too much, and the one who gathered little did not have too little. Everyone had gathered just as much as they needed.<br><sup>19</sup>Then Moses said to them, “No one is to keep any of it until morning.”<br><sup>20</sup>However, some of them paid no attention to Moses; they kept part of it until morning, but it was full of maggots and began to smell. So Moses was angry with them.<br><sup>21</sup>Each morning everyone gathered as much as they needed, and when the sun grew hot, it melted away. <sup>22</sup>On the sixth day, they gathered twice as much &mdash; two omers for each person &mdash; and the leaders of the community came and reported this to Moses.',
         display: 'none',
         rect: ['17px','30px','573px','366px','auto','auto']
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         align: 'left',
         id: 'Exodus_part5',
         text: '<sup>23</sup>He said to them, “This is what the L<small>ORD</small> commanded: ‘Tomorrow is to be a day of sabbath rest, a holy sabbath to the L<small>ORD</small>. So bake what you want to bake and boil what you want to boil. Save whatever is left and keep it until morning.’”<br><sup>24</sup>So they saved it until morning, as Moses commanded, and it did not stink or get maggots in it. <sup>25</sup>“Eat it today,” Moses said, “because today is a sabbath to the L<small>ORD</small>. You will not find any of it on the ground today. <sup>26</sup>Six days you are to gather it, but on the seventh day, the Sabbath, there will not be any.”<br><sup>27</sup>Nevertheless, some of the people went out on the seventh day to gather it, but they found none. <sup>28</sup>Then the L<small>ORD</small> said to Moses, “How long will you refuse to keep my commands and my instructions? ',
         display: 'none',
         rect: ['17px','47px','573px','366px','auto','auto']
      },
      {
         font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         align: 'left',
         id: 'Exodus_part6',
         text: '<sup>29</sup>\"Bear in mind that the L<small>ORD</small> has given you the Sabbath; that is why on the sixth day he gives you bread for two days. Everyone is to stay where they are on the seventh day; no one is to go out.” <sup>30</sup>So the people rested on the seventh day.',
         display: 'none',
         rect: ['17px','47px','573px','366px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Exodus_part6}": [
            ["transform", "scaleX", '0.52'],
            ["style", "opacity", '0'],
            ["style", "left", '317px'],
            ["style", "width", '573px'],
            ["style", "top", '47px'],
            ["style", "text-align", 'left'],
            ["style", "height", '366px'],
            ["style", "font-size", '20px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.52']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["subproperty", "boxShadow.blur", '32px'],
            ["transform", "scaleX", '0.17'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "height", '487px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.offsetV", '10px'],
            ["transform", "scaleY", '0.17'],
            ["style", "overflow", 'hidden'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.spread", '10px'],
            ["subproperty", "boxShadow.offsetH", '10px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)']
         ],
         "${_Exodus_part4}": [
            ["transform", "scaleX", '0.52'],
            ["style", "opacity", '0'],
            ["style", "left", '307px'],
            ["style", "width", '573px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'left'],
            ["style", "height", '366px'],
            ["style", "font-size", '20px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.52']
         ],
         "${_Exodus_header}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "height", '28px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '108px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_Exodus_part5}": [
            ["transform", "scaleX", '0.52'],
            ["style", "opacity", '0'],
            ["style", "left", '307px'],
            ["style", "font-size", '20px'],
            ["style", "top", '47px'],
            ["style", "text-align", 'left'],
            ["style", "height", '366px'],
            ["style", "width", '573px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.52']
         ],
         "${_close}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '1px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '566px']
         ],
         "${_Exodus_part2}": [
            ["transform", "scaleX", '0.52'],
            ["style", "opacity", '0'],
            ["style", "left", '207px'],
            ["style", "width", '573px'],
            ["style", "top", '31px'],
            ["style", "text-align", 'left'],
            ["style", "height", '366px'],
            ["style", "font-size", '20px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.52']
         ],
         "${_previous}": [
            ["style", "display", 'none'],
            ["style", "left", '21px'],
            ["style", "cursor", 'pointer'],
            ["style", "text-align", 'left']
         ],
         "${_done_button}": [
            ["style", "top", '444px'],
            ["style", "left", '281px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '310px']
         ],
         "${_Exodus_part1}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '17px'],
            ["style", "font-size", '20px'],
            ["style", "top", '47px'],
            ["style", "text-align", 'left'],
            ["style", "height", '366px'],
            ["style", "width", '573px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '254px'],
            ["style", "width", '603px']
         ],
         "${_Exodus_part3}": [
            ["transform", "scaleX", '0.52'],
            ["style", "opacity", '0'],
            ["style", "left", '257px'],
            ["style", "font-size", '20px'],
            ["style", "top", '47px'],
            ["style", "text-align", 'left'],
            ["style", "height", '366px'],
            ["style", "width", '573px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.52']
         ],
         "${_next}": [
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "text-align", 'right']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.blur", '32px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "clip", [0,603,32,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.spread", '10px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'hidden'],
            ["style", "display", 'none'],
            ["subproperty", "boxShadow.offsetV", '10px'],
            ["subproperty", "boxShadow.offsetH", '10px'],
            ["style", "height", '487px']
         ],
         "${_read_button}": [
            ["style", "top", '178px'],
            ["style", "display", 'block'],
            ["style", "left", '124px'],
            ["style", "height", '38px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8000,
         autoPlay: false,
         labels: {
            "bible_zero": 0,
            "base": 1000,
            "page1": 2000,
            "page2": 3000,
            "page3": 4000,
            "page4": 5000,
            "page5": 6000,
            "page6": 7000,
            "closed": 8000
         },
         timeline: [
            { id: "eid2", tween: [ "style", "${_Exodus_part3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_Exodus_part3}", "display", 'block', { fromValue: 'none'}], position: 3050, duration: 0, easing: "easeOutQuad" },
            { id: "eid43", tween: [ "style", "${_Exodus_part3}", "display", 'none', { fromValue: 'block'}], position: 4954, duration: 0, easing: "easeOutQuad" },
            { id: "eid5", tween: [ "style", "${_Exodus_part6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_Exodus_part6}", "display", 'block', { fromValue: 'none'}], position: 6036, duration: 0, easing: "easeOutQuad" },
            { id: "eid84", tween: [ "style", "${_Exodus_part3}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 750, easing: "easeOutQuad" },
            { id: "eid68", tween: [ "style", "${_Exodus_part3}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid17", tween: [ "color", "${_read_button}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid60", tween: [ "style", "${_Exodus_part1}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 750, easing: "easeInQuad" },
            { id: "eid1", tween: [ "style", "${_Exodus_part2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_Exodus_part2}", "display", 'block', { fromValue: 'none'}], position: 2055, duration: 0, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "style", "${_Exodus_part2}", "display", 'none', { fromValue: 'block'}], position: 3960, duration: 0, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "style", "${_Exodus_part3}", "left", '17px', { fromValue: '257px'}], position: 3250, duration: 750, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_Exodus_part3}", "left", '-142px', { fromValue: '17px'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid3", tween: [ "style", "${_Exodus_part4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "style", "${_Exodus_part4}", "display", 'block', { fromValue: 'none'}], position: 4059, duration: 0, easing: "easeOutQuad" },
            { id: "eid45", tween: [ "style", "${_Exodus_part4}", "display", 'none', { fromValue: 'block'}], position: 5960, duration: 0, easing: "easeOutQuad" },
            { id: "eid13", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 1010, duration: 0, easing: "easeOutQuad" },
            { id: "eid37", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid250", tween: [ "style", "${_RoundRectCopy}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid4", tween: [ "style", "${_Exodus_part5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Exodus_part5}", "display", 'block', { fromValue: 'none'}], position: 5061, duration: 0, easing: "easeOutQuad" },
            { id: "eid47", tween: [ "style", "${_Exodus_part5}", "display", 'none', { fromValue: 'block'}], position: 6976, duration: 0, easing: "easeOutQuad" },
            { id: "eid59", tween: [ "style", "${_Exodus_part1}", "left", '-163px', { fromValue: '17px'}], position: 2000, duration: 750, easing: "easeInQuad" },
            { id: "eid6", tween: [ "style", "${_previous}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid49", tween: [ "style", "${_previous}", "display", 'block', { fromValue: 'none'}], position: 2055, duration: 0, easing: "easeOutQuad" },
            { id: "eid78", tween: [ "transform", "${_Exodus_part2}", "scaleY", '1', { fromValue: '0.52'}], position: 2250, duration: 750, easing: "easeOutQuad" },
            { id: "eid62", tween: [ "transform", "${_Exodus_part2}", "scaleY", '0.52', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeInQuad" },
            { id: "eid86", tween: [ "transform", "${_Exodus_part4}", "scaleY", '1', { fromValue: '0.52'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid70", tween: [ "transform", "${_Exodus_part4}", "scaleY", '0.52', { fromValue: '1'}], position: 5000, duration: 750, easing: "easeInQuad" },
            { id: "eid57", tween: [ "transform", "${_Exodus_part1}", "scaleX", '0.52', { fromValue: '1'}], position: 2000, duration: 750, easing: "easeInQuad" },
            { id: "eid87", tween: [ "style", "${_Exodus_part4}", "left", '17px', { fromValue: '307px'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "style", "${_Exodus_part4}", "left", '-143px', { fromValue: '17px'}], position: 5000, duration: 750, easing: "easeInQuad" },
            { id: "eid94", tween: [ "transform", "${_Exodus_part6}", "scaleX", '1', { fromValue: '0.52'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "style", "${_Exodus_part6}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid82", tween: [ "transform", "${_Exodus_part3}", "scaleY", '1', { fromValue: '0.52'}], position: 3250, duration: 750, easing: "easeOutQuad" },
            { id: "eid66", tween: [ "transform", "${_Exodus_part3}", "scaleY", '0.52', { fromValue: '1'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid246", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(158,174,224,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(158,174,224,1.00)'}], position: 2000, duration: 0 },
            { id: "eid96", tween: [ "transform", "${_Exodus_part6}", "scaleY", '1', { fromValue: '0.52'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid77", tween: [ "transform", "${_Exodus_part2}", "scaleX", '1', { fromValue: '0.52'}], position: 2250, duration: 750, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "transform", "${_Exodus_part2}", "scaleX", '0.52', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeInQuad" },
            { id: "eid51", tween: [ "style", "${_done_button}", "display", 'block', { fromValue: 'none'}], position: 6036, duration: 0, easing: "easeOutQuad" },
            { id: "eid98", tween: [ "style", "${_Exodus_part6}", "left", '17px', { fromValue: '317px'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid89", tween: [ "transform", "${_Exodus_part5}", "scaleX", '1', { fromValue: '0.52'}], position: 5250, duration: 750, easing: "easeOutQuad" },
            { id: "eid73", tween: [ "transform", "${_Exodus_part5}", "scaleX", '0.52', { fromValue: '1'}], position: 6000, duration: 750, easing: "easeInQuad" },
            { id: "eid92", tween: [ "style", "${_Exodus_part5}", "opacity", '1', { fromValue: '0'}], position: 5250, duration: 750, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "style", "${_Exodus_part5}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 750, easing: "easeInQuad" },
            { id: "eid58", tween: [ "transform", "${_Exodus_part1}", "scaleY", '0.52', { fromValue: '1'}], position: 2000, duration: 750, easing: "easeInQuad" },
            { id: "eid53", tween: [ "style", "${_done_button}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 500, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "style", "${_next}", "display", 'none', { fromValue: 'block'}], position: 6959, duration: 0, easing: "easeOutQuad" },
            { id: "eid15", tween: [ "style", "${_read_button}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutQuad" },
            { id: "eid19", tween: [ "style", "${_read_button}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 750, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_read_button}", "opacity", '1', { fromValue: '0'}], position: 7070, duration: 430, easing: "easeOutQuad" },
            { id: "eid33", tween: [ "style", "${_Exodus_part1}", "display", 'none', { fromValue: 'block'}], position: 2955, duration: 0, easing: "easeOutQuad" },
            { id: "eid10", tween: [ "transform", "${_RoundRect}", "scaleY", '1', { fromValue: '0.17'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid35", tween: [ "transform", "${_RoundRect}", "scaleY", '0.1', { fromValue: '1'}], position: 7000, duration: 1000, easing: "easeInQuad" },
            { id: "eid81", tween: [ "transform", "${_Exodus_part3}", "scaleX", '1', { fromValue: '0.52'}], position: 3250, duration: 750, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "transform", "${_Exodus_part3}", "scaleX", '0.52', { fromValue: '1'}], position: 4000, duration: 750, easing: "easeInQuad" },
            { id: "eid8", tween: [ "transform", "${_RoundRect}", "scaleX", '1', { fromValue: '0.17'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "transform", "${_RoundRect}", "scaleX", '0.1', { fromValue: '1'}], position: 7000, duration: 1000, easing: "easeInQuad" },
            { id: "eid54", tween: [ "style", "${_next}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 500, easing: "easeInQuad" },
            { id: "eid91", tween: [ "style", "${_Exodus_part5}", "left", '17px', { fromValue: '307px'}], position: 5250, duration: 750, easing: "easeOutQuad" },
            { id: "eid75", tween: [ "style", "${_Exodus_part5}", "left", '-143px', { fromValue: '17px'}], position: 6000, duration: 750, easing: "easeInQuad" },
            { id: "eid12", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 1000, easing: "easeInQuad" },
            { id: "eid20", tween: [ "style", "${_read_button}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0, easing: "easeOutQuad" },
            { id: "eid38", tween: [ "style", "${_read_button}", "display", 'block', { fromValue: 'none'}], position: 7070, duration: 0, easing: "easeInQuad" },
            { id: "eid88", tween: [ "style", "${_Exodus_part4}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid72", tween: [ "style", "${_Exodus_part4}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 750, easing: "easeInQuad" },
            { id: "eid80", tween: [ "style", "${_Exodus_part2}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 750, easing: "easeOutQuad" },
            { id: "eid64", tween: [ "style", "${_Exodus_part2}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeInQuad" },
            { id: "eid90", tween: [ "transform", "${_Exodus_part5}", "scaleY", '1', { fromValue: '0.52'}], position: 5250, duration: 750, easing: "easeOutQuad" },
            { id: "eid74", tween: [ "transform", "${_Exodus_part5}", "scaleY", '0.52', { fromValue: '1'}], position: 6000, duration: 750, easing: "easeInQuad" },
            { id: "eid85", tween: [ "transform", "${_Exodus_part4}", "scaleX", '1', { fromValue: '0.52'}], position: 4250, duration: 750, easing: "easeOutQuad" },
            { id: "eid69", tween: [ "transform", "${_Exodus_part4}", "scaleX", '0.52', { fromValue: '1'}], position: 5000, duration: 750, easing: "easeInQuad" },
            { id: "eid79", tween: [ "style", "${_Exodus_part2}", "left", '17px', { fromValue: '207px'}], position: 2250, duration: 750, easing: "easeOutQuad" },
            { id: "eid63", tween: [ "style", "${_Exodus_part2}", "left", '-148px', { fromValue: '17px'}], position: 3000, duration: 750, easing: "easeInQuad" }         ]
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
