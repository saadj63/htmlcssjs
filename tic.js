function xo(){
    var cell=document.getElementById("r1c1");
    cell.innerHTML="X";
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
        }


        function xr1c2(){
    var cell=document.getElementById("r1c2");
    cell.innerHTML="X";
    
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
        
        }
        function xr1c3()
        {
            
    var cell=document.getElementById("r1c3");
    cell.innerHTML="X";
    
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
        
    }
    
    function r2xo(){
    var cell=document.getElementById("r2c1");
    cell.innerHTML="X";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
        
        }
        function xr2c2(){
    var cell=document.getElementById("r2c2");
    cell.innerHTML="X";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
        
        }
        function xr2c3()
        {
            
    var cell=document.getElementById("r2c3");
    cell.innerHTML="X";
    
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
        
    }
    
    
    function r3xo(){
    var cell=document.getElementById("r3c1");
    cell.innerHTML="X";
       
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
        
       
        }
        function xr3c2(){
    var cell=document.getElementById("r3c2");
    cell.innerHTML="X";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
        
        }
        function xr3c3()
        {
            
    var cell=document.getElementById("r3c3");
    cell.innerHTML="X";
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
        
    }
        
       
    function or1c1(){
        var cell=document.getElementById("r1c1");
        cell.innerHTML="O";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
    }
        
    
    function or1c2(){
        var cell=document.getElementById("r1c2");
        cell.innerHTML="O";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
    }

    
    function or1c3(){
        var cell=document.getElementById("r1c3");
        cell.innerHTML="O";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
    }
       
    
    function or2c1(){
        var cell=document.getElementById("r2c1");
        cell.innerHTML="O";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
    }
       
    
    function or2c2(){
        var cell=document.getElementById("r2c2");
        cell.innerHTML="O";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
    }
       
    function or2c3(){
        var cell=document.getElementById("r2c3");
        cell.innerHTML="O";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
    }
       
    
    function or3c1(){
        var cell=document.getElementById("r3c1");
        cell.innerHTML="O";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
    }
       
    function or3c2(){
        var cell=document.getElementById("r3c2");
        cell.innerHTML="O";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
    }
       
    function or3c3(){
        var cell=document.getElementById("r3c3");
        cell.innerHTML="O";
        
    cell.style.textAlign="Center";
    cell.style.fontSize="15px" ;
    cell.style.fontWeight="bold";   
    }
   
    function reset(){
        var cell1=document.getElementById("r1c1");
        var cell2=document.getElementById("r1c2");
        var cell3=document.getElementById("r1c3");
        
        var cell4=document.getElementById("r2c1");
        
        var cell5=document.getElementById("r2c2");
        
        var cell6=document.getElementById("r2c3");
        
        var cell7=document.getElementById("r3c1");
        
        var cell8=document.getElementById("r3c2");
        
        var cell9=document.getElementById("r3c3");
        
        cell1.innerHTML="";
        cell2.innerHTML="";
        cell3.innerHTML="";
        cell4.innerHTML="";
        cell5.innerHTML="";
        cell6.innerHTML="";
        cell7.innerHTML="";
        cell8.innerHTML="";
        cell9.innerHTML="";

    }


    function sub(){
        var cell1=document.getElementById("r1c1");
        var cell2=document.getElementById("r1c2");
        var cell3=document.getElementById("r1c3");
        
        var cell4=document.getElementById("r2c1");
        
        var cell5=document.getElementById("r2c2");
        
        var cell6=document.getElementById("r2c3");
        
        var cell7=document.getElementById("r3c1");
        
        var cell8=document.getElementById("r3c2");
        
        var cell9=document.getElementById("r3c3");
        
        if (cell1.textContent=="X" && cell2.textContent=="X" && cell3.textContent=="X" )
          {
            alert("X won ");

        }
        else if (cell1.textContent=="X" && cell4.textContent=="X" && cell7.textContent=="X"){
            alert("X won ")

        }
        else if (cell3.textContent=="X" && cell6.textContent=="X" && cell9.textContent=="X"){
            alert("X won ")

        }
        else if (cell7.textContent=="X" && cell8.textContent=="X" && cell9.textContent=="X"){
            alert("X won ")

        }
        else if (cell1.textContent=="X" && cell5.textContent=="X" && cell9.textContent=="X"){
            alert("X won ")

        }
        else if (cell4.textContent=="X" && cell5.textContent=="X" && cell6.textContent=="X"){
            alert("X won ")

        }
        else if (cell3.textContent=="X" && cell5.textContent=="X" && cell7.textContent=="X"){
            alert("X won ")

        }



        else if (cell1.textContent=="O" && cell2.textContent=="X" && cell3.textContent=="O"){
            alert("O won ")

        }
        else if (cell1.textContent=="O" && cell4.textContent=="O" && cell7.textContent=="O"){
            alert("O won ")

        }
        else if (cell3.textContent=="O" && cell6.textContent=="O" && cell9.textContent=="O"){
            alert("O won ")

        }
        else if (cell7.textContent=="O" && cell8.textContent=="O" && cell9.textContent=="O"){
            alert("O won ")

        }
        else if (cell1.textContent=="O" && cell5.textContent=="O" && cell9.textContent=="O"){
            alert("O won ")

        }
        else if (cell4.textContent=="O" && cell5.textContent=="O" && cell6.textContent=="O"){
            alert("O won ")

        }
        else if (cell3.textContent=="O" && cell5.textContent=="O" && cell7.textContent=="O"){
            alert("O won ")

        }

    
        
        
        else{
            alert("Tie");
        
        }


    }