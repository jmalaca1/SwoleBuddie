<template>
  <div class="profile-page">
    <div class="profile-header">
      <h1>Profile</h1>
    </div>
    
    <div class="profile-info">
      <div class="avatar">
        <div class="avatar-placeholder">
          👤
        </div>
      </div>
      
      <div class="user-details">
        <h2>Username</h2>
        <p>Member since: {{ joinDate }}</p>
      </div>
    </div>

    <div class="stats">
      <div class="stat-card">
        <h3>Total Meals Generated</h3>
        <p class="stat-number">{{ totalMeals }}</p>
      </div>
      <div class="stat-card">
        <h3>Current Streak</h3>
        <p class="stat-number">{{ streak }}</p>
      </div>
    </div>

    <div class="settings">
      <h3>Settings</h3>
      <button class="settings-btn">Edit Profile</button>
      <button class="settings-btn logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const joinDate = ref('January 2024')
const totalMeals = ref(42)
const streak = ref(7)
</script>

<style scoped>
.profile-page {
  padding: 20px;
  padding-bottom: 80px;
}

.profile-header h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.profile-info {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.user-details h2 {
  margin: 0 0 5px 0;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
}

.stat-card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #4CAF50;
  margin: 10px 0 0 0;
}

.settings {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.settings-btn {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  background: #f0f0f0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
}

.settings-btn.logout {
  background: #ff4444;
  color: white;
}
</style>