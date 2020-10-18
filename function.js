const getObjectProperty = (obj, path, defaultValue) => {
    // TODO: your code here
}

const obj = {
    'pupa': {
        'lupa': {
            'beep': 'boop',
        },
        'foo': 'bar',
    },
};

getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'