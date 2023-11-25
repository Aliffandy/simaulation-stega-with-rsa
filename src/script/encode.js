
window.onload = function () {
    document.getElementById('bayar').addEventListener('click', hide, false);
    document.getElementById('beli').addEventListener('click', getBeli, false);
    document.getElementById('main-form').style.display = 'none'
};

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCb3I7Vu/d1KyRs0xO4O7d05Whp
ZAWwq72x6cUWzn7jooQDSDT09VKDtDpCFaC5Ko/QG/uni4cNjH7H5vpoUtv37DOu
2ZOsbK4ZGJw/WeifwbtgT84p9atMEG7Bl+GKTA8IhIxODWEzwDJZlruovbTVjC8m
UwZwyY5myCSnu2STLQIDAQAB
-----END PUBLIC KEY-----`

function hide() {
    
    var encrypt = new JSEncrypt();
    var img = document.getElementById("img")
    var data = JSON.stringify(getTransaksi())


    encrypt.setPublicKey(publicKey);
    var encrypted = encrypt.encrypt(data);
    console.log(encrypted)

    if (img && data) {
        const output = steg.encode(encrypted, img);
        sessionStorage.setItem( 'stegData' ,output); 
      
        alert('Transaksi Sukses')
    } 
}



const getTransaksi = () => {
    const barangV = document.getElementById('barang').innerText    
    const hargaV = document.getElementById('harga').innerText    
    const tanggalV = document.getElementById('tanggal').innerText    
    const namaV = document.getElementById('nama').value    
    const rekV = document.getElementById('rek').value 
    
    const dataTransaksi = {
        barang : barangV,
        harga : hargaV,
        tanggal : tanggalV,
        nama : namaV,
        rek : rekV
    }

    return dataTransaksi;

}

const getBeli = () => {
    document.getElementById('main-form').style.display = ''
}