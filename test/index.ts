import JsonSource from '../lib';

const a = {
  a: 1,
  b: {
    c: 1,
  }
}

const b = {
  b: {
    c: 2,
    d: {
      e: 2,
    }
  }
}


async function main(): Promise<void> {
  const jsonSource = new JsonSource();

  jsonSource
    .setConfig('dev', a, b);

  console.log(await jsonSource.export());
}

main();
