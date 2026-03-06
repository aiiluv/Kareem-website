const jenisZakat = document.getElementById("jenisZakat")
const formPenghasilan = document.getElementById("formPenghasilan")
const formEmas = document.getElementById("formEmas")
const formFitrah = document.getElementById("formFitrah")
const hargaEmasBox = document.getElementById("hargaEmasBox")

formPenghasilan.style.display = "none"
formEmas.style.display = "none"
formFitrah.style.display = "none"
hargaEmasBox.style.display = "none"


//PILIHANNYA
jenisZakat.addEventListener("change", function(){

formPenghasilan.style.display = "none"
formEmas.style.display = "none"
formFitrah.style.display = "none"
hargaEmasBox.style.display = "none"

if(this.value === "penghasilan"){
formPenghasilan.style.display = "block"
hargaEmasBox.style.display = "block"
}

if(this.value === "emas"){
formEmas.style.display = "block"
hargaEmasBox.style.display = "block"
}

if(this.value === "fitrah"){
formFitrah.style.display = "block"
}

})


// FUNGSI HITUNG ZAKAT
function hitungZakat(){

const jenis = jenisZakat.value

if(!jenis){
alert("Pilih jenis zakat dulu")
return
}

let total = 0
let nisab = 0
let zakat = 0
let status = "Tidak Wajib"

// FITRAH

if(jenis === "fitrah"){

const orang = Number(document.getElementById("orang").value)

if(!orang){
alert("Jumlah orang harus diisi")
return
}

zakat = orang * 2.5

document.getElementById("total").innerText = orang + " orang"
document.getElementById("nisab").innerText = "-"
document.getElementById("status").innerText = "Wajib"
document.getElementById("zakat").innerText = zakat + " kg beras"

return
}



const hargaEmas = Number(document.getElementById("hargaEmas").value)

if(!hargaEmas){
alert("Harga emas harus diisi")
return
}

nisab = hargaEmas * 85

// PENGHASILAN

if(jenis === "penghasilan"){

const gaji = Number(document.getElementById("gaji").value)
const lainnya = Number(document.getElementById("lainnya").value)

total = gaji + lainnya

}

// EMAS

if(jenis === "emas"){

const emas = Number(document.getElementById("emas").value)

total = emas * hargaEmas

}

if(total >= nisab){
status = "Wajib"
zakat = total * 0.025
}

// HASIL

document.getElementById("total").innerText = "Rp " + total.toLocaleString()
document.getElementById("nisab").innerText = "Rp " + nisab.toLocaleString()
document.getElementById("status").innerText = status
document.getElementById("zakat").innerText = "Rp " + zakat.toLocaleString()

}