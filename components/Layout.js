var Layout = {
    view: function(vnode) {
        return m("main.layout", [
            m("section", vnode.children)
        ])
    }
}