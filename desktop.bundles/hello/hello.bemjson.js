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
            content: [
                {
                    elem: 'greeting',
                    content: 'Привет, %пользователь%!'
                },
                {
                    block: 'input',
                    mods : { theme: 'islands', size : 's' },
                    name : 'name',
                    placeholder : 'Имя пользователя'
                }
            ]
        }
    ]
})
