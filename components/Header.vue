<template>
    <nav class="grid grid-cols-3 p-2">
        <div class="lg:ml-44 ml-20 col-span-2">
            <img src="../assets/images/logo.png" alt="logo" class="h-10 " />
        </div>
        <div class="flex col-span-1 mx-auto">
            <button @click="toggleLocale" class="">
                <Icon :name="locale === 'en' ? 'circle-flags:en' : 'circle-flags:eg'" class="w-6 h-6" />
            </button>

            <form class="my-auto ml-1">
                <select class="font-semibold text-lg" v-model="locale">
                    <option class="font-semibold text-blue-700" value="en">En</option>
                    <option class="font-semibold text-blue-700" value="ar">Ar</option>
                </select>
            </form>
        </div>




    </nav>
</template>
<script setup>
const { locale } = useI18n()

</script>
