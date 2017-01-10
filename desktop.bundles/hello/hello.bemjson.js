({
    block : 'page',
    title : 'hello',
    head : [
        { elem : 'css', url : 'hello.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'hello.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'hello',
            content: {
                elem: 'greeting',
                content: 'Привет, %пользователь%!'
            }
        }
    ]
})
