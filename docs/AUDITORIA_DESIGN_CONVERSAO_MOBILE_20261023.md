# Auditoria editorial mobile e conversão: paleta clara, hierarquia e CTAs
Data: 23/10/2026.

## Pesquisa externa (não são números próprios)
- NN/g, `Dark Mode vs. Light Mode: Which Is Better?` (2020): a leitura em contraste positivo geralmente apresenta vantagem de desempenho visual em pessoas com visão normal/corrigida; modos escuros devem ser opcionais, especialmente em leitura longa. Fonte: https://www.nngroup.com/articles/dark-mode/
- NN/g, `Dark Mode: How Users Think About It and Issues to Avoid` (2023): preferência de modo varia; contraste e espessura de letras importam. Fonte: https://www.nngroup.com/articles/dark-mode-users-issues/
- Unbounce `What Are Some Best Practices When Designing My Landing Page?` (atualização 2026): proposta e CTA claros em poucos segundos, imagens legíveis, foco em ação principal, remover ruído. https://documentation.unbounce.com/hc/en-us/articles/360061988151-What-Are-Some-Best-Practices-When-Designing-My-Landing-Page
- Unbounce `What is a CTA?`: múltiplos CTAs são aceitáveis se convergem para a **mesma ação**, em uma página longa podem ajudar. Isso **não prova** que repetir botões em todos os blocos melhora conversão. https://unbounce.com/landing-page-articles/what-is-a-cta/
- Baymard, pesquisa mobile commerce: UX touch, menor tela e fricção de formulários podem reduzir conversão comparada ao desktop; aplicação por analogia ao site literário, não prova específica de livros. https://baymard.com/research/mcommerce-usability
- Google web.dev recomenda reservar proporções reais de imagens e evitar cortes que prejudiquem CLS e foco. https://web.dev/articles/optimize-cls

## Diagnóstico da V1
1. Página principal: `.hero-cover:before` era borda inclinada com `transform:rotate(4deg)`, podendo parecer desalinhada; capa forçada em `aspect-ratio:2/3` + `object-fit:cover`. **Arquivo capa real 1024 × 1536 (2:3)** validado, mas seu enquadramento ornamental e CSS mobile criavam ruído visual. Resolveu-se retirando a borda torcida, centralizando o palco e aplicando `object-fit:contain`, largura limitada e altura proporcional.
2. Tema inteiramente escuro criava clima épico, mas blocos densos em texto branco diminuíam conforto para parte do público. Tema comercial alterado para **creme editorial + azul-tinta**, com pontos de azul profundo em newsletter; leitor de capítulos inicia em **sépia**, mantendo opções claro/escuro.
3. Pequenas legendas amarelas acima dos títulos (`.eyebrow`) apareciam em quase todos os blocos: foram eliminadas do HTML das páginas principais, política, confirmação e leitor.
4. Repetição de botões sem acréscimo de valor removida: seções intermediárias agora respondem objeções e acrescentam prova textual da obra, sem botão em cada bloco. **Apenas dois botões de leitura** por página comercial (hero e última oferta para indecisos), além do formulário de e-mail separado. A pesquisa NÃO sustenta uma regra universal de **zero repetições**.
5. Landing do livro: removidas saídas para outras sagas e apresentação extensa; continua focada em `/ler/` e `#newsletter`.
6. Favicon agora aponta para **selo N dourado original** de Dimensões Infinitas, não um símbolo de fantasia provisório.

## Funil para home em ordem
1. H1 com Jokara e promessa clara de conflito; ação primária gratuita já na primeira dobra; **capa centrada e enquadrada**.
2. Conflito de Jokara com as certezas da civilização + citação literal da primeira frase.
3. 3 razões diferentes para se interessar (mundo, personagem, mudança) sem repetir sinopse.
4. Contexto da pentalogia como valor futuro, sem exigência de leitura prévia.
5. Lista de e-mails opcional, com benefício claro; o formulário precisa da Brevo ativa.
6. Pessoa/autoria: retrato e assinatura gráfica, sem prêmios inventados.
7. Fechamento para indecisos: ler gratuitamente, sem cadastro.

## Funil da landing
1. Headline canônica e capa, CTA leitura livre (visível sem precisar conhecer o autor).
2. Sinopse aprovada integral; conflito por trás do mundo, sem revelar destino pós-Cataclisma.
3. Três razões de encaixe/expectativa da fantasia.
4. Citação inicial e descrição da experiência de leitura imersiva (sem novo botão).
5. Pentalogia circular e resposta “preciso ler os outros?”.
6. Foto e biografia sucinta do autor.
7. FAQs sobre preço, cadastro, finalização e frequência, em `details` para reduzir ruído.
8. Newsletter DOI: **única solicitação de dados**.
9. Fechamento: alternativa segura para quem não quer se inscrever, link para começar leitura.

## Diferenças mobile vs desktop
- Desktop: capa e headline lado a lado. Mobile: mensagem + CTA primeiro, capa centralizada até 250 px com fundo alinhado, evitando sobreposição; header compacto sem links que desviam conversão; tamanho de títulos reduzido.
- Mobile: cards deixam de ser três colunas e viram lista vertical compacta; formulário vira uma coluna, CTA de largura total, botões com área maior para toque.
- Desktop: maior espaço e contraste editorial; mobile: seções com 57 px de respiro, texto em 16+ px e menos recuos.
- Reader começa em sépia; permite claro/escuro, tipografia ajustável e progresso.
- Hipótese de teste: após publicar, comparar `sample_open/visita`, `newsletter_request/visita`, taxa de confirmação real e scroll/avanço, separados por dispositivo. Não inventar taxas de conversão.

## Validação ainda pendente
- Screenshot visual de navegador real em 360, 390, 430, 768 e 1280 px; testar com Chrome/Firefox/Safari; testes de toque e formulário end-to-end; Core Web Vitals depois do deploy.
- Ferramentas de leitura pública do domínio neste ambiente não devolveram conteúdo e não há integração de Cloudflare autenticada. **Não afirmar** screenshots ou produção confirmada.
- Lista DOI e e-mails condicionados às 3 variáveis secretas e configuração do provedor.
- Observar leitores brasileiros reais e iterar: cor mais legível não garante automaticamente maior inscrição.
