// Part 1 Exercises (use Copilot inline suggestions)

// Exercise 1: Comment-Driven Development

// Function to calculate the factorial of a number
// !5 = 5 * 4 * 3 * 2 * 1
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
}

// Exercise 2: Array Operations
const nums = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log('evenNumbers:', evenNumbers)


// Exercise 3: Function from Signature
// Type this on a new line and press Enter:
// function reverseString(str)
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    const array = str.split('')
    const reversedArray = array.reverse()
    return reversedArray.join('')
}

const x = reverseString("Hello, World!"); // Output: "!dlroW ,olleH"
console.log(x)


// Exercise 4: Process User Data 
const processUserData = (users) => {
    // Input validation
    if (!Array.isArray(users)) {
        throw new TypeError('Expected users to be an array');
    }
    if (users.length === 0) {
        return [];
    }
    
    try {
        return users
            .filter(user => user && typeof user === 'object' && user.age >= 18)
            .map(({ name, email }) => {
                if (!name || !email) {
                    throw new Error('User must have name and email properties');
                }
                return { name, email };
            });
    } catch (error) {
        console.error('Error processing user data:', error.message);
        throw error;
    }
};

// Add your own experiments below: