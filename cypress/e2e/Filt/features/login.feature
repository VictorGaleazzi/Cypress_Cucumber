# language: pt

Funcionalidade: Login no Filt

    Cenário: Login bem sucedido 
        Dado que acessei a pagina de login do Filt
        Quando preencho o campo CPF com o valor '93297646063'
        E preencho o campo Senha com o valor 'testeviasoft'
        E envio o formulário de login
        Então o nome de usuário 'Victor Galeazzi ' deve estar visível
