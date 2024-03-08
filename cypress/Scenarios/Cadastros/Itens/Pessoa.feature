# language: pt

Funcionalidade: Pessoa

    Contexto:         
        Dado cliquei no menu 'Cadastros'
        E cliquei no primeiro sub-menu 'Pessoas'
        E cliquei no segundo sub-menu 'Pessoa'

    Cenário: Cadastrando Nova Pessoa
        Quando clico no botão 'Novo' no Formulário de Pessoa
        E seleciono o campo 'País' com valor 'ALEMANHA' na tela de Pessoa
        E preencho o campo 'Nome' com o valor 'Teste Automatizado' na tela de Pessoa