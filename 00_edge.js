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
            id:'Sabbath_image2',
            type:'image',
            rect:['-268px','-601px','1804px','1200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Sabbath%20image.jpg",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['202','51','291','61','undefined','undefined'],
            text:"The Sabbath",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',52,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'start_text',
            type:'text',
            rect:['268','209','0','0','undefined','undefined'],
            cursor:['pointer'],
            text:"Click to begin Lesson 1:<br><i>Importance of the Sabbath</i>",
            align:"right",
            font:['Trebuchet MS, Arial, Helvetica, sans-serif',52,"rgba(215,218,184,1)","normal","none","normal"],
            transform:[]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_start_text}": [
            ["style", "top", '209px'],
            ["style", "text-align", 'right'],
            ["style", "opacity", '0'],
            ["style", "left", '268px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '31px']
         ],
         "${_Sabbath_image2}": [
            ["style", "top", '-628px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '1200px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '1804px']
         ],
         "${_Text}": [
            ["style", "top", '55px'],
            ["style", "width", '291px'],
            ["style", "text-decoration", 'none'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '573px'],
            ["style", "font-size", '52px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,51,102,1.00)'],
            ["style", "width", '670px'],
            ["style", "height", '560px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6960,
         autoPlay: true,
         timeline: [
            { id: "eid36", tween: [ "style", "${_start_text}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 750, easing: "easeOutQuad" },
            { id: "eid37", tween: [ "style", "${_start_text}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 360, easing: "easeOutQuad" },
            { id: "eid2", tween: [ "style", "${_Sabbath_image2}", "left", '-712.94px', { fromValue: '0px'}], position: 500, duration: 1500 },
            { id: "eid30", tween: [ "style", "${_Sabbath_image2}", "left", '-1414.89px', { fromValue: '-712.94px'}], position: 4300, duration: 1200 },
            { id: "eid27", tween: [ "style", "${_Sabbath_image2}", "height", '1802.4955610795px', { fromValue: '1200px'}], position: 4300, duration: 1200 },
            { id: "eid31", tween: [ "style", "${_Sabbath_image2}", "width", '2709.7516601562px', { fromValue: '1804px'}], position: 4300, duration: 1200 },
            { id: "eid1", tween: [ "style", "${_start_text}", "font-size", '31px', { fromValue: '31px'}], position: 3500, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Sabbath_image2}", "top", '-325px', { fromValue: '-628px'}], position: 500, duration: 1500 },
            { id: "eid28", tween: [ "style", "${_Sabbath_image2}", "top", '-460.56px', { fromValue: '-325px'}], position: 4300, duration: 1200 },
            { id: "eid26", tween: [ "color", "${_Text}", "color", 'rgba(171,169,112,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1290, duration: 460, easing: "easeOutQuad" },
            { id: "eid24", tween: [ "color", "${_Text}", "color", 'rgba(215,218,184,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,169,112,1.00)'}], position: 1750, duration: 375, easing: "easeOutQuad" },
            { id: "eid49", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,218,184,1)'}], position: 5000, duration: 750, easing: "easeOutQuad" },
            { id: "eid29", tween: [ "style", "${_Text}", "left", '189px', { fromValue: '573px'}], position: 750, duration: 1250, easing: "easeOutQuad" },
            { id: "eid48", tween: [ "style", "${_Text}", "left", '185px', { fromValue: '189px'}], position: 5000, duration: 1070, easing: "easeInQuad" },
            { id: "eid20", tween: [ "style", "${_Text}", "font-size", '52px', { fromValue: '52px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid18", tween: [ "style", "${_Text}", "font-size", '52px', { fromValue: '52px'}], position: 1750, duration: 0, easing: "easeOutQuad" },
            { id: "eid22", tween: [ "style", "${_Text}", "font-size", '52px', { fromValue: '52px'}], position: 2125, duration: 0, easing: "easeOutQuad" },
            { id: "eid5", tween: [ "transform", "${_Sabbath_image2}", "scaleX", '0.55', { fromValue: '1'}], position: 500, duration: 1500 },
            { id: "eid12", tween: [ "transform", "${_Sabbath_image2}", "scaleX", '0.55', { fromValue: '0.55'}], position: 4300, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_Sabbath_image2}", "scaleY", '0.55', { fromValue: '1'}], position: 500, duration: 1500 },
            { id: "eid14", tween: [ "transform", "${_Sabbath_image2}", "scaleY", '0.55', { fromValue: '0.55'}], position: 4300, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Sabbath_image2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500 },
            { id: "eid25", tween: [ "style", "${_Sabbath_image2}", "opacity", '0', { fromValue: '1'}], position: 4300, duration: 1200 },
            { id: "eid32", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1610, duration: 445, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 6295, duration: 275, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,51,102,1.00)'}], position: 6570, duration: 390, easing: "easeInQuad" },
            { id: "eid52", tween: [ "style", "${_Text}", "top", '260px', { fromValue: '55px'}], position: 5000, duration: 1070, easing: "easeInQuad" }         ]
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
})(jQuery, AdobeEdge, "EDGE-5219561");
