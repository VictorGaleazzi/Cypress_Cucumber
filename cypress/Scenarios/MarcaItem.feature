# language: pt

Funcionalidade: Marca Item

    Contexto:         
        E cliquei no menu 'Cadastros'
        E cliquei no primeiro sub-menu 'Itens'
        E cliquei no segundo sub-menu 'Marca'

    Cenário: Cadastrando uma marca de item
        Quando clico no botão Novo
        E preencho o campo descrição com o valor 'Cadastro de Marca Teste Automatizado'
        E clico no botão Salvar
        # E clico no botão Home
        

    