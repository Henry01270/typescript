/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '코드팩토리';
// const genricString2: GenericSimpleType = '코드팩토리'; > err

interface DoneState<T> {
    data: T[];
}
interface LoadingState {
    requestedAt: Date;
}
interface ErrorState {
    error: string;
}
type State<T = string> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data: ['123', '456'],
}
// union의 원칙에 의해 아래와 같이 가능
state = {
    requestedAt: new Date(),
}
state = {error: 'error'};

let state2: State = {
    data: ['123', '456'],
}