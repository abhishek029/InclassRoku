import UserComponent from './UserComponent.js';

export default{
    template: `
        <div class="row" id="login">
            <div class="col-sm-12">
                <h1>You are on the Users page</h1>
            </div>
            
            <user v-for="(user, index) in userList" : liveuser="user" :key="index"></user>
        </div>
    `,

    data(){
        return{
            message: "Who's Using Roku?",

            userList: []
        }
    },

    method: {
        fetchAllUsers(){
            let url = `./admin/scripts/users.php?allUsers=true`;

            fetch(url)
                .then(res => res.json())
                .then(data => {this.userList = data})
            .catch(function(error){
                console.error(error);
            });
        }
    },

    components: {
        user: UserComponent
    }
}