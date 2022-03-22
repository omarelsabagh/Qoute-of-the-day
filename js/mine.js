
/*
var quoteobject1 = {quote1 :`"Be yourself; everyone else is already taken."` , author1 :`-- Oscar Wilde`

}
var quoteobject2 = {quote2 :`"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."` , author2 :`-- Marilyn Monroe`

}
var quoteobject3 = {quote3 :`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."` , author3 : `--Albert Einstein`

}
var quoteobject4 = {quote4 :`"So many books, so little time."` , author4 :`--Frank Zappa`

}
var quoteobject5 = {quote5 :`"A room without books is like a body without a soul."` , author5 :`--Marcus Tullius Cicero`

}
var quoteobject6 = {quote6 :`"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."` , author6 :`--Bernard M. Baruch`

}
var quoteobject7 = {quote7 :`"You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth."`
 , author7 :`--William W. Purkey`

}
*/
/*
var quote1 =`"Be yourself; everyone else is already taken."`
var quote2 = `"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`
var quote3 = `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`
var quote4 = `"So many books, so little time."`
var quote5 = `"A room without books is like a body without a soul."`
var quote6 = `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`
var quote7 = `"You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth."`


var author1 =`-- Oscar Wilde`
var author2 =`-- Marilyn Monroe`
var author3 = `--Albert Einstein`
var author4 = `--Frank Zappa`
var author5 = `--Marcus Tullius Cicero`
var author6 = `--Bernard M. Baruch`
var author7 = `--William W. Purkey`
   
   */ 
     

var allquotes =[{quote :`"Be yourself; everyone else is already taken."` , author :`-- Oscar Wilde`

},{quote:`"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."` , author :`-- Marilyn Monroe`

},{quote :`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."` , author : `--Albert Einstein`

},{quote :`"So many books, so little time."` , author :`--Frank Zappa`

},{quote :`"A room without books is like a body without a soul."` , author :`--Marcus Tullius Cicero`

},{quote :`"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."` , author :`--Bernard M. Baruch`

},{quote :`"You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth."`
 , author :`--William W. Purkey`

}];
/*
       var allquotes = [quote1 , quote2 , quote3 , quote4 , quote5];
       var allauthors = [author1 , author2, author3, author4, author5];
       */
       var i=-1;;
        function changequote()
        
        {
            i=i+1;
            if(i>allquotes.length-1)
            {
                i=-1;
                changequote();

            }
            else{
                
                document.getElementById("myquote").innerHTML = allquotes[i].quote;
             document.getElementById("author").innerHTML = allquotes[i].author;
               
           

     
            }
        }
        console.log(allquotes.length-1);
      

       

      
           
       
    
       
        
            
       
        
       
       
       
       



