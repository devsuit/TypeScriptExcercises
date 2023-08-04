var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = __assign({ Manufacturer: manufacturer, Model: model }, options.reduce(function (acc, option) { return (__assign(__assign({}, acc), option)); }, {}));
    return carInfo;
}
var car1 = createCar("Honda", "Civic", { Color: "White", Sunroof: true });
var car2 = createCar("Toyota", "Corolla", { Color: "Black", Year: 2023 });
console.log(car1);
console.log(car2);
