const {userService} = require('../../service')

module.exports = {
    getAllUsers: async (req, res) => {
        let users = await userService.getUsers();
        res.render('users', {users})
    },

    // authUser: async (req, res) => {
    //     res.render('login')
    // },

    // newUser: async (req, res) => {
    //     res.render('register')
    // },
    //
    // helloUser: async (req, res) => {
    //     res.render('main')
    // },

    updateUser: (req, res) => {
        res.end('PUT users')
    },

    deleteUser: (req, res) => {
        const params = req.params
        const query = req.query;

        res.json({params, query})
    },

    createUser: async (req, res) => {
        await userService.createUser(req.body);
        res.redirect('users')
    }
};
