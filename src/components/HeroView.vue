<template>
    <div class="hero-container">
            <div>NEYNEYALLDAYDAY</div>
            <div class="image-wrapper">
            <img :src="heroImage"/>
            </div>
    </div>
</template>

<script>
import HeroImage from '@/images/hero-image.jpg'
    export default {
        data() {
            return {
                heroImage: HeroImage,
            }
        }
    }
</script>

<style  scoped>
.hero-container{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap:1rem;
}
.image-wrapper {
    width: 50rem;
}
.image-wrapper img{
    width: 100%;
}
</style>