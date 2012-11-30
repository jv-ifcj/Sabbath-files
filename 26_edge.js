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
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sabbath_bar.png",'0px','0px']
         },
         {
            id:'buttons_sans',
            type:'image',
            rect:['0','460','670px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buttons_sans.png",'0px','0px']
         },
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['28px','115px','609px','272px','auto','auto'],
            text:"Rabbi Eckstein mentioned that during the <i>Shabbat</i>, special prayers based on the psalms are said, including a psalm very familiar to Christians and Jews alike, Psalm 23.",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Text2',
            display:'none',
            type:'text',
            rect:['39px','276px','572px','112px','auto','auto'],
            text:"For more on why Psalm 23, in particular, is recited during the Sabbath meals, link to this page from Rabbi Eckstein's book, Holy Songs of Israel",
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[],[],[],['0.68','0.68']]
         },
         {
            id:'RoundRect',
            display:'none',
            type:'rect',
            rect:['142px','398px','377px','58px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(0,51,102,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[],[],[],['0.68','0.68']],
            c:[
            {
               id:'Text3',
               display:'none',
               type:'text',
               rect:['17px','15px','345px','31px','auto','auto'],
               opacity:1,
               text:"Click Here for More Information",
               align:"center",
               font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',24,"rgba(255,255,255,1)","normal","none","normal"],
               transform:[]
            }]
         },
         {
            id:'Rectangle',
            display:'none',
            type:'rect',
            rect:['0px','0px','670px','560px','auto','auto'],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'next_play',
            type:'ellipse',
            rect:['540px','496px','51px','51px','auto','auto'],
            cursor:['pointer'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(0,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '398px'],
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["transform", "scaleY", '0.68'],
            ["transform", "scaleX", '0.68'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '142px'],
            ["style", "width", '377px']
         ],
         "${_Text3}": [
            ["style", "top", '15px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '17px'],
            ["style", "width", '345px']
         ],
         "${_next_play}": [
            ["style", "top", '496px'],
            ["style", "opacity", '0'],
            ["style", "left", '540px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["style", "top", '276px'],
            ["style", "text-align", 'center'],
            ["style", "height", '112px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.68'],
            ["transform", "scaleX", '0.68']
         ],
         "body > br:nth-child(1)": [
            ["transform", "scaleX", '0.33'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.33'],
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["style", "top", '253px'],
            ["transform", "scaleX", '0.67'],
            ["transform", "scaleY", '0.67'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '28px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "body > iframe:nth-child(2)": [
            ["transform", "translateX", '10px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.33'],
            ["transform", "scaleX", '0.33']
         ],
         "${_visit}": [
            ["transform", "translateX", '28px'],
            ["transform", "scaleY", '0.33'],
            ["transform", "scaleX", '0.33'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "width", '603px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '560px'],
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '670px']
         ],
         "${_sabbath_bar}": [
            ["style", "display", 'block'],
            ["style", "opacity", '1']
         ],
         "${_buttons_sans}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0.25']
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
            { id: "eid74", tween: [ "style", "${_sabbath_bar}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 750, easing: "easeInQuad" },
            { id: "eid28", tween: [ "transform", "body > br:nth-child(1)", "scaleY", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid42", tween: [ "transform", "body > br:nth-child(1)", "scaleY", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid26", tween: [ "transform", "body > br:nth-child(1)", "scaleX", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid41", tween: [ "transform", "body > br:nth-child(1)", "scaleX", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid11", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid16", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid32", tween: [ "transform", "${_visit}", "scaleY", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid44", tween: [ "transform", "${_visit}", "scaleY", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid55", tween: [ "transform", "${_Text2}", "scaleX", '1', { fromValue: '0.68'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid76", tween: [ "style", "${_sabbath_bar}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid67", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 8250, duration: 0, easing: "easeOutQuad" },
            { id: "eid38", tween: [ "style", "${_visit}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid47", tween: [ "style", "${_visit}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid22", tween: [ "transform", "body > iframe:nth-child(2)", "scaleX", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid39", tween: [ "transform", "body > iframe:nth-child(2)", "scaleX", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid7", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0.67'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid14", tween: [ "transform", "${_Text}", "scaleX", '0.44', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid30", tween: [ "transform", "${_visit}", "scaleX", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid43", tween: [ "transform", "${_visit}", "scaleX", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid80", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 9250, duration: 750, easing: "easeInQuad" },
            { id: "eid59", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid66", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 750, easing: "easeInQuad" },
            { id: "eid36", tween: [ "style", "body > br:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid46", tween: [ "style", "body > br:nth-child(1)", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid72", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid69", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 8000, duration: 0, easing: "easeOutQuad" },
            { id: "eid61", tween: [ "style", "${_Text2}", "top", '179px', { fromValue: '276px'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid63", tween: [ "style", "${_Text2}", "top", '88px', { fromValue: '179px'}], position: 7250, duration: 750, easing: "easeInQuad" },
            { id: "eid34", tween: [ "style", "body > iframe:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid45", tween: [ "style", "body > iframe:nth-child(2)", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid24", tween: [ "transform", "body > iframe:nth-child(2)", "scaleY", '1', { fromValue: '0.33'}], position: 3500, duration: 1000, easing: "easeInQuad" },
            { id: "eid40", tween: [ "transform", "body > iframe:nth-child(2)", "scaleY", '0.49', { fromValue: '1'}], position: 4500, duration: 1000, easing: "easeInQuad" },
            { id: "eid5", tween: [ "style", "${_Text}", "top", '115px', { fromValue: '253px'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid13", tween: [ "style", "${_Text}", "top", '39px', { fromValue: '115px'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid51", tween: [ "transform", "${_RoundRect}", "scaleX", '1', { fromValue: '0.68'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid60", tween: [ "style", "${_RoundRect}", "top", '301px', { fromValue: '398px'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid62", tween: [ "style", "${_RoundRect}", "top", '210px', { fromValue: '301px'}], position: 7500, duration: 750, easing: "easeInQuad" },
            { id: "eid52", tween: [ "transform", "${_RoundRect}", "scaleY", '1', { fromValue: '0.68'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid12", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeOutQuad" },
            { id: "eid17", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeInQuad" },
            { id: "eid56", tween: [ "transform", "${_Text2}", "scaleY", '1', { fromValue: '0.68'}], position: 6250, duration: 750, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
            { id: "eid9", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0.67'}], position: 1000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid15", tween: [ "transform", "${_Text}", "scaleY", '0.44', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeInQuad" },
            { id: "eid57", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 750, easing: "easeOutQuad" },
            { id: "eid64", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 750, easing: "easeInQuad" },
            { id: "eid81", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 1500, duration: 500 },
            { id: "eid83", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 2000, duration: 500 },
            { id: "eid85", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 4000, duration: 500 },
            { id: "eid87", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 4500, duration: 500 },
            { id: "eid89", tween: [ "style", "${_buttons_sans}", "opacity", '1', { fromValue: '0.25'}], position: 6750, duration: 500 },
            { id: "eid90", tween: [ "style", "${_buttons_sans}", "opacity", '0.25', { fromValue: '1'}], position: 7250, duration: 1250 },
            { id: "eid73", tween: [ "style", "${_buttons_sans}", "opacity", '0', { fromValue: '0.25'}], position: 8500, duration: 750, easing: "easeInQuad" },
            { id: "eid3", tween: [ "style", "body > br:nth-child(1)", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "body > br:nth-child(1)", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeInQuad" },
            { id: "eid50", tween: [ "style", "body > br:nth-child(1)", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeInQuad" },
            { id: "eid2", tween: [ "style", "body > iframe:nth-child(2)", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "body > iframe:nth-child(2)", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeInQuad" },
            { id: "eid49", tween: [ "style", "body > iframe:nth-child(2)", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeInQuad" },
            { id: "eid1", tween: [ "style", "${_visit}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_visit}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0, easing: "easeInQuad" },
            { id: "eid48", tween: [ "style", "${_visit}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "easeInQuad" },
            { id: "eid75", tween: [ "style", "${_buttons_sans}", "display", 'none', { fromValue: 'block'}], position: 9250, duration: 0, easing: "easeInQuad" },
            { id: "eid77", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid78", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 9250, duration: 0, easing: "easeInQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-10331621");
