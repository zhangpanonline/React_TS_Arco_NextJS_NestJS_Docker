import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:5173');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
]

test.describe('新的待办', () => {
  test('添加代办', async ({ page }) => {
    const newTodo = page.getByPlaceholder('What needs to be done?')

    await newTodo.fill(TODO_ITEMS[0])
    await newTodo.press('Enter')
    await expect(page.getByTestId('todo-title')).toContainText([TODO_ITEMS[0]])

    await newTodo.fill(TODO_ITEMS[1])
    await newTodo.press('Enter')
    await expect(page.getByTestId('todo-title')).toContainText([ TODO_ITEMS[1] ])
  })
  // test('修改代办', )
})

