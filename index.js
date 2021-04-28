const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = [ '5511499704348' , '5511988002602', '5511932220325']
    const message ='O SENHOR JESUS te AMAR! ';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));