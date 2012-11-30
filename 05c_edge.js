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
            id:'Question06box',
            display:'none',
            type:'rect',
            rect:['79px','72px','512','199','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[],
            c:[
            {
               id:'RoundRect',
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
                  text:"Reflection Question",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'Text',
               type:'text',
               rect:['27px','63px','481','151','undefined','undefined'],
               text:"On a scale from one to five, with one being \"not significant\" and five being \"most significant,\" rate how significant observing the Sabbath is to you.",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'sabbath_bar',
            display:'none',
            type:'image',
            rect:['0px','460px','670px','100px','auto','auto'],
            clip:['rect(0px 670pxpx 100pxpx 0px)'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px'],
            transform:[]
         },
         {
            id:'buttons',
            display:'none',
            type:'image',
            rect:['0px','auto','670px','100px','auto','0px'],
            clip:['rect(0px 670pxpx 100pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"buttons.png",'0px','0px'],
            transform:[]
         },
         {
            id:'Text3',
            display:'none',
            type:'text',
            rect:['35px','427px','598px','68px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or type an answer and click the Submit button.",
            align:"center",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none",""]
         },
         {
            id:'q9_skip_arrow',
            display:'none',
            type:'ellipse',
            rect:['544px','490px','51px','57px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q9_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['545px','492px','48px','57px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect2',
            display:'none',
            type:'rect',
            rect:['229px','501px','209px','48px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Question07box',
            display:'none',
            type:'rect',
            rect:['79px','72px','512','199','undefined','undefined'],
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
               rect:['17','80px','481','151','undefined','undefined'],
               text:"Do you think the Sabbath holds the same significance for Christians as for Jews? Why or why not?",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Question08box',
            display:'none',
            type:'rect',
            rect:['79px','10px','512','199','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[],
            c:[
            {
               id:'RoundRectCopy2',
               type:'rect',
               rect:['0','0','512','266','undefined','undefined'],
               clip:['rect(0px 512px 62px 0px)'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(0,51,102,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","none"],
               transform:[],
               c:[
               {
                  id:'Text2Copy2',
                  type:'text',
                  rect:['17','12','481','45','undefined','undefined'],
                  text:"Reflection Question",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'TextCopy2',
               type:'text',
               rect:['13px','62px','500px','151','undefined','undefined'],
               text:"Consider what your typical Sunday looks like. By the end of your Sunday, how do you typically feel?<br>(Check as many as apply)",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Question09box',
            display:'none',
            type:'rect',
            rect:['79px','72px','512','214px','undefined','undefined'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(158,174,224,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[],
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
                  id:'Text2Copy3',
                  type:'text',
                  rect:['17','12','481','45','undefined','undefined'],
                  text:"Reflection Question",
                  font:['Trebuchet MS, Arial, Helvetica, sans-serif',27,"rgba(255,255,255,1.00)","normal","none","italic"],
                  transform:[]
               }]
            },
            {
               id:'TextCopy3',
               type:'text',
               rect:['20px','72px','481','151','undefined','undefined'],
               text:"What has happened to the Sabbath in American culture since the days of the Puritans? What do you think has changed? Why?",
               font:['Trebuchet MS, Arial, Helvetica, sans-serif',26,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Text4',
            type:'text',
            rect:['176px','341px','345px','71px','auto','auto'],
            text:"1           2           3                4                 5",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',26,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'Text5',
            display:'none',
            type:'text',
            rect:['32px','422px','606px','54px','auto','auto'],
            text:"No answer has been saved.  Click the right arrow again to skip this question, or choose an answer and click the Submit button.",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',18,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'q6_submit_button',
            display:'none',
            type:'rect',
            rect:['217px','502px','225px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q6_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','496px','50px','49px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q6_skip_arrow',
            display:'none',
            type:'ellipse',
            rect:['537px','496px','53px','50px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q7_submit_button',
            display:'none',
            type:'rect',
            rect:['223px','500px','217px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb14',
            display:'none',
            type:'ellipse',
            rect:['82px','493px','51px','55px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb15',
            display:'none',
            type:'ellipse',
            rect:['83px','495px','47px','52px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q7_skip_arrow',
            display:'none',
            type:'ellipse',
            rect:['533px','492px','63px','57px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q7_skip_text',
            display:'none',
            type:'text',
            rect:['30px','442px','609px','44px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question, or type an answer and click the Submit button.",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',23,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'Text6',
            type:'text',
            rect:['131px','211px','500px','38px','auto','auto'],
            text:"A. Like I've spent time with God",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text7',
            type:'text',
            rect:['131px','252px','342px','38px','auto','auto'],
            text:"B. Really rested",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text8',
            type:'text',
            rect:['131px','294px','367px','38px','auto','auto'],
            text:"C. Ready for the work week",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text9',
            type:'text',
            rect:['131px','335px','342px','38px','auto','auto'],
            text:"D. Exhausted from running errands.",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'Text10',
            type:'text',
            rect:['131px','380px','332px','45px','auto','auto'],
            text:"E. Other (fill in your own answer below)",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'q8_skip_check',
            display:'none',
            type:'text',
            rect:['10px','436px','653px','49px','auto','auto'],
            text:"No answer has been saved. Click the arrow again to skip this question or select an answer and click the Submit button.",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',20,"rgba(255,227,0,1.00)","normal","none","normal"]
         },
         {
            id:'q8_skip_arrow',
            display:'none',
            type:'ellipse',
            rect:['539px','488px','56px','60px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'q9_submit_button',
            display:'none',
            type:'rect',
            rect:['224px','500px','222px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q8_skip_go_button',
            display:'none',
            type:'ellipse',
            rect:['540px','492px','54px','54px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'q7_skip_go_button_2',
            display:'none',
            type:'ellipse',
            rect:['542px','497px','49px','53px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(150,118,194,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'sb12',
            display:'none',
            type:'ellipse',
            rect:['82px','497px','49px','49px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'sb13',
            display:'none',
            type:'ellipse',
            rect:['82px','494px','50px','55px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'Text11',
            display:'none',
            type:'text',
            rect:['132px','327px','429px','26px','auto','auto'],
            text:"Type your answer below, then click the Submit button:",
            align:"left",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',17,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'restart',
            display:'none',
            type:'rect',
            rect:['17px','512px','auto','auto','auto','auto']
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
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "top", '0px'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_sb14}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q7_skip_text}": [
            ["style", "top", '442px'],
            ["style", "text-align", 'center'],
            ["style", "width", '609px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "left", '30px'],
            ["style", "font-size", '18px']
         ],
         "${_q7_skip_go_button_2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q9_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text10}": [
            ["style", "top", '358px'],
            ["transform", "scaleX", '0.78'],
            ["transform", "scaleY", '0.78'],
            ["style", "display", 'block'],
            ["style", "height", '31.416666984558px'],
            ["style", "opacity", '0'],
            ["style", "left", '729.77px'],
            ["style", "width", '460px']
         ],
         "${_q6_skip_arrow}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_s1q8etext}": [
            ["transform", "translateY", '39px']
         ],
         "${_question09}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '0px']
         ],
         "${_TextCopy}": [
            ["style", "top", '80.17px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '26px']
         ],
         "${_question08} > form:nth-child(1) > input:nth-child(12)": [
            ["transform", "translateX", '100px']
         ],
         "${_Text3}": [
            ["style", "top", '427px'],
            ["style", "width", '598px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '35px'],
            ["style", "font-size", '18px']
         ],
         "${_question07}": [
            ["transform", "translateX", '490px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0.86'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '317px'],
            ["transform", "scaleY", '0.86']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_question06}": [
            ["transform", "scaleY", '0.73'],
            ["style", "height", '46px'],
            ["transform", "translateX", '169px'],
            ["transform", "scaleX", '0.73'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '318px'],
            ["style", "width", '1467.62px']
         ],
         "${_Question08box}": [
            ["style", "top", '-2.9px'],
            ["transform", "scaleX", '0.78'],
            ["transform", "scaleY", '0.78'],
            ["style", "display", 'none'],
            ["style", "height", '199px'],
            ["style", "opacity", '0'],
            ["style", "left", '677.77px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_q8_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question09} > form:nth-child(1) > textarea:nth-child(1)": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '296px'],
            ["transform", "translateX", '494px']
         ],
         "${_Text6}": [
            ["style", "top", '189px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.78'],
            ["transform", "scaleX", '0.78'],
            ["style", "font-style", 'normal'],
            ["style", "opacity", '0'],
            ["style", "left", '730.07px'],
            ["style", "font-size", '20px']
         ],
         "${_Text}": [
            ["style", "top", '63.5px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '26.72px'],
            ["style", "font-size", '26px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(45,105,190,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ],
         "${_q7_submit_button}": [
            ["style", "top", '499.75px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '222.65px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_q9_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text8}": [
            ["style", "top", '272px'],
            ["transform", "scaleY", '0.78'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '729.77px'],
            ["transform", "scaleX", '0.78']
         ],
         "${_Text4}": [
            ["style", "top", '341px'],
            ["style", "display", 'block'],
            ["transform", "scaleY", '0.73'],
            ["style", "left", '452px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "word-spacing", '34px'],
            ["transform", "scaleX", '0.73']
         ],
         "${_question06} > form:nth-child(1)": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["transform", "scaleY", '1'],
            ["style", "width", '558.62px']
         ],
         "${_RoundRect2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Question06box}": [
            ["style", "top", '72.18px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.76'],
            ["transform", "scaleX", '0.76'],
            ["style", "height", '199px'],
            ["style", "opacity", '0'],
            ["style", "left", '253px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_question08}": [
            ["transform", "scaleY", '0.78'],
            ["transform", "scaleX", '0.78'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '261px'],
            ["transform", "translateX", '599px']
         ],
         "${_sabbath_bar}": [
            ["style", "top", '460px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '1'],
            ["style", "bottom", 'auto'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "clip", [17,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_question06} > form:nth-child(1) > input:nth-child(1)": [
            ["style", "height", '15px'],
            ["transform", "translateY", '1px'],
            ["style", "width", '15px']
         ],
         "${_q6_skip_go_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text9}": [
            ["style", "top", '313px'],
            ["transform", "scaleY", '0.78'],
            ["transform", "scaleX", '0.78'],
            ["style", "opacity", '0'],
            ["style", "left", '729.77px'],
            ["style", "display", 'block']
         ],
         "${_Question07box}": [
            ["style", "top", '72.18px'],
            ["style", "height", '199px'],
            ["transform", "scaleY", '0.87'],
            ["transform", "scaleX", '0.87'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '455.54px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["color", "background-color", 'rgba(0,51,102,1.00)']
         ],
         "${_Text7}": [
            ["style", "top", '230px'],
            ["transform", "scaleY", '0.78'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "left", '729.77px'],
            ["transform", "scaleX", '0.78']
         ],
         "${_Text11}": [
            ["style", "top", '309px'],
            ["style", "height", '26px'],
            ["transform", "scaleY", '0.84'],
            ["transform", "scaleX", '0.84'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '385px'],
            ["style", "width", '429px']
         ],
         "${_question08} > form:nth-child(1) > input:nth-child(4)": [
            ["transform", "translateX", '100px']
         ],
         "${_q8_skip_check}": [
            ["style", "top", '447.25px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_Text5}": [
            ["style", "top", '422px'],
            ["style", "height", '54px'],
            ["style", "text-align", 'center'],
            ["style", "width", '606px'],
            ["color", "color", 'rgba(255,227,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '32px'],
            ["style", "font-size", '18px']
         ],
         "${_q8_skip_arrow}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_q7_skip_arrow}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question08} > form:nth-child(1) > input:nth-child(7)": [
            ["transform", "translateX", '100px']
         ],
         "${_sb13}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_TextCopy2}": [
            ["style", "top", '62.11px'],
            ["style", "font-size", '26px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '12.82px'],
            ["style", "width", '500.44px']
         ],
         "${_question08} > form:nth-child(1) > input:nth-child(10)": [
            ["transform", "translateX", '100px']
         ],
         "${_Question09box}": [
            ["style", "top", '31.43px'],
            ["style", "height", '214.28px'],
            ["transform", "scaleY", '0.98'],
            ["transform", "scaleX", '0.98'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '308.63px'],
            ["color", "background-color", 'rgba(158,174,224,1.00)']
         ],
         "${_question08} > form:nth-child(1) > input:nth-child(1)": [
            ["transform", "translateX", '100px']
         ],
         "${_q6_submit_button}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_sb12}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_TextCopy3}": [
            ["style", "top", '71.5px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '19.78px'],
            ["style", "font-size", '26px']
         ],
         "${_question08} > form:nth-child(1) > textarea:nth-child(13)": [
            ["transform", "translateX", '132px'],
            ["transform", "translateY", '44px']
         ],
         "${_q9_skip_arrow}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_buttons}": [
            ["style", "top", 'auto'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "bottom", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.25'],
            ["style", "clip", [17,670,100,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${_question08} > form:nth-child(1)": [
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-69px'],
            ["transform", "translateX", '4px']
         ],
         "${_question06} > form:nth-child(1) > input:nth-child(3)": [
            ["style", "height", '15px'],
            ["transform", "translateY", '1px'],
            ["transform", "translateX", '60px'],
            ["style", "width", '15px']
         ],
         "${_restart}": [
            ["style", "top", '512px'],
            ["style", "left", '17px'],
            ["style", "display", 'none']
         ],
         "${_RoundRectCopy2}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "left", '0px'],
            ["style", "clip", [0,512,62,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_question06} > form:nth-child(1) > input:nth-child(4)": [
            ["style", "height", '15px'],
            ["transform", "translateY", '1px'],
            ["transform", "translateX", '90px'],
            ["style", "width", '15px']
         ],
         "${_question09} > form:nth-child(1)": [
            ["style", "display", 'none']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '12px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '17px'],
            ["style", "font-size", '27px']
         ],
         "${_sb15}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer']
         ],
         "${_question06} > form:nth-child(1) > input:nth-child(2)": [
            ["style", "height", '15px'],
            ["transform", "translateY", '1px'],
            ["transform", "translateX", '30px'],
            ["style", "width", '15px']
         ],
         "${_question06} > form:nth-child(1) > input:nth-child(5)": [
            ["style", "height", '15px'],
            ["transform", "translateY", '1px'],
            ["transform", "translateX", '120px'],
            ["style", "width", '15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 13500,
         autoPlay: false,
         labels: {
            "q6_skip_check": 3250,
            "q6_next": 3500,
            "q7_skip_check": 5250,
            "q7_skip_go2": 5445,
            "q8_begin": 6250,
            "q8_skip_check": 7250,
            "q8_next_go": 7500,
            "q9_begin": 9000,
            "q9_skip_check": 10250,
            "q9_next_go": 10500
         },
         timeline: [
            { id: "dg94", tween: [ "style", "${_Question07box}", "top", '72.17px', { fromValue: '72.18px'}], position: 5500, duration: 750 },
            { id: "dg188", tween: [ "style", "${_question08} > form:nth-child(1)", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
            { id: "dg191", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { fromValue: 'rgba(45,105,190,1.00)'}], position: 12750, duration: 750 },
            { id: "dg42", tween: [ "style", "${_Text10}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
            { id: "eid174", tween: [ "style", "${_Text9}", "top", '313px', { fromValue: '313px'}], position: 7000, duration: 0 },
            { id: "dg88", tween: [ "style", "${_question07}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "dg89", tween: [ "style", "${_question07}", "display", 'none', { fromValue: 'block'}], position: 6360, duration: 0 },
            { id: "eid180", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '0.25'}], position: 0, duration: 0 },
            { id: "eid179", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 2250, duration: 750 },
            { id: "dg161", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "dg162", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 4594, duration: 406 },
            { id: "dg163", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 5445, duration: 368 },
            { id: "dg164", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 6750, duration: 250 },
            { id: "dg165", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 7500, duration: 250 },
            { id: "dg166", tween: [ "style", "${_buttons}", "opacity", '1', { fromValue: '0.25'}], position: 9500, duration: 500 },
            { id: "dg167", tween: [ "style", "${_buttons}", "opacity", '0.25', { fromValue: '1'}], position: 10500, duration: 500 },
            { id: "dg197", tween: [ "transform", "${_Text4}", "scaleY", '1', { fromValue: '0.73'}], position: 2250, duration: 750 },
            { id: "dg198", tween: [ "transform", "${_Text4}", "scaleY", '0.88', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg59", tween: [ "transform", "${_Text9}", "scaleY", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg38", tween: [ "transform", "${_question08}", "scaleX", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "eid167", tween: [ "style", "${_restart}", "display", 'block', { fromValue: 'none'}], position: 2894, duration: 0 },
            { id: "eid168", tween: [ "style", "${_restart}", "display", 'none', { fromValue: 'block'}], position: 10957, duration: 0 },
            { id: "dg26", tween: [ "style", "${_Question06box}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750 },
            { id: "dg27", tween: [ "style", "${_Question06box}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg4", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
            { id: "dg182", tween: [ "style", "${_q6_submit_button}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "dg183", tween: [ "style", "${_q6_submit_button}", "display", 'none', { fromValue: 'block'}], position: 3355, duration: 0 },
            { id: "dg9", tween: [ "transform", "${_Text8}", "scaleX", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg45", tween: [ "style", "${_Text10}", "left", '131px', { fromValue: '729.77px'}], position: 6250, duration: 750 },
            { id: "dg46", tween: [ "style", "${_Text10}", "left", '-278.88px', { fromValue: '131px'}], position: 7750, duration: 1000 },
            { id: "dg169", tween: [ "style", "${_buttons}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid157", tween: [ "style", "${_q7_skip_text}", "font-size", '18px', { fromValue: '18px'}], position: 5250, duration: 0 },
            { id: "dg189", tween: [ "style", "${_question08} > form:nth-child(1)", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 1000 },
            { id: "eid131", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 4545, duration: 0 },
            { id: "eid137", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "eid156", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'block'}], position: 11300, duration: 0 },
            { id: "dg48", tween: [ "style", "${_q6_skip_arrow}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "dg49", tween: [ "style", "${_q6_skip_arrow}", "display", 'none', { fromValue: 'block'}], position: 3165, duration: 0 },
            { id: "dg21", tween: [ "transform", "${_Question06box}", "scaleY", '1', { fromValue: '0.76'}], position: 2000, duration: 750 },
            { id: "dg22", tween: [ "transform", "${_Question06box}", "scaleY", '0.88', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg47", tween: [ "style", "${_Text10}", "width", '460px', { fromValue: '460px'}], position: 7714, duration: 0 },
            { id: "dg115", tween: [ "transform", "${_question06}", "scaleX", '1', { fromValue: '0.73'}], position: 2250, duration: 750 },
            { id: "dg116", tween: [ "transform", "${_question06}", "scaleX", '0.88', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg12", tween: [ "style", "${_q7_skip_text}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
            { id: "dg13", tween: [ "style", "${_q7_skip_text}", "display", 'none', { fromValue: 'block'}], position: 5350, duration: 0 },
            { id: "dg146", tween: [ "style", "${_question09}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "dg147", tween: [ "style", "${_question09}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
            { id: "dg124", tween: [ "style", "${_Question09box}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg125", tween: [ "style", "${_Question09box}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "dg126", tween: [ "style", "${_Question09box}", "display", 'none', { fromValue: 'block'}], position: 11500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Text11}", "top", '327px', { fromValue: '309px'}], position: 4545, duration: 455 },
            { id: "eid133", tween: [ "style", "${_Text11}", "top", '337px', { fromValue: '327px'}], position: 5500, duration: 500 },
            { id: "eid146", tween: [ "style", "${_Text11}", "top", '269px', { fromValue: '275px'}], position: 9000, duration: 750 },
            { id: "dg53", tween: [ "style", "${_sabbath_bar}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg119", tween: [ "transform", "${_question06}", "translateY", '318px', { fromValue: '318px'}], position: 1935, duration: 0 },
            { id: "dg204", tween: [ "style", "${_Text4}", "left", '176px', { fromValue: '452px'}], position: 2250, duration: 750 },
            { id: "dg205", tween: [ "style", "${_Text4}", "left", '-12px', { fromValue: '176px'}], position: 3500, duration: 750 },
            { id: "dg135", tween: [ "style", "${_Question08box}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750 },
            { id: "dg136", tween: [ "style", "${_Question08box}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 1000 },
            { id: "dg172", tween: [ "style", "${_question09} > form:nth-child(1)", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "dg152", tween: [ "transform", "${_question09} > form:nth-child(1) > textarea:nth-child(1)", "translateY", '296px', { fromValue: '296px'}], position: 9750, duration: 0 },
            { id: "dg181", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
            { id: "dg61", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750 },
            { id: "dg62", tween: [ "style", "${_Text9}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 1000 },
            { id: "dg101", tween: [ "style", "${_Question07box}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 750 },
            { id: "dg102", tween: [ "style", "${_Question07box}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 750 },
            { id: "dg103", tween: [ "style", "${_Question07box}", "left", '79px', { fromValue: '455.54px'}], position: 4000, duration: 750 },
            { id: "dg104", tween: [ "style", "${_Question07box}", "left", '-308.65px', { fromValue: '79px'}], position: 5500, duration: 750 },
            { id: "eid128", tween: [ "transform", "${_Text11}", "scaleY", '1', { fromValue: '0.84'}], position: 4545, duration: 455 },
            { id: "eid135", tween: [ "transform", "${_Text11}", "scaleY", '0.88', { fromValue: '1'}], position: 5500, duration: 500 },
            { id: "eid152", tween: [ "transform", "${_Text11}", "scaleY", '1', { fromValue: '0.976'}], position: 9000, duration: 750 },
            { id: "dg41", tween: [ "style", "${_Text10}", "height", '31.416666984558px', { fromValue: '31.416666984558px'}], position: 7714, duration: 0 },
            { id: "eid166", tween: [ "style", "${_q8_skip_check}", "top", '447.25px', { fromValue: '447.25px'}], position: 7250, duration: 0 },
            { id: "dg81", tween: [ "transform", "${_question07}", "scaleY", '1', { fromValue: '0.86'}], position: 4250, duration: 750 },
            { id: "dg82", tween: [ "transform", "${_question07}", "scaleY", '0.82', { fromValue: '1'}], position: 5500, duration: 750 },
            { id: "dg202", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 750 },
            { id: "dg203", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg153", tween: [ "transform", "${_question09} > form:nth-child(1) > textarea:nth-child(1)", "translateX", '122px', { fromValue: '494px'}], position: 9000, duration: 750 },
            { id: "eid164", tween: [ "style", "${_q8_skip_check}", "font-size", '18px', { fromValue: '18px'}], position: 7250, duration: 0 },
            { id: "dg68", tween: [ "transform", "${_Text7}", "scaleY", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg85", tween: [ "style", "${_question07}", "opacity", '1', { fromValue: '0'}], position: 4545, duration: 455 },
            { id: "dg86", tween: [ "style", "${_question07}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 750 },
            { id: "dg74", tween: [ "transform", "${_Text7}", "scaleX", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg117", tween: [ "style", "${_question06}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 750 },
            { id: "dg118", tween: [ "style", "${_question06}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg142", tween: [ "style", "${_q8_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
            { id: "dg143", tween: [ "style", "${_q8_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 7385, duration: 0 },
            { id: "dg206", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 4594, duration: 0 },
            { id: "dg105", tween: [ "transform", "${_Question07box}", "scaleX", '1', { fromValue: '0.87'}], position: 4000, duration: 750 },
            { id: "dg106", tween: [ "transform", "${_Question07box}", "scaleX", '0.82', { fromValue: '1'}], position: 5500, duration: 750 },
            { id: "dg14", tween: [ "style", "${_q7_skip_go_button_2}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
            { id: "dg15", tween: [ "style", "${_q7_skip_go_button_2}", "display", 'none', { fromValue: 'block'}], position: 5350, duration: 0 },
            { id: "dg72", tween: [ "style", "${_Text7}", "left", '131px', { fromValue: '729.77px'}], position: 6250, duration: 750 },
            { id: "dg73", tween: [ "style", "${_Text7}", "left", '-278.88px', { fromValue: '131px'}], position: 7750, duration: 1000 },
            { id: "dg1", tween: [ "style", "${_q9_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
            { id: "dg2", tween: [ "style", "${_q9_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 10346, duration: 0 },
            { id: "dg194", tween: [ "style", "${_q7_submit_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg195", tween: [ "style", "${_q7_submit_button}", "display", 'block', { fromValue: 'none'}], position: 4825, duration: 0 },
            { id: "dg196", tween: [ "style", "${_q7_submit_button}", "display", 'none', { fromValue: 'block'}], position: 5350, duration: 0 },
            { id: "dg19", tween: [ "style", "${_RoundRect2}", "display", 'block', { fromValue: 'none'}], position: 9891, duration: 0 },
            { id: "dg20", tween: [ "style", "${_RoundRect2}", "display", 'none', { fromValue: 'block'}], position: 10421, duration: 0 },
            { id: "eid130", tween: [ "style", "${_Text11}", "opacity", '1', { fromValue: '0'}], position: 4545, duration: 455 },
            { id: "eid136", tween: [ "style", "${_Text11}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
            { id: "eid150", tween: [ "style", "${_Text11}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 750 },
            { id: "eid155", tween: [ "style", "${_Text11}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 550 },
            { id: "dg176", tween: [ "transform", "${_Text6}", "scaleX", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg5", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750 },
            { id: "dg6", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 1000 },
            { id: "dg154", tween: [ "style", "${_q9_skip_arrow}", "display", 'block', { fromValue: 'none'}], position: 9891, duration: 0 },
            { id: "dg155", tween: [ "style", "${_q9_skip_arrow}", "display", 'none', { fromValue: 'block'}], position: 10156, duration: 0 },
            { id: "dg28", tween: [ "style", "${_Question06box}", "left", '79px', { fromValue: '253px'}], position: 2000, duration: 750 },
            { id: "dg29", tween: [ "style", "${_Question06box}", "left", '-109px', { fromValue: '79px'}], position: 3500, duration: 750 },
            { id: "dg65", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
            { id: "dg7", tween: [ "style", "${_Text8}", "left", '131px', { fromValue: '729.77px'}], position: 6250, duration: 750 },
            { id: "dg8", tween: [ "style", "${_Text8}", "left", '-278.88px', { fromValue: '131px'}], position: 7750, duration: 1000 },
            { id: "dg150", tween: [ "style", "${_question09} > form:nth-child(1) > textarea:nth-child(1)", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0 },
            { id: "dg133", tween: [ "transform", "${_Question08box}", "scaleY", '0.85', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg16", tween: [ "transform", "${_question06} > form:nth-child(1)", "scaleX", '0.88', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "eid126", tween: [ "transform", "${_Text11}", "scaleX", '1', { fromValue: '0.84'}], position: 4545, duration: 455 },
            { id: "eid134", tween: [ "transform", "${_Text11}", "scaleX", '0.88', { fromValue: '1'}], position: 5500, duration: 500 },
            { id: "eid151", tween: [ "transform", "${_Text11}", "scaleX", '1', { fromValue: '0.976'}], position: 9000, duration: 750 },
            { id: "dg69", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
            { id: "dg177", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750 },
            { id: "dg178", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 1000 },
            { id: "dg30", tween: [ "transform", "${_Question06box}", "scaleX", '1', { fromValue: '0.76'}], position: 2000, duration: 750 },
            { id: "dg31", tween: [ "transform", "${_Question06box}", "scaleX", '0.88', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "eid172", tween: [ "style", "${_Text6}", "top", '189px', { fromValue: '189px'}], position: 7000, duration: 0 },
            { id: "dg137", tween: [ "style", "${_Question08box}", "left", '79px', { fromValue: '677.77px'}], position: 6250, duration: 750 },
            { id: "dg138", tween: [ "style", "${_Question08box}", "left", '-330.88px', { fromValue: '79px'}], position: 7750, duration: 1000 },
            { id: "dg192", tween: [ "style", "${_q8_skip_check}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
            { id: "dg193", tween: [ "style", "${_q8_skip_check}", "display", 'none', { fromValue: 'block'}], position: 7385, duration: 0 },
            { id: "dg134", tween: [ "transform", "${_Question08box}", "scaleX", '0.85', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg10", tween: [ "style", "${_sb14}", "display", 'block', { fromValue: 'none'}], position: 6853, duration: 0 },
            { id: "dg11", tween: [ "style", "${_sb14}", "display", 'none', { fromValue: 'block'}], position: 7385, duration: 0 },
            { id: "dg170", tween: [ "style", "${_q9_submit_button}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "dg171", tween: [ "style", "${_q9_submit_button}", "display", 'none', { fromValue: 'block'}], position: 7385, duration: 0 },
            { id: "dg148", tween: [ "style", "${_question09}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 750 },
            { id: "dg151", tween: [ "style", "${_question09} > form:nth-child(1) > textarea:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 750 },
            { id: "dg43", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750 },
            { id: "dg44", tween: [ "style", "${_Text10}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 1000 },
            { id: "eid175", tween: [ "style", "${_Text10}", "top", '358px', { fromValue: '358px'}], position: 7000, duration: 0 },
            { id: "dg175", tween: [ "transform", "${_Text6}", "scaleY", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg200", tween: [ "transform", "${_Text4}", "scaleX", '1', { fromValue: '0.73'}], position: 2250, duration: 750 },
            { id: "dg201", tween: [ "transform", "${_Text4}", "scaleX", '0.88', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg149", tween: [ "transform", "${_question09}", "translateX", '-489px', { fromValue: '0px'}], position: 10750, duration: 750 },
            { id: "dg121", tween: [ "style", "${_Question09box}", "top", '31.43px', { fromValue: '31.43px'}], position: 9750, duration: 0 },
            { id: "dg97", tween: [ "style", "${_Question07box}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg98", tween: [ "style", "${_Question07box}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "dg99", tween: [ "style", "${_Question07box}", "display", 'none', { fromValue: 'block'}], position: 6250, duration: 0 },
            { id: "dg100", tween: [ "style", "${_Question07box}", "display", 'none', { fromValue: 'none'}], position: 6360, duration: 0 },
            { id: "dg83", tween: [ "transform", "${_question07}", "scaleX", '1', { fromValue: '0.86'}], position: 4250, duration: 750 },
            { id: "dg84", tween: [ "transform", "${_question07}", "scaleX", '0.82', { fromValue: '1'}], position: 5500, duration: 750 },
            { id: "dg77", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 3165, duration: 0 },
            { id: "dg78", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 3355, duration: 0 },
            { id: "dg139", tween: [ "style", "${_Question08box}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg140", tween: [ "style", "${_Question08box}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
            { id: "dg141", tween: [ "style", "${_Question08box}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
            { id: "dg66", tween: [ "style", "${_q8_skip_arrow}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
            { id: "dg67", tween: [ "style", "${_q8_skip_arrow}", "display", 'none', { fromValue: 'block'}], position: 7105, duration: 0 },
            { id: "dg127", tween: [ "style", "${_Question09box}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 750 },
            { id: "dg128", tween: [ "style", "${_Question09box}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 750 },
            { id: "dg120", tween: [ "style", "${_question06}", "width", '1467.62px', { fromValue: '1467.62px'}], position: 1935, duration: 0 },
            { id: "dg40", tween: [ "transform", "${_Text10}", "scaleY", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg60", tween: [ "transform", "${_Text9}", "scaleX", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg92", tween: [ "style", "${_sb13}", "display", 'block', { fromValue: 'none'}], position: 4920, duration: 0 },
            { id: "dg93", tween: [ "style", "${_sb13}", "display", 'none', { fromValue: 'block'}], position: 5393, duration: 0 },
            { id: "dg173", tween: [ "style", "${_sb15}", "display", 'block', { fromValue: 'none'}], position: 9891, duration: 0 },
            { id: "dg174", tween: [ "style", "${_sb15}", "display", 'none', { fromValue: 'block'}], position: 10421, duration: 0 },
            { id: "dg107", tween: [ "style", "${_question06}", "display", 'block', { fromValue: 'none'}], position: 1935, duration: 0 },
            { id: "dg108", tween: [ "style", "${_question06}", "display", 'none', { fromValue: 'block'}], position: 4500, duration: 0 },
            { id: "dg122", tween: [ "transform", "${_Question09box}", "scaleY", '1', { fromValue: '0.98'}], position: 9000, duration: 750 },
            { id: "dg123", tween: [ "transform", "${_Question09box}", "scaleY", '0.57', { fromValue: '1'}], position: 10750, duration: 750 },
            { id: "dg3", tween: [ "transform", "${_Text8}", "scaleY", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg51", tween: [ "style", "${_sabbath_bar}", "top", '552.59px', { fromValue: '460px'}], position: 11750, duration: 1000 },
            { id: "dg113", tween: [ "transform", "${_question06}", "scaleY", '1', { fromValue: '0.73'}], position: 2250, duration: 750 },
            { id: "dg114", tween: [ "transform", "${_question06}", "scaleY", '0.88', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg144", tween: [ "style", "${_sb12}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "dg145", tween: [ "style", "${_sb12}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
            { id: "dg17", tween: [ "style", "${_question06} > form:nth-child(1)", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg95", tween: [ "transform", "${_Question07box}", "scaleY", '1', { fromValue: '0.87'}], position: 4000, duration: 750 },
            { id: "dg96", tween: [ "transform", "${_Question07box}", "scaleY", '0.82', { fromValue: '1'}], position: 5500, duration: 750 },
            { id: "dg109", tween: [ "style", "${_question06}", "height", '46px', { fromValue: '46px'}], position: 1935, duration: 0 },
            { id: "dg70", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750 },
            { id: "dg71", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 1000 },
            { id: "dg63", tween: [ "style", "${_Text9}", "left", '131px', { fromValue: '729.77px'}], position: 6250, duration: 750 },
            { id: "dg64", tween: [ "style", "${_Text9}", "left", '-278.88px', { fromValue: '131px'}], position: 7750, duration: 1000 },
            { id: "dg87", tween: [ "transform", "${_question07}", "translateY", '354px', { fromValue: '317px'}], position: 4250, duration: 750 },
            { id: "dg190", tween: [ "transform", "${_question08} > form:nth-child(1)", "translateX", '-406px', { fromValue: '4px'}], position: 7750, duration: 1000 },
            { id: "eid171", tween: [ "style", "${_Text8}", "top", '272px', { fromValue: '272px'}], position: 7000, duration: 0 },
            { id: "dg90", tween: [ "style", "${_q7_skip_arrow}", "display", 'block', { fromValue: 'none'}], position: 4920, duration: 0 },
            { id: "dg91", tween: [ "style", "${_q7_skip_arrow}", "display", 'none', { fromValue: 'block'}], position: 5110, duration: 0 },
            { id: "dg23", tween: [ "style", "${_Question06box}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "dg24", tween: [ "style", "${_Question06box}", "display", 'block', { fromValue: 'none'}], position: 1935, duration: 0 },
            { id: "dg25", tween: [ "style", "${_Question06box}", "display", 'none', { fromValue: 'block'}], position: 4295, duration: 0 },
            { id: "dg32", tween: [ "transform", "${_question08}", "scaleY", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg131", tween: [ "transform", "${_Question09box}", "scaleX", '1', { fromValue: '0.98'}], position: 9000, duration: 750 },
            { id: "dg132", tween: [ "transform", "${_Question09box}", "scaleX", '0.57', { fromValue: '1'}], position: 10750, duration: 750 },
            { id: "eid169", tween: [ "style", "${_Question08box}", "top", '-2.9px', { fromValue: '-2.9px'}], position: 7000, duration: 0 },
            { id: "eid173", tween: [ "style", "${_Text7}", "top", '230px', { fromValue: '230px'}], position: 7000, duration: 0 },
            { id: "eid122", tween: [ "style", "${_Text11}", "left", '132px', { fromValue: '385px'}], position: 4545, duration: 455 },
            { id: "eid132", tween: [ "style", "${_Text11}", "left", '-101px', { fromValue: '132px'}], position: 5500, duration: 500 },
            { id: "eid145", tween: [ "style", "${_Text11}", "left", '122px', { fromValue: '438px'}], position: 9000, duration: 750 },
            { id: "eid154", tween: [ "style", "${_Text11}", "left", '-234px', { fromValue: '122px'}], position: 10750, duration: 550 },
            { id: "dg36", tween: [ "style", "${_question08}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750 },
            { id: "eid170", tween: [ "transform", "${_question08} > form:nth-child(1)", "translateY", '-69px', { fromValue: '-69px'}], position: 7000, duration: 0 },
            { id: "dg75", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 10250, duration: 0 },
            { id: "dg76", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 10346, duration: 0 },
            { id: "dg199", tween: [ "style", "${_Text4}", "word-spacing", '34px', { fromValue: '34px'}], position: 3704, duration: 0 },
            { id: "dg33", tween: [ "transform", "${_question08}", "translateX", '0px', { fromValue: '599px'}], position: 6250, duration: 750 },
            { id: "dg110", tween: [ "transform", "${_question06}", "translateX", '445px', { fromValue: '169px'}], position: 1935, duration: 315 },
            { id: "dg111", tween: [ "transform", "${_question06}", "translateX", '169px', { fromValue: '445px'}], position: 2250, duration: 750 },
            { id: "dg112", tween: [ "transform", "${_question06}", "translateX", '-395px', { fromValue: '169px'}], position: 3500, duration: 750 },
            { id: "dg18", tween: [ "transform", "${_question06} > form:nth-child(1)", "scaleY", '0.88', { fromValue: '1'}], position: 3500, duration: 750 },
            { id: "dg34", tween: [ "style", "${_question08}", "display", 'block', { fromValue: 'none'}], position: 6250, duration: 0 },
            { id: "dg35", tween: [ "style", "${_question08}", "display", 'none', { fromValue: 'block'}], position: 8750, duration: 0 },
            { id: "dg158", tween: [ "style", "${_buttons}", "bottom", '-92.59px', { fromValue: '0px'}], position: 11750, duration: 1000 },
            { id: "dg79", tween: [ "transform", "${_question07}", "translateX", '130px', { fromValue: '490px'}], position: 4250, duration: 750 },
            { id: "dg80", tween: [ "transform", "${_question07}", "translateX", '-258px', { fromValue: '130px'}], position: 5500, duration: 750 },
            { id: "dg37", tween: [ "transform", "${_question08}", "translateY", '261px', { fromValue: '261px'}], position: 7000, duration: 0 },
            { id: "dg39", tween: [ "transform", "${_Text10}", "scaleX", '1', { fromValue: '0.78'}], position: 6250, duration: 750 },
            { id: "dg179", tween: [ "style", "${_Text6}", "left", '131.3px', { fromValue: '730.07px'}], position: 6250, duration: 750 },
            { id: "dg180", tween: [ "style", "${_Text6}", "left", '-278.58px', { fromValue: '131.3px'}], position: 7750, duration: 1000 },
            { id: "dg129", tween: [ "style", "${_Question09box}", "left", '79px', { fromValue: '308.63px'}], position: 9000, duration: 750 },
            { id: "dg130", tween: [ "style", "${_Question09box}", "left", '-364.21px', { fromValue: '79px'}], position: 10750, duration: 750 },
            { id: "dg57", tween: [ "style", "${_q6_skip_go_button}", "display", 'block', { fromValue: 'none'}], position: 3165, duration: 0 },
            { id: "dg58", tween: [ "style", "${_q6_skip_go_button}", "display", 'none', { fromValue: 'block'}], position: 3355, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-899741");
