import { test as base } from '@playwright/test';

type TestFixtures = {
    longOperation: string;
}

const test = base.extend<TestFixtures>({
    longOperation: async({}, use) => {
        const sleep = (ms: number) => {
            return new Promise(resolve => {
              setTimeout(resolve, ms)
            })
          }
        console.log('Starting long operation');
        await sleep(20000);
        console.log('Ending long operation');
        await use('done')
    }
});

export default test;