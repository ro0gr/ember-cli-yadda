import yadda from '../../helpers/yadda';

export default function(assert) {
  return yadda.localisation.English.library()
    .given('I type "Ember g feature make-feature"', (next) => {
      visit('/');
      assert.ok(true, this.step);
      andThen(() => next());
    })
    .when('I look in the folder', (next) => {
      assert.ok(true, this.step);
      next();
    });
}
