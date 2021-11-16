const { User } = require('../models');

const userData = [
    {
        username: 'testuser1',
        email: 'testuser1@test.com',
        password: 'test123456'
    },
    {
        username: 'testuser2',
        email: 'testuser2@test.com',
        password: 'test123456'
    },
    {
        username: 'testuser3',
        email: 'testuser3@test.com',
        password: 'test123456'
    },
    {
        username: 'testuser4',
        email: 'testuser4@test.com',
        password: 'test123456'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;