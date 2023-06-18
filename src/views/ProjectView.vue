<template>
    <div class="project-container">
        <section>
            <div class="project">
                <img :src="project1" alt="">
            </div>
            <div class="project-content">
                <p>this is a project!!!!</p>
            </div>
        </section>
        <section>
            <div class="project">
                <img :src="project2" alt="">
            </div>
            <div class="project-content">
                <p>this is a project!!!!</p>
            </div>
        </section>
        <section>
            <div class="project">
                <img :src="project3" alt="">
            </div>
            <div class="project-content">
                <p>this is a project!!!!</p>
            </div>
        </section>
        <section>
            <div class="project">
                <img :src="project4" alt="">
            </div>
            <div class="project-content">
                <p>this is a project!!!!</p>
            </div>
        </section>
        
    </div>
</template>

<script>
import Project1 from '@/images/project1.jpg'
import Project2 from '@/images/project2.jpg'
import Project3 from '@/images/project3.jpg'
import Project4 from '@/images/project4.jpg'
    export default {
        data() {
            return {
                project1: Project1,                
                project2: Project2,
                project3: Project3,
                project4: Project4
            }
        }
    }
</script>

<style  scoped>

.project-container{
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    background-color: #fdf0d5;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}
.project{
    width: 15rem;
    padding: 5rem;   
    background-color: #669bbc;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.project-content{    
    border-radius: 10px;
    
}

.project-content p{
    color: #fdf0d5;

}

.project img{
    width: 100%
}

section{

border-radius: 10px;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
background-color: #780000;
}



</style>