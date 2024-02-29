<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-center my-4">RIWAYAT KUNJUNGAN</h2>
                    <div class="my-3">
                        <input type="search" class="form-control form-control-lg rounded-5" placeholder="   Filter....">
                    </div>
                    <div class="my-3 text-muted">Menampilkan 1 dari 1</div>
                    <table class="table">
                        <thead><tr>
                                <td>#</td>
                                <td>NAMA</td>
                                <td>KATEGORI</td>
                                <td>WAKTU</td>
                                <td>KEPERLUAN</td>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                <td>1.</td>
                                <td>raff in the sky</td>
                                <td>siswa</td>
                                <td>26 februari 2024, 23.31.00</td>
                                <td>baca</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                    <nuxt-link to="http://localhost:3000/">
                    <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">KEMBALI</button>
                    </nuxt-link>
                    </div>
                    </template>