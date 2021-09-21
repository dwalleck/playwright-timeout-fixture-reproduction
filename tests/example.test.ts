import { expect } from '@playwright/test'

import test from './fixture'

test.describe('A workflow that does a lot of work before starting the test', () => {
    test.beforeAll(async ({ longOperation }) => {
        console.log('In BeforeAll')
    });

    test('this test should eventually run', async() => {
        console.log('In test')
    });
});