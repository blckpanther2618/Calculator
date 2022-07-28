var text="";
function main(clickId)
{
    if(clickId=="one") text+="1";
    else if(clickId=="two") text+="2"; 
    else if(clickId=="three") text+="3"; 
    else if(clickId=="four") text+="4"; 
    else if(clickId=="five") text+="5"; 
    else if(clickId=="six") text+="6"; 
    else if(clickId=="seven") text+="7"; 
    else if(clickId=="eight") text+="8"; 
    else if(clickId=="nine") text+="9";
    else if(clickId=="zero") text+="0";
    else if(clickId=="plus") text+="+";
    else if(clickId=="minus") text+="-";
    else if(clickId=="multi") text+="*";    
    else if(clickId=="clear") text="";
    else if(clickId=="point") text+=".";
    else if(clickId=="equal")
    {
        var result=math.evaluate(text);        
        text=result;
        // document.getElementById("dpl").innerText=result.toString();
    }
    console.log(text);    
    document.getElementById("dpl").innerText=text;
}