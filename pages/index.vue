<template>
    <div class="container-fluid">
        <div class="row my-5">
            <div class="col-lg-6">
                <nuxt-link to="/pengunjung/tambah">
                    <div class="card bg-pengunjung rounded-5">
                        <div class="card-body">
                            <h2>Pengunjung </h2>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="col-lg-6">
                <nuxt-link to="/buku">
                    <div class="card bg-buku rounded-5">
                        <div class="card-body">
                            <h2>Cari Buku</h2>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <h2 class="justify-content-between">STATISIK</h2>
        <div class="container-fluid">
            <div class="row justify-content-evenly rounded-2">
            <div class="col-5">
                <div class="raccing">
                    <nuxt-link to="/pengunjung">
                <h2>{{ visitors.length }} Pengunjung </h2>
             </nuxt-link>
                </div>
            </div>
            <div class="col-5">
                <div class="raccing1">
                <h2>{{ books.length }} Buku</h2>
                </div>
            </div>
            </div>
        </div>
            </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.card{
    height: 250px;
    box-shadow: 1px 1px 10px #EEE7E7;
}
.card.bg-pengunjung {
    background-image: url('../assets/bg-home-kunjungan.jpeg');
    background-repeat: no repeat;
    background-position: center center;
    background-size: cover;
}
.card.bg-buku {
    background: url('../assets/bg-home-cari-buku.jpg') no-repeat center center;
    background-size: cover;
}
.raccing{
    height: 200px;
    box-shadow: 1px 1px 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(221, 211, 65);
}
.raccing1{
    height: 200px;
    box-shadow: 1px 1px 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(41, 240, 124);
}
</style>
<script setup>
const supabase = useSupabaseClient()

const visitors = ref([])
const books = ref([])

const getPengunjung = async () => {
  const { data, error } = await supabase.from('pengunjung').select('*, keanggotaan(*), keperluan(*)')
  if (data) visitors.value = data
}

const getBooks = async () => {
  const { data, error } = await supabase.from('Buku').select(`*, Kategori(*)`)
  if (data) books.value = data
}

onMounted (() => {
  getPengunjung()
  getBooks()
})


</script>


