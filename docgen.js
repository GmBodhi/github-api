const { version } = require("./package.json");
const TypeDoc = require("typedoc");
const { writeFileSync } = require("fs");
const { format } = require("prettier");

async function main() {
  const app = new TypeDoc.Application();

  app.options.addReader(new TypeDoc.TSConfigReader());
  app.options.addReader(new TypeDoc.TypeDocReader());

  app.bootstrap({
    entryPoints: ["src/index.ts"],
    exclude: ["src/utils/rawdata.ts"],
  });

  const project = app.convert();

  if (!project) throw new Error("TypeDoc conversion failed");
  await app.generateJson(project, `docs/${version}.json`);
}

async function formateDoc() {
  const doc = JSON.parse(require(`docs/${version}.json`));
  const json = {
    children: doc.children.map((child) => {
      const { name, children, sources, id } = child;
      return {
        name,
        children,
        source: sources[0],
        id,
      };
    }),
  };

  writeFileSync(`docs/${version}.json`, format(JSON.stringify(doc)));
}

main()
  // .then(() => formateDoc())
  .catch(console.error);
