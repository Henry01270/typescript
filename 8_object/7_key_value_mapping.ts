/**
 * Key Value Mapping
 */
enum State {
    loading,
    done,
    error,
} // State 상태들

type GlobalApiStatus = {
    getUser: State;
    // 유저로부터 요청을 받은 상태
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}
// UserApiStatus는 dry 원칙에 어긋난다. 
// property가 변경되면 수정하기 힘들다.

// 따라서
type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    paginateUsers: GlobalApiStatus['paginateUsers'];
    banUser: GlobalApiStatus['paginateUsers'];
}
// 이렇게 불러올 수 있다. 만약 이것마저 귀찮아 진다면,

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k];
}

// UserApiStatus3를 더 간단히 표현하면,
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;

// 직접 추가하는 것이 아니라 상속받을 프로퍼티를 제외하는법을 사용하려면
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;


/**
 * keyof
 * 
 * 어떤 타입에 keyof를 실행했을때,
 * 그 객체의 key값들을 union으로 가져올 수 있다.
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys ='getUser';
// key값이 자동완성 되는걸 확인할 수 있다.

// keyof 응용하기
type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
    // keyof를 통해 GlobalApiStatus에 키값들을 전부 불러온다.
}
// 하지만 모든 key들이 전부 들어와서 필요없는 key도 추가된다.

type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
    // Exclude를 통해 사용하지 않을 property제외
}

// ?를 붙여서 optional로 만들수도 있다.
type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
    // Exclude를 통해 사용하지 않을 property제외
}


interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type'];
// FetchStatus기준에선 type 프로퍼티가 'loading', 'error'둘다 
// 될 수 있기 때문에 union으로 표시된다.