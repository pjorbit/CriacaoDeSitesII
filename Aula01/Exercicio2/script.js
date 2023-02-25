let num = 7;
let soma=0;

function divisiveis() {
    for(i=0;i<1000;i++) {
        if(i%2==0&&i%num==0) {
            soma+=i;
        }
    }
    document.write('A soma dos número são: ' + soma);
}

divisiveis();