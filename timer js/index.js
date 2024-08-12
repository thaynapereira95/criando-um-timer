function relogio(){ // funçao criada para atribuir todas as outras dentro dela

    function getTimeFromSeconds(segundos){  // funçao (obter tempo a partir de segundos) para atribuir os segundos
        const data = new Date(segundos * 1000); // segundos * 1000 para obter os milesimos 00:00:00
        return data.toLocaleTimeString('pt-BR', {  // retornar a hora atual
            hour12: false,
            timeZone: 'GMT' // em formato GMT
        });
        
    }
    
    
    const relogio = document.querySelector('.relogio'); 
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0; // começar a contar a partir do segundo (0)
    let timer;
    
    function iniciaRelogio(){
         timer = setInterval(function () {
          segundos++;
          relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function (e){
        const el = e.target;
        if(el.classList.contains('zerar')){
            clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
        }
        
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    
        }
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
        
        
    
        /*console.log(e.target);// ira mostrar informações quando clicar*/
    });
    
    
    
}
relogio();
