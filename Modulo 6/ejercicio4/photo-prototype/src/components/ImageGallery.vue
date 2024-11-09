<template>
    <div class="image-gallery">
      <div class="scroll-container" @scroll="handleScroll">
        <div
          v-for="(photo, index) in visiblePhotos"
          :key="index"
          class="image-item"
          @click="selectPhoto(photo)"
        >
          <img :src="photo.url" :alt="photo.description" />
        </div>
      </div>
  
      <ImageDetails
        v-if="selectedPhoto"
        :photo="selectedPhoto"
        @close="selectedPhoto = null"
      />
    </div>
  </template>

  <script>
    import ImageDetails from './ImageDetails.vue';

    export default{
        components: {
            ImageDetails,
    },
    data(){
        return{
            photos: [
                {url: 'photo.url', description: 'Photo 1', author:"autor 1"},
                {url: 'photo.url', description: 'Photo 2', author:"autor 2"},
            ],
            visibleStart :0,
            visibleEnd:2,
            selectedPhoto:null,
        };
    },
    computed:{
        visiblePhotos(){
            return this.photos.slice(this.visibleStart, this.visibleEnd);
        },
    },

    methods: {
        handleScroll(event) {
            const container = event.target;
            if(container.scrollleft + container.clientWidth >= container.scrollWhidth ){
                this.visibleStart = Math.min(this.visibleStart + 2, this.photos.length -2);
                this.visibleEnd = Math.min(this.visibleEnd + 2, this.photos.length);
            } else if (container.scrollleft === 0){
                this.visibleStart = Math.max(this.visibleStart - 2, 0);
                this.visibleEnd = Math.max(this.visibleEnd - 2, 2);
            }
        },

        selectPhoto(photo){
            this.selectedPhoto = photo;
            },
        },
    };
</script>

<style scoped>
.image-gallery{
    width: 300px;
    overflow: scroll;
    display: flex;
}

.scroll-container{
    display: flex;
    overflow: auto;
}

.image-item{
    margin: 5px;
    cursor: pointer;
}

img{
    max-width: 150px;
}

</style>