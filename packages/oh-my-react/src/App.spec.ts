import { test, expect, type Page } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:5173')
})

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
    await expect(page.getByRole('listitem')).toContainText([TODO_ITEMS[0]])

    await newTodo.fill(TODO_ITEMS[1])
    await newTodo.press('Enter')
    await expect(page.getByRole('listitem')).toContainText( [TODO_ITEMS[1]])
    
    await expect(page.getByRole('listitem')).toHaveCount(2)
  })
  test('代办添加成功后，清空输入框', async ({ page }) => {
    const newTodo = page.getByPlaceholder('What needs to be done?')

    await newTodo.fill(TODO_ITEMS[0])
    await newTodo.press('Enter')

    await expect(newTodo).toBeEmpty()
  })
})



async function createDefaultTodos(page: Page) {
  const newTodo = page.getByTestId('What needs to be done?')
  for (const v of TODO_ITEMS) {
    await newTodo.fill(v)
    await newTodo.press('Enter')
  }
}