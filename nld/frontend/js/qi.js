var getqi = function (textdata) {
    console.log(textdata);
    // axios.post('http://localhost:8000/qi', textdata)
    //     .then(function (response) {
    //         console.log(response);
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    axios({
        method: 'post',
        url: 'http://localhost:8000/qi',
        headers:{'Content-type': 'application/json'},
        data: textdata
    })
    .then(function(response){
        console.log('Success!');
        console.log(response);
    })
    .catch(function(error){
        console.log('Error!');
        console.log(error);
    });
};