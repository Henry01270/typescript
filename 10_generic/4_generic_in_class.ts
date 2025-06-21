/**
 * Class에서 Generic 사용하기
 * 
 * TS에서는 Class에서 Generic을 사용할일이 압도적으로 많다.
 */

class Pagination<Data, Message> {
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;
// type이 제대로 유추되는걸 확인할 수 있다.

class Pagination2<Data, Message> {
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;

    constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }

}

const pagination2 = new Pagination2([123, 456]);

pagination2.data;
// 입력한 값으로부터 data type을 유추함 > number[]
pagination2.message;
// message type을 알 수 없다.
pagination2.lastFetchedAt;

// 따라서 명시적으로 generic을 넣어주는것이 좋다.
// const pagination2 = new pagination2<number, string>([123,456]);

class DefaultGeneric<T = boolean> {
    // Default로 설정하는 것도 가능하다.
    data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data;