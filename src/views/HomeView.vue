<template>
    <div class="hero-container">
        
        <div class="image-wrapper">
        <img :src="heroImage"/>
        </div>
        <YouTubeChannel/>
</div>
</template>

<script>
import YouTubeChannel from '@/components/YouTubeChannel.vue';
import HeroImage from '@/images/hero-image.jpg'
    export default {
        components: {
            YouTubeChannel,
        },
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
    background-color: #fdf0d5;
}
.image-wrapper {
    width: 30rem;
}
.image-wrapper img{
    width: 100%;
}
</style>