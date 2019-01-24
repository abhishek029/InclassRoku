(()=>{
    // create a component first
    const HomePageComponent = {
        template: "<h2>This is the home page</h2>"
    }

    const UsersPageComponent = {
        template: "<h2>This is the users page</h2>"
    }
    const ContactPageComponent = {
        template: "<h2>This is the contact page</h2>"
    }
    const ErrorPageComponent = {
        template: "<h2>Page not found! Try again.../h2>"
    }

    const routes = [
        { path: '/', name: 'home', component: HomePageComponent},
        { path: '/contact', name: 'contact', component: ContactPageComponent},
        { path: '/users', name: 'users', component: UsersPageComponent},
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