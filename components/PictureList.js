const UserList = {
    oninit: Picture.loadList,
    view: function() {
        return m(".picture-list", Picture.list.map(function(img) {
            return m("a.picture-list-item", img.author)
        }))
    }
}