function calculate(){
    var weight = parseInt(document.querySelector('#weight').value);
    var height_f = parseInt(document.querySelector('#height-f').value);
    var height_inch = parseInt(document.querySelector('#height-in').value);

    var inch = height_f * 12 ;  
    inch += height_inch;

    //convert to centimeter
    var cm= inch * 2.54;

    //convert to meter
    var meter = cm / 100

    var final = weight / (meter * meter);

    var final_status = document.getElementById('result').innerHTML = final;
   
    if( final_status < 18.5 )
    {
        document.querySelector('#weightStatus').innerHTML = "<b>Health Status is: UnderWeight</b>";
    }
    else if(final_status >=18.5 && final_status <=24.9){
        document.querySelector('#weightStatus').innerHTML = "<b>Health Status is: Normal Weight</b>";
    }
    else if(final_status >=25 && final_status <=30){
        document.querySelector('#weightStatus').innerHTML = "<b>Health Status is: Over Weight</b>";
    }
    else {
        document.querySelector('#weightStatus').innerHTML = "<b>Health Status is: Obese </b>";
    }
    


    //console.log(final_status);
}