console.log('Pirma JS pamoka');

// 1 Užduotis
let vidurkis = 7;
let lankomumas = true;

if(vidurkis >=8 && lankomumas === true){
    console.log(`Jūsų vidurkis yra ${vidurkis} ir lankomumas geras - stipendiją gausite`)
} else {
    console.log('Stipendija nėra suteikiama')
}

// 2 Užduotis
let vardas = "Tomas";
let arVedes = true;
let alga = 801;

if(arVedes === false && alga >800){
    console.log(` ${vardas} - nevedęs, atlyginimas ${alga}. Sveikinu, paskolą gausite.`)
}

else if(arVedes === true && alga > 1000){
    console.log(` ${vardas} - vedęs, atlyginimas ${alga}. Jums paskola bus suteikta.`)
} else {
    console.log('Atvykite susitvarkę dokumentus')
}

// 3 Užduotis

let menuo = 'birzelis';

switch(menuo){
    case 'gruodis':
    case 'sausis':
    case 'vasaris':
        console.log(`${menuo} - metų laikas: žiema.`);
        break;
    case 'kovas':
    case 'balandis':
    case 'geguze':
        console.log(`${menuo} - metų laikas: pavasaris.`);
        break;
    case 'birzelis':
    case 'liepa':
    case 'rugpjutis':
        console.log(`${menuo} - metų laikas: vasara.`);
        break;
    case 'rugsejis':
    case 'spalis':
    case 'lapkritis':
        console.log(`${menuo} - metų laikas: ruduo.`);
        break;
        default:
        console.log('Įvesta netinkama reikšmė.')
}

