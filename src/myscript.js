function cal(){
    let l = document.getElementById('length').value;
    let w = document.getElementById('width').value; 
    document.getElementById('Perimeter').innerHTML= 2*(l+w)+' mtr';
    document.getElementById('Area').innerHTML= l*w+' sq.mtr';
   
};