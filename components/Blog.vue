<template>
    <section class=" bg-lime-50 py-14 pb-28" :class="{ 'text-right': locale === 'ar', 'text-left': locale === 'en' }">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto">
                <h2 class="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl">{{
                    $t('blogs') }}
                </h2>
            </div>
            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
                    <div class="relative w-full">
                        <img :src="post.src" alt=""
                            class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>

                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a :href="post.href">
                                <span class="absolute inset-0" />
                                {{ $t(post.title) }}
                            </a>
                        </h3>
                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ $t(post.description) }}</p>
                    </div>

                </article>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import blog1 from '../assets/images/blog1.png'
import blog2 from '../assets/images/blog2.png'
import blog3 from '../assets/images/blog3.png'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const isEnglish = locale.value === 'en';
const isArabic = locale.value === 'ar';

const posts = [
    {
        id: 1,
        title: 'blog1',
        href: '#',
        description: 'discreption',
        src: blog1,

    },
    {
        id: 2,
        title: 'blog2',
        href: '#',
        description: 'discreption',
        src: blog2,

    }, {
        id: 3,
        title: 'blog3',
        href: '#',
        description: 'discreption',
        src: blog3,

    },
]
</script>