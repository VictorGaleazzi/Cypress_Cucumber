# language: pt

Funcionalidade: Pessoa

    Contexto:         
        Dado cliquei no menu 'Cadastros'
        E cliquei no primeiro sub-menu 'Pessoas'
        E cliquei no segundo sub-menu 'Pessoa'

    Cenário: Cadastrando Nova Pessoa
        Quando clico no botão 'Novo' no Formulário de Pessoa
        E seleciono o campo 'País' com valor 'ANGOLA' na tela de Pessoa
        E preencho o campo 'Nome' com o valor 'Teste Automatizado' na tela de Pessoa
        E preencho o campo 'Identificação' com o valor 'Teste Automatizado' na tela de Pessoa
        E preencho o campo 'Data de Nascimento' com o valor '20/04/2024' na tela de Pessoa
        E seleciono o campo 'Atribuição' com valor 'Cliente' na tela de Pessoa