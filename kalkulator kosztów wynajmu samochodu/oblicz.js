const cena_doba = 120;
const avgspalanie = 0.08; 
const paliwo = 7; 

function f1() {

    let lata = document.getElementById("lata").value;
    let liczba_dni = document.getElementById("liczba_dni").value;
    let kategoria = document.getElementById("pojazdy").value;
    let kilometry = document.getElementById("slider").value;
    
    let cenapaliwa = (kilometry*avgspalanie*paliwo);

    let cena_dni = liczba_dni*cena_doba
    
    
    if (kategoria == "Basic") { 
       
        cena_dni_kategoria = cena_dni*1;
    } 
        
    else if (kategoria == "Standard") {
    
        cena_dni_kategoria = cena_dni*1.3;
    }
    
    else if (kategoria == "Medium") { 
        
        cena_dni_kategoria = cena_dni*1.6;
    }

    else if (kategoria == "Premium") {
    
        cena_dni_kategoria = cena_dni*2;
    }
    
    if (lata < 5 ) {

        cena_dni_kategoria_prawko = cena_dni_kategoria + cena_dni_kategoria * 0.2;
    }

    else if (lata >= 5) {

        cena_dni_kategoria_prawko = cena_dni_kategoria;

    }
   
    if (kategoria == "Premium" && lata < 3 ) {

        alert("Nie możesz wypożyczyć pojazdu premium");
        return false;
    }

    let kwota_koncowa = cena_dni_kategoria_prawko + cenapaliwa;

    let kwota_koncowa_netto = kwota_koncowa;
    let kwota_koncowa_brutto = kwota_koncowa_netto + kwota_koncowa_netto * 0.23;

    let pokaz =  document.getElementById("pokaz"); pokaz.innerText = kwota_koncowa_netto.toFixed(2);
    let pokaz2 =  document.getElementById("pokaz2"); pokaz2.innerText = kwota_koncowa_brutto.toFixed(2);
    let pokaz3 =  document.getElementById("pokaz3"); pokaz3.innerText = kategoria;
    let pokaz4 =  document.getElementById("pokaz4"); pokaz4.innerText = liczba_dni;
    let pokaz5 =  document.getElementById("pokaz5"); pokaz5.innerText = kilometry;

}