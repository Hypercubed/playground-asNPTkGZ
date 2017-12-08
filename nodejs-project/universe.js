// { autofold
const { Stack } = require('@hypercubed/f-flat');

const f = new Stack();
// }

f.eval(`

    core: rcl use
    math: rcl use

    160 set-precision

`).stack;

