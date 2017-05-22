import Test from 'tape';
import Bear from '../src/app/example.js';

Test('should growl', function (assert) {
  var bear = new Bear();
  var result = bear.growl();
  assert.equal(result, 'The any bear says grrr');
  assert.end();
})