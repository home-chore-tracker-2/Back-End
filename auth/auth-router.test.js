const request = require('supertest');
const db = require('../data/dbConfig');
const server = require('../server');

describe('auth-router', function() {
    beforeEach(async () => {
        await db('user').truncate();
        await db('child').truncate();
        await db('chores').truncate();
        await db('parent_child').truncate();
    })
    describe('/register', function() {
        it('should add a user with a status of 201', function() {
           return request(server)
                .post('/api/auth/register')
                .send({ username: 'Bri', password: 'test', email: 'test@email.com' })
                .then(res => {
                    // expect(res.type).toMatch(/json/i)
                expect(res.status).toBe(201);
            })
        })
    })
    describe('/login', function() {
        it('should login a user with a status of 200', function() {
            return request(server)
            .post('/api/auth/login')
            .send({ username: 'Bri', password: 'test', email: 'test@email.com' })
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    })
})

