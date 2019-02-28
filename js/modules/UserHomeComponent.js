export default{
    props: ['currentuser'],

    template:`
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1>You're on the user's home page!</h1>
                </div>
            </div>
        </div>
    `,

    data(){
        return{
            activeMediaType: "video",

            // push first and push it into an active media reference
            currentMediaDetails: {},


            mdiaTypes:[
                { iconClass: "fas fa-headphones", description: "audio"},
                { iconClass: "fas fa-film", description: "video"},
                { iconClass: "fas fa-tv", description: "televison"},
                
            ],

            retriveMedia: []
            }
        },
        created: function(){
            this.loadMedia(null, "video");
        },
        methods:{
            loadMedia(filter, mediaType){
                if(this.activeMediaType !== mediaType && mediaType !== null){
                    this.activeMediaType = mediaType;
                }
            

                let url = (filter == null) ? `./admin/scripts/index.php?media=${this.activeMediaType}` : `./admin/scripts/index.php?media=${this.activeMediaType}&&filter=${filter}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {this.retriveMedia = data;})
                    .catch(function(error){
                        console.error(error);
                    });
            }
        }
    
}