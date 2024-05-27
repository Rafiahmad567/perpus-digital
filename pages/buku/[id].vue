<template>
    <h2 class="text-start my-4">{{ buku.judul }}</h2>
    <div class="row">
        <div class="col-md-3">
            <img :src="buku.cover" class="cover" alt="cover buku">
        </div>
        <div class="col-md-6">
            <div class="badge bg-primary p-2">{{ buku.kategori }}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Penulis: {{ buku.penulis }}</li>
                <li class="list-group-item">Penerbit: {{ buku.Penerbit }}</li>
                <li class="list-group-item">Tahun terbit: {{ buku.Tahun_terbit }}</li>
                <li class="list-group-item">Deskripsi:{{ buku.deskripsi }}</li>
            </ul>
            <nuxt-link to="/">
                            <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">KEMBALI</button>
                        </nuxt-link>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const route = useRoute()
const buku = ref([])

const getBookByld = async () => {
    const { data, error } = await supabase.from('Buku').select(`*,Kategori`)
    .eq('id', route.params.id)
    if(data) buku.value = data[0]
}

onMounted(() => {
    getBookByld()
})
</script>
<style scoped>
img {
    width: 100%;
}
</style>
