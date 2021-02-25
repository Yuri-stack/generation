const GetForm = {

    listen(){

        const form = document.querySelector('#form')
        const nameField = document.querySelector('#name')

        form.addEventListener('submit', event => {
            event.preventDefault()
            const name = nameField.value
            alert(`Muito obrigado pelo seu contato ${name}!`)
        })

    }

}

GetForm.listen()