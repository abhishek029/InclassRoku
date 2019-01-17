(()=>{
    // create a component first
    const UserComponent = {
        props: ['name', 'role'],

        template: "#userstemplate",

        created: function(){
            console.log("I'm aliiiiiive!");
        },
        methods: {
            logFromChild(){
                console.log("logged from the component");
            },
            passEvent(){
                this.$emit('shoutup');
            }
        }
    }

    // then your vue instance

    const vm = new Vue({
        el:"#app",
        data:{
            testmessage: "sup"
        },
        methods:{
            calledOnParent(){
                console.log("This method lives in the main VM and wass cxalled a component");
            }
        },
        created: function(){
            console.log("Main Vue instance");
        },
        components: {
            'activeusers': UserComponent
        }
    })
})();