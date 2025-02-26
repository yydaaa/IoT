<template>
    <div class="flex flex-col items-center min-h-screen bg-blue-900 py-8 px-4 relative">
      <!-- Tombol Back -->
      <button @click="$router.go(-1)" class="absolute top-4 left-4 p-2">
        <img src="/assets/icons/back.svg" alt="Back" class="w-16 h-16" />
      </button>
  
      <!-- Keterangan Sistem -->
      <div class="bg-white shadow-lg rounded-xl p-6 text-center w-full max-w-md mt-12">
        <h2 class="text-xl font-bold">Keterangan Sistem</h2>
        <p class="text-gray-700 mt-2">
          Sistem ini menggunakan sensor Soil Moisture untuk mendeteksi kadar kelembaban tanah. Jika kelembaban tanah 
          berada di bawah ambang batas, maka pompa air akan otomatis menyala untuk menyiram tanaman.
        </p>
      </div>
  
      <!-- Kontrol Pompa Air -->
      <div class="bg-white shadow-lg rounded-xl p-6 text-center w-full max-w-md mt-6">
        <h2 class="text-xl font-bold">Kontrol Pompa Air</h2>
        <p class="text-gray-700 mt-2">
          Status Kelembaban Tanah: 
          <span :class="kelembabanTanah < 40 ? 'text-red-500' : 'text-green-500'">
            {{ kelembabanTanah }}%
          </span>
        </p>
  
        <button 
          @click="togglePompa"
          :disabled="kelembabanTanah < 40"
          :class="[
            pompa ? 'bg-green-500' : 'bg-gray-500',
            kelembabanTanah < 40 ? 'opacity-50 cursor-not-allowed' : ''
          ]"
          class="mt-4 px-6 py-3 text-white font-bold rounded-lg transition"
        >
          Pompa: {{ pompa ? 'ON' : 'OFF' }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Import ikon back dari assets
  
  const kelembabanTanah = ref(84);
  const pompa = ref(false);
  
  // Fungsi untuk memperbarui kelembaban secara otomatis
  const updateKelembaban = () => {
    kelembabanTanah.value = Math.floor(Math.random() * 101); // Simulasi kelembaban (0-100%)
  
    // Pompa otomatis menyala jika kelembaban di bawah 40%
    if (kelembabanTanah.value < 40) {
      pompa.value = true;
    }
  };
  
  // Update kelembaban tiap 5 detik
  onMounted(() => {
    setInterval(updateKelembaban, 5000);
  });
  
  // Fungsi untuk menyalakan/mematikan pompa secara manual (hanya jika kelembaban ≥ 40%)
  const togglePompa = () => {
    if (kelembabanTanah.value >= 40) {
      pompa.value = !pompa.value;
    }
  };
  </script>
  