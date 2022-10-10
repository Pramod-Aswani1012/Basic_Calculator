function addtodisplay(myval)
    {
        let display = document.getElementById("display");
        if(myval == 'C')
        {
            display.value="";
        }
        else if(myval == 'Back')
        {
            display.value=display.value.slice(0,-1);
        }
        else if(myval == '=')
        {
            try
            {
                display.value=eval(display.value);
            }
            catch
            {
                display.value="Invalid Input";
            }
        }
        else
        {
            display.value += myval;
        }
    }