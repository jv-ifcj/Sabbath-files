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
            id:'question33',
            display:'none',
            type:'rect',
            rect:['120px','46px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbody',
               type:'text',
               rect:['11px','56px','413px','120px','auto','auto'],
               text:"Lynne M. Baab wrote, \"Preparation for an activity helps us experience the value of that activity.\" In what ways has that been true for you?",
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
               text:"Reflection Question",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","italic"]
            }]
         },
         {
            id:'skip_text',
            display:'none',
            type:'text',
            rect:['32px','423px','603px','53px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'question34',
            display:'none',
            type:'rect',
            rect:['120px','46px','429px','183px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'questionbodyCopy',
               type:'text',
               rect:['11px','63px','413px','120px','auto','auto'],
               text:"What do you think Ms. Baab means by the 'work' of the Sabbath? What would that look like in your life?",
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
            id:'Text',
            display:'none',
            type:'text',
            rect:['34px','57px','610px','157px','auto','auto'],
            text:"As Rabbi Eckstein says, \"You can't just arrive home at 5:13 on Sabbath and say to God, 'Hit me with your spirtual blessings.' Instead, you've got to prepare for it.\" Likewise, in her book <i>Sabbath Keeping</i>, Christian author Lynne M. Baab writes,",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Text2',
            display:'none',
            type:'text',
            rect:['53px','225px','563px','210px','auto','auto'],
            text:"\"The 'work' of the Sabbath needs to happen before the Sabbath starts, so everyone can experience true rest on the day itself. Preparation for an activity helps us experience the value of that activity. A weekly discipline of Sabbath preparation can add to our understanding that rest matters to God, that rest teaches us about God's grace.\"",
            align:"left",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'sabbath_bar',
            type:'image',
            rect:['0px','auto','670px','100px','auto','-111px'],
            clip:['rect(19px 670px 100px 0px)'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'buttons_sans',
            type:'image',
            rect:['0','571px','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'buttons',
            display:'none',
            type:'image',
            rect:['0px','571px','670px','100px','auto','auto'],
            clip:['rect(27px 670px 100px 0px)'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px']
         },
         {
            id:'next_play',
            type:'ellipse',
            rect:['540px','606px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q33_submit_button',
            display:'none',
            type:'rect',
            rect:['219px','503px','226px','47px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q33_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['537px','503px','53px','47px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q33_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['537px','496px','52px','47px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q34_submit_button',
            display:'none',
            type:'rect',
            rect:['223px','510px','219px','39px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q34_skip_check_button',
            display:'none',
            type:'ellipse',
            rect:['537px','498px','52px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q34_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['537px','498px','51px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(15,148,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'type_text',
            display:'none',
            type:'text',
            rect:['121px','263px','427px','30px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'bb1',
            display:'none',
            type:'ellipse',
            rect:['82px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'bb2',
            display:'none',
            type:'ellipse',
            rect:['84px','495px','50px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb4',
            display:'none',
            type:'ellipse',
            rect:['82px','496px','49px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(0,51,102,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'bb3',
            display:'none',
            type:'ellipse',
            rect:['82px','497px','49px','47px','auto','auto'],
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
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_skip_text}": [
            ["style", "top", '423px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_question34}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '0.9'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0'],
            ["style", "left", '473px'],
            ["style", "top", '46px']
         ],
         "${_bb3}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_next_play}": [
            ["style", "top", '606px'],
            ["color", "background-color", 'rgba(15,148,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '51px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '50px']
         ],
         "${_question34_div}": [
            ["transform", "translateX", '353px'],
            ["transform", "scaleY", '0.9'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '17px'],
            ["transform", "scaleX", '0.9']
         ],
         "${_bb2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionheader}": [
            ["style", "top", '10px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '11px'],
            ["transform", "scaleX", '1']
         ],
         "${_question33}": [
            ["color", "background-color", 'rgba(158,174,224,1.00)'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '527px'],
            ["style", "top", '46px']
         ],
         "${_q34_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_buttons_sans}": [
            ["style", "top", '571px'],
            ["style", "opacity", '0']
         ],
         "${_q34_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q33_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_questionbody}": [
            ["style", "top", '56px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '1'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_topbarCopy}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_questionbodyCopy}": [
            ["style", "top", '63.01px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '11px'],
            ["style", "font-size", '22px']
         ],
         "${_q33_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_buttons}": [
            ["style", "top", '571px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "clip", [27,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_bb4}": [
            ["color", "background-color", 'rgba(0,51,102,0.00)'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '82.23px'],
            ["style", "top", '496.12px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '34px'],
            ["style", "width", '610px'],
            ["style", "top", '255px'],
            ["transform", "scaleY", '0.56'],
            ["style", "height", '157px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.56']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '53px'],
            ["style", "top", '423px'],
            ["transform", "scaleY", '0.56'],
            ["style", "height", '210px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.56']
         ],
         "${_topbar}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "clip", [0,429,47,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_q33_skip_check_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sabbath_bar}": [
            ["style", "top", 'auto'],
            ["style", "left", '0px'],
            ["style", "clip", [19,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "bottom", '-111px']
         ],
         "${_q34_submit_button}": [
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
         "${_type_text}": [
            ["style", "top", '263px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '519px'],
            ["style", "font-size", '17px']
         ],
         "${_question33_div}": [
            ["transform", "translateX", '407px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '21px'],
            ["transform", "scaleX", '1']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18001,
         autoPlay: false,
         labels: {
            "q33_begin": 6500,
            "q33_home": 8000,
            "q33_skip_check": 8250,
            "q33_submit": 8500,
            "q33_go": 10500,
            "q33_end": 11500,
            "q34_begin": 13000,
            "q34_home": 14500,
            "q34_skip_check": 14750,
            "q34_submit": 15000,
            "q34_go": 17000,
            "q34_end": 18000
         },
         timeline: [
            { id: "eid105", tween: [ "style", "${_q33_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 7960, duration: 0 },
            { id: "eid106", tween: [ "style", "${_q33_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 8050, duration: 0 },
            { id: "eid46", tween: [ "style", "${_question33}", "left", '120px', { fromValue: '527px'}], position: 6750, duration: 750, easing: "easeOutQuad" },
            { id: "eid51", tween: [ "style", "${_question33}", "left", '-354px', { fromValue: '120px'}], position: 10500, duration: 750, easing: "easeInQuad" },
            { id: "eid83", tween: [ "style", "${_question34}", "opacity", '1', { fromValue: '0'}], position: 13250, duration: 750, easing: "easeOutQuad" },
            { id: "eid99", tween: [ "style", "${_question34}", "opacity", '0', { fromValue: '1'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid136", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 750, easing: "easeOutQuad" },
            { id: "eid142", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid149", tween: [ "style", "${_type_text}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid154", tween: [ "style", "${_type_text}", "opacity", '0', { fromValue: '1'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid44", tween: [ "transform", "${_question33_div}", "translateX", '0px', { fromValue: '407px'}], position: 7000, duration: 750, easing: "easeOutQuad" },
            { id: "eid52", tween: [ "transform", "${_question33_div}", "translateX", '-474px', { fromValue: '0px'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid156", tween: [ "style", "${_bb1}", "display", 'block', { fromValue: 'none'}], position: 3917, duration: 0 },
            { id: "eid157", tween: [ "style", "${_bb1}", "display", 'none', { fromValue: 'block'}], position: 4795, duration: 0 },
            { id: "eid2", tween: [ "style", "${_question33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_question33}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
            { id: "eid68", tween: [ "style", "${_question33}", "display", 'none', { fromValue: 'block'}], position: 11250, duration: 0, easing: "easeInQuad" },
            { id: "eid163", tween: [ "style", "${_bb3}", "display", 'block', { fromValue: 'none'}], position: 8194, duration: 0 },
            { id: "eid164", tween: [ "style", "${_bb3}", "display", 'none', { fromValue: 'block'}], position: 8617, duration: 0 },
            { id: "eid102", tween: [ "style", "${_next_play}", "display", 'none', { fromValue: 'block'}], position: 6500, duration: 0 },
            { id: "eid8", tween: [ "color", "${_Stage}", "background-color", 'rgba(45,105,179,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 0, duration: 1250, easing: "easeInQuad" },
            { id: "eid121", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid122", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 8210, duration: 0, easing: "easeOutQuad" },
            { id: "eid123", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 8319, duration: 0, easing: "easeOutQuad" },
            { id: "eid124", tween: [ "style", "${_skip_text}", "display", 'block', { fromValue: 'none'}], position: 14719, duration: 0, easing: "easeOutQuad" },
            { id: "eid125", tween: [ "style", "${_skip_text}", "display", 'none', { fromValue: 'block'}], position: 14779, duration: 0, easing: "easeOutQuad" },
            { id: "eid6", tween: [ "style", "${_next_play}", "top", '495px', { fromValue: '606px'}], position: 1500, duration: 750, easing: "easeOutQuad" },
            { id: "eid18", tween: [ "transform", "${_Text2}", "scaleX", '1', { fromValue: '0.56'}], position: 3250, duration: 1000 },
            { id: "eid31", tween: [ "transform", "${_Text2}", "scaleX", '0.72', { fromValue: '1'}], position: 5000, duration: 750, easing: "easeInQuad" },
            { id: "eid130", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0'}], position: 6750, duration: 750, easing: "easeOutQuad" },
            { id: "eid117", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 7500, duration: 500 },
            { id: "eid118", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 10500, duration: 500 },
            { id: "eid119", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 14000, duration: 500 },
            { id: "eid120", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 17000, duration: 500 },
            { id: "eid22", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 1000 },
            { id: "eid33", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 4750, duration: 750, easing: "easeInQuad" },
            { id: "eid79", tween: [ "style", "${_question34}", "left", '120px', { fromValue: '473px'}], position: 13250, duration: 750, easing: "easeOutQuad" },
            { id: "eid93", tween: [ "style", "${_question34}", "left", '-117px', { fromValue: '120px'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid12", tween: [ "style", "${_Text2}", "top", '225px', { fromValue: '423px'}], position: 3250, duration: 1000 },
            { id: "eid28", tween: [ "style", "${_Text2}", "top", '27px', { fromValue: '225px'}], position: 5000, duration: 750, easing: "easeInQuad" },
            { id: "eid63", tween: [ "transform", "${_question33}", "scaleY", '0.84', { fromValue: '1'}], position: 10500, duration: 750, easing: "easeInQuad" },
            { id: "eid126", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
            { id: "eid111", tween: [ "style", "${_q34_skip_check_button}", "display", 'block', { fromValue: 'none'}], position: 14447, duration: 0 },
            { id: "eid112", tween: [ "style", "${_q34_skip_check_button}", "display", 'none', { fromValue: 'block'}], position: 14582, duration: 0 },
            { id: "eid4", tween: [ "style", "${_buttons_sans}", "top", '460px', { fromValue: '571px'}], position: 1500, duration: 750, easing: "easeOutQuad" },
            { id: "eid25", tween: [ "style", "${_Text}", "left", '30px', { fromValue: '34px'}], position: 4750, duration: 750, easing: "easeInQuad" },
            { id: "eid81", tween: [ "style", "${_question34_div}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid98", tween: [ "style", "${_question34_div}", "opacity", '0', { fromValue: '1'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid103", tween: [ "style", "${_q33_submit_button}", "display", 'block', { fromValue: 'none'}], position: 7960, duration: 0 },
            { id: "eid104", tween: [ "style", "${_q33_submit_button}", "display", 'none', { fromValue: 'block'}], position: 8285, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 1000 },
            { id: "eid34", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 750, easing: "easeInQuad" },
            { id: "eid3", tween: [ "style", "${_buttons}", "top", '460px', { fromValue: '571px'}], position: 1500, duration: 750, easing: "easeOutQuad" },
            { id: "eid107", tween: [ "style", "${_q33_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 8210, duration: 0 },
            { id: "eid108", tween: [ "style", "${_q33_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 8300, duration: 0 },
            { id: "eid37", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 2890, duration: 0, easing: "easeInQuad" },
            { id: "eid35", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 5800, duration: 0, easing: "easeInQuad" },
            { id: "eid16", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0.56'}], position: 3000, duration: 1000 },
            { id: "eid30", tween: [ "transform", "${_Text}", "scaleY", '0.72', { fromValue: '1'}], position: 4750, duration: 750, easing: "easeInQuad" },
            { id: "eid135", tween: [ "style", "${_type_text}", "left", '121px', { fromValue: '519px'}], position: 7000, duration: 750, easing: "easeOutQuad" },
            { id: "eid141", tween: [ "style", "${_type_text}", "left", '-370px', { fromValue: '121px'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid148", tween: [ "style", "${_type_text}", "left", '120px', { fromValue: '480px'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid153", tween: [ "style", "${_type_text}", "left", '-132px', { fromValue: '120px'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid91", tween: [ "transform", "${_question34}", "scaleY", '1', { fromValue: '0.9'}], position: 13250, duration: 750, easing: "easeOutQuad" },
            { id: "eid97", tween: [ "transform", "${_question34}", "scaleY", '0.93', { fromValue: '1'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid73", tween: [ "style", "${_question34_div}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeInQuad" },
            { id: "eid100", tween: [ "style", "${_question34_div}", "display", 'none', { fromValue: 'block'}], position: 18001, duration: 0, easing: "easeInQuad" },
            { id: "eid114", tween: [ "style", "${_q34_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 14727, duration: 0 },
            { id: "eid116", tween: [ "style", "${_q34_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 14812, duration: 0 },
            { id: "eid65", tween: [ "transform", "${_question33_div}", "scaleY", '0.84', { fromValue: '1'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid87", tween: [ "transform", "${_question34_div}", "scaleY", '1', { fromValue: '0.9'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid95", tween: [ "transform", "${_question34_div}", "scaleY", '0.93', { fromValue: '1'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid64", tween: [ "transform", "${_question33_div}", "scaleX", '0.84', { fromValue: '1'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid50", tween: [ "style", "${_question33}", "opacity", '1', { fromValue: '0'}], position: 6750, duration: 750, easing: "easeOutQuad" },
            { id: "eid55", tween: [ "style", "${_question33}", "opacity", '0', { fromValue: '1'}], position: 10500, duration: 750, easing: "easeInQuad" },
            { id: "eid20", tween: [ "transform", "${_Text2}", "scaleY", '1', { fromValue: '0.56'}], position: 3250, duration: 1000 },
            { id: "eid32", tween: [ "transform", "${_Text2}", "scaleY", '0.72', { fromValue: '1'}], position: 5000, duration: 750, easing: "easeInQuad" },
            { id: "eid41", tween: [ "style", "${_question33_div}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0 },
            { id: "eid72", tween: [ "style", "${_question33_div}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0, easing: "easeInQuad" },
            { id: "eid10", tween: [ "style", "${_Text}", "top", '57px', { fromValue: '255px'}], position: 3000, duration: 1000 },
            { id: "eid26", tween: [ "style", "${_Text}", "top", '-141px', { fromValue: '57px'}], position: 4750, duration: 750, easing: "easeInQuad" },
            { id: "eid27", tween: [ "style", "${_Text2}", "left", '49px', { fromValue: '53px'}], position: 5000, duration: 750, easing: "easeInQuad" },
            { id: "eid48", tween: [ "style", "${_question33_div}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 750, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "style", "${_question33_div}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 750, easing: "easeInQuad" },
            { id: "eid109", tween: [ "style", "${_q34_submit_button}", "display", 'block', { fromValue: 'none'}], position: 14447, duration: 0 },
            { id: "eid110", tween: [ "style", "${_q34_submit_button}", "display", 'none', { fromValue: 'block'}], position: 14812, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 2890, duration: 0, easing: "easeInQuad" },
            { id: "eid36", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 5800, duration: 0, easing: "easeInQuad" },
            { id: "eid1", tween: [ "style", "${_question34}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_question34}", "display", 'block', { fromValue: 'none'}], position: 13000, duration: 0, easing: "easeInQuad" },
            { id: "eid101", tween: [ "style", "${_question34}", "display", 'none', { fromValue: 'block'}], position: 18001, duration: 0, easing: "easeInQuad" },
            { id: "eid89", tween: [ "transform", "${_question34}", "scaleX", '1', { fromValue: '0.9'}], position: 13250, duration: 750, easing: "easeOutQuad" },
            { id: "eid96", tween: [ "transform", "${_question34}", "scaleX", '0.93', { fromValue: '1'}], position: 17000, duration: 750, easing: "easeInQuad" },
            { id: "eid5", tween: [ "style", "${_sabbath_bar}", "bottom", '0px', { fromValue: '-111px'}], position: 1500, duration: 750, easing: "easeOutQuad" },
            { id: "eid85", tween: [ "transform", "${_question34_div}", "scaleX", '1', { fromValue: '0.9'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid94", tween: [ "transform", "${_question34_div}", "scaleX", '0.93', { fromValue: '1'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid132", tween: [ "style", "${_type_text}", "top", '263px', { fromValue: '263px'}], position: 7750, duration: 0, easing: "easeOutQuad" },
            { id: "eid139", tween: [ "style", "${_type_text}", "top", '263px', { fromValue: '263px'}], position: 10750, duration: 0, easing: "easeOutQuad" },
            { id: "eid145", tween: [ "style", "${_type_text}", "top", '263px', { fromValue: '263px'}], position: 13500, duration: 0, easing: "easeInQuad" },
            { id: "eid151", tween: [ "style", "${_type_text}", "top", '263px', { fromValue: '263px'}], position: 17250, duration: 0, easing: "easeInQuad" },
            { id: "eid77", tween: [ "transform", "${_question34_div}", "translateX", '0px', { fromValue: '353px'}], position: 13500, duration: 750, easing: "easeOutQuad" },
            { id: "eid92", tween: [ "transform", "${_question34_div}", "translateX", '-237px', { fromValue: '0px'}], position: 17250, duration: 750, easing: "easeInQuad" },
            { id: "eid128", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '0'}], position: 2250, duration: 640, easing: "easeOutQuad" },
            { id: "eid39", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 4250, duration: 250 },
            { id: "eid40", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 4500, duration: 250 },
            { id: "eid137", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0, easing: "easeOutQuad" },
            { id: "eid143", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0, easing: "easeInQuad" },
            { id: "eid147", tween: [ "style", "${_type_text}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0, easing: "easeInQuad" },
            { id: "eid155", tween: [ "style", "${_type_text}", "display", 'none', { fromValue: 'block'}], position: 18000, duration: 0, easing: "easeInQuad" },
            { id: "eid165", tween: [ "style", "${_bb4}", "display", 'block', { fromValue: 'none'}], position: 13847, duration: 0 },
            { id: "eid166", tween: [ "style", "${_bb4}", "display", 'none', { fromValue: 'block'}], position: 15196, duration: 0 },
            { id: "eid62", tween: [ "transform", "${_question33}", "scaleX", '0.84', { fromValue: '1'}], position: 10500, duration: 750, easing: "easeInQuad" },
            { id: "eid14", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0.56'}], position: 3000, duration: 1000 },
            { id: "eid29", tween: [ "transform", "${_Text}", "scaleX", '0.72', { fromValue: '1'}], position: 4750, duration: 750, easing: "easeInQuad" },
            { id: "eid159", tween: [ "style", "${_bb2}", "display", 'block', { fromValue: 'none'}], position: 6413, duration: 0 },
            { id: "eid162", tween: [ "style", "${_bb2}", "display", 'none', { fromValue: 'block'}], position: 8094, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-4723648");
