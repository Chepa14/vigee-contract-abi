export class StateSchema {
    numUint: number | bigint;
    numByteSlice: number | bigint;

    constructor(numUint: number | bigint, numByteSlice: number | bigint) {
        this.numUint = numUint;
        this.numByteSlice = numByteSlice;
    }
}
interface ABIStateEntry {
    readonly name?: string;
    readonly type?: string;
    readonly desc?: string;
}

export interface ABIStateSchema {
    locals: ABIStateEntry[];
    globals: ABIStateEntry[];
}