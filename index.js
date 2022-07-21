var Nstatus = 0;

function openNav(){
    if(!Nstatus){
    $('.main').css('width','100%')
    $('li').css('display','flex')
    Nstatus =1;
    }else{
        $('.main').css('width','0')
        $('li').css('display','None')
        Nstatus = 0; 
    }
}