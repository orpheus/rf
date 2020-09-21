import { putRequest } from 'utils/request-wrapper'
import { $NAME_UNDER$Controller } from 'Constants/urls'

/**
 * @param $NAME_UNDER$
 * @param options
 * @returns {Promise<undefined|*>}
 */
export default function update$NAME_CAPITALIZE$Api ($NAME_UNDER$, options) {
  return putRequest({
    route: `${$NAME_UNDER$Controller}/${$NAME_UNDER$.id}`,
    data: $NAME_UNDER$,
    ...options
  })
}
