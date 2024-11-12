// Vue 2

new Vue({
    el: "#app",
    data: {
        images :[
            { url: 'https://images.dog.ceo/breeds/hound-basset/n02088238_9015.jpg', description: 'Photo 1', author: "autor 1" },
            { url: 'https://images.dog.ceo/breeds/samoyed/n02111889_2366.jpg', description: 'Photo 2', author: "autor 2" },
            { url: 'https://images.dog.ceo/breeds/dhole/n02115913_2542.jpg', description: 'Photo 3', author: "autor 3" },
            { url: 'https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1659.jpg', description: 'Photo 4', author: "autor 4" },
            { url: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3423.jpg', description: 'Photo 5', author: "autor 5" },
            { url: 'https://images.dog.ceo/breeds/terrier-toy/n02087046_2957.jpg', description: 'Photo 6', author: "autor 6" },
        ],
        selectedImage: null
    },
    template:`
        <div>
            <div class="gallery-container">
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="image-item"
                    @click="selectImage(image)"
                >
                    <img :src="image.url" :alt="image.description">
                </div>
            </div>

            <div v-if="selectedImage" class="description-modal">
                <div class="modal-content">
                    <span id="close-button" @click="closeDescription">&times;</span>
                    <img :src="selectedImage.url" :alt="selectedImage.description">
                    <p>Autor: {{ selectedImage.author }}</p>
                    <p>{{ selectedImage.description }}</p>
                </div>
            </div>
        </div>
            `,
            methods: {
                showDescription(image){
                    this.selectedImage = image;
                },
                closeDescription(){
                    this.selectedImage = null;
                }
            }
});