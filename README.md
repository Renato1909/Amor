# Amor — nossa história, nossos sonhos e nossa fé

Site público dedicado à nossa história, às nossas memórias, aos nossos sonhos e à nossa caminhada de fé.

## Stack

- Astro 7.4.5
- TypeScript 6.0.3
- CSS nativo
- GitHub Pages
- GitHub Actions para validação contínua

O projeto é estático. Não possui backend, banco de dados, login ou área privada.

## Requisitos

- Node.js 24 (Astro 7 requer Node.js 22.12.0 ou superior).
- npm 9.6.5 ou superior.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra a URL local indicada pelo Astro.

## Verificações

```bash
npm run typecheck
npm run build
npm run preview
```

O conteúdo gerado fica em `dist/`.

## Estrutura

- `src/pages/`: páginas e rotas do site.
- `src/layouts/`: estruturas compartilhadas.
- `src/components/`: componentes reutilizáveis.
- `src/data/`: dados tipados do projeto.
- `src/styles/`: tokens e estilos globais.
- `public/Imagens/`: fotografias copiadas do acervo existente.
- `Imagens/` e `Musicas/`: acervo original preservado durante a migração.
- `legacy/index-original.html`: versão anterior mantida como referência.

## GitHub Pages

O caminho-base está configurado para `/Amor` em `astro.config.mjs`. A publicação será habilitada somente depois da conclusão e validação das páginas. Nesta fase, o workflow de CI valida o build, mas não publica a branch de desenvolvimento.

## Conteúdo público

Tudo o que for incluído no site e no repositório será público. Não inclua informações sensíveis, dados de contato pessoais ou materiais que não tenham autorização para divulgação.

## Mídias

As fotografias são servidas a partir de `public/Imagens/`. O acervo musical original foi mantido no repositório para auditoria, mas não foi copiado para a saída pública nesta etapa. A trilha sonora será integrada por fontes oficiais ou materiais com permissão de uso.
