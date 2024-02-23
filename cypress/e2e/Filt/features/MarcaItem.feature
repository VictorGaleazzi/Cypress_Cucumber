# language: pt

Funcionalidade: Marca Item



    Cenário: Cadastrando uma marca de item
        Quando preencho o campo CPF com o valor '93297646063'
        E preencho o campo Senha com o valor 'testeviasoft'
        E envio o formulário de login
        Então o nome de usuário 'Victor Galeazzi ' deve estar visível

        Quando clico no botão Mostrar menu
        E clico no botão Cadastros
        E clico no botão Itens
        E clico no botão Marca
        E clico no botão Novo
        E preencho o campo descrição com o valor 'Cadastro de Marca Teste Automatizado'
        E clico no botão Salvar
        # E clico no botão Home
        

    