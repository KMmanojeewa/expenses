
const domNode = document.getElementById('pure-js-page');
if(domNode) {
    console.log('pure js')

    // const doSomething = (func) => {
    //     console.log('do something');
    //     func('tar');
    // };
    //
    // function doSomethingElse(data, callback) {
    //     console.log('do something else');
    //     callback(data+' rar');
    // }
    // function doThirdThing(data, callback) {
    //     console.log('do third thing');
    //     callback(data+' ram');
    // }
    // function failureCallback() {
    //     console.log('failure!');
    // }
    //
    // doSomething(function (result) {
    //     doSomethingElse(result, function (newResult) {
    //         doThirdThing(newResult, function (finalResult) {
    //             console.log(`Got the final result: ${finalResult}`);
    //         }, failureCallback);
    //     }, failureCallback);
    // }, failureCallback);


    function doSomething() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Other things to do before completion of the promise
                console.log("Did something");
                // The fulfillment value of the promise
                resolve("https://example.com/");
            }, 200);
        });
    }

    const doSomethingElse = (result) => {
        console.log('do something else', result);
    };
    const doThirdThing = () => {
        console.log('do third thing');
    };
    const failureCallback = () => {
        console.log('failure ');
    };

    doSomething()
        .then(function (result) {
            return doSomethingElse(result);
        })
        .then(function (newResult) {
            return doThirdThing(newResult);
        })
        .then(function (finalResult) {
            console.log(`Got the final result: ${finalResult}`);
        })
        .catch(failureCallback);




}

