const users = [
    {
        email: 'adityabagri@gmail.com',
        password: 'password'
    },
    {
        email: 'john.doe@example.com',
        password: 'john1234'
    },
    {
        email: 'jane.smith@example.com',
        password: 'jane4321'
    },
    {
        email: 'alice.jones@example.com',
        password: 'alicePass'
    },
    {
        email: 'bob.brown@example.com',
        password: 'bobSecure'
    },
    {
        email: 'charlie.davis@example.com',
        password: 'charlie789'
    },
    {
        email: 'danielle.evans@example.com',
        password: 'daniPass1'
    },
    {
        email: 'frank.garcia@example.com',
        password: 'frankPass2'
    },
    {
        email: 'grace.hill@example.com',
        password: 'graceStrong'
    },
    {
        email: 'harry.ivan@example.com',
        password: 'harry123'
    }
];

export const getUserByEmail = (email) => {
    const found = users.find(user => user.email === email);
    return found;
}