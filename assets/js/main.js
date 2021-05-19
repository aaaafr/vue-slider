// Descrizione:
// Creare uno slider di immagini: 
// potete usare le immagini che desiderate.
// Lo slider prevederà due frecce (icone) 
// che permettono di scorrere tra le immagini dello slider
const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        images: [
            'https://scitechdaily.com/images/Mars-Red-Planet-Highlights-scaled.jpg',
            'https://media.newyorker.com/photos/60994dabccd28612d3013cec/master/pass/Mann-SpaceEthics.jpg',
            'https://cdn.britannica.com/24/73524-050-3C2F3432/result-seasons-Mars-planet-inclination-plane-cap.jpg',
            'https://cdn.mos.cms.futurecdn.net/iWG5zg5Mpt8AvZqc4vYa4K.jpg'
        ],
        key: "",
    },
    methods:{
        prev(){
            // do something
            console.log('Cliccato su prev');
            if(this.counter === 0){   
                return this.counter = this.images.length -1;
            }
            return this.counter -= 1

        },
        next(){
            // do something
            console.log('Cliccato su next');
            
            if(this.counter === this.images.length -1){
               
                return this.counter = 0
            }
            return this.counter += 1

        },
        goToImg(index){
            return this.counter = index

        },
    
    },


mounted() {
    document.addEventListener("keyup", (e) => {
        console.log(e.key);
        if(e.key === "ArrowLeft"){
            this.prev()
        }else if(e.key ==="ArrowRight"){
            this.next()
        }
    });

    setInterval(this.next, 3000);
        
        
    

}
});








// Utiliziamo una classe first e last 
// per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active 
// per aiutarci a capire quale è l’immagine 
// attuale da visualizzare nello slider
// Clicchiamo sui pallini e 
// mostriamo l’immagine corrispondente
// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (usate created o mounted!).