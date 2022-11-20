export const getImports = (code) => {
  return getImportNodes(code).map( node => ({
        module: node.source.value,
        identifiers: node.specifiers.map( specifer => specifer.imported.name )
      }));
}

export const getImportNodes = (code) => {
  const imports = require("@babel/parser").parse(code, {
      sourceType: "module",
      plugins: [
        "jsx",
        "typescript",
      ],
    })?.program?.body.filter( node => node.type === 'ImportDeclaration')
    return imports;
}
