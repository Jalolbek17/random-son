let qavat = 1;
let jonlar = 3;
let urinishlar = 0;
let xatolar = 0;
let ketmaKetXato = 0;
let qiyinRejimIshladi = false;
let yashirinSon = 0;

function qavatBoshlash(){
    if(jonlar <= 0) return oyinTugat("Jon tugadi");
    if(qavat > 10) return oyinTugat("Minorani zabt etdingiz");

    yashirinSon = Math.floor(Math.random() * (qavat * 5)) + 1;

    console.log(yashirinSon);

    qavatInfo.textContent = `${qavat}-qavat | 1–${qavat * 5} oraligi`;
    holat.textContent = `Jonlar: ${jonlar}`;
    kiritilganSon.value = "";
}

function oyinBoshlash(){
    qavatBoshlash();
}

function javobTekshir(){
    const javob = +kiritilganSon.value;
    if(!javob) return;

    urinishlar++;

    if(javob === yashirinSon){
        ketmaKetXato = 0;
        qavat++;
        holat.textContent = "To‘g‘ri";
        return oyinBoshlash();
    }

    jonlar--;
    xatolar++;
    ketmaKetXato++;
    holat.textContent = "Notogri";

    if(ketmaKetXato === 3){
        qiyinRejimIshladi = true;
        ketmaKetXato = 0;
        qavat = qavat > 1 ? qavat - 1 : 1;
        holat.textContent = "3 marta adashdingiz  pastga tushdingiz";
    }

    return oyinBoshlash();
}

function oyinTugat(xabar){
    document.querySelector("button").disabled = true;
    yakun.innerHTML = `
        <strong>${xabar}</strong><br><br>
        Urinishlar: ${urinishlar}<br>
        Xatolar: ${xatolar}<br>
        Qolgan jonlar: ${jonlar}<br>
        Qiyin rejim: ${qiyinRejimIshladi ? "ishladi" : "yoq"}
    `;
}

oyinBoshlash();