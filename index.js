const bcrypt = require('bcrypt');
const saltRounds = 12;
const myPlaintextPassword = '123';

let hashValue = ''

async function main() {

    hashValue = await bcrypt.hash(myPlaintextPassword, saltRounds);
    console.log(hashValue)

    const match = await bcrypt.compare(myPlaintextPassword, hashValue);
    console.log(match, hashValue)
    if (match) {
        console.log('logou')
    }

}

main()