
// Math Operator 
let ageJonse = 2024 - 2000;
let ageRayhan = 2024 - 2005;
console.info(ageJonse)
console.info(ageRayhan)

// Operator Assigment
ageJonse +=10;
console.info(ageJonse);
ageJonse++;
ageJonse--;
ageJonse--;
console.info(ageJonse)

//Operator Compraison
console.info(ageJonse > ageRayhan);
console.info(ageJonse < ageRayhan);

// Tamplate Literals 
const name = 'Rayhan';
const job = 'Student';
const old = 19;

console.info('Nama Saya ' + name + ' Umur Saya ' + old + ' Kegiatan Saya ' + job);
console.info(`Nama saya ${name} Umur saya ${old} Kegiatan saya ${job}`);

// if else
const age = 13;

if(age >= 18) {
    console.info('Anda Boelh Mendapatkan Sim')
}else {
    let umurKurang = 18 - age;
    console.info(`Anda Boleh mengemudi setelah ${umurKurang} tahun ke depan`)
}



let country = "Indonesia";
let population = 270;
let language = "Indonesia";
let region = "Asia";

let description = `${country} is in ${region}, and its ${population} million people speak ${language}.`;

console.log(description);

// "Penduduk Portugal 22 juta di bawah rata-rata" (di mana 22 adalah selisih antara 33 juta dan jumlah penduduk negara Anda)

if(population > 11 ) {
    console.info(`Penduduk ${country} ${population - 33 } Di atas rata rata`)
}else {
    console.info(`Penduduk ${country} ${population - 33 } Di bawah rata rata`)
}

// Conversion dan Coercion
// Conversion
const a = 5;
console.info(a);
console.info(String(a));
// Coercion
console.info(1 + '1') // 11
console.info(1 * '1') // 1
console.info( 1 / '1') // 1
console.info(1 - '1') // 0

// Falsy and Truty
console.info(Boolean(false));
console.info(Boolean(0));
console.info(Boolean(undefined));
console.info(Boolean(null));
console.info(Boolean(NaN));

let money = 0;

if(money){
    console.info('Jangan Habiskan Uang Mu!!');
}else {
    console.info('Cepatlah Bekerja!!');
}

// Equality Operator
const lahir = '2005';

if (lahir === 2005) {
    console.info(`umur mu sudah ${2024 - 2005} tahun` )
}else if (lahir == '2005') {
    console.info('Nilai Kamu ada yang tipe datanya string!!')
}else {
    console.info('Tanggal lahir kamu bukan 2005');
}

// Logical Operator
const mempunyaiLisesnsiMengemudi = true;
const mempunyaiPenglihatanBagus = true;

console.info(mempunyaiLisesnsiMengemudi && mempunyaiPenglihatanBagus );
console.info(mempunyaiLisesnsiMengemudi || mempunyaiPenglihatanBagus );
console.info(!mempunyaiLisesnsiMengemudi);

// if(mempunyaiLisesnsiMengemudi && mempunyaiPenglihatanBagus) {
//     console.info('Dia Boelh Mengemudi')
// }else {
//     console.info('Dia tidak boleh mengemudi');
// }

const lelah = false;
console.info(mempunyaiLisesnsiMengemudi && mempunyaiPenglihatanBagus && lelah);

if(mempunyaiLisesnsiMengemudi && mempunyaiPenglihatanBagus && !lelah) {
    console.info('Dia Boelh Mengemudi')
}else {
    console.info('Dia tidak boleh mengemudi');
}

// Switch Stetment
const day = 'senin';

switch(day) {
    case 'senin' :
        console.info('Pergi bekerja');
        break;
    case 'selasa' :
        console.info('Ngoding')
        break;
    case 'rabo':
    case 'kamis' :
        console.info('Belajar');
        break;
    case 'jumat' :
        console.info('pergi jumatan')
        break;
    case 'sabtu' :
    case 'minggu' :
        console.info('Maen bola');
        break;
    default :
        console.info('tidak ada dalam nama hari')
}

if (day === 'senin' ) {
    console.info('Pergi bekerja');
}else if (day === 'selasa') {
    console.info('Ngoding')
}else if (day === 'rabo' || day === 'kamis') {
    console.info('Belajar');
}else if (day === 'jumat') {
    console.info('pergi jumatan')
}else if (day === 'sabtu' || day === 'minggu') {
    console.info('Maen bola');
}else {
    console.info('tidak ada dalam nama hari')
}

// Ternary Operator
const umur = 18;

umur >= 18 ? console.info('boleh meroko') : console.info('dilarang meroko');

const izinBerkendara = umur >= 18 ? 'Boleh Berkendara' : 'dilarang Berkendara';
console.info(izinBerkendara);

console.info(`Apakah dia boleh berkendara ? ${umur >= 18 ? 'Boleh Berkendara' : 'dilarang Berkendara'}`)
