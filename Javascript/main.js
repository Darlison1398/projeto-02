function entar(){

    var mercado= 'sim';

    var mercado= prompt("Você aceita compartilhar a sua localização? ");

    if ( mercado>= 'sim'){
        addEventListener= window.location='https://www.google.com.br/maps';
    }
    else{
        alert("Acesso negado");
    }
};

function tar(){
    var restaurante= "sim";

    var restaurante= prompt("Você quer ver os restaurantes cadastrados?");

    if (restaurante=='sim'){
        addEventListener= window.location="https://www.tripadvisor.com.br/RestaurantsNear-g680304-d6005521-Cacula_Restaurante-Tubarao_State_of_Santa_Catarina.html";
    }

    else{
        alert("Tente outra coisa");
    }

};