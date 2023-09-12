import photo from "../assets/cover.png"
export interface Article{
    id:string;
    title:string;
    date:string;
    shortDescription:string;
    duration:string;
    tags:string[],
    image:any;
    metadata:{
        created:string,
        modified:string,
        views:number
    }
}

let ARTICLES : Article[] =[
    {
        id:"7yu2782vss930",
        date:"10-02-2021",
        shortDescription:"The official name of the 6th Edition of ECMAScript is ECMAScript 2015, as it was finalized in June, 2015. However, in general, people seem to refer to it simply as ES6. Previously, you had to use a transpiler like Babel to even get started with ES6. Now, it seems that just about....",
        duration:"2 min read",
        image:photo,
        tags:["JAVASCRIPT", "DESIGN"],
        title:"Bye-bye useState & useEffect: Revolutionizing React Development!",
        metadata:{
            created:"10-02-2021T03:20:50",
            modified:"10-02-2021T03:20:50",
            views:5000
        }
    },
    {
        id:"gr84hh38a8208e3xj83j8d93",
        date:"10-02-2021",
        shortDescription:"To try using the logging functions in the Console: Open the demo web page Console messages examples: log, info, error, and warn in a new window or tab. Press Ctrl + Shift + J. And by the way you'll get it straight in the path of making your codebase more likely to clean..",
        duration:"2 min read",
        image:photo,
        tags:["JAVASCRIPT", "DESIGN", "PROGRAMMING"],
        title:"How to console.log anything?",
        metadata:{
            created:"02-02-2021T03:20:50",
            modified:"02-12-2021T03:20:50",
            views:5060
        }
    },
    {
        id:"great-title-with-css3",
        date:"10-02-2021",
        shortDescription:"Description goes here to let them know what this article is actually talking about and give some direction to reader and user for a better experience using  this plateform",
        duration:"4 min read",
        image:photo,
        tags:["JAVASCRIPT", "DESIGN"],
        title:"Effectiveness vs Performance",
        metadata:{
            created:"05-02-2021T03:20:50",
            modified:"08-02-2022T03:20:50",
            views:40800
        }
    },
    // {id:"great-title-with-css4", date:"10-02-2021", description:"Description goes here to let them knwo whta this article is actually talking about and give some direction to reader and user for a better experience using  this plateform", duration:"2 min read", image:photo, tag:"Something", title:"Great title with ES6"},
    // {id:"great-title-with-css5", date:"10-02-2021", description:"Description goes here to let them knwo whta this article is actually talking about and give some direction to reader and user for a better experience using  this plateform", duration:"2 min read", image:photo, tag:"Something", title:"Great title with ES6"},
    // {id:"great-title-with-css7", date:"10-02-2021", description:"Description goes here to let them knwo whta this article is actually talking about and give some direction to reader and user for a better experience using  this plateform", duration:"2 min read", image:photo, tag:"Something", title:"Great title with ES6"},
    // {id:"great-title-with-css8", date:"10-02-2021", description:"Description goes here to let them knwo whta this article is actually talking about and give some direction to reader and user for a better experience using  this plateform", duration:"2 min read", image:photo, tag:"Something", title:"Great title with ES6"},
    // {id:"great-title-with-css9", date:"10-02-2021", description:"Description goes here to let them knwo whta this article is actually talking about and give some direction to reader and user for a better experience using  this plateform", duration:"2 min read", image:photo, tag:"Something", title:"Great title with ES6"},
    // {id:"great-title-with-css10", date:"10-02-2021", description:"Description goes here to let them knwo whta this article is actually talking about and give some direction to reader and user for a better experience using  this plateform", duration:"2 min read", image:photo, tag:"Something", title:"Great title with ES6"}

]

export { ARTICLES, }
