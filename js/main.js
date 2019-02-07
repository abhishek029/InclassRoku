import LoginComponent from '../js/modules/LoginComponent.js';
import UsersComponent from '../js/modules/UsersComponent.js';

const routes = [
    { path: '/', redirect:{name: 'login'}},
    { path: '/login', name: 'login', component: LoginComponent},
    { path: '/users', name: 'users', component: UsersComponent}
]
const router = new VueRouter({
    routes
});
// then your vue instance

const vm = new Vue({
    data:{
        testmessage: "sup",

        authenticated: false,

        mockAccount:{
            username: "abc",
            password: "123"
        }
    },

    methods:{
        calledOnParent(){
            console.log("This method lives in the main VM and wass cxalled a component");
        },
        setAuthenticated(status){
            this.authenticated = status;
        },
        logout(){
            this.router.push({path: "/login"});
            this.authenticated = false;

        }
    },

    created: function(){
        console.log("Main Vue instance");
    },

    router:router
}).$mount("#app");

router.beforeEach((to, from, next)=>{
    console.log('router guard fired');

    if(vm.authenticated == false){
        next("/login");
    }else{
        next();
    }
});