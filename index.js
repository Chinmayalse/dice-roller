function roll()
{
    const head=document.getElementById("heading");
    const Leftimage=document.getElementById("image1");
    const rightimage=document.getElementById("image2");
    const randNum1=Math.floor((Math.random()*6)+1);
    const randNum2=Math.floor((Math.random()*6)+1);


if(randNum1===randNum2)
        {
            head.innerHTML="its a tie...";
        }
        else if(randNum1>randNum2)
        {
            head.innerHTML="Player 1 Wins...";
        }
        else if(randNum1<randNum2)
        {
            head.innerHTML="Player 2 Wins...";
        }




    if(randNum1===1)
    {
        Leftimage.setAttribute("src","dice1.png");
    }
    else if(randNum1===2)
    {
        Leftimage.setAttribute("src","dice2.png");
    }
    else if(randNum1===3)
    {
        Leftimage.setAttribute("src","dice3.png");
    }
    else if(randNum1===4)
    {
        Leftimage.setAttribute("src","dice4.png");
    }
    else if(randNum1===5)
        {
            Leftimage.setAttribute("src","dice5.png");
        }
    else if(randNum1===6)
        {
            Leftimage.setAttribute("src","dice6.png");
        }


        if(randNum2===1)
        {
            rightimageimage.setAttribute("src","dice1.png");
        }
        else if(randNum2===2)
        {
            rightimageimage.setAttribute("src","dice2.png");
        }
        else if(randNum2===3)
        {
            rightimage.setAttribute("src","dice3.png");
        }
        else if(randNum2===4)
        {
            rightimage.setAttribute("src","dice4.png");
        }
        else if(randNum2===5)
            {
                rightimage.setAttribute("src","dice5.png");
            }
        else if(randNum2===6)
            {
                rightimage.setAttribute("src","dice6.png");
            }
}