function findPropPath(obj, path, defaultValue) {

    for (let key in obj) {
        if (key === path) {
            return obj[key];
        } else if (typeof obj[key] === "object") {
            let index = path.indexOf('.');
            path = path.slice(index + 1)
            let result = findPropPath(obj[key], path);
            if (result) {
                return result;
            }
        }
    }

    return defaultValue;

}

const obj = {
    'pupa': {
        'lupa': {
            'beep': 'boop',
        },
        'foo': 'bar',
    },
};

console.log(findPropPath(obj, "pupa.lupa"));
console.log(findPropPath(obj, "pupa.lupa.beep"));
console.log(findPropPath(obj, "pupa.foo"));
console.log(findPropPath(obj, "pupa.ne.tuda"));
console.log(findPropPath(obj, "pupa.ne.tuda", true));
console.log(findPropPath(obj, "pupa.ne.tuda", "Default value"));