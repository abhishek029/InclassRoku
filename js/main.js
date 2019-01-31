(()=>{
    // create a component first
    const HomePageComponent = {
        template: "<h2>This is the home page</h2>"
    }

    const UsersPageComponent = {
        props: ['id'],

        template: "#userList",

        data: function(){
            return {
                users: []
            }
        },

        created: function(){
            console.log('user component created');
            this.fetchUserData(this.id);
        },
        methods:{
            fetchUserData(users){
                let url=`./includes/index.php?users=${this.id}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => this.users = data)
                .catch(function(error){
                    console.error(error);
                })
            }
        }
    }
    const ContactPageComponent = {
        props: ['id'],

        template: "#userList",

        data: function(){
            return {
                users: []
            }
        },

        created: function(){
            console.log('user component created');
            this.fetchUserData(this.id);
        },
        methods:{
            fetchUserData(users){
                let url=`./includes/index.php?users=${this.id}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => this.users = data)
                .catch(function(error){
                    console.error(error);
                })
            }
        }
    }
    const ErrorPageComponent = {
        template: "<h2>Page not found! Try again...</h2>"
    }

    const routes = [
        { path: '/', name: 'home', component: HomePageComponent},
        { path: '/contact/:id', name: 'contact', component: ContactPageComponent, props: true},
        { path: '/users/:id', name: 'users', component: UsersPageComponent, props: true},
        { path: '/*', name: 'error', component: ErrorPageComponent }
    ]
    const router = new VueRouter({
        routes
    });
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
            'homepagecomponent': HomePageComponent,
            'userspagecomponent': UsersPageComponent,
            'contactcomponent': ContactPageComponent

        },

        router:router
    });
})();