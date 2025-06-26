/**
 * Accessor Decorator
 */
class Rectangle {
    #height: number;
    #width: number;
    // #으로 시작하면 JS private 값이기 때문에 외부에서 엑세스 불가.

    constructor(height: number, width: number) {
        this.#height = height;
        this.#width = width;
    }

    @Configurable(false)
    get height() {
        return this.#height;
    }

    @Configurable(true)
    get width() {
        return this.#width;
    }
}

function Configurable(configurable: boolean) {
    return function(target: any, propertyKey: string, descripter: PropertyDescriptor) {
        descripter.configurable = configurable;
    }
}

const rectangle = new Rectangle(100, 200);

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));