
function controlString(stringa) {
    
    stringa = stringa.replace(/\W/g, "");

    let reverse = stringa.split('').reverse().join('');
     

    if (stringa == reverse ) {
        return true ;
    }else{
        return false;
    }

}


console.log(controlString('i topi non avevano nipoti'));


