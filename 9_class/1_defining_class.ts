/**
 * Class 선언하기
 */
// class 기본형태
class SampleClass { }

class Game {
    name: string;
    country: string;
    download: number;
    // 값을 입력해서 초기화 해주어야 한다.

    constructor (name: string, country: string, download: number){
        this.name = name;
        this.country = country;
        this.download = download;
    }
    // 사전에 err를 표시하여 초기화하지 않는 실수를 잡아줌

    introduce() {
        return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임이다.`;
    }
}

const starcraft = new Game(
    'Star Craft',
    'USA',
    10000000,
);

const retVal = starcraft.introduce();

// starcraft.changeGame();
// 없는 함수는 바로 err 나타남