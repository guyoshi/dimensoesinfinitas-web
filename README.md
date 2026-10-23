# Dimensões Infinitas — Site Comercial Oficial

**Estado:** configuração inicial, sem site criado e sem publicação.

Este repositório será a interface **pública e comercial** de Dimensões Infinitas, com páginas de apresentação de livros, captação consentida de leitores e ligações de compra. Ele não contém manuscritos, resumos completos de capítulos, spoilers, senhas nem documentação interna de cânone.

## Fronteiras dos repositórios

| Repositório | Função |
|---|---|
| `guyoshi/dimensoesinfinitas` (privado) | Livros, documentação canônica, planejamento editorial e dossiês de lançamento |
| `guyoshi/dimensoesinfinitassite` (atual) | Portal interativo e exploração do universo |
| `guyoshi/dimensoesinfinitas-web` (este) | Site comercial oficial, leve e orientado a lançamentos |

Nenhum conteúdo dos outros repositórios deve ser copiado automaticamente para cá. Publicar somente materiais aprovados.

## Decisões definidas
- **Público inicial:** Brasil, PT-BR.
- **Domínio comprado pelo autor:** `dimensoesinfinitas.com`, gerenciado pelo Cloudflare (informação confirmada pelo autor em 23/10/2026). **Vinculação DNS/hospedagem ainda não configurada/verificada**.
- **Inglês:** preparar estrutura futura em `/en/`; não criar páginas traduzidas vazias agora.
- **Livro de destaque inicial:** *Ruínas dos Céus*.
- **Ciclo de Jesed:** pentalogia circular, cinco portas de entrada. Slogan oficial: **“Cinco histórias. Um único ciclo. Sem início e sem fim.”**
- **Sinopse:** utilizar a versão oficial registrada no dossiê privado de lançamento; não revelar a sobrevivência de Jokara nem a passagem à superfície nos textos comerciais.
- **Digital:** Amazon KDP; **impresso:** Bok2, com links inseridos somente quando confirmados.
- **Privacidade:** cookies e analytics somente após a definição de consentimento aplicável; formulário com finalidade clara, política de privacidade e opção de descadastro.

## Estado técnico
Ainda **não há** framework, HTML, CSS, JS, hospedagem, domínio, formulários, newsletter, analytics ou automações de publicação instalados. Essas decisões serão tomadas na etapa de implementação, para evitar dependências antecipadas.

## Objetivos de conversão oficiais (outubro de 2026)
1. **Pré-lançamento:** apresentar Ruínas dos Céus e conseguir leitores interessados que optem por receber avisos (cadastro de newsletter, evento principal quando habilitado), mas sem bloquear a leitura gratuita do capítulo.
2. **Lançamento:** vendas na Amazon KDP e Bok2 por links externos; monitorar cliques e vendas reais separadamente.
3. **Longo prazo:** marca autoral e catálogo de séries do Dimensões Infinitas, reutilizando leitores consentidos para novos lançamentos.

**Arquitetura escolhida:** página inicial de marca com lançamento em destaque + landing dedicada do livro em `/ciclo-de-jesed/ruinas-dos-ceus/`, direcionada por Instagram e criadores. Nunca substituir o site inteiro por uma única landing.

**Hospedagem proposta:** Cloudflare Pages com integração ao repositório GitHub `guyoshi/dimensoesinfinitas-web` via branch `main`, prévias por PR e domínio personalizado só depois do primeiro deploy válido. Conexão à conta Cloudflare ainda pendente; nenhuma configuração DNS foi presumida.

## Próxima etapa (não executada)
Ver `docs/IMPLEMENTACAO.md` e `docs/ARQUITETURA.md`.
