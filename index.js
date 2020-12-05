
const Picture = {
    list: [],
    loadList: function() {
        const page = Math.floor(Math.random()*(100-1+1)+1);
        return m.request({
            method: "GET",
            url: `https://picsum.photos/v2/list?page=${page}&limit=10`,
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
                m("h1.picture-list-author", img.author),
                m("img.picture-list-img", {'src' : img.download_url})
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
