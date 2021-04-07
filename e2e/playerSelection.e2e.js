/* eslint-env detox/detox, jest */

describe('Player Selection', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should open the "new player" modal', async () => {
    await element(by.id('app.newPlayerButton')).tap();
    await expect(element(by.id('newPlayerModal'))).toBeVisible();
  });

  it('should create a new player', async () => {
    await element(by.id('newPlayerModal.nameInput')).typeText('Lucas');
    await element(by.id('newPlayerModal.validateButton')).tap();
    await expect(element(by.id('newPlayerModal'))).not.toBeVisible();
    await expect(element(by.id('playerSelection.playerButton.4'))).toBeVisible();
  });

  it('toggling player on', async () => {
    await element(by.id('playerSelection.playerButton.4')).tap();
    await expect(element(by.id('playerSelection.playerButton.4.overlay'))).toBeVisible();
    await expect(element(by.id('playerSelection.playerButton.4.overlay.text'))).toHaveText('1');
  });

  it('toggling player off', async () => {
    await element(by.id('playerSelection.playerButton.4')).tap();
    await expect(element(by.id('playerSelection.playerButton.4.overlay'))).not.toBeVisible();
  });
});
