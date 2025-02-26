<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-900 space-y-6 relative px-4">
    <!-- Tombol Kembali (Tanpa Background) -->
    <button @click="$router.go(-1)" class="absolute top-4 left-4 p-2">
      <img src="/assets/icons/back.svg" alt="Back" class="w-16 h-16" />
    </button>

    <h1 class="text-white text-2xl font-bold text-center">Kontrol Lampu dan Pagar</h1>

    <div class="flex flex-wrap justify-center gap-4">
      <button 
        @click="toggleLampu(1)" 
        :class="lampu1 ? 'bg-red-500' : 'bg-green-500'"
        class="w-64 sm:w-40 text-white text-lg font-itim px-6 py-3 rounded-lg shadow-md transition"
      >
        {{ lampu1 ? "Off Lampu 1" : "On Lampu 1" }}
      </button>
      <button 
        @click="toggleLampu(2)" 
        :class="lampu2 ? 'bg-red-500' : 'bg-green-500'"
        class="w-64 sm:w-40 text-white text-lg font-itim px-6 py-3 rounded-lg shadow-md transition"
      >
        {{ lampu2 ? "Off Lampu 2" : "On Lampu 2" }}
      </button>
    </div>
    <button 
      @click="togglePagar" 
      :class="pagar ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'"
      class="w-64 sm:w-40 text-lg font-itim px-6 py-3 rounded-lg shadow-md transition"
    >
      {{ pagar ? "Tutup Pagar" : "Buka Pagar" }}
    </button>

    <h1 class="text-white text-2xl font-bold mt-6 text-center">Sensor Ultrasonik</h1>
    <div class="bg-white p-6 rounded-lg shadow-md text-center w-full sm:w-96">
      <p class="text-gray-700">Sensor ultrasonik digunakan untuk mengontrol kipas angin.</p>
      <p class="text-gray-700">Status Jarak: {{ jarak }} cm</p>
      <button 
        :class="kipas ? 'bg-green-500' : 'bg-gray-500'"
        class="w-full mt-4 text-white text-lg font-itim px-6 py-3 rounded-lg shadow-md transition"
      >
        Kipas: {{ kipas ? "ON" : "OFF" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const lampu1 = ref(false);
const lampu2 = ref(false);
const pagar = ref(false);
const kipas = ref(false);
const jarak = ref(50); // Simulasi data sensor

const toggleLampu = (lampu) => {
  if (lampu === 1) lampu1.value = !lampu1.value;
  if (lampu === 2) lampu2.value = !lampu2.value;
};

const togglePagar = () => {
  pagar.value = !pagar.value;
};

// Simulasi sensor ultrasonik
watchEffect(() => {
  kipas.value = jarak.value < 50;
});
</script>
