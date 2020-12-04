
const Picture = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://picsum.photos/v2/list?page=2&limit=10",
            withCredentials: false,
        })
        .then(function(result) {
            Picture.list = result
        })
    }
}

const Layout = {
    view: function(vnode) {
        return m("main.layout", [
            m("section", vnode.children)
        ])
    }
}

const PictureList = {
    oninit: Picture.loadList,
    view: function() {
        return m(".picture-list",  Picture.list.map(function(img) {
            return m('div.picture-list-item' ,[
                m("img.picture-list-img", {'src' : img.download_url}),
                m("p.picture-list-author", img.author) 
            ])
        }))
    }
}

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Layout, m(PictureList))
        }
    }
})

m.render(document.body, "hello world")
