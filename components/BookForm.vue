<template>
    <section class="bg-sky-50 p-8 pb-16" :class="{ 'text-right': locale === 'ar', 'text-left': locale === 'en' }">
        <div class="w-full max-w-3xl mx-auto ">
            <h2 class="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl mb-8 ">{{ $t('Book')
            }}</h2>
            <form @submit.prevent="submitForm" class="bg-white p-4 rounded shadow-md">
                <div class="grid grid-cols-2 gap-6 ">
                    <div class="mb-4">
                        <label for="from" class="block text-sm font-medium text-gray-600 pb-1">{{ $t('From')
                        }}</label>
                        <input type="text" id="from" v-model="from" required
                            class="w-full px-3 py-2 border rounded focus:outline-none  focus:border-blue-300">
                    </div>
                    <div class="mb-4">
                        <label for="to" class="block text-sm font-medium text-gray-600 pb-1">{{ $t('To') }}</label>
                        <input type="text" id="to" v-model="to" required
                            class="w-full px-3 py-2 border rounded focus:outline-none  focus:border-blue-300">
                    </div>
                </div>
                <!-- second line -->
                <div class="grid grid-cols-2 gap-6 ">
                    <div class="mb-4">
                        <label for="tripDate" class="block text-sm font-medium text-gray-600 pb-1">{{ $t('Date') }}</label>
                        <input type="date" id="tripDate" v-model="tripDate" required
                            class="w-full px-3 py-2 border rounded focus:outline-none  focus:border-blue-300">
                    </div>
                    <div class="mb-4">
                        <label for="ticketClass" class="block text-sm font-medium text-gray-600 pb-1">{{ $t('Class')
                        }}</label>
                        <select id="ticketClass" v-model="ticketClass" required
                            :class="{ 'text-right': locale === 'ar', 'text-left': locale === 'en' }"
                            class="w-full px-3 py-2 border rounded focus:outline-none  focus:border-blue-300">
                            <option value="economy">{{ $t('Economy') }}</option>
                            <option value="business">{{ $t('Business') }}</option>
                            <option value="first">{{ $t('First') }}</option>
                        </select>
                    </div>

                </div>
                <!-- third line  -->
                <div class="grid lg:grid-cols-4 grid-cols-3 gap-6 ">
                    <div class="mb-4 lg:col-span-2">
                        <label for="tripType" class="block text-sm font-medium text-gray-600 pb-1">{{ $t('Type') }}</label>
                        <select id="tripType" v-model="tripType" required
                            :class="{ 'text-right': locale === 'ar', 'text-left': locale === 'en' }"
                            class="w-full px-3 py-2 border rounded focus:outline-none  focus:border-blue-300">
                            <option value="oneWay">{{ $t('Oneway') }}</option>
                            <option value="roundTrip">{{ $t('Round') }}</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="adults" class="block text-sm font-medium text-gray-600 pb-1">{{ $t('Adults') }}</label>
                        <input type="number" id="adults" v-model="adults" required
                            class="w-full px-3 py-2 border rounded focus:outline-none  focus:border-blue-300">
                    </div>
                    <div class="mb-4">
                        <label for="children" class="block text-sm font-medium text-gray-600 pb-1">{{ $t('Children')
                        }}</label>
                        <input type="number" id="children" v-model="children" required
                            class="w-full px-3 py-2 border rounded focus:outline-none  focus:border-blue-300">
                    </div>
                </div>

                <button type="submit" class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600">{{
                    $t('Submit') }}</button>
            </form>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const isEnglish = locale.value === 'en';
const isArabic = locale.value === 'ar';
const from = ref('');
const to = ref('');
const tripDate = ref('');
const ticketClass = ref('');
const tripType = ref('');
const adults = ref('');
const children = ref('');

const submitForm = () => {
    // form submission
};
</script>
