(()=>{
    // create a component first
    const UserComponent = {
        props: ['name', 'role'],

        template: "#userstemplate"
    }

    // then your vue instance

    const vm = new Vue({
        el:"#app",
        data:{
            testmessage: "sup"
        },
        methods:{

        },
        components: {
            'activeusers': UserComponent
        }
    })
})();