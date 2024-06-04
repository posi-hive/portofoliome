function tampilAllmenu() {
    $('#daftar-menu').html('');//fungsi untuk remove ketika dari navigasi lain, tampilin ke awal menu


    // fungsi ambil data json dengan jquery cdn versi javascript
    // Untuk card 
    $.getJSON('data/pizza.json', function (hasil) {

        let menu = hasil.menu; //mengeluarkan variabel objek didalam array
        console.log(menu); // untuk melihat hasil di console browser

        // looping card menu makanan
        $.each(menu, function (i, data) {
            // console.log(data) parameter i adalah index & data adalah isi dari objek di json
            $('#daftar-menu').append(`
            <div class="col-md-4">
                <div class= "card mb-3">
                <img class="card-img-top" src="img/menu/` + data.gambar + `" alt = "">
                    <div class="card-body">
                        <h5 class="card-title">` + data.nama + `</h5>
                        <p class="card-text">` + data.deskripsi + `</p>
                            <h3 class="card-title"><b>Rp. ` + data.harga + `</b></h3>
                        <a href="#" class="card-link">PESAN SEKARANG</a>
                    </div>
                </div>
            </div>
            `);
        });
    });
    
}

tampilAllmenu(); //panggil semua menu makanan tp harus buat perKategori


// Untuk klik per kategori menu makanan pada saat klik link
$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active'); //menghilangkan link aktif saat klik
    $(this).addClass('active'); //menambahkan link aktif saat klik


    // cara merubah menu makanan sesuai dengan link yang di klik
    var kategori = $(this).html(); //membuat link sama dengan menu makanan
    $('h1').html(kategori); //merubah Header menu makanan sesuai dengan link di html




    // panggil semua menu makanan dari tampilAllmenu();
    if (kategori === 'All Menu') {
        tampilAllmenu();
        return; //dipakai untuk blok dan kluar dari $('.nav-link').on('click', function () diatas
    }



    //buat perKategori
    $.getJSON('data/pizza.json', function (hasil) {
        let menu = hasil.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori === kategori.toLowerCase()) {
                content += `
                <div class="col-md-4">
                <div class= "card mb-3">
                <img class="card-img-top" src="img/menu/` + data.gambar + `" alt = "">
                    <div class="card-body">
                        <h5 class="card-title">` + data.nama + `</h5>
                        <p class="card-text">` + data.deskripsi + `</p>
                            <h3 class="card-title"><b>Rp. ` + data.harga + `</b></h3>
                        <a href="#" class="card-link">PESAN SEKARANG</a>
                    </div>
                </div>
            </div>
                `;
            }
        });

        $('#daftar-menu').html(content);
        
    });




});