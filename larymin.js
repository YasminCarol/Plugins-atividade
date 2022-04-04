window.onload = function(){
     document.querySelector("#entrar").addEventListener("click", function(){
        let nome = document.querySelector("#nome");
        function retorno(){
        }
       navigator.notification.alert("Olá, "+ nome.value  , retorno, "Bem vindo(a)!", "Ok");
    });

    document.querySelector("#vibrar").addEventListener("click", function(){
            navigator.vibrate(2000);
                 navigator.app.exitApp(); 
    });

document.querySelector("#verificar").addEventListener("click", function(){
        let idade = parseInt(document.querySelector("#idade").value);
        function retorno(){

        }

        if(idade<18){
        
            if(idade<0){
                navigator.vibrate(3000);
            }else{
                navigator.notification.beep(idade);
            }
        
        }else if(idade>=18){
            navigator.notification.confirm("Qual é o seu gênero?", onConfirm, "Pergunta 2", ["Homem", "Mulher"]);
            function onConfirm(buttonIndex){
                if(buttonIndex == 1){
                    navigator.notification.alert("Não se esqueça de se alistar, hemmm", retorno, "É obrigatório!", "Ok");
                } else{
                    navigator.notification.alert("Que legal, você já pode ter habilitação.", retorno, "Não se esqueça!", "Ok");
                }
        }
    }
    });
}
