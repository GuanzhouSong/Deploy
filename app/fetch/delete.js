import 'whatwg-fetch'
import 'es6-promise'

export function deleteMethod(url) {
  var result = fetch(url, {
        credentials: 'include',
        method: 'DELETE'
      }
  );
  return result;
}
