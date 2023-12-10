<script setup>
</script>

<template>
<body>
    <div>
        <h1>Project Calories</h1>
        <p>Welcome to your homepage with three layers of green background!</p>
    </div>
</body>
</template>

<style scoped>
 
  body {
            margin: 0;
            padding: 0;
            height: 100vh;
            overflow: hidden;
            background: linear-gradient(to bottom, #c7ecc7 0%, #038b03c9 50%, #c7ecc7 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #fff;
            font-family: 'Afacad', sans-serif;
            font-weight: bold;
            outline: #4CAF50 solid 10px;
        }

        h1 {
            font-size: 3em;
            text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
        }

        p {
            font-size: 1.5em;
            text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
        }
        
</style>