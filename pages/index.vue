<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-900 space-y-4 px-4">
    <NuxtLink to="/smart-home">
      <button class="w-64 bg-white text-black text-2xl font-itim px-10 py-5 rounded-xl shadow-lg hover:bg-gray-200 transition">
        Smart Home
      </button>
    </NuxtLink>
    <NuxtLink to="/smart-farm">
      <button class="w-64 bg-white text-black text-2xl font-itim px-10 py-5 rounded-xl shadow-lg hover:bg-gray-200 transition">
        Smart Farm
      </button>
    </NuxtLink>
    <NuxtLink to="/presence-rfid">
      <button class="w-64 bg-white text-black text-2xl font-itim px-10 py-5 rounded-xl shadow-lg hover:bg-gray-200 transition">
        Presence RFID
      </button>
    </NuxtLink>
  </div>
</template>
