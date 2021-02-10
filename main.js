const app = {
    data() {
        return {
            photos:[
                {img: 'images/1.jpg', alt:'cat',title:'Cat : Korat',done:false},
                {img: 'images/2.jpg', alt:'dog',title:'dog : Corgi',done:false},
                {img: 'images/3.jpg', alt:'lungpon',title:'Turtle : Lungpon',done:false},
            ]
        }
    },
    computed: {
        count(){
            return this.photos.filter( t => !t.done ).length
        }
    },
    methods: {
        toggleheart(index){
            this.photos[index].done = !this.photos[index].done
        }
    },
}
Vue.createApp(app).mount('#app')
 
