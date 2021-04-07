/* eslint-env detox/detox, jest */

describe('First screen shows correctly', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should display the player selection', async () => {
    await expect(element(by.id('playerSelection'))).toBeVisible();
  });

  it('should be hidden : "add a player" modal', async () => {
    await expect(element(by.id('newPlayerModal'))).not.toBeVisible();
  });
});
