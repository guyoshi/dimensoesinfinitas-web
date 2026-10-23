# Próximas etapas de implementação

**PESQUISA PRIORITÁRIA, adequada ao porte do autor:** [BENCHMARK_10_AUTORES_INDEPENDENTES_E_CROWDFUNDING.md](BENCHMARK_10_AUTORES_INDEPENDENTES_E_CROWDFUNDING.md) (10 sites de escritores independentes, financiamento coletivo, plano de networking).\n\n**Pesquisa histórica secundária (escala grande, não comparação direta):** [BENCHMARK_10_CASOS_EDITORIAIS.md](BENCHMARK_10_CASOS_EDITORIAIS.md), com 2 projetos de resultados problemáticos, 2 êxitos excepcionais e 6 estratégias comprováveis de autores/editoras. Nenhum resultado dos casos foi atribuído exclusivamente ao site.

**Decisão após benchmark:** preparar um site comercial leve com página direta de Ruínas, amostra gratuita sem cadastro obrigatório, inscrição consentida e links KDP/Bok2; preservar portal interativo separado, sem copiar spoilers nem construir checkout próprio.


**Status geral: não iniciadas.** Este arquivo planeja tarefas, não afirma sua execução.

## Configuração de conta/repositório
- [x] Criar `guyoshi/dimensoesinfinitas-web` no GitHub com visibilidade pública (somente conteúdo aprovado).
- [x] Confirmar branch padrão `main`.
- [ ] Configurar proteção da branch quando disponível.
- [ ] Habilitar alertas de dependências e verificação de segredos se disponibilizados pelo GitHub.
- [x] Manter nenhuma chave/API em arquivos versionados.
- [ ] Escolher hospedagem apenas na etapa de criação do site.

## Domínio e línguas
- [ ] Verificar disponibilidade e titularidade de `dimensoesinfinitas.com`.
- [ ] Apontar DNS somente quando houver hospedagem funcionando.
- [ ] Idioma inicial PT-BR; planejar `/en/` sem duplicar páginas vazias.

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

## O que explicitamente NÃO fazer nesta etapa
- Não criar homepage, HTML, CSS, JavaScript, formulários ou páginas de livros.
- Não publicar via GitHub Pages/Vercel.
- Não copiar o portal interativo ou documentação canônica para o repositório público.
