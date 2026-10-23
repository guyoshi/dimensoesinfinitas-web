# Próximas etapas de implementação

**PESQUISA PRIORITÁRIA, adequada ao porte do autor:** [BENCHMARK_10_AUTORES_INDEPENDENTES_E_CROWDFUNDING.md](BENCHMARK_10_AUTORES_INDEPENDENTES_E_CROWDFUNDING.md) (10 sites de escritores independentes, financiamento coletivo, plano de networking).\n\n**Pesquisa histórica secundária (escala grande, não comparação direta):** [BENCHMARK_10_CASOS_EDITORIAIS.md](BENCHMARK_10_CASOS_EDITORIAIS.md), com 2 projetos de resultados problemáticos, 2 êxitos excepcionais e 6 estratégias comprováveis de autores/editoras. Nenhum resultado dos casos foi atribuído exclusivamente ao site.

**Decisão após benchmark:** preparar um site comercial leve com página direta de Ruínas, amostra gratuita sem cadastro obrigatório, inscrição consentida e links KDP/Bok2; preservar portal interativo separado, sem copiar spoilers nem construir checkout próprio.


**Status geral (23/10/2026):** repositório e Cloudflare Workers configurados pelo autor; domínio customizado mostrado como Production. Home comercial implementada no commit `7df3bbf`; **publicação do novo commit ainda não validada**. Landing dedicada e mecanismos de conversão ainda pendentes.

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
- [x] **Capa WebP do site anterior copiada para este repositório** em `public/assets/ruinas-dos-ceus-capa.webp`, sem dependência de URL externa.
- [ ] **Conferir a versão contra a última capa oficial anexada pelo autor na conversa**; se diferente, substituir o arquivo WebP pelo export da nova capa antes de iniciar campanha.
- [x] Sinopse oficial reproduzida na home, mantendo a queda como premissa e omitindo sobrevivência na superfície.
- [ ] Preparar capítulo gratuito revisado e acessível, sem capturar email obrigatoriamente.
- [x] Marca de Ciclo de Jesed e slogan com hierarquia secundária.
- [ ] Explicar pentalogia circular sem sugerir ausência de conclusão.
- [ ] Criar newsletter consentida com descadastro e política de privacidade.
- [ ] Adicionar links Kindle/Bok2 apenas quando ativos.

## Home inicial (implementação)
- [x] Layout editorial responsivo, navegação por âncoras, sem bibliotecas ou tracking invasivo.
- [x] Premissa oficial de Ruínas e foco em descoberta da obra.
- [x] Apresentação breve do Ciclo circular e de Spacetheft, Diário Sobrenatural e Viajantes Dimensionais com status honestos.
- [x] CTA funcional para seção do livro e link real para Instagram do autor.
- [x] Logotipo histórico de Dimensões Infinitas copiado localmente para `public/assets/dimensoes-infinitas-logo.webp` e exibido na seção autor como imagem da marca.
- [ ] **Aplicar a fotografia pessoal oficial do autor fornecida na conversa** na seção sobre o autor, após importar arquivo adequado para o repositório; atualmente essa seção exibe a marca, não a fotografia.
- [x] Confirmada resposta HTML da nova home em `https://dimensoesinfinitas.com/` por leitura pública em 23/10/2026.
- [ ] Testar carregamento VISUAL de imagem, mobile/desktop, contraste e acessibilidade; a leitura automatizada de URLs de imagem não expõe visualização de pixels.
- [ ] Criar landing dedicada depois, com amostra gratuita revisada e newsletter real.

## Métricas e lançamento
- [ ] Configurar GA4, Search Console e eventos `book_view`, `sample_open`, `newsletter_signup`, `kindle_click`, `bok2_click`.
- [ ] Validar consentimento, UTM e jornada de leitura mobile.
- [ ] Auditar SEO, performance, acessibilidade e exposição de spoilers.
- [ ] Registrar lançamento, páginas publicadas, primeiras métricas e ajustes no dossiê privado.

## O que explicitamente NÃO fazer antes da implementação aprovada
- Não criar homepage, HTML, CSS, JavaScript, formulários ou páginas de livros.
- A versão funcional da home já foi enviada ao repositório; publicar apenas com consentimento e métricas corretas. Cloudflare Workers está configurado conforme fluxo adotado.
- Não copiar o portal interativo ou documentação canônica para o repositório público.
