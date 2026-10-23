# Próximas etapas de implementação

**PESQUISA PRIORITÁRIA, adequada ao porte do autor:** [BENCHMARK_10_AUTORES_INDEPENDENTES_E_CROWDFUNDING.md](BENCHMARK_10_AUTORES_INDEPENDENTES_E_CROWDFUNDING.md) (10 sites de escritores independentes, financiamento coletivo, plano de networking).\n\n**Pesquisa histórica secundária (escala grande, não comparação direta):** [BENCHMARK_10_CASOS_EDITORIAIS.md](BENCHMARK_10_CASOS_EDITORIAIS.md), com 2 projetos de resultados problemáticos, 2 êxitos excepcionais e 6 estratégias comprováveis de autores/editoras. Nenhum resultado dos casos foi atribuído exclusivamente ao site.

**Decisão após benchmark:** preparar um site comercial leve com página direta de Ruínas, amostra gratuita sem cadastro obrigatório, inscrição consentida e links KDP/Bok2; preservar portal interativo separado, sem copiar spoilers nem construir checkout próprio.


**Status geral:** infraestrutura mínima de deploy preparada no GitHub; integração, publicação e domínio ainda não confirmados; site comercial ainda não construído.

## Configuração de conta/repositório
- [x] Criar `guyoshi/dimensoesinfinitas-web` no GitHub com visibilidade pública (somente conteúdo aprovado).
- [x] Confirmar branch padrão `main`.
- [ ] Configurar proteção da branch quando disponível.
- [ ] Habilitar alertas de dependências e verificação de segredos se disponibilizados pelo GitHub.
- [x] Manter nenhuma chave/API em arquivos versionados.
- [x] Definir **Cloudflare Pages** como hospedagem proposta, preservando o GitHub como fonte; ainda NÃO conectado nem com projeto criado.

## Base Cloudflare Workers criada em 23/10/2026
- [x] `wrangler.jsonc` com nome `dimensoesinfinitas-web` e ativos estáticos em `./public`.
- [x] `public/index.html` provisório, sem formulário e com `noindex`.
- [ ] Conectar via Workers Builds, branch `main`, build vazio, deploy `npx wrangler deploy`, sem usar token da Charm Host.
- [ ] Validar primeiro em URL `*.workers.dev` antes de vincular domínio.

## Domínio e línguas
- [x] Compra e gestão de `dimensoesinfinitas.com` no Cloudflare informadas pelo autor em 23/10/2026.
- [ ] Confirmar zona DNS, nameservers e estado do domínio diretamente no Cloudflare (sem inferência a partir de compra).
- [ ] Autorizar a aplicação GitHub do Cloudflare Pages para **apenas** `guyoshi/dimensoesinfinitas-web` e conectar a branch `main`.
- [ ] Confirmar build/artefatos e primeiro deploy em URL de prévia antes de vincular domínio.
- [ ] Associar `dimensoesinfinitas.com` e `www` pelo painel Pages, sem registros DNS inventados; validar HTTPS e redirecionamento canônico.
- [ ] Apontar DNS somente quando houver hospedagem funcionando.
- [ ] Idioma inicial PT-BR; planejar `/en/` sem duplicar páginas vazias.

## Objetivo comercial (acordado para orientar implementação)
- [x] Decisão estratégica: **marca com home permanente + landing de Ruínas**, e não somente página de leads.
- [x] Antes do lançamento, conversão principal: **interesse/leads consentidos**, apoiada em capítulo gratuito livre. Após lançamento, prioridade de conversão passa para **cliques de compra e vendas reais**.
- [ ] Definir plataforma de newsletter, custos, consentimento e descadastro antes de integrar.

## Página comercial Ruínas dos Céus
- [ ] Importar CAPA FRONTAL aprovada (não a montagem de frente/verso).
- [ ] Copiar SINOPSE OFICIAL do dossiê de lançamento do livro.
- [ ] Preparar capítulo gratuito revisado e acessível, sem capturar email obrigatoriamente.
- [ ] Inserir marca de Ciclo de Jesed sem competir com o título.
- [ ] Explicar pentalogia circular sem sugerir ausência de conclusão.
- [ ] Criar newsletter consentida com descadastro e política de privacidade.
- [ ] Adicionar links Kindle/Bok2 apenas quando ativos.

## Métricas e lançamento
- [ ] Configurar GA4, Search Console e eventos `book_view`, `sample_open`, `newsletter_signup`, `kindle_click`, `bok2_click`.
- [ ] Validar consentimento, UTM e jornada de leitura mobile.
- [ ] Auditar SEO, performance, acessibilidade e exposição de spoilers.
- [ ] Registrar lançamento, páginas publicadas, primeiras métricas e ajustes no dossiê privado.

## O que explicitamente NÃO fazer antes da implementação aprovada
- Não criar homepage, HTML, CSS, JavaScript, formulários ou páginas de livros.
- Não fazer deploy do repositório documental atual como se já fosse site, nem vincular DNS antes de haver uma versão funcional. Cloudflare Pages é a escolha proposta.
- Não copiar o portal interativo ou documentação canônica para o repositório público.
