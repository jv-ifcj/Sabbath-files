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
            id:'question14_div',
            display:'none',
            type:'rect',
            rect:['116px','60px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbody',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"According to this teaching segment, what does observing the Sabbath do for an individual?",
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
               text:"Review Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'question15_div',
            display:'none',
            type:'rect',
            rect:['116px','60px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"What descriptive language does the Rabbi use to explain the role of the Sabbath to a person of faith?",
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
               text:"Review Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'question16_div',
            display:'none',
            type:'rect',
            rect:['116px','60px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy2',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"Write your own description of what the Sabbath means to you based on what you have learned so far.",
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
               text:"Review Question",
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
            id:'buttons_sans',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'buttons',
            display:'none',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            clip:['rect(27px 670px 100px 0px)'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'sb29',
            display:'none',
            type:'ellipse',
            rect:['80px','495px','54px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb30',
            display:'none',
            type:'ellipse',
            rect:['79px','492px','59px','57px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb31',
            display:'none',
            type:'ellipse',
            rect:['82px','500px','50px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb32',
            display:'none',
            type:'ellipse',
            rect:['81px','497px','52px','52px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'play_button',
            type:'ellipse',
            rect:['536px','489px','55px','58px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'skip_text_12c',
            display:'none',
            type:'text',
            rect:['21px','417px','628px','56px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['127px','299px','427px','21px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"left",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'q14_skip_button',
            display:'none',
            type:'ellipse',
            rect:['539px','492px','47px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'review_questions_title',
            display:'none',
            type:'text',
            rect:['42px','191px','586px','154px','auto','auto'],
            text:"Review Questions",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',52,"rgba(255,255,255,1.00)","normal","none","italic"]
         },
         {
            id:'Text2',
            display:'none',
            type:'text',
            rect:['26px','284px','618px','100px','auto','auto'],
            text:"Please take a moment to answer the following questions based on the material from Lesson One",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(255,255,255,1)","normal","none","italic"]
         },
         {
            id:'q14_submit_button',
            display:'none',
            type:'rect',
            rect:['228px','506px','209px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'q15_submit_button',
            display:'none',
            type:'rect',
            rect:['230px','506px','211px','40px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q16_submit_button',
            display:'none',
            type:'rect',
            rect:['230px','505px','209px','47px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q16_skip_button',
            display:'none',
            type:'ellipse',
            rect:['539px','494px','52px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q16_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['537px','493px','52px','52px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q15_skip_button',
            display:'none',
            type:'ellipse',
            rect:['542px','493px','48px','55px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q15_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['539px','495px','52px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q14_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['539px','493px','48px','51px','auto','auto'],
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
         "${_q15_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sb29}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_topbarCopy}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_q15_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["style", "top", '284px'],
            ["transform", "scaleY", '0.84'],
            ["transform", "scaleX", '0.84'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '26px'],
            ["style", "font-size", '25px']
         ],
         "${_questionheader}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_question15}": [
            ["transform", "translateX", '485px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.74'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '337px'],
            ["transform", "scaleY", '0.74']
         ],
         "${_q16_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionbody}": [
            ["style", "top", '56px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_question14_div}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.77'],
            ["transform", "scaleX", '0.77'],
            ["style", "opacity", '0'],
            ["style", "left", '520px'],
            ["style", "display", 'none']
         ],
         "${_question16_div}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.77'],
            ["transform", "scaleX", '0.77'],
            ["style", "opacity", '0'],
            ["style", "left", '520px'],
            ["style", "display", 'none']
         ],
         "${_question14} > form:nth-child(1) > input:nth-child(8)": [
            ["transform", "translateX", '146px']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "bottom", '-79px']
         ],
         "${_question16} > form:nth-child(1) > input:nth-child(8)": [
            ["transform", "translateX", '138px'],
            ["transform", "translateY", '1px']
         ],
         "${_sb32}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionbodyCopy}": [
            ["style", "top", '56px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_q14_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_skip_text_12c}": [
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_play_button}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_topbarCopy2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_sb30}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question15} > form:nth-child(1) > input:nth-child(8)": [
            ["transform", "translateX", '134px'],
            ["transform", "translateY", '1px']
         ],
         "${_buttons_sans}": [
            ["style", "top", '460px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_q16_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_buttons}": [
            ["style", "top", '539px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.25'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_questionheaderCopy2}": [
            ["style", "top", '10px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${_q16_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question14}": [
            ["transform", "translateX", '564px'],
            ["transform", "scaleY", '0.86'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '323px'],
            ["transform", "scaleX", '0.86']
         ],
         "${_q15_skip_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q14_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionbodyCopy2}": [
            ["style", "top", '56px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_review_questions_title}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '42px'],
            ["style", "font-size", '52px'],
            ["style", "top", '280px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '0.81'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["transform", "scaleY", '0.81'],
            ["style", "font-style", 'italic']
         ],
         "${_restart}": [
            ["style", "display", 'none']
         ],
         "${_question16}": [
            ["transform", "translateX", '566px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.77'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '328px'],
            ["transform", "scaleY", '0.77']
         ],
         "${_topbar}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_q14_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question15_div}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.77'],
            ["transform", "scaleX", '0.77'],
            ["style", "opacity", '0'],
            ["style", "left", '520px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,179,1.00)'],
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
         "${_type_text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '560px'],
            ["style", "font-size", '17px'],
            ["style", "top", '309px'],
            ["style", "text-align", 'left'],
            ["style", "height", '21px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'none']
         ],
         "${_sb31}": [
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
         duration: 16000,
         autoPlay: true,
         labels: {
            "q14_skip_ceck": 6000,
            "q14_next_go": 6250,
            "q15_begin": 7750,
            "q15_home": 9500,
            "q15_skip_check": 9750,
            "q15_next_go": 10000,
            "q16_begin": 11254,
            "q16_home": 13000,
            "q16_skip_check": 13250,
            "q16_next_go": 13500,
            "exit": 14750
         },
         timeline: [
            { id: "eid97", tween: [ "style", "${_question16}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeOutQuad" },
            { id: "eid108", tween: [ "style", "${_question16}", "display", 'none', { fromValue: 'block'}], position: 14416, duration: 0, easing: "easeOutQuad" },
            { id: "eid141", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 4790, duration: 710, easing: "easeOutQuad" },
            { id: "eid144", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 500, easing: "easeOutQuad" },
            { id: "eid151", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 8540, duration: 710, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 10200, duration: 464, easing: "easeInQuad" },
            { id: "eid160", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid162", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 13671, duration: 579 },
            { id: "eid73", tween: [ "transform", "${_question16_div}", "scaleX", '1', { fromValue: '0.77'}], position: 11500, duration: 750 },
            { id: "eid74", tween: [ "transform", "${_question16_div}", "scaleX", '0.8', { fromValue: '1'}], position: 13750, duration: 750, easing: "easeOutQuad" },
            { id: "eid101", tween: [ "transform", "${_question16}", "scaleX", '1', { fromValue: '0.77'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid65", tween: [ "style", "${_question15_div}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 750 },
            { id: "eid66", tween: [ "style", "${_question15_div}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 750, easing: "easeOutQuad" },
            { id: "eid88", tween: [ "style", "${_sb30}", "display", 'block', { fromValue: 'none'}], position: 5705, duration: 0 },
            { id: "eid90", tween: [ "style", "${_sb30}", "display", 'none', { fromValue: 'block'}], position: 6140, duration: 0 },
            { id: "eid75", tween: [ "style", "${_question16_div}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 750 },
            { id: "eid76", tween: [ "style", "${_question16_div}", "opacity", '0', { fromValue: '1'}], position: 13750, duration: 750, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_question15_div}", "left", '116px', { fromValue: '520px'}], position: 8000, duration: 750 },
            { id: "eid68", tween: [ "style", "${_question15_div}", "left", '-229px', { fromValue: '116px'}], position: 10250, duration: 750, easing: "easeOutQuad" },
            { id: "eid30", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid5", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 3250, duration: 500 },
            { id: "eid172", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0'}], position: 4750, duration: 500, easing: "easeOutQuad" },
            { id: "eid12", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 5250, duration: 500 },
            { id: "eid16", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 6250, duration: 500 },
            { id: "eid20", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 9000, duration: 500 },
            { id: "eid25", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 10000, duration: 500 },
            { id: "eid42", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 12504, duration: 496 },
            { id: "eid45", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 13500, duration: 500 },
            { id: "eid128", tween: [ "style", "${_buttons}", "opacity", '0', { fromValue: '0.25'}], position: 14750, duration: 1000, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "style", "${_sb31}", "display", 'block', { fromValue: 'none'}], position: 9324, duration: 0 },
            { id: "eid98", tween: [ "style", "${_sb31}", "display", 'none', { fromValue: 'block'}], position: 9863, duration: 0 },
            { id: "eid17", tween: [ "style", "${_review_questions_title}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid37", tween: [ "style", "${_review_questions_title}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeInQuad" },
            { id: "eid8", tween: [ "style", "${_question14_div}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 750 },
            { id: "eid57", tween: [ "style", "${_question14_div}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "transform", "${_question15_div}", "scaleY", '1', { fromValue: '0.77'}], position: 8000, duration: 750 },
            { id: "eid62", tween: [ "transform", "${_question15_div}", "scaleY", '0.8', { fromValue: '1'}], position: 10250, duration: 750, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0, easing: "easeInQuad" },
            { id: "eid89", tween: [ "transform", "${_question15}", "scaleX", '1', { fromValue: '0.74'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid100", tween: [ "style", "${_sb32}", "display", 'block', { fromValue: 'none'}], position: 12898, duration: 0 },
            { id: "eid102", tween: [ "style", "${_sb32}", "display", 'none', { fromValue: 'block'}], position: 13365, duration: 0 },
            { id: "eid105", tween: [ "style", "${_question16}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid107", tween: [ "style", "${_question16}", "opacity", '0', { fromValue: '1'}], position: 13671, duration: 745 },
            { id: "eid109", tween: [ "style", "${_q14_submit_button}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0, easing: "easeOutQuad" },
            { id: "eid115", tween: [ "style", "${_q14_submit_button}", "display", 'none', { fromValue: 'block'}], position: 6065, duration: 0, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "transform", "${_question14}", "scaleY", '1', { fromValue: '0.86'}], position: 4750, duration: 750, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "transform", "${_question14}", "scaleY", '0.8', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid122", tween: [ "style", "${_q16_submit_button}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutQuad" },
            { id: "eid127", tween: [ "style", "${_q16_submit_button}", "display", 'none', { fromValue: 'block'}], position: 13365, duration: 0, easing: "easeOutQuad" },
            { id: "eid26", tween: [ "transform", "${_Text2}", "scaleY", '1', { fromValue: '0.84'}], position: 2000, duration: 750, easing: "easeOutQuad" },
            { id: "eid36", tween: [ "transform", "${_Text2}", "scaleY", '0.67', { fromValue: '1'}], position: 3500, duration: 750, easing: "easeInQuad" },
            { id: "eid48", tween: [ "transform", "${_question14}", "scaleX", '1', { fromValue: '0.86'}], position: 4750, duration: 750, easing: "easeOutQuad" },
            { id: "eid55", tween: [ "transform", "${_question14}", "scaleX", '0.8', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid125", tween: [ "style", "${_q16_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 13250, duration: 0, easing: "easeOutQuad" },
            { id: "eid126", tween: [ "style", "${_q16_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 13365, duration: 0, easing: "easeOutQuad" },
            { id: "eid111", tween: [ "style", "${_q14_skip_button}", "display", 'block', { fromValue: 'none'}], position: 5750, duration: 0, easing: "easeOutQuad" },
            { id: "eid112", tween: [ "style", "${_q14_skip_button}", "display", 'none', { fromValue: 'block'}], position: 5825, duration: 0, easing: "easeOutQuad" },
            { id: "eid46", tween: [ "style", "${_question14}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 750, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "style", "${_question14}", "opacity", '0', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid86", tween: [ "transform", "${_question15}", "translateY", '337px', { fromValue: '337px'}], position: 9250, duration: 0 },
            { id: "eid117", tween: [ "style", "${_q15_skip_button}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid118", tween: [ "style", "${_q15_skip_button}", "display", 'none', { fromValue: 'block'}], position: 9628, duration: 0, easing: "easeOutQuad" },
            { id: "eid113", tween: [ "style", "${_q14_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid114", tween: [ "style", "${_q14_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 6065, duration: 0, easing: "easeOutQuad" },
            { id: "eid15", tween: [ "style", "${_review_questions_title}", "top", '191px', { fromValue: '280px'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid31", tween: [ "style", "${_review_questions_title}", "top", '-28px', { fromValue: '191px'}], position: 3250, duration: 750, easing: "easeInQuad" },
            { id: "eid69", tween: [ "style", "${_question15_div}", "display", 'block', { fromValue: 'none'}], position: 8000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_question15_div}", "display", 'none', { fromValue: 'block'}], position: 11000, duration: 0, easing: "easeOutQuad" },
            { id: "eid116", tween: [ "style", "${_q15_submit_button}", "display", 'block', { fromValue: 'none'}], position: 9500, duration: 0, easing: "easeOutQuad" },
            { id: "eid121", tween: [ "style", "${_q15_submit_button}", "display", 'none', { fromValue: 'block'}], position: 9863, duration: 0, easing: "easeOutQuad" },
            { id: "eid22", tween: [ "style", "${_review_questions_title}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "style", "${_review_questions_title}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0, easing: "easeInQuad" },
            { id: "eid81", tween: [ "style", "${_question15}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
            { id: "eid96", tween: [ "style", "${_question15}", "display", 'none', { fromValue: 'block'}], position: 10840, duration: 0, easing: "easeOutQuad" },
            { id: "eid24", tween: [ "transform", "${_Text2}", "scaleX", '1', { fromValue: '0.84'}], position: 2000, duration: 750, easing: "easeOutQuad" },
            { id: "eid35", tween: [ "transform", "${_Text2}", "scaleX", '0.67', { fromValue: '1'}], position: 3500, duration: 750, easing: "easeInQuad" },
            { id: "eid164", tween: [ "style", "${_buttons}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid170", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0, easing: "easeOutQuad" },
            { id: "eid41", tween: [ "style", "${_question14}", "display", 'block', { fromValue: 'none'}], position: 4750, duration: 0, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_question14}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0, easing: "easeOutQuad" },
            { id: "eid87", tween: [ "transform", "${_question15}", "translateX", '119px', { fromValue: '485px'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid94", tween: [ "transform", "${_question15}", "translateX", '-276px', { fromValue: '119px'}], position: 10200, duration: 640, easing: "easeInQuad" },
            { id: "eid103", tween: [ "transform", "${_question16}", "scaleY", '1', { fromValue: '0.77'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid28", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutQuad" },
            { id: "eid38", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 750, easing: "easeInQuad" },
            { id: "eid11", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '539px'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid91", tween: [ "transform", "${_question15}", "scaleY", '1', { fromValue: '0.74'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid49", tween: [ "style", "${_q16_submit_button}", "opacity", '0', { fromValue: '0'}], position: 13000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_q16_skip_button}", "opacity", '0', { fromValue: '0'}], position: 13000, duration: 0 },
            { id: "eid136", tween: [ "style", "${_type_text}", "left", '127px', { fromValue: '560px'}], position: 4790, duration: 710, easing: "easeOutQuad" },
            { id: "eid142", tween: [ "style", "${_type_text}", "left", '-171px', { fromValue: '127px'}], position: 6500, duration: 500, easing: "easeOutQuad" },
            { id: "eid149", tween: [ "style", "${_type_text}", "left", '120px', { fromValue: '485px'}], position: 8540, duration: 710, easing: "easeOutQuad" },
            { id: "eid152", tween: [ "style", "${_type_text}", "left", '-253px', { fromValue: '120px'}], position: 10200, duration: 464, easing: "easeInQuad" },
            { id: "eid158", tween: [ "style", "${_type_text}", "left", '131px', { fromValue: '607px'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid161", tween: [ "style", "${_type_text}", "left", '-231px', { fromValue: '131px'}], position: 13671, duration: 579 },
            { id: "eid32", tween: [ "style", "${_Text2}", "top", '65px', { fromValue: '284px'}], position: 3500, duration: 750, easing: "easeInQuad" },
            { id: "eid19", tween: [ "transform", "${_review_questions_title}", "scaleX", '1', { fromValue: '0.81'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid33", tween: [ "transform", "${_review_questions_title}", "scaleX", '0.67', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeInQuad" },
            { id: "eid165", tween: [ "style", "${_buttons_sans}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid173", tween: [ "style", "${_buttons_sans}", "display", 'none', { fromValue: 'block'}], position: 5705, duration: 0, easing: "easeOutQuad" },
            { id: "eid175", tween: [ "style", "${_buttons_sans}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
            { id: "eid129", tween: [ "style", "${_buttons_sans}", "display", 'block', { fromValue: 'block'}], position: 14750, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_question14_div}", "scaleY", '1', { fromValue: '0.77'}], position: 4250, duration: 750 },
            { id: "eid54", tween: [ "transform", "${_question14_div}", "scaleY", '0.8', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid174", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'none'}], position: 3125, duration: 0 },
            { id: "eid9", tween: [ "style", "${_question14_div}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid59", tween: [ "style", "${_question14_div}", "display", 'none', { fromValue: 'block'}], position: 7250, duration: 0, easing: "easeOutQuad" },
            { id: "eid13", tween: [ "style", "${_sabbath_bar}", "bottom", '0px', { fromValue: '-79px'}], position: 250, duration: 750, easing: "easeOutQuad" },
            { id: "eid123", tween: [ "style", "${_q16_skip_button}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeOutQuad" },
            { id: "eid124", tween: [ "style", "${_q16_skip_button}", "display", 'none', { fromValue: 'block'}], position: 13120, duration: 0, easing: "easeOutQuad" },
            { id: "eid130", tween: [ "style", "${_skip_text_12c}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid131", tween: [ "style", "${_skip_text_12c}", "display", 'none', { fromValue: 'block'}], position: 6065, duration: 0 },
            { id: "eid132", tween: [ "style", "${_skip_text_12c}", "display", 'block', { fromValue: 'none'}], position: 9684, duration: 0 },
            { id: "eid133", tween: [ "style", "${_skip_text_12c}", "display", 'none', { fromValue: 'block'}], position: 9933, duration: 0 },
            { id: "eid134", tween: [ "style", "${_skip_text_12c}", "display", 'block', { fromValue: 'none'}], position: 13049, duration: 0 },
            { id: "eid135", tween: [ "style", "${_skip_text_12c}", "display", 'none', { fromValue: 'block'}], position: 13438, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_question14_div}", "scaleX", '1', { fromValue: '0.77'}], position: 4250, duration: 750 },
            { id: "eid53", tween: [ "transform", "${_question14_div}", "scaleX", '0.8', { fromValue: '1'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid83", tween: [ "style", "${_q16_skip_go_button}", "opacity", '0', { fromValue: '0'}], position: 13250, duration: 0 },
            { id: "eid93", tween: [ "style", "${_question15}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 750, easing: "easeOutQuad" },
            { id: "eid95", tween: [ "style", "${_question15}", "opacity", '0', { fromValue: '1'}], position: 10200, duration: 640, easing: "easeInQuad" },
            { id: "eid2", tween: [ "style", "${_question14_div}", "left", '116px', { fromValue: '520px'}], position: 4250, duration: 750 },
            { id: "eid51", tween: [ "style", "${_question14_div}", "left", '-229px', { fromValue: '116px'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid84", tween: [ "style", "${_sb29}", "display", 'block', { fromValue: 'none'}], position: 3210, duration: 0 },
            { id: "eid85", tween: [ "style", "${_sb29}", "display", 'none', { fromValue: 'block'}], position: 3305, duration: 0 },
            { id: "eid71", tween: [ "transform", "${_question16_div}", "scaleY", '1', { fromValue: '0.77'}], position: 11500, duration: 750 },
            { id: "eid72", tween: [ "transform", "${_question16_div}", "scaleY", '0.8', { fromValue: '1'}], position: 13750, duration: 750, easing: "easeOutQuad" },
            { id: "eid79", tween: [ "style", "${_question16_div}", "display", 'block', { fromValue: 'none'}], position: 11500, duration: 0 },
            { id: "eid80", tween: [ "style", "${_question16_div}", "display", 'none', { fromValue: 'block'}], position: 14500, duration: 0, easing: "easeOutQuad" },
            { id: "eid77", tween: [ "style", "${_question16_div}", "left", '116px', { fromValue: '520px'}], position: 11500, duration: 750 },
            { id: "eid78", tween: [ "style", "${_question16_div}", "left", '-229px', { fromValue: '116px'}], position: 13750, duration: 750, easing: "easeOutQuad" },
            { id: "eid110", tween: [ "style", "${_play_button}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid1", tween: [ "style", "${_play_button}", "display", 'block', { fromValue: 'none'}], position: 3210, duration: 0 },
            { id: "eid3", tween: [ "style", "${_play_button}", "display", 'none', { fromValue: 'block'}], position: 3305, duration: 0 },
            { id: "eid138", tween: [ "style", "${_type_text}", "top", '299px', { fromValue: '309px'}], position: 4790, duration: 710, easing: "easeOutQuad" },
            { id: "eid143", tween: [ "style", "${_type_text}", "top", '315px', { fromValue: '299px'}], position: 6500, duration: 500, easing: "easeOutQuad" },
            { id: "eid150", tween: [ "style", "${_type_text}", "top", '315px', { fromValue: '336px'}], position: 8540, duration: 710, easing: "easeOutQuad" },
            { id: "eid159", tween: [ "style", "${_type_text}", "top", '306px', { fromValue: '314px'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid63", tween: [ "transform", "${_question15_div}", "scaleX", '1', { fromValue: '0.77'}], position: 8000, duration: 750 },
            { id: "eid64", tween: [ "transform", "${_question15_div}", "scaleX", '0.8', { fromValue: '1'}], position: 10250, duration: 750, easing: "easeOutQuad" },
            { id: "eid167", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutQuad" },
            { id: "eid168", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 2500, duration: 750, easing: "easeOutQuad" },
            { id: "eid169", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 3250, duration: 500, easing: "easeOutQuad" },
            { id: "eid139", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 4790, duration: 0 },
            { id: "eid145", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid146", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 8540, duration: 0 },
            { id: "eid154", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 10664, duration: 0, easing: "easeInQuad" },
            { id: "eid155", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeInQuad" },
            { id: "eid163", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 14250, duration: 0 },
            { id: "eid44", tween: [ "transform", "${_question14}", "translateX", '127px', { fromValue: '564px'}], position: 4750, duration: 750, easing: "easeOutQuad" },
            { id: "eid52", tween: [ "transform", "${_question14}", "translateX", '-218px', { fromValue: '127px'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid99", tween: [ "transform", "${_question16}", "translateX", '127px', { fromValue: '566px'}], position: 12000, duration: 750, easing: "easeOutQuad" },
            { id: "eid106", tween: [ "transform", "${_question16}", "translateX", '-324px', { fromValue: '127px'}], position: 13671, duration: 745 },
            { id: "eid21", tween: [ "transform", "${_review_questions_title}", "scaleY", '1', { fromValue: '0.81'}], position: 1250, duration: 1000, easing: "easeOutQuad" },
            { id: "eid34", tween: [ "transform", "${_review_questions_title}", "scaleY", '0.67', { fromValue: '1'}], position: 3250, duration: 750, easing: "easeInQuad" },
            { id: "eid119", tween: [ "style", "${_q15_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 9750, duration: 0, easing: "easeOutQuad" },
            { id: "eid120", tween: [ "style", "${_q15_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 9863, duration: 0, easing: "easeOutQuad" }         ]
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
         "${_curtain}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "display", 'none']
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
