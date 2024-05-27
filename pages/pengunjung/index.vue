<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-center my-4">RIWAYAT KUNJUNGAN</h2>
                    <table class="table">
                        <thead>
                            <tr>
                                <td>1</td>
                                <td>NAMA</td>
                                <td>KATEGORI</td>
                                <td>WAKTU</td>
                                <td>KEPERLUAN</td>
                            </tr>
                        </thead>
                            <tbody>
                                <tr v-for="(visitor,i) in visitors" :key="i">
                                    <td>{{ i+1 }}.</td>
                                    <td>{{ visitor.nama }}</td>
                                    <td>{{ visitor.keanggotaan.Nama }}</td>
                                    <td>{{ visitor.tanggal }}, {{ visitor.waktu }}</td> 
                                    <td>{{ visitor.keperluan.nama }}</td>
                                </tr>
                        </tbody>
                    </table>
                    <nuxt-link to="/">
                    <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">KEMBALI</button>
                    </nuxt-link>
                    </div>
                </div>
            </div>
        </template>
                    
                    <script setup>
                    const supabase = useSupabaseClient()

                    const visitors = ref([])
                    
                    const getPengunjung = async () => {
                        const { data, error } = await supabase.from('pengunjung').select(`*,keanggotaan(*), keperluan(*)`)
                        if(data) visitors.value = data
                    }
                        onMounted(() => {
                            getPengunjung()
                        })
                    
                </script>