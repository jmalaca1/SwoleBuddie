<template>
  <div class="rewards-page">
    <h1>Rewards</h1>
    <div class="rewards-list">
      <div class="reward-card">
        <span class="reward-icon">🏆</span>
        <h3>7 Day Streak</h3>
        <p>Unlocked recipe pack</p>
      </div>
      <div class="reward-card">
        <span class="reward-icon">⭐</span>
        <h3>10 Meals Generated</h3>
        <p>50 bonus points</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.rewards-page {
  padding: 20px;
  padding-bottom: 80px;
}

.rewards-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.reward-card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.reward-icon {
  font-size: 2rem;
}
</style>