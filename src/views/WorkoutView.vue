<script setup>

</script>

<template>
  <div class="workout">
    <h1>Weight Loss Workout Plan</h1>

<div class="dropdown">
    <button class="dropdown-item">Select Workout</button>
    <div class="dropdown-content">
        <a href="#" onclick="showWorkoutInfo()">Cardiovascular Exercises</a>
        <a href="#" onclick="showWorkoutInfo()">Strength Training</a>
        <a href="#" onclick="showWorkoutInfo()">Flexibility and Balance</a>
    </div>
</div>

<div id="workout-info">
    <h2>Cardiovascular Exercises</h2>
    <p>
        Incorporate brisk walking, jogging, cycling, jumping rope, and high-intensity interval training (HIIT) for effective cardiovascular workouts.
    </p>
</div>
</div>
</template>

<style>
@media (min-width: 1024px) {
  .register {

  }
}
.dropdown {
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown-item {
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            color: #333;
        }

        h2 {
            color: #333;
        }

        p {
            color: #666;
            line-height: 1.5;
        }
</style>