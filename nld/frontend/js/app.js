var vm = new Vue({
    el: '#quickinsights',
    data: {
        insights: [],
        message: ''
    },
    methods: {
        addInsight: function () {
            axios({
                method: 'post',
                url: 'http://localhost:8000/qi',
                headers: { 'Content-type': 'application/json' },
                data: {
                    'text': this.message
                }
            })
                .then(function (response) {
                    console.log('Success!');
                    console.log(response);
                    vm.insights.push(response.data);
                })
                .catch(function (error) {
                    console.log('Error!');
                    console.log(error);
                });
        }
    }
});