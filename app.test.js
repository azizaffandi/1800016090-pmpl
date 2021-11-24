const cloneArray = require('./app')

test ('Properly Clones Array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})

// Aziz Affandi 1800016090 //