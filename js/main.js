function kalkulator(num1, num2) {
    const wynikDodawania = num1 + num2;
    const wynikOdejmowania = num1 - num2;
    const wynikMnozenia = num1 * num2;

    if (wynikDodawania >= 0) {
        console.log(`Wynik dodawania wynosi ${wynikDodawania}`);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }

    if (wynikOdejmowania >= 0) {
        console.log(`Wynik odejmowania wynosi ${wynikOdejmowania}`);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }

    if (wynikMnozenia >= 0) {
        console.log(`Wynik mnożenia wynosi ${wynikMnozenia}`);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }

}

kalkulator(1, 10);


