<template>
  <div>
    <!-- Header -->
    <div class="mb-8 border-b border-[#D4AF37]/30 pb-6">
      <h1 class="text-4xl font-light tracking-wide mb-2 text-[#2C1810] font-serif">Profile</h1>
      <p class="text-[#5C3A1E] text-sm italic">Your library card</p>
    </div>

    <!-- Profile Card - Vintage Library Card -->
    <div class="bg-white rounded-sm p-6 shadow-md border border-[#EBE3D5] mb-6">
      <div class="flex items-center gap-5 mb-6">
        <div class="w-16 h-16 bg-[#2C1810] rounded-full flex items-center justify-center border-2 border-[#D4AF37]">
          <span class="text-2xl text-[#D4AF37]">👤</span>
        </div>
        <div>
          <h2 class="text-xl font-medium text-[#2C1810]">Alex Morgan</h2>
          <p class="text-sm text-[#5C3A1E] italic">Member since Jan 2024</p>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-3 gap-3 mb-6">
        <div class="text-center border-r border-[#EBE3D5]">
          <p class="text-2xl font-semibold text-[#2C1810]">42</p>
          <p class="text-xs text-[#5C3A1E] uppercase tracking-wide">Meals</p>
        </div>
        <div class="text-center border-r border-[#EBE3D5]">
          <p class="text-2xl font-semibold text-[#2C1810]">14</p>
          <p class="text-xs text-[#5C3A1E] uppercase tracking-wide">Streak</p>
        </div>
        <div class="text-center">
          <p class="text-2xl font-semibold text-[#2C1810]">$668</p>
          <p class="text-xs text-[#5C3A1E] uppercase tracking-wide">Saved</p>
        </div>
      </div>

      <button class="w-full py-2.5 bg-[#2C1810] text-[#D4AF37] text-sm rounded-sm hover:bg-[#3D2B1F] transition-colors uppercase tracking-wider">
        Edit Profile
      </button>
    </div>

    <!-- Achievements -->
    <h3 class="text-sm font-medium text-[#2C1810] mb-3 uppercase tracking-wider border-l-2 border-[#D4AF37] pl-3">Recent Achievements</h3>
    <div class="grid grid-cols-2 gap-3">
      <div class="bg-white rounded-sm p-3 shadow-md border border-[#EBE3D5] flex items-center gap-2">
        <span class="text-xl">🏆</span>
        <div>
          <p class="text-sm font-medium text-[#2C1810]">Week Warrior</p>
          <p class="text-xs text-[#5C3A1E] italic">7 day streak</p>
        </div>
      </div>
      <div class="bg-white rounded-sm p-3 shadow-md border border-[#EBE3D5] flex items-center gap-2">
        <span class="text-xl">⭐</span>
        <div>
          <p class="text-sm font-medium text-[#2C1810]">Meal Master</p>
          <p class="text-xs text-[#5C3A1E] italic">10 meals</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>