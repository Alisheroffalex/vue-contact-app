<template>
    <section class="d-flex justify-center align-center">
        <div class="auth-form">
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
export default {
  
}
</script>


<style scoped>
section {
    min-height: 100%;
    background: rgba(139, 138, 138, 0.616);
}

.auth-form {
    padding: 20px 30px;
    border-radius: 5px;
    box-shadow:0 0 10px 0px rgba(0,0,0,.5);
    background: #fff;
    max-width: 400px;
    width: 100%;
}
</style>
