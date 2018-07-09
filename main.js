//Service worker
if('serviceWorker' in navigator){
    console.log('puedes usar los serviceWorker en tu navegador');
    
    navigator.serviceWorker.register('./service-worker.js')
        .then(res=> console.log('serviceWorker cargado correctamente', res))
        .catch(err => console.log('serviceWorker no se ha podido registrar', err))
    
    
}else{
    console.log('puedes usar los serviceworker en tu navegador');
    
}



//Scroll suavizado
$(document).ready(function(){
    
   $("#menu a").click(function(e){
       e.preventDefault();
       
       $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top
       })
       
       return false;
   });
    
});