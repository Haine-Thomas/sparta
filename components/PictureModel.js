var Picture = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://picsum.photos/v2/list?page=2&limit=100",
            withCredentials: true,
        })
        .then(function(result) {
            Picture.list = result.data
        })
    },